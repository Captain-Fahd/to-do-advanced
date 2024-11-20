import "./styles.css";
import {addBtnLogic, clearBtnLogic} from "./jsLogic/addToList";
import {refresh} from "./jsLogic/refreshItems";

if (!localStorage.getItem("items")) {
    localStorage.setItem("items", "");
}
refresh();
localStorage.getItem("items");
addBtnLogic();
clearBtnLogic();


