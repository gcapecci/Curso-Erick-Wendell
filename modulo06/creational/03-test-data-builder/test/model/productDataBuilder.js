const Product = require('../../src/entities/product');

class ProductDataBuilder {
    constructor() {
        // o default sao os valores corretos
        // o caso de sucesso!
        this.productData = {
            id: "0000001",
            name: 'computer',
            price: 1000,
            category: 'eletronic'
        }
    }

    static aProduct() {
        return new ProductDataBuilder()
    }

    withInvalidId() {
        this.productData.id = ''
        return this
    }

    withInvalidName() {
        this.productData.name = 'abc123'
        return this
    }

    withInvalidPrice() {
        this.productData.price = 2000
        return this
    }

    withInvalidCategory() {
        this.productData.category = 'mecanic'
        return this
    }

    build() {
        const product = new Product(this.productData)
        return product
    }
}

module.exports = ProductDataBuilder