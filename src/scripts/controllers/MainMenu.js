import Controllers from "./Controller.js";
import Dictionary from "./Dictionary.js";

/**
 * Контроллер для главного меню.
 * @class
 */
export default class MainMenu extends Controllers{
    /**
     * @private @type {HTMLElement}
     */
    btnBook;
    /**
     * @private @type {HTMLElement}
     */
    btnDictionary;
    /**
     * @private @type {HTMLElement}
     */
    btnSearch;
    
    launch() {
        this.btnBook = document.getElementById('ico-book.svg');
        this.btnDictionary = document.getElementById('ico-dictionary.svg');
        this.btnSearch = document.getElementById('ico-search.svg');
        
        this.btnBook.onclick = () => this.actionBtnLearn();
        this.btnDictionary.onclick = () => this.actionBtnDictionary();
        this.btnSearch.onclick = () => this.actionBtnSearch();
    }

    /**
     * Кнопка 'учить'.
     * @private
     */
    actionBtnLearn() {
        setTimeout(() => {
            
        }, 60)
    }
    
    /**
     * Кнопка 'словарь'.
     * @private
    */
   actionBtnDictionary() {
        setTimeout(() => {
            new Dictionary('dictionary.html');
        }, 60)
    }

    /**
     * Кнопка 'поиск'.
     * @private
     */
    actionBtnSearch() {
        setTimeout(() => {
            
        }, 60)
    }
}