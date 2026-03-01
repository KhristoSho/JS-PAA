import json from "./parser.js";
import read from "./reader.js";

export default class GameSavingLoader {

  static load() {
    return read().then(data => json(data));
  }

}
