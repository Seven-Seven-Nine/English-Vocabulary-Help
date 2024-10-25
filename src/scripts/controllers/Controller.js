import FileLoader from "../FileLoader.js";
import { svgController } from "../Main.js";

/**
 * Базовый класс для контроллеров.
 * launch() - можно использовать для безопасного взаимодействия.
 * @class
 */
export default class Controllers {
    /**
     * @private @type {string}
     */
    htmlName;
    /**
     * @private @type {HTMLElement}
     */
    mainElement;
    
    /**
     * @param {string} htmlName 
     */
    constructor(htmlName) {
        if (typeof htmlName !== 'string') {
            throw new TypeError(`Неверный тип параметра 'htmlName' - ${typeof htmlName}`);
        } else {
            this.htmlName = htmlName;
            this.mainElement = document.getElementById('main');
            this.init();
        }
    }

    /**
     * Инициализация контроллера.
     * @private
     */
    init() {
        let htmldData = this.getDataHtml();
        this.addHtml(htmldData);
        svgController.reloadLoadSVG();
        this.launch();
    }

    /**
     * Метод для выполнения дочерних классов.
     * @protected
     */
    launch() {}

    /**
     * Получение данных из html файла.
     * @private @returns {string}
     */
    getDataHtml() {
        let htmlData = FileLoader.loadHTML(this.htmlName);
        return htmlData;
    }

    /**
     * Добавление данных из html файла в DOM-дерево.
     * @private
     * @param {string} htmlData 
     */
    addHtml(htmlData) {
        this.mainElement.innerHTML = htmlData;
    }
}