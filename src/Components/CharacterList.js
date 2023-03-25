import Character from "./Character";
// Character list maps over the characters array and renders character components for each character.
// delete character is a callback function that is called when a character is deleted

const CharacterList = ({characters, deleteCharacter}) => {

  // renders the character componenets
    const characterComponents = characters.map(character => {
        return (
        <Character
        key={character.id}
        character={character} 
        deleteCharacter={deleteCharacter}/>
        )
        });

        return (
            <>
              <h2>Characters</h2>
              <hr />
              {characterComponents}
            </>
          );

};

export default CharacterList;