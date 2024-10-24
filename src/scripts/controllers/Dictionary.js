import Controllers from "./Controller.js";
import Sound from "../Sound.js";
import MainMenu from "./MainMenu.js";
import { main } from "../Main.js";

/**
 * @class
 * @extends Controllers
 */
export default class Dictionary extends Controllers {
    /**
     * @private @type {HTMLElement}
     */
    btnReturn;
    
    launch() {
        main.reloadLoadSVG();

        this.btnReturn = document.getElementById('arrow-return.svg');

        this.btnReturn.onclick = () => this.return();
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
}