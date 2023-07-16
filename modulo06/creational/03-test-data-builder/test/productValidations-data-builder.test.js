const { expect } = require('chai')
const { it, describe } = require('mocha')
const { productValidator } = require('../src')
const ProductDataBuilder = require('./model/productDataBuilder')

describe('Test Data Builder', () => {
    it('should\'t return erro with validr product', () => {
        const product = ProductDataBuilder.aProduct().build()
        const result = productValidator(product)

        const expected = {
            errors: [],
            result: true
        }

        expect(result).to.be.deep.equal(expected)
    })

    describe('Product validation Rules', () => {
        it('should return an object error when a Product with valid id', () => {
            const product = ProductDataBuilder.aProduct().withInvalidId().build()
            const result = productValidator(product)
    
            const expected = {
                errors: [
                    "id: ivalid length, current [] expected to be between 2 and 20"
                ],
                result: false
            }
    
            expect(result).to.be.deep.equal(expected)
        })
        it('should return an object error when a Product with valid name', () => {
            const product = ProductDataBuilder.aProduct().withInvalidName().build()
            const result = productValidator(product)
    
            const expected = {
                errors: [
                    "name: ivalid value, current [abc123] expected to have only works"
                ],
                result: false
            }
    
            expect(result).to.be.deep.equal(expected)
        })
        it('should return an object error when a Product with valid price', () => {
            const product = ProductDataBuilder.aProduct().withInvalidPrice().build()
            const result = productValidator(product)
    
            const expected = {
                errors: [
                    "price: ivalid value, current [2000] expected to be between 1 and 1000"
                ],
                result: false
            }
    
            expect(result).to.be.deep.equal(expected)
        })
        it('should return an object error when a Product with valid category', () => {
            const product = ProductDataBuilder.aProduct().withInvalidCategory().build()
            const result = productValidator(product)
    
            const expected = {
                errors: [
                    "category: ivalid value, current [mecanic] expected to be either eletronic or orgnanic"
                ],
                result: false
            }
    
            expect(result).to.be.deep.equal(expected)
        })
    })
})