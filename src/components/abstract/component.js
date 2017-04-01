export default class Component {

    constructor(config) {
        this.loadTemplate(config.template, config.tag, config.data);
        this.init();
    }

    loadTemplate(template, tag, data) {

        let elements = document.querySelectorAll(`[data-${tag}]`);

        [].forEach.call(elements, (element) => {
            let div = document.createElement('div');

            div.innerHTML = template(data);

            element.appendChild(div);
        })

    }

    init() {

    }
}