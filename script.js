const html = document.querySelector('html')
const contactForm = document.getElementById('contact-form');
const contactSubmit = document.getElementById('contact-submit')
const liveToast = document.getElementById('liveToast');

let cart = [];

// DISPLAY ERROR MESSAGE
const displayErr = (radioSet) => {
    const currErrMsg = document.getElementById('contact-error-message');

    if(currErrMsg == null) {
        let errMsg = document.createElement('p');
        errMsg.classList = ['text-danger'];
        errMsg.id = 'contact-error-message'
        errMsg.textContent = "Please answer this. You don't want to upset him"
        radioSet.appendChild(errMsg);
    }
    
}

// ADD TO CART HANDLER
const handleAddToCart = (e) => {
    let priceEl = e.target.previousElementSibling;
    let itemNameEl = e.target.parentElement.firstElementChild;
    cart.push({
        "name": itemNameEl.textContent,
        "price": parseInt(priceEl.textContent.split('$')[1])
    })
    
    updateCartTotal();
}

// UPDATE CART TOTAL
const updateCartTotal = () => {
    let total = 0;
    for(let i=0; i<cart.length; i++) {
        total += cart[i]['price'];
    }

    let currCartTotal = document.getElementById('cart-total');
    currCartTotal.textContent = `$${total}`
}

// FORM VALIDATION
const validateRadio = () => {
    const checkedRadio = document.querySelector('input[name="pref-contact"]:checked')
    
    return(checkedRadio != null);
}

if(contactForm) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(liveToast);
    const radioSet = document.getElementById('radio-set');

    contactSubmit.addEventListener('click', () => {
        if(validateRadio()) {
            const currErrMsg = document.getElementById('contact-error-message');
            toastBootstrap.show();
            contactForm.reset();
            if(currErrMsg != null) {
                radioSet.removeChild(currErrMsg);
            }
        } else {
            displayErr(radioSet);
        }
    })
}

// CHECK IF ADD TO CART BUTTON CLICKED
html.addEventListener('click', (e) => {
    if(e.target.textContent == 'Add to cart') {
        handleAddToCart(e);
    }
})