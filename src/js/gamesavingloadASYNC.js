import json from "./parser.js";
import read from "./reader.js";

export default class GameSavingLoader {

  static async load() {
    const data = await read();
    const parsData = await json(data);
    return parsData;
    
  }

}
