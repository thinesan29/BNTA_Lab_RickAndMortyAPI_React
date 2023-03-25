const Character = ({character, deleteCharacter}) => {

  // character prop contains the characters in the Rick and Morty Universe and contains properties such as name, status etc.
  // delete character prop is function that is used to delete a character.

      return (
        <div className="character">
          <h2>{character.name}</h2>
          <img src={character.image} alt="character's image" height={400}  class="center"/>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p> 
          <p>Location: {character.location.name}</p>
          
    
          <div className="character-buttons">
            <button onClick={() => deleteCharacter(character.id)}>Delete</button>
            </div>
          </div>
      );
};

export default Character;