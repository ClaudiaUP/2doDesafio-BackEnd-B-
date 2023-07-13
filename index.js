const ProductManager = require("./ProductManager.js");
let productManager = new ProductManager();
console.log(productManager);



let persistirProduct = async () => {
    let product = await productManager.addProduct('Heladera', 'Freezer no frost', 200000, "imagen1", "Zxc4", 40);
    let product1 = await productManager.addProduct
    ('Lavaropas', 'Vertical', 100000, "imagen2", "Zxc5", 20);


    let products = await productManager.getProducts();
    console.log(`Productos encontrados en Product Manager: ${products.length}`);
    console.log(products);

    let foundProduct = await productManager.getProductById('Zxc4');
    console.log("Producto encontrado por ID:");
    console.log(foundProduct);

    await productManager.updateProduct('Zxc4', { price: 200000, description: 'Freezer no frost' });

    await productManager.deleteProduct('Zxc4');




    
};

  
persistirProduct();