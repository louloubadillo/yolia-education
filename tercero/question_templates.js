// Stores all information on questions to be built
const questionTemplates = [
    [ // √ sección 1
        [
            "sort",
            "Ayuda a Juan a resolver las siguientes sumas. Cuando acabes, arrastra los circulitos para indicar el menor con 1 y el mayor con 4.",
            [[50, 500, 0]],
            4,
            2,
            "+"
        ]
    ],
    [ // √ sección 2
        [
            "sort",
            "Ayuda a Anita a resolver las siguientes restas. Cuando acabes, arrastra los circulitos para indicar el menor con 1 y el mayor con 4.",
            [[50, 500, 0]],
            4,
            2,
            "-"
        ]
    ],
    [ // √ sección 3
        [
            "basic",
            "Tengo una botella de int1 litros y otra de int2 litros. <br><br> ¿Cuántos litros contienen entre las dos?",
            ["int1", "int2"],
            [[0.5, 1.5, 2]],
            "+",
            [["fas fa-flask", ""], ["fas fa-wine-bottle", ""]]
        ],
        [
            "basic",
            "Cristina y Marcos fueron a comparar juguetes. Si el juguete costó $int1 y ellos tenían $int2, <br><br> ¿Cuánto dinero les quedó?",
            ["int1", "int2"],
            [[10, 20, 2], [20, 30, 2]],
            "-",
            [["fas fa-coins", ""], ["fas fa-coins", "font-size: 15vh;"]]
        ],
        [
            "basic-drag",
            "En una caja se colocaron int1 gramos de queso, int2 gramos de huevo y int3 gramos de galletas. <br><br> Arrastra los dibujos para averiguar cuánto pesa la caja.",
            ["int1", "int2", "int3"],
            [[150, 300, 2]],
            "+",
            [["fas fa-cheese", ""], ["fas fa-egg", ""], ["fas fa-cookie-bite"]]
        ],
        [
            "basic-drag",
            "En una carrera los participantes deben correr int1 metros. José lleva int2 metros. <br><br> Arrastra los dibujos para encontrar cuántos metros necesita correr para llegar a la meta.",
            ["int1", "int2"],
            [[800, 900, 2], [700, 800, 2]],
            "-",
            [["fas fa-trophy", ""], ["fas fa-running", ""]]
        ]
    ],
    [ // √ sección 4
        [
            "basic-drag",
            "¿Cuántas patas tienen int1 perros? <br> Arrastra los dibujos para responder la multiplicación.",
            ["zzz", "int1"],
            [[4, 5, 0], [5, 10, 0]],
            "×",
            [["fas fa-paw", "font-size: 8vh;"], ["fas fa-dog", ""]]
        ],
        [
            "basic",
            "En una camioneta caben int1 personas. <br><br>¿Cuántas personas caben en int2 camionetas?",
            ["int1", "int2"],
            [[5,10]],
            "×",
            [["fas fa-user-friends", "font-size: 16vh"], ["fas fa-truck-pickup", ""]]
        ],
        [
            "basic-drag",
            "Pedro decidió ahorrar para comprarse un juego de Nintendo. Si todos los meses ahorra $int1, <br><br> ¿Cuánto llevará ahorrado al cabo de int2 meses? Arrastra las imágenes para armar la multiplicación.",
            ["int1", "int2"],
            [[100, 200], [6, 11]],
            "×",
            [["fas fa-coins", ""], ["far fa-calendar-alt", ""]]
        ],
        [
            "basic",
            "Un frutero vende el kilo de manzanas a $int1. Si Estefanía compró int2 kilos, <br><br>¿cuánto gastó?",
            ["int1", "int2"],
            [[50, 70], [2, 4]],
            "×",
            [["fas fa-apple-alt", ""], ["fas fa-weight", ""]]
        ]
    ],
    [ // √ sección 5
        [
            "per-parts",
            "¿Qué números debo multiplicar para que me dé el resultado? <br><br> (No puedes poner al resultado multiplicado por 1.)",
            2,
            [[5,10]],
            "×",
        ],
        [
            "basic",
            "En una cartuchera hay int1 colores. <br><br> ¿Cuántos colores hay en int2 cartucheras?",
            ["int1", "int2"],
            [[20, 30], [2, 5]],
            "×",
            [["fas fa-pencil-alt", ""], ["fas fa-toolbox", ""]]
        ],
        [
            "basic-drag",
            "En mi zapatera tengo int1 pares de zapatos. <br><br> Arrastra los dibujos para descubrir cuántos zapatos tengo en total.",
            ["int1", "zzz"],
            [[20, 30, 0], [2, 3, 0]],
            "×",
            [["fas fa-shoe-prints", ""], ["fas fa-shoe-prints", "font-size: 12vh;"]]
        ]
    ],
    [ // √ sección 6
        [
            "basic",
            "Camila tiene int1 rosas y las quiere repartir entre int2 amigas. <br><br> ¿Cuántas rosas le toca a cada amiga?",
            ["int2", "int1"],
            [2,10,0],
            "/",
            [["fas fa-fan", ""], ["fas fa-child", ""]]
        ],
        [
            "basic-drag",
            "Manuel tiene int1 baratijas que quiere repartir en int2 grupos iguales. <br><br> Arrastra las imágenes para saber cuántas baratijas tendrá cada grupo.",
            ["int2", "int1"],
            [5, 15, 0],
            "/",
            [["fas fa-random", ""], ["fas fa-layer-group", ""]]
        ],
        [
            "basic",
            "Paula tiene int2 lápices de colores. Si los quiere organizar en int1 estuches, <br><br> ¿Cuántos lápices de colores tendrá cada estuche?",
            ["int1", "int2"],
            [10, 15, 0],
            "/",
            [["fas fa-pencil-alt", ""], ["fas fa-toolbox", ""]]
        ],
        [
            "basic-drag",
            "Un ciclista recorrió int1 kilómetros en int2 horas. <br><br> Arrastra las imágenes para saber cuántos kilómetros recorrió en una hora.",
            ["int2", "int1"],
            [10, 20, 0],
            "/",
            [["far fa-clock", ""], ["fas fa-bicycle", ""]]
        ]
    ],
    [ // √ sección 7
        [
            "per-parts",
            "¿Qué números debo dividir para que me dé el resultado? <br> (No puedes poner al resultado dividido entre 1.)",
            2,
            [5,10],
            "/",
        ],
        [
            "basic-drag",
            "José fue al mercado y pagó $int1 por int2 licuados. <br><br> Arrastra las imágenes para saber cuánto costó cada licuado.",
            ["int2", "int1"],
            [20, 30, 0],
            "/",
            [["fas fa-blender", ""], ["fas fa-coins", "font-size: 17vh;"]]
        ],
        [
            "basic-drag",
            "Se desea construir un puente de int1 metros de largo. Los obreros tardan una hora por cada int2 metros. <br><br> Arrastra los dibujos para saber en cuántas horas van a acabar el puente.",
            ["int2", "int1"],
            [100, 200, 0],
            "/",
            [["fas fa-people-carry", ""], ["fas fa-stream", ""]]
        ]
    ],
    [ // √ sección 8
        [
            "basic",
            "En tercer grado hay int1 alumnos. Si hay int2 secciones, <br><br> ¿cuántos alumnos habrá en cada sección?",
            ["int2", "int1"],
            [15, 20, 0],
            "/",
            [["fas fa-users", ""], ["fas fa-object-group", ""]]
        ],
        [
            "basic-drag",
            "En una hacienda se sembraron int1 plantas de zanahoria en int2 filas. <br><br> Arrastra los dibujos para descubrir cuántas plantas hay en cada fila.",
            ["int2", "int1"],
            [30, 40, 0],
            "/",
            [["fas fa-grip-lines", ""], ["fas fa-carrot", ""]]
        ],
        [
            "basic",
            "Mercedes fue a caminar en la ciudad. Recorrió int2 metros en int1 cuadras. <br><br> ¿Cuántos metros tiene cada cuadra?",
            ["int1", "int2"],
            [40, 50, 0],
            "/",
            [["fas fa-shoe-prints", ""], ["far fa-square", ""]]
        ],
        [
            "basic-drag",
            "Se tienen int1 litros de jugo de manzana que se desean repartir en envases de int2 litros. <br><br> Arrastra los dibujos para descubrir cuántos envases se llenarán.",
            ["int2", "int1"],
            [50, 60, 0],
            "/",
            [["fas fa-boxes", ""], ["fas fa-apple-alt", ""]]
        ]
    ],
    [ // √ sección 9
        [
            "basic-drag",
            "Para celebrar el Día del Árbol los alumnos de tercer grado sembraron int1 semillas cada uno. En tercer grado hay int2 alumnos. <br><br> Arrastra las imágenes para armar la multiplicación y encontrar cuántas semillas se sembraron.",
            ["int1", "int2"],
            [[10, 15], [80, 100]],
            "×",
            [["fas fa-spa", ""], ["fas fa-users", ""]]
        ],
        [
            "basic",
            "Un nadador hace int1 piscinas diarias. Cada piscina tiene int2 metros. <br><br> ¿Cuántos metros nadará en total?",
            ["int1", "int2"],
            [[25, 30], [20, 25]],
            "×",
            [["fas fa-swimmer", ""], ["fas fa-swimming-pool", ""]]
        ],
        [
            "basic-drag",
            "De un aeropuerto salen int1 vuelos diarios. En cada vuelo van int2 pasajeros. <br><br> Arrastra los dibujos para saber cuántos pasajeros parten en un día. ",
            ["int1", "int2"],
            [[100, 150], [50, 100]],
            "×",
            [["fas fa-plane-departure", ""], ["fas fa-user-friends", ""]]
        ],
        [
            "basic",
            "En el cine se venden int1 entradas por hora. <br><br> Arrastra los dibujos para averiguar cuántas entradas se venderán en int2 horas.",
            ["int1", "int2"],
            [[150, 200], [20, 24]],
            "×",
            [["fas fa-ticket-alt", ""], ["far fa-clock", ""]]
        ]
    ],
    [ // √ sección 10
        [
            "grouped",
            "En tercer grado hay int1 alumnos.",
            "Si se desea distribuirlos en int2 secciones <br> ¿Cuántos alumnos habrá en cada sección?",
            "Si se le quiere dar a cada alumno int3 lápices, <br> ¿Cuántos lápices se necesitan?",
            ["int1", "int2", "int3"],
            [[30, 40], [2, 10]],
            ["/", "×"],
            [["fas fa-users", ""], ["fas fa-object-group", ""], ["fas fa-pencil-alt", ""]]
        ],
        [
            "grouped",
            "Se tienen int1 kg de chiles para distribuir en cajas de int2 kg.",
            "¿Cuántas cajas se pueden llenar?",
            "Si un kilo de chiles cuesta $int3, <br>¿cuánto costarán los int1 kilos?",
            ["int1", "int2", "int3"],
            [[150, 180], [2, 5]],
            ["/", "×"],
            [["fas fa-pepper-hot", ""], ["fas fa-box-open", ""], ["fas fa-coins", ""]]
        ]
    ],
]