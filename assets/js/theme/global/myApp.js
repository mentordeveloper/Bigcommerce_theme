const lineitems = {
    lineItems: [
        {
            quantity: 1,
            productId: 107,
        },
        {
            quantity: 1,
            productId: 80,
        },
        {
            quantity: 1,
            productId: 93,
            variantId: 46,
        },
    ],
};
function addToCartMultiple(url = '', cartItems = {}) {
    return fetch(url, {
        method: 'POST',
        credentials: 'same-origin', // 'include', 'omit', 'same-origin'
//        mode: 'no-cors', // 'cors' by default
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartItems),
    })
            .then(response => response.json());
}
export default function () {
    $('.mul_add_cart_button').click(() => {
//        alert('Button clicked');

        console.log(JSON.stringify(lineitems));
        addToCartMultiple('/api/storefront/cart', lineitems)
                .then(data => console.log(JSON.stringify(data)))
                .catch(error => console.error(error));
    });
}
