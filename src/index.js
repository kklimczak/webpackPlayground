let mainTemplate = require('./templates/main.handlebars');

function createElement() {
    document.addEventListener('DOMContentLoaded', () => {
        let div = document.createElement('div');

        div.innerHTML = mainTemplate({
            name: 'Works!'
        });

        document.body.appendChild(div);
    });
}

createElement();