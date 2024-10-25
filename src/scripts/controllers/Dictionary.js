import Controllers from "./Controller.js";
import Sound from "../Sound.js";
import MainMenu from "./MainMenu.js";
import Words from "../Words.js";

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
     * Добавление слов в вёрстку.
     * @private
     */
    addWordsInDom() {
        this.getWords();
        let mainPanel = document.getElementById('dictionary-main-panel');
        let keysObject = Object.keys(this.words);
        let lengthObject = keysObject.length;
        for (let index = 0; index < lengthObject; index++) {
            // this.words[keysObject[index]]
            let lengthWords = Object.keys(this.words[keysObject[index]]).length;
            for (let indexWords = 0; indexWords < lengthWords; indexWords++) {
                console.info(this.words[keysObject[index]][indexWords]);
                mainPanel.innerHTML += `
                    <div class="dictionary-card">
                        <div class="dictionary-card-title">
                            <p>${this.words[keysObject[index]][indexWords][0]}</p>
                        </div>
                        <div class="dictionary-card-translate">
                            <p>${this.words[keysObject[index]][indexWords][1]}</p>
                        </div>
                        <div>
                            <div>Иконка!</div>
                        </div>
                    </div>
                `;
            }
        }
    }
}