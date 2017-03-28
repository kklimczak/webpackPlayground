import Component from '../abstract/component';

class HeaderComponent extends Component {

    constructor() {
        super({
            template: require('./header.handlebars'),
            data: {
                name: 'example'
            }
        });
    }

    init() {

    }

}

export default HeaderComponent;

