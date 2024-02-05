const Router = {
    init: () => {
        //Maybe the Parent Li elements to select (Warscheinlich weden nur die links selber erfasst)
        const navlink = document.querySelectorAll("a.navlink");
        navlink.forEach((a) => {
            a.addEventListener("click", (event) => {
                event.preventDefault();
                const url = event.target.href;
                Router.go(url);
            });
        });
        window.addEventListener("popstate", (event) => {
            Router.go(event.state.route, false);
        });

        Router.go(location.pathname);
    },
    go: (route, addToHistory = true) => {
        if (addToHistory) {
            history.pushState({route}, '', route);
        }
        let pageElement = null;
        switch (route) {
            case "/":
                pageElement = document.createElement('welcome-page');
                break

        }
        if (pageElement) {
            const cache = document.querySelector("main");
            cache.innerHTML = "";
            cache.appendChild(pageElement);
            window.screenX = 0;
            window.screenY = 0;
        } else {
            document.querySelector("main").innerHTML = "Oups, 404!!!"
        }
    }
}

export default Router