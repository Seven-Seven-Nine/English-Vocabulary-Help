import Controllers from "./Controller.js";
import Sound from "../Sound.js";
import MainMenu from "./MainMenu.js";
import Words from "../Words.js";
import FileLoader from "../FileLoader.js";

/**
 * @class
 * @extends Controllers
 */
export default class Dictionary extends Controllers {
    /**
     * @private @type {HTMLElement}
     */
    btnReturn;
    /**
     * @private @type {HTMLElement}
     */
    btnSearch;
    /**
     * @private @type {object}
     */
    words;

    launch() {
        this.btnReturn = document.getElementById('arrow-return.svg');
        this.btnSearch = document.getElementById('ico-search.svg');

        this.btnReturn.onclick = () => this.return();
        this.btnSearch.onclick = () => this.search();

        this.addWordsInDom();
    }

    /**
     * Кнопка возвращения.
     * @private
     */
    return() {
        Sound.soundNewFrame();
        setTimeout(() => {
            new MainMenu('mainMenu.html');
        }, 60);
    }

    /**
     * Кнопка поиска.
     * @private
     */
    search() {
        Sound.soundNewFrame();
        console.info('В разработке...');
    }

    /**
     * @private
     */
    getWords() {
        this.words = Words.getWords();
    }

    /**
     * Добавление словарных карточек в DOM.
     * @private
     */
    addWordsInDom() {
        this.getWords();

        let btnArr = [];
        let idForBtn = -1;

        let mainPanel = document.getElementById('dictionary-main-panel');
        
        let keysObject = Object.keys(this.words);
        let lengthObject = keysObject.length;

        for (let index = 0; index < lengthObject; index++) {
            // this.words[keysObject[index]]
            let lengthWords = Object.keys(this.words[keysObject[index]]).length;
            for (let indexWords = 0; indexWords < lengthWords; indexWords++) {
                idForBtn++;
                mainPanel.innerHTML += `
                    <div class="dictionary-card">
                        <div class="dictionary-card-title">
                            <p>${this.words[keysObject[index]][indexWords][0]}</p>
                        </div>
                        <div class="dictionary-card-translate">
                            <p>${this.words[keysObject[index]][indexWords][1]}</p>
                        </div>
                        <div class="dictionary-card-icon">
                            <div id="ico-add-${idForBtn}">
                                ${FileLoader.loadSVG('ico-add.svg')}
                            </div>
                        </div>
                    </div>
                `;
                let btn = `ico-add-${idForBtn}`;
                btnArr.push(btn);
            }
        }

        // console.info(`ID кнопок: ${btnArr}`);

        // Добавление событий для кнопок.
        for (let index = 0; index < btnArr.length; index++) {
            /** 
             * @type {HTMLElement} 
             * */ 
            // console.info(`Добавление события для ${btnArr[index]}.`);
            let btnAdd = document.getElementById(btnArr[index]);
            btnAdd.onclick = () => this.btnAddWord(btnArr[index]);
            // console.info(`Событие добавлено для ${btnArr[index]}!`);
        }
    }
    
    /**
     * Кнопка добавления слова в словарь.
     * @private
     * @param {string} idWord 
    */
   btnAddWord(idWord) {
        if (typeof idWord !== 'string') {
            throw new TypeError(`Неправильный тип параметра 'idWord' - ${typeof idWord}`);
        } else {
            console.info(`Событие кнопки ${idWord}...`);
            Sound.soundNewFrame();
        }
    }
}