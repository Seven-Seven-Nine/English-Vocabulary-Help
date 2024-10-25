'use strict';

// import FileLoader from "./FileLoader.js";
import MainMenu from "./controllers/MainMenu.js";
import SVGController from "./SVGController.js";
import Words from "./Words.js";

/**
 * @class
 */
export default class Main {
    constructor() {
        this.init();
    }

    /**
     * Инициализация запуска приложения.
     * @private
     */
    init() {
        new MainMenu('mainMenu.html');
    }
}
export const svgController = new SVGController();
export const main = new Main();