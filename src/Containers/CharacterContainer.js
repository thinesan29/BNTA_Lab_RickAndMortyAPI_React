import { useState, useEffect } from "react";
import CharacterForm from "../Components/CharacterForm";
import CharacterList from "../Components/CharacterList";

const SERVER_URL = "https://rickandmortyapi.com/api/character/"

const CharacterContainer = () => {
    const [characters, setCharacters] = useState([]); // usestate is used to set the character array

    useEffect(() => {
        // Used async function to make a GET Request to the API
        const fetchCharacterData = async () => {
            const response = await fetch(`${SERVER_URL}`); // fetches the data
            const jsonData = await response.json(); // converts the response to json
            setCharacters(jsonData.results); // Updates the state with data from response 
        }
        fetchCharacterData()
    }, []);
// delete character function takes id as a parameter and show which character to be deleted.
    const deleteCharacter = (id) => {
    // delete from db
    fetch(`${SERVER_URL}/${id}`, {
    method: "DELETE", // delete request tells API which characters to be deleted based on id
    headers: { "Content-Type": "application/json" },
    });
        
    // delete locally
    const newCharacters = characters.filter((character) => character.id !== id); // used a filter method to remove character with specified id in the array
    setCharacters(newCharacters);// used to update the state with a new array
    };

    // Renders the character form and character list and takes in methods as props
    return(
        <>
         <CharacterForm characters={characters} setCharacters={setCharacters}/>
         <CharacterList 
         characters={characters} 
         deleteCharacter={deleteCharacter}
         />
        </>
    );
};

export default CharacterContainer;