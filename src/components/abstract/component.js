export default class Component {

    constructor(config) {
        this.setConfiguration();
        this.loadTemplate(config.template, config.tag, config.data);
        this.init();
    }

    loadTemplate(template, tag, data) {

        let div = document.createElement('div');

        div.innerHTML = template(data);

        document.getElementsByTagName(tag)[0].replaceWith(div);

        // document.body.appendChild(div);
    }

    setConfiguration() {

    }

    init() {

    }
}