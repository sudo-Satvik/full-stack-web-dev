function customRender(whatToInject, whereToInject) {
    const domElement = document.createElement(whatToInject.type);       // element created
    domElement.innerHTML = whatToInject.children;
    domElement.setAttribute('href', whatToInject.props.href);
    domElement.setAttribute('target', whatToInject.props.target);

    whereToInject.appendChild(domElement);
}

// Rendering the 'a' tag, (under the hood of the react)
const reactElement = {
    type: 'a',
    props: {
        href: "https://www.google.co.in/",
        target: "_blank",
    },
    children: "Click me to visit the Google"
}

const mainContainer = document.querySelector('.root');

customRender(reactElement, mainContainer);
