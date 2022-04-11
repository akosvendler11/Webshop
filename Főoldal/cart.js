let carts = document.querySelectorAll('.btn');

let products = [
    {
        name: 'PlayStation 4 (PS4) Slim 500GB',
        tag: 'ps4',
        price: 100,
        inCart: 0
    },
    {
        name: 'PlayStation 4 (PS4) Slim 500GB White',
        tag: 'ps4w',
        price: 110,
        inCart: 0
    },
    {
        name: 'PlayStation 4 (PS4) Slim 1TB Spider-man Edition',
        tag: 'ps4spider',
        price: 135,
        inCart: 0
    },
    {
        name: 'PlayStation 4 (PS4) Slim 1TB PlayStation Hits',
        tag: 'ps4 1tb',
        price: 150,
        inCart: 0
    },
    {
        name: 'PlayStation 4 (PS4) pro 1TB',
        tag: 'ps4pro',
        price: 130,
        inCart: 0
    },
    {
        name: 'PlayStation 4 (PS4) pro 1TB White',
        tag: 'ps4 pro white',
        price: 135,
        inCart: 0
    },
    {
        name: 'PlayStation 4 (PS4) pro 1TB The Last Of Us Part 2 Edititon',
        tag: 'ps4 last of',
        price: 150,
        inCart: 0
    },
    {
        name: 'PlayStation 4 (PS4) pro 1TB Fifa 21 Edition',
        tag: 'ps4 fifa',
        price: 180,
        inCart: 0
    }
];

for (let i=0; i < carts.length; i++)  {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}
function onLoadCartNumbers() {
     let productNumbers = localStorage.getItem('cartNumbers'); 

     if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers; 
     }
}

function cartNumbers(product) {
    
    let productNumbers = localStorage.getItem('cartNumbers');
    
    productNumbers = parseInt(productNumbers);

    if( productNumbers ) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else  {
        localStorage.setItem('cartNumbers',   1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {
        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify
    (cartItems));
}

function totalCost(product) {
    //console.log("The product price is", product.price);
    let cartCost = localStorage.getItem('totalCost');
    
    console.log("My cartCost is", cartCost)
    console.log(typeof cartCost );

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);

    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');
    console.log(cartItems);

    if( cartItems && productContainer ) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
                productContainer.innerHTML += `
                <div class="products">
                <ion-icon name="close-circle"></ion-icon>
                <img src="./images/${item.tag}.jpg">
                <span>${item.name}</span>
                </div>
                <div class="price">${item.price},000 Ft</div>
                <div class="quantity">
                <ion-icon class="decrease "
                name="arrow-dropleft-circle"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon class="increase"
                name="arrow-dropright-circle"></ion-icon>
                </div>
                <div class="total">
                       ${item.inCart * item.price},000 Ft
                </div>
                `;
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                Összesen
                </h4>
                <h4 class=""basketTotal>
                ${cartCost},000 Ft
                </h4> 
                </div>
        `

    }
}

onLoadCartNumbers();
displayCart();