const theRestaurant = () => {
    let wrapper = document.getElementById('wrapper');

    let content = document.createElement('div');
    content.id = 'content';
    wrapper.appendChild(content);

    let div = document.createElement('div');
    content.appendChild(div);
    let img = document.createElement('img');
    img.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
    div.appendChild(img);

    let bottom = document.createElement('div');
    bottom.id = 'bottom';
    content.appendChild(bottom);

    let restaurant = document.createElement('div');
    restaurant.id = 'restaurant';
    bottom.appendChild(restaurant);

    let restaurantText = ['The Restaurant is So Good!', '- every other customer'];

    restaurantText.forEach((text) => {
        let div = document.createElement('div');
        div.innerText = text;
        restaurant.appendChild(div);
    });

    let location = document.createElement('div');
    location.id = 'location';
    bottom.appendChild(location);

    let locationText = ['You can find us at:', 'P. Sherman, 42 Wallaby Way, Sydney'];

    locationText.forEach((text) => {
        let div = document.createElement('div');
        div.innerText = text;
        location.appendChild(div);
    });

    let hours = document.createElement('div');
    hours.id = 'hours';
    bottom.appendChild(hours);

    let hoursText = ['Hours:', 'Monday:', '8AM-11PM', 'Tuesday:', '8AM-11PM', 'Wednesday', '8AM-11PM', 'Thursday', '8AM-11PM', 'Friday', '8AM-11PM', 'Saturday', '8AM-11PM', 'Sunday:', '8AM-11PM'];

    hoursText.forEach((text) => {
        let div = document.createElement('div');
        div.innerText = text;
        hours.appendChild(div);
    });
}

export default theRestaurant;