// asignar supermercado alimerka a los productos que estan dentro de alimerca utilizarndpo
// for y forEach

for (const producto of alimerka.products)
producto.supermarket = alimerka;

// forEach
alimerka.products.forEach(product => product.supermarket = alimerka);

alimerka.products