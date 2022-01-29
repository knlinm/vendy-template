var tumbnail_buttons = document.querySelectorAll("#intro>.tumbnail>span")
var slider_items = document.querySelectorAll(".slider")
tumbnail_buttons[0].addEventListener("click", function() {
    document.querySelector(".slider.active").classList.remove("active")
    slider_items[0].classList.add("active")
    for (let i = 0; i < tumbnail_buttons.length; i++) {
        if (tumbnail_buttons[i].classList.contains("active")) {
            tumbnail_buttons[i].classList.remove("active")
        }
    }
    tumbnail_buttons[0].classList.add("active")
})
tumbnail_buttons[1].addEventListener("click", function() {
    document.querySelector(".slider.active").classList.remove("active")
    slider_items[1].classList.add("active")
    for (let i = 0; i < tumbnail_buttons.length; i++) {
        if (tumbnail_buttons[i].classList.contains("active")) {
            tumbnail_buttons[i].classList.remove("active")
        }
    }
    tumbnail_buttons[1].classList.add("active")
})
tumbnail_buttons[2].addEventListener("click", function() {
    document.querySelector(".slider.active").classList.remove("active")
    slider_items[2].classList.add("active")
    for (let i = 0; i < tumbnail_buttons.length; i++) {
        if (tumbnail_buttons[i].classList.contains("active")) {
            tumbnail_buttons[i].classList.remove("active")
        }
    }
    tumbnail_buttons[2].classList.add("active")
})

setInterval(() => {
    var next_slider = document.querySelector(".slider.active").nextElementSibling
    document.querySelector(".slider.active").classList.remove("active")
    if (next_slider != null && next_slider.classList.contains("slider")) {
        next_slider.classList.add("active")
    } else {
        slider_items[0].classList.add("active")
    }
    var next_tumbnail = document.querySelector(".tumbnail>span.active").nextElementSibling
    document.querySelector(".tumbnail>span.active").classList.remove("active")
    if (next_tumbnail != null) {
        next_tumbnail.classList.add("active")
    } else {
        tumbnail_buttons[0].classList.add("active")
    }
}, 5000);

var product_slider = document.querySelectorAll(".products .tumbnail>span")

var products = document.querySelector(".products-wrapper")

product_slider[0].addEventListener("click", function() {

    if (products.classList.contains("second_slide")) {
        products.classList.remove("second_slide")
    }
    if (products.classList.contains("third_slide")) {
        products.classList.remove("third_slide")
    }
    if (products.classList.contains("forth_slide")) {
        products.classList.remove("forth_slide")
    }
    if (products.classList.contains("fifth_slide")) {
        products.classList.remove("fifth_slide")
    }

    products.classList.add("first_slide")

    for (let i = 0; i < product_slider.length; i++) {
        if (product_slider[i].classList.contains("active")) {
            product_slider[i].classList.remove("active")
        }
    }
    product_slider[0].classList.add("active")

})
product_slider[1].addEventListener("click", function() {

    if (products.classList.contains("first_slide")) {
        products.classList.remove("first_slide")
    }
    if (products.classList.contains("third_slide")) {
        products.classList.remove("third_slide")
    }
    if (products.classList.contains("forth_slide")) {
        products.classList.remove("forth_slide")
    }
    if (products.classList.contains("fifth_slide")) {
        products.classList.remove("fifth_slide")
    }

    products.classList.add("second_slide")

    for (let i = 0; i < product_slider.length; i++) {
        if (product_slider[i].classList.contains("active")) {
            product_slider[i].classList.remove("active")
        }
    }
    product_slider[1].classList.add("active")

})
product_slider[2].addEventListener("click", function() {

    if (products.classList.contains("first_slide")) {
        products.classList.remove("first_slide")
    }
    if (products.classList.contains("second_slide")) {
        products.classList.remove("second_slide")
    }
    if (products.classList.contains("forth_slide")) {
        products.classList.remove("forth_slide")
    }
    if (products.classList.contains("fifth_slide")) {
        products.classList.remove("fifth_slide")
    }

    products.classList.add("third_slide")

    for (let i = 0; i < product_slider.length; i++) {
        if (product_slider[i].classList.contains("active")) {
            product_slider[i].classList.remove("active")
        }
    }
    product_slider[2].classList.add("active")

})
product_slider[3].addEventListener("click", function() {

    if (products.classList.contains("first_slide")) {
        products.classList.remove("first_slide")
    }
    if (products.classList.contains("second_slide")) {
        products.classList.remove("second_slide")
    }
    if (products.classList.contains("third_slide")) {
        products.classList.remove("third_slide")
    }
    if (products.classList.contains("fifth_slide")) {
        products.classList.remove("fifth_slide")
    }

    products.classList.add("forth_slide")

    for (let i = 0; i < product_slider.length; i++) {
        if (product_slider[i].classList.contains("active")) {
            product_slider[i].classList.remove("active")
        }
    }
    product_slider[3].classList.add("active")

})
product_slider[4].addEventListener("click", function() {

    if (products.classList.contains("first_slide")) {
        products.classList.remove("first_slide")
    }
    if (products.classList.contains("second_slide")) {
        products.classList.remove("second_slide")
    }
    if (products.classList.contains("third_slide")) {
        products.classList.remove("third_slide")
    }
    if (products.classList.contains("forth_slide")) {
        products.classList.remove("forth_slide")
    }

    products.classList.add("fifth_slide")

    for (let i = 0; i < product_slider.length; i++) {
        if (product_slider[i].classList.contains("active")) {
            product_slider[i].classList.remove("active")
        }
    }
    product_slider[4].classList.add("active")

})

var side_opener = document.querySelector("button.opener")
var side_closer = document.querySelectorAll("button.closer")
var side_navbar = document.querySelectorAll(".side-navbar")
var overlay = document.querySelector("body>.overlay")

side_opener.addEventListener("click", function() {
    if (side_navbar[0].classList.contains("open") == false) {
        side_navbar[0].classList.add("open")
        overlay.style.display = "block"
        document.body.style.overflowY = "hidden"
    }
})

for (let i = 0; i < side_closer.length; i++) {
    side_closer[i].addEventListener("click", function() {
        side_closer[i].parentElement.classList.remove("open")
    })
}
side_closer[0].addEventListener("click", function() {
    overlay.style.display = "none"
    document.body.style.overflowY = "scroll"
})

overlay.addEventListener("click", function() {

    if (side_navbar[0].classList.contains("open")) {
        side_navbar[0].classList.remove("open");
        overlay.style.visibility = "hidden"
        document.body.style.overflowY = "scroll"
    }

})



var headerElement = document.getElementById("header");

document.addEventListener("scroll", function() {
    if (window.scrollY > 10) {
        if (!headerElement.classList.contains("scrolled")) {
            headerElement.classList.add("scrolled")
        }
    } else {
        if (headerElement.classList.contains("scrolled")) {
            headerElement.classList.remove("scrolled")
        }
    }
})

var sideNavElement = document.querySelectorAll(".side-navbar.first>div>ul>li")

for (let i = 0; i < sideNavElement.length; i++) {
    sideNavElement[i].addEventListener("click", function() {
        let id = sideNavElement[i].getAttribute("data-id");
        document.querySelector(`.side-navbar[data-nav='${id}']`).classList.add("open")
    })
}

var addToCardButtons = document.querySelectorAll(".add-card");
var quickViewButtons = document.querySelectorAll(".quick-view");


for (let i = 0; i < addToCardButtons.length; i++) {
    addToCardButtons[i].addEventListener('click', function(e) {
        e.preventDefault()
        let emptyAlert = document.querySelector(".social>ul>li:nth-child(4)>.dropdown>p")
        if (emptyAlert != null) {
            emptyAlert.remove()
        }
        let productId = this.parentElement.parentElement.getAttribute("data-id");
        let productImg = document.querySelector(`.products-item[data-id='${productId}']>a>img`);
        let productName = document.querySelector(`.products-item[data-id='${productId}']>.product-info>a`);
        let productPrice = document.querySelector(`.products-item[data-id='${productId}']>.product-info>span`);

        // alert(productName.innerText + '\n' + productPrice.innerText + '\n' + productImg.getAttribute("src"));
        let product = document.createElement("div")
        product.classList.add("owned-product")
        let ownedImg = document.createElement("img")
        ownedImg.setAttribute("src", productImg.getAttribute("src"))
        let ownedInfo = document.createElement("div")
        ownedInfo.classList.add("owned-info")
        let ownedProductName = document.createElement("p")
        ownedProductName.classList.add("product-name")
        ownedProductName.innerText = productName.innerText
        let ownedProductPrice = document.createElement("p")
        ownedProductPrice.classList.add("product-price")
        ownedProductPrice.innerText = productPrice.innerText
        ownedInfo.append(ownedProductName)
        ownedInfo.append(ownedProductPrice)
        product.append(ownedImg)
        product.append(ownedInfo)
        document.querySelector(".social>ul>li:nth-child(4)>.dropdown").append(product)
    })
}
for (let i = 0; i < quickViewButtons.length; i++) {
    quickViewButtons[i].addEventListener('click', function(e) {
        e.preventDefault()
    })
}

let slider = document.querySelector(".products.on-sale")
let innerSlider = document.querySelector(".products.on-sale>.products-wrapper")
var coordinate;
var coordinate2;
var movement;
let pressed = false;


slider.addEventListener("mousedown", function(e) {
    pressed = true;
    slider.style.cursor = 'grabbing'
    coordinate2 = e.clientX - innerSlider.offsetLeft;

})
slider.addEventListener("mouseenter", function() {
    slider.style.cursor = 'grab'
})
slider.addEventListener("mouseup", function(e) {
    slider.style.cursor = 'grab'
    coordinate = e.clientX - innerSlider.offsetLeft;


})
window.addEventListener("mouseup", function(e) {
    pressed = false;
})
slider.addEventListener("mousemove", function(e) {
    if (!pressed) return;
    e.preventDefault();

    // console.log(e.movementX)

    if (e.movementX > 0) {
        slider.scrollLeft -= 5
    } else {
        slider.scrollLeft += 5
    }

    // innerSlider.style.transform = `translateX(-${movement - innerSlider.offsetLeft}px)`
})