export default class Component {

    constructor(config) {
        this.setConfiguration();
        this.loadTemplate(config.template, config.data);
        this.init();
    }

    loadTemplate(template, data) {

        let div = document.createElement('div');

        div.innerHTML = template(data);

        document.body.appendChild(div);
    }

    setConfiguration() {

    }

    init() {

    }
}