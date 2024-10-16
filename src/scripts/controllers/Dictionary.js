import Controllers from "./Controller.js";
import { main } from "../Main.js";

/**
 * @class
 * @extends Controllers
 */
export default class Dictionary extends Controllers {
    launch() {
        main.reloadLoadSVG();
    }
}