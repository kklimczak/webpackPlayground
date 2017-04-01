import Component from '../abstract/component';

class HeaderComponent extends Component {

    constructor() {
        super({
            template: require('./header.component.handlebars'),
            tag: 'header',
            data: {
                name: 'example'
            }
        });


    }

    init() {

    }

}

export default HeaderComponent;

