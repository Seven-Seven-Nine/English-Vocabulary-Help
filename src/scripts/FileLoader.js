const fs = require('fs');

/**
 * Класс для взаимодействия с файлами.
 * @class
 */
export default class FileLoader {
    /**
     * Чтение SVG файла из директории svg, возвращает данные из файла.
     * @public @returns {string}
     * @param {string} svgName 
     */
    static loadSVG(svgName) {
        if (typeof svgName !== 'string') {
            throw new TypeError(`Не правильный тип параметра 'svgName' - ${typeof svgName}!`);
        } else {
            try {
                let svgData = fs.readFileSync(`./src/svg/${svgName}`, 'utf-8');
                return svgData;
            } catch (error) {
                throw new Error(`Ошибка чтения файла: ${svgName}.`);
            }
        }
    }

    /**
     * Сканирование директории и возвращение массива с названием всех файлов.
     * @public @returns {Array}
     * @param {string} dirPath 
     */
    static readDir(dirPath) {
        if (typeof dirPath !== 'string') {
            throw new TypeError(`Не правильный тип параметра 'dirPath' - ${typeof dirPath}`);
        } else {
            try {
                let files = fs.readdirSync(dirPath);
                return files;
            } catch (error) {
                throw new Error(`Ошибка сканирования директории по пути ${dirPath}.`);
            }
        }
    }

    /**
     * Чтение HTML файла из директории html, возвращает данные файла.
     * @public @returns {string}
     * @param {string} htmlName 
     */
    static loadHTML(htmlName) {
        if (typeof htmlName !== 'string') {
            throw new TypeError(`Не правильный тип параметра 'htmlName' - ${typeof htmlName}`);
        } else {
            try {
                let htmlData = fs.readFileSync(`./src/html/${htmlName}`, 'utf-8');
                return htmlData;
            } catch (error) {
                throw new Error(`Ошибка чтения файла: ${htmlName}.`);
            }
        }
    }
}