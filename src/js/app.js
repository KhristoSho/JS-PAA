import GameSavingLoader from "./gamesavingload.js";

GameSavingLoader.load().then((saving) => {
    
  console.log(saving);
  
}, (error) => {

  throw new Error("Unlucky load");
  
});