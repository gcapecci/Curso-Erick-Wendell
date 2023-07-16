import { database } from "./../shared/data.mjs";

class Aplication {
    constructor(factory) {
        this.table = factory.createTable()
    }

    initilize(database) {
        this.table.render(database)
    }
}

; (async function main() {
    const path = globalThis.window ? 'brownser' : 'console'
    const { default: ViewFactory} = await import(`./../platforms/${path}/index.mjs`)
    const app = new Aplication(new ViewFactory())
    app.initilize(database)
})();