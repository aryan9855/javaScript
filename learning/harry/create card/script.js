function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let viewsNumber
    if (views < 100000) {
        viewsNumber = views / 1000 + "K";
    }
    else if (views > 1000000) {
        viewsNumber = views / 1000000 + "M";
    }
    else {
        viewsNumber = views;
    }

    let html = `<div class="card">
        <div class="image">
            <img src="${thumbnail}" alt="" class="img">
            <div class="capsule">
                ${duration}
        </div>
        <div class="text">
            <h1>
                ${title}
                <p>
                    ${cName} . ${viewsNumber} views . ${monthsOld} months ago
                </p>
            </h1>
        </div>
    </div>`

    document.querySelector(".container").innerHTML += html;
}

createCard("Introduction to Hyperloop | Sigma Web Dev video ", "Code with Aryan", 560000, 7, "31:22", "img.jpeg")
