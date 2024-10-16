'use strict';

import FileLoader from "./FileLoader.js";
import MainMenu from "./controllers/MainMenu.js";


/**
 * @class
 */
export default class Main {
    /**
     * @private @type {Object}
     */
    svgFiles = {};

    constructor() {
        this.init();
    }

    /**
     * Инициализация запуска приложения.
     * @private
     */
    init() {
        new MainMenu('mainMenu.html');

        this.loadSvgFiles('./src/svg');
        this.addSvgInDom();
    }

    /**
     * Загрузка всех SVG файлов из директории и добавление данных SVG в массив.
     * @private
     * @param {string} dir 
     */
    loadSvgFiles(dir) {
        let files = FileLoader.readDir(dir);
        for (let index = 0; index < files.length; index++) {
            let nameFile = files[index];
            let svgData = FileLoader.loadSVG(nameFile);

            if (svgData !== '') {
                this.svgFiles[nameFile] = svgData;
            } else {
                console.warn(`Найден пустой SVG файл - ${nameFile}.`);
            }
        }
    }

    /**
     * Добавление всех SVG файлов в разметку.
     * @private
     */
    addSvgInDom() {
        let keys = Object.keys(this.svgFiles);
        for (let index = 0; index < keys.length; index++) {
            try {
                let element = document.getElementById(keys[index]);
                element.innerHTML = this.svgFiles[keys[index]];
            } catch (error) {
                console.info(`Элемент ${keys[index]} не найден.`);
            }
        }
    }

    /**
     * Перезагрузка отображения SVG в DOM-дереве.
     * @public
     */
    reloadLoadSVG() {
        this.addSvgInDom();
    }
}

export let main = new Main();