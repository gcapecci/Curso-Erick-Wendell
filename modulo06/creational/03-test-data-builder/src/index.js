/*
ProductId: should be between 2 and 20 characters
Name: shouls be only words
Price:  Should from zero to a thousand
Category: should be eletronic or organic 
*/
const arrayAllowCategory = [
    'eletronic',
    'organic'
]
function productValidator(product) {
    const errors = []
    if(!(product.id.length >= 2 && product.id <= 20)) {
        errors.push(`id: ivalid length, current [${product.id}] expected to be between 2 and 20`)
    }

    if(/(\W|\d)/.test(product.name)) {
        errors.push(`name: ivalid value, current [${product.name}] expected to have only works`)
    }

    if(!(product.price >= 1 && product.price <= 1000)) {
        errors.push(`price: ivalid value, current [${product.price}] expected to be between 1 and 1000`)
    }

    if(!(arrayAllowCategory.includes(product.category))) {
        errors.push(`category: ivalid value, current [${product.category}] expected to be either eletronic or orgnanic`)
    }

    return {
        result: errors.length === 0,
        errors
    }
}

module.exports = {
    productValidator
}