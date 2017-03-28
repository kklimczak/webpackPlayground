function createElement() {
    let element = document.createElement('div');

    element.innerHTML += "Welcome to my world";

    document.body.appendChild(element);
}

createElement();