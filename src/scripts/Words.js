import FileLoader from "./FileLoader.js";

/**
 * @class
 */
export default class Words {
    /**
     * @public
     */
    static getWords() {
        return FileLoader.loadJSON('words.json');
    }
}