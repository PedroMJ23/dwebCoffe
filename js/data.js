const cafes = [
    {
        nombre: 'Café Espresso',
        precio: 2.5,
        descripcion: 'Un shot de café concentrado y fuerte.',
        codigo: 'ESP001',
        imagen: 'cafe_espresso.jpg',
        categoria: 'Desayuno'
    },
    {
        nombre: 'Café Latte',
        precio: 3.5,
        descripcion: 'Café suave mezclado con leche al vapor.',
        codigo: 'LAT002',
        imagen: 'cafe_latte.jpg',
        categoria: 'Desayuno'
    },
    {
        nombre: 'Cappuccino',
        precio: 4.0,
        descripcion: 'Tercios iguales de café, leche al vapor y espuma de leche.',
        codigo: 'CAP003',
        imagen: 'cappuccino.jpg',
        categoria: 'Desayuno'
    },
    {
        nombre: 'Mocha',
        precio: 4.5,
        descripcion: 'Café con chocolate, leche al vapor y nata montada.',
        codigo: 'MOC004',
        imagen: 'mocha.jpg',
        categoria: 'Desayuno'
    },
    {
        nombre: 'Café Americano',
        precio: 3.0,
        descripcion: 'Café diluido con agua caliente.',
        codigo: 'AME005',
        imagen: 'cafe_americano.jpg',
        categoria: 'Desayuno'
    },
    {
        nombre: 'Ensalada César',
        precio: 7.0,
        descripcion: 'Lechuga, pollo a la parrilla, parmesano y aderezo César.',
        codigo: 'ENS006',
        imagen: 'ensalada_cesar.jpg',
        categoria: 'Almuerzo'
    },
    {
        nombre: 'Sándwich de Pavo',
        precio: 6.0,
        descripcion: 'Pavo, lechuga, tomate y mayonesa en pan integral.',
        codigo: 'SAN007',
        imagen: 'sandwich_pavo.jpg',
        categoria: 'Almuerzo'
    },
    {
        nombre: 'Pastel de Manzana',
        precio: 3.5,
        descripcion: 'Delicioso pastel de manzana con canela y nueces.',
        codigo: 'PAS008',
        imagen: 'pastel_manzana.jpg',
        categoria: 'Merienda'
    },
    {
        nombre: 'Té Verde',
        precio: 2.0,
        descripcion: 'Té verde orgánico y antioxidante.',
        codigo: 'TEA009',
        imagen: 'te_verde.jpg',
        categoria: 'Merienda'
    },
    {
        nombre: 'Sopa de Tomate',
        precio: 5.0,
        descripcion: 'Sopa casera de tomate con crutones y albahaca fresca.',
        codigo: 'SOP010',
        imagen: 'sopa_tomate.jpg',
        categoria: 'Cena'
    },
    {
        nombre: 'Pasta Alfredo',
        precio: 8.0,
        descripcion: 'Pasta con salsa cremosa de queso parmesano.',
        codigo: 'PAS011',
        imagen: 'pasta_alfredo.jpg',
        categoria: 'Cena'
    }
];

// Puedes acceder a la información de cada café así:
console.log(cafes[0].nombre); // Imprime: Café Espresso
console.log(cafes[1].precio); // Imprime: 3.5
