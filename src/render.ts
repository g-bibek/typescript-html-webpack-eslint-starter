const render = (): void => {
    const app = document.getElementById("app");
    if (app) app.innerHTML = "<h1> Hello World!</h1>";
};

export = render;
