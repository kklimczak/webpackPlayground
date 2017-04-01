import HeaderComponent from './components/header/header.component';

export default class App {

    constructor() {
        this.register();
        this.component(HeaderComponent);
        this.run();

    }

    register() {
        this.components = [];
    }

    component(component) {
        this.components.push(component);
        console.log(this);
    }

    run() {
        this.components.forEach((value) => {
        new value();
    })
}

}