class ProductManager {
 
    constructor () {
        this.products = [];
        this.id = 1;
    }
    getProducts() {
        const allProducts = this.products.map((prod) => prod);
        return allProducts;
    }
    addProducts(title, description, price, thumbnail, code, stock) {

        const invalidCode = this.products.some((prod) => prod.code === code);

        if(invalidCode){
            console.log(`\n ~~ ERROR ~~ \n El código del producto ${title} es inválido. \n Revise e ingrese nuevamente otro código. \n ~~ x ~~`)
        }
        else{
            const prodID = this.idGenerator();
            const prod = { id:prodID, title, description, price, thumbnail, code, stock }
            this.products.push(prod)  
            console.log(`\n ~~ x ~~ \n Producto agregado exitosamente \n ~~ x ~~`)
        }
        
    }
    getProductsByID(id){
        const matchProd = this.products.find((prod) => prod.id === id);
        return matchProd ? matchProd : "\n ~~ x ~~\n ID Not Found. \n ~~ x ~~"
    }
    idGenerator(){ return this.id++ } 
}

/* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
DESAFÍO ENTREGABLE - PROCESO DE TESTING
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

// Se creará una instancia de la clase “ProductManager”
const p = new ProductManager()


// Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
console.log(`~~ Array Vacío (Sin Productos) ~~`)
console.log(p.getProducts())


// Se llamará al método “addProduct” con los campos: 
p.addProducts("producto prueba", "Este es un producto prueba", 200, "Sin Imagen", "abc123", 25)


// El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE
// Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
console.log(`~~ Aparece el producto con un ID único y generado automáticamente ~~ `)
console.log(p.getProducts())
console.log(`~~ x ~~`)

// Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
p.addProducts("producto prueba", "Este es un producto prueba", 200, "Sin Imagen", "abc123", 25)

// Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo

console.log(`~~ Producto encontrado por ID ~~`)
console.log(p.getProductsByID(1))
console.log(`~~ x ~~`)

console.log(p.getProductsByID(5))
