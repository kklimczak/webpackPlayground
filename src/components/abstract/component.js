export default class Component {

    constructor(config) {
        this.loadTemplate(config.template, config.tag, config.data);
        this.init();
    }

    loadTemplate(template, tag, data) {

        let div = document.createElement('div');

        div.innerHTML = template(data);

        document.getElementsByTagName(tag)[0].appendChild(div);

        // document.body.appendChild(div);
    }

    init() {

    }
}