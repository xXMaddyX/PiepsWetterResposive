import Router from "./services/Router.js";
import Store from "./services/Store.js";
import API from "./services/API.js";


window.app = {};
app.store = Store;
app.router = Router;

import WelcomePage from "./components/Welcome.js";

window.addEventListener("DOMContentLoaded", () => {
    //<----------------Event Listener Nav Buttons---------------->
    document.addEventListener('click', (event) => {
        console.log(event.target.id)
        // News Button
        if (event.target.id == "newsBtn") {
            document.querySelector('.news-button-list').classList.toggle('active');
            document.querySelector('#newsBtn').classList.toggle('active');
        }
        if (event.target.id !== "newsBtn") {
            document.querySelector('.news-button-list').classList.remove('active');
            document.querySelector('#newsBtn').classList.remove('active');
        }

        //Actual Weather Button
        if (event.target.id == "aktuellBtn") {
            document.querySelector(".aktuell-button-list").classList.toggle('active');
            document.querySelector('#aktuellBtn').classList.toggle('active');
        }
        if (event.target.id !== 'aktuellBtn') {
            document.querySelector('.aktuell-button-list').classList.remove('active');
            document.querySelector('#aktuellBtn').classList.remove('active');
        }
    });
    //<--------------------------------------------------------->
    //<---------------------Init Router------------------------->
    app.router.init();

});