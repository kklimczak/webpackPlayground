let HeaderTemplate = require('./header.handlebars');

import Component from '../abstract/component';

class HeaderComponent extends Component {

    constructor() {
        super('HeaderComponent');
        this.init();
    }

    generateTemplate() {
        let div = document.createElement('div');

        div.innerHTML = HeaderTemplate({
            name: 'witam'
        });

        document.body.appendChild(div);
    }

    init() {
        console.log('test');
        this.generateTemplate();
    }

}

export default HeaderComponent;

