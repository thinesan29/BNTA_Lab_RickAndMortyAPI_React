import { useState } from "react";

const CharacterForm = ({characters, setCharacters}) => {
    const [name, setName] = useState("");
    const [status, setStatus] = useState("");
    const [species, setSpecies] = useState("");
    const [gender, setGender] = useState("");
    const [location, setLocation] = useState("")
    const [image, setImage] = useState("")
    const [error, setError] = useState("");

    const handleValidation = () => { // used to validate the the input value in the form fields.
      let errorMessage = "";

    // Check if fields are blank
    if (name === "" || status === "" || species === "" || gender === "" || location === "")  {
      errorMessage = "Please fill in all details";
    }
   
    // // Checks if the name already exists 
    if (characters.find((character) => character.name === name )) {
      errorMessage = "This character already exists";
    }

    // // Checks if the correct gender has been inputted
    // if (gender !==  "Male" || gender !== "Female")  {
    //   errorMessage = "For character's gender, please input the following: Male or Female";
    // }
    
    setError(errorMessage);
    return errorMessage !== "";

    };

    const handleSubmit = (e) => { // handlesubmit calls the handle validation function to check if input is valid and if incorrect , an error message is displayed
      e.preventDefault();
  
      if (!handleValidation()) {  
        // copy array
        const updatedCharacters = [...characters]

        // create a new user object
        updatedCharacters.push({
          name:name,
          status,
          species,
          gender, // 
          location:{name:location}, // location itself is an object that has a property name that hold a value of the location
        });
        setCharacters(updatedCharacters)
      }
    };

      return(
        <div>
        <form onSubmit={handleSubmit}>
        <h1>Create a Character</h1>
        <input
        type="text"
        placeholder="Character Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <input
        type="text"
        placeholder="Character's Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        />
        <input
        type="text"
        placeholder="Character's Species"
        value={species}
        onChange={(e) => setSpecies(e.target.value)}
        />
        <input
        type="text"
        placeholder="Character's Gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        />
        <input
        type="text"
        placeholder="Character's Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit">Add Character</button>
        </form>
        <p>{error}</p>
        </div>
    );
};

export default CharacterForm;