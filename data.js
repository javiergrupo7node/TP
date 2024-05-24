const body = document.querySelector("body");
const gridContainer = document.querySelector(".grid-container");
const drinkBtn = document.getElementById("drink");
const meatBtn = document.getElementById("meat");

let menu = {
    drink: {
        water: {
            mineral: [
                {
                    name: "Agua Villavicencio Con Gas X 1,5 Litros",
                    measurement: {
                        type: "Lt",
                        number: 1.5
                    },
                    image: "public/images/products/drinks/drinks/drink/water/mineral/Agua Mineral Villavicencio 1,5L.jpeg",
                    description: "El agua mineral Villavicencio es única de reserva protegida. La estrategia de la marca pone foco en proteger el recurso hidráulico, reducir su uso, contribuyendo a restaurar su ciclo.",
                    price: {
                        currency: "ARS",
                        number: 2.499
                    }
                }
            ]
        },
        wine: {
            blend: [
                {
                    name: "GRAN VALLE DE UCO BLEND",
                    measurement: {
                        type: "ml",
                        number: 750
                    },
                    image: "public/images/products/drinks/drinks/drink/wine/blend/GRAN VALLE DE UCO BLEND.png",
                    description: "aromática, intensa, compleja y a la vez delicada. En boca presenta taninos maduros y estructurados. De muy buen volumen, redondo, con final largo y persistente.",
                    price: {
                        currency: "ARS",
                        number: 92.999
                    }
                }
            ],
            red: [
                {
                    name: "MALBEC ARGENTINO",
                    measurement: {
                        type: "ml",
                        number: 750
                    },
                    image: "public/images/products/drinks/drinks/drink/wine/red/MALBEC ARGENTINO.webp",
                    description: "Catena Zapata, una histórica bodega familiar fundada en 1902, está actualmente dirigida por los viticultores de tercera y cuarta generación Nicolás y su hija Laura Catena. Nicolás Catena Zapata es conocido como el hombre que revolucionó el vino argentino en los años 80, al centrarse principalmente en la calidad, Plantando viñedos a 1500 metros de altura y liderando el reingreso del Malbec –varietal francés casi olvidado por el resto del mundo– al mundo del vino, Catena Zapata y Nicolás Catena Zapata han recibido numerosos premios, entre ellos Decanter. Hombre del Año de la revista Decanter, Premio al Servicio Distinguido de The Wine Spectator y Bodega del Año de publicaciones de todo el mundo.",
                    price: {
                        currency: "ARS",
                        number: 78.540
                    }
                }
            ]
        }
    },
    meat: {
        steak: [
            {
                name: "Bife con Lomo",
                measurement: {
                    type: "gr",
                    number: 450
                },
                image: "public/images/products/drinks/drinks/meat/steak/BIFECONLOMO.webp",
                description: "Corte tierno y magro, lleva también una cinta de grasa que lo transforma en una carne más sabrosa.",
                price: {
                    currency: "ARS",
                    number: 9.199
                }
            },
            {
                name: "Costilla de ternera",
                measurement: {
                    type: "gr",
                    number: 750
                },
                image: "public/images/products/drinks/drinks/meat/steak/TOMAHAWK.jpeg",
                description: "pieza de carne de vacuno muy tierna y jugosa, cortada en trozos lista para cocinar.",
                price: {
                    currency: "ARS",
                    number: 15.990
                }
            }
        ],
        seafood: [
            {
                name: "Risotto de Langostinos",
                measurement: {
                    type: "gr",
                    number: 550
                },
                image: "public/images/products/drinks/drinks/meat/seafood/RISOTTO DE LANGOSTINOS.jpeg",
                description: "Risotto de langostinos, típico de las regiones del norte de Italia productoras de arroz.",
                price: {
                    currency: "ARS",
                    number: 11.990
                }
            }
        ]
    }
};

const gridItemCreator = (obj) => {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    const imagenMenu = document.createElement("img");
    imagenMenu.setAttribute('class', "imagen_menu");
    imagenMenu.setAttribute('alt', obj.name + " imagén");
    imagenMenu.setAttribute('src', obj.image);
    const box_1 = document.createElement("div");
    box_1.classList.add("box_1_menu");
    const box_2 = document.createElement("div");
    box_2.classList.add("box_2_menu");
    const box_3 = document.createElement("div");
    box_3.classList.add("box_3_menu");
    const p_name = document.createElement("p");
    p_name.setAttribute('class', "p_1_menu");
    p_name.innerHTML = obj.name;
    const p_price = document.createElement("p");
    p_price.setAttribute('class', "p_1_menu");
    p_price.innerHTML = obj.price.number + "$ " + obj.price.currency;
    const p_measurement = document.createElement("p");
    p_measurement.setAttribute('class', "p_1_menu");
    p_measurement.innerHTML = obj.measurement.type + " " + obj.measurement.number;
    const p_description = document.createElement("p");
    p_description.setAttribute('class', "p_description");
    p_description.innerHTML = obj.description;
    gridItem.append(box_1);
    box_1.append(imagenMenu);
    gridItem.append(box_2);
    box_2.append(p_name);
    box_2.append(p_price);
    box_2.append(p_measurement);
    gridItem.append(box_3);
    box_3.append(p_description);
    gridContainer.append(gridItem);
    
};

drinkBtn.addEventListener("click", (e) => {
    while (gridContainer.firstChild) gridContainer.firstChild.remove()
  
    menu.drink.water.mineral.forEach((m) => { gridItemCreator(m); });
    menu.drink.wine.blend.forEach((b) => { gridItemCreator(b); });
    menu.drink.wine.red.forEach((r) => { gridItemCreator(r); });
});

meatBtn.addEventListener("click", (e) => {
    while (gridContainer.firstChild) gridContainer.firstChild.remove()
    menu.meat.steak.forEach((sk) => { gridItemCreator(sk); });
    menu.meat.seafood.forEach((sf) => { gridItemCreator(sf); });
});

gridContainer.addEventListener("scroll", (e) => {
    console.log(window.innerHeight);
});