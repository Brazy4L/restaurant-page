const headerFooter = () => {
    let wrapper = document.getElementById('wrapper');

    let header = document.createElement('div');
    header.id = 'header';
    wrapper.appendChild(header);
    
    let headerText = ['The Restaurant', 'Menu', 'About'];
    
    headerText.forEach((text) => {
        let div = document.createElement('div');
        div.innerText = text;
        header.appendChild(div);
    });

    let footer = document.createElement('div');
    footer.id = 'footer';
    wrapper.appendChild(footer);

    let div = document.createElement('div');
    div.innerText = '© 2022. All rights reserved.';
    footer.appendChild(div);
}

export default headerFooter;