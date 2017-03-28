import Component from '../abstract/component';

class HeaderComponent extends Component {

    constructor() {
        super({
            template: require('./header.handlebars'),
            tag: 'app-header',
            data: {
                name: 'example'
            }
        });
    }

    init() {

    }

}

export default HeaderComponent;

