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
            "Cristina y Marcos fueron a comparar juguetes. El juguete costó int1 pesos y ellos tenían int2 pesos. <br><br> ¿Cuánto dinero les quedó?",
            ["int1", "int2"],
            [[10, 20, 2], [20, 30, 2]],
            "-",
            [["fas fa-coins", ""], ["fas fa-coins", "font-size: 15vh;"]]
        ],
        [
            "basic-drag",
            "En una caja se colocaron int1 gramos de queso, int2 gramos de huevo y int3 gramos de galletas. <br><br>¿Cuánto pesa la caja?<br> Arrastra los dibujos para armar la suma.",
            ["int1", "int2", "int3"],
            [[150, 300, 2]],
            "+",
            [["fas fa-cheese", ""], ["fas fa-egg", ""], ["fas fa-cookie-bite"]]
        ],
        [
            "basic-drag",
            "En una carrera los participantes deben correr int1 metros. José lleva int2 metros. <br><br> ¿Cuántos metros necesita correr para llegar a la meta? <br> Arrastra los dibujos para armar la resta.",
            ["int1", "int2"],
            [[800, 900, 2], [700, 800, 2]],
            "-",
            [["fas fa-trophy", ""], ["fas fa-running", ""]]
        ]
    ],
    [ // √ sección 4
        [
            "basic-drag",
            "¿Cuántas patas tienen int1 perros? <br> Arrastra los dibujos para armar la multiplicación.",
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
            "Pedro decidió ahorrar para comprarse un juego de Nintendo. Todos los meses ahorra int1 pesos. <br><br> ¿Cuánto llevará ahorrado al cabo de int2 meses? <br>Arrastra los dibujos para armar la multiplicación.",
            ["int1", "int2"],
            [[20, 30], [6, 11]],
            "×",
            [["fas fa-coins", ""], ["far fa-calendar-alt", ""]]
        ],
        [
            "basic",
            "Un frutero vende el kilo de manzanas a int1 pesos. Estefanía compró int2 kilos. <br><br>¿Cuánto gastó?",
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
            1,
            [[5,8]],
            "×",
        ],
        [
            "basic",
            "En una cartuchera hay int1 colores. <br><br> ¿Cuántos colores hay en int2 cartucheras?",
            ["int1", "int2"],
            [[30, 40], [2, 5]],
            "×",
            [["fas fa-pencil-alt", ""], ["fas fa-toolbox", ""]]
        ],
        [
            "per-parts",
            "¿Qué números debo multiplicar para que me dé el resultado? <br><br> (No puedes poner al resultado multiplicado por 1.)",
            1,
            [[8,10]],
            "×",
        ],
        [
            "basic-drag",
            "En mi zapatera tengo int1 pares de zapatos. <br><br> ¿Cuántos zapatos tengo en total? <br> Arrastra los dibujos para armar la multiplicación.",
            ["int1", "zzz"],
            [[40, 50, 0], [2, 3, 0]],
            "×",
            [["fas fa-shoe-prints", ""], ["fas fa-shoe-prints", "font-size: 12vh;"]]
        ]
    ],
    [ // √ sección 6
        [
            "basic",
            "Un nadador hace int1 piscinas diarias. Cada piscina tiene int2 metros. <br><br> ¿Cuántos metros nadará en total?",
            ["int1", "int2"],
            [[20, 30], [15, 20]],
            "×",
            [["fas fa-swimmer", ""], ["fas fa-swimming-pool", ""]]
        ],
        [
            "basic-drag",
            "Para celebrar el Día del Árbol los alumnos de tercer grado sembraron int1 semillas cada uno. En tercer grado hay int2 alumnos. <br><br> ¿Cuántas semillas se sembraron? <br> Arrastra las imágenes para armar la multiplicación.",
            ["int1", "int2"],
            [[20, 30], [80, 100]],
            "×",
            [["fas fa-spa", ""], ["fas fa-users", ""]]
        ],
        [
            "basic",
            "En el cine se venden int1 entradas por hora. <br><br> ¿Cuántas entradas se venderán en int2 horas?",
            ["int1", "int2"],
            [[100, 150], [20, 24]],
            "×",
            [["fas fa-ticket-alt", ""], ["far fa-clock", ""]]
        ],
        [
            "basic-drag",
            "De un aeropuerto salen int1 vuelos diarios. En cada vuelo van int2 pasajeros. <br><br> ¿Cuántos pasajeros parten en un día? <br> Arrastra los dibujos para armar la multiplicación. ",
            ["int1", "int2"],
            [[150, 200], [50, 100]],
            "×",
            [["fas fa-plane-departure", ""], ["fas fa-user-friends", ""]]
        ]
    ],
    [ // √ sección 7
        [
            "basic",
            "Camila tiene int1 rosas y las quiere repartir entre int2 amigas. <br><br> ¿Cuántas rosas le toca a cada amiga?",
            ["int2", "int1"],
            [2, 10, 0],
            "/",
            [["fas fa-fan", ""], ["fas fa-child", ""]]
        ],
        [
            "basic-drag",
            "Manuel tiene int1 baratijas que quiere repartir en int2 grupos iguales. <br><br> ¿Cuántas baratijas tendrá cada grupo? <br> Arrastra los dibujos para armar la división.",
            ["int2", "int1"],
            [4, 10, 0],
            "/",
            [["fas fa-random", ""], ["fas fa-layer-group", ""]]
        ],
        [
            "basic",
            "Paula tiene int2 lápices de colores. Los quiere organizar en int1 estuches. <br><br> ¿Cuántos lápices de colores tendrá cada estuche?",
            ["int1", "int2"],
            [6, 10, 0],
            "/",
            [["fas fa-pencil-alt", ""], ["fas fa-toolbox", ""]]
        ],
        [
            "basic-drag",
            "Un ciclista recorrió int1 kilómetros en int2 horas. <br><br> ¿Cuántos kilómetros recorrió en una hora? <br> Arrastra los dibujos para armar la división.",
            ["int2", "int1"],
            [8, 10, 0],
            "/",
            [["far fa-clock", ""], ["fas fa-bicycle", ""]]
        ]
    ],
    [ // √ sección 8
        [
            "per-parts",
            "¿Qué números debo dividir para que me dé el resultado? <br> (No puedes poner al resultado dividido entre 1.)",
            1,
            [5,8],
            "/",
        ],
        [
            "basic-drag",
            "José fue al mercado y pagó int1 pesos por int2 licuados. <br><br> ¿Cuánto costó cada licuado? <br> Arrastra los dibujos para armar la división.",
            ["int2", "int1"],
            [20, 30, 0],
            "/",
            [["fas fa-blender", ""], ["fas fa-coins", "font-size: 17vh;"]]
        ],
        [
            "per-parts",
            "¿Qué números debo dividir para que me dé el resultado? <br> (No puedes poner al resultado dividido entre 1.)",
            1,
            [8,10],
            "/",
        ],
        [
            "basic-drag",
            "En tercer grado hay int1 alumnos. Hay int2 secciones. <br><br> ¿Cuántos alumnos hay en cada sección?  <br> Arrastra los dibujos para armar la división.",
            ["int2", "int1"],
            [30, 40, 0],
            "/",
            [["fas fa-users", ""], ["fas fa-object-group", ""]]
        ],
    ],
    [ // √ sección 9
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
            "En una hacienda se sembraron int1 plantas de zanahoria en int2 filas. <br><br> ¿Cuántas plantas hay en cada fila? <br> Arrastra los dibujos para armar la división.",
            ["int2", "int1"],
            [120, 140, 0],
            "/",
            [["fas fa-grip-lines", ""], ["fas fa-carrot", ""]]
        ],
        [
            "basic",
            "Se desea construir un puente de int1 metros de largo. Los obreros tardan una hora por cada int2 metros. <br><br> ¿En cuántas horas van a acabar el puente?",
            ["int2", "int1"],
            [100, 120, 0],
            "/",
            [["fas fa-people-carry", ""], ["fas fa-stream", ""]]
        ],
        [
            "basic-drag",
            "Se tienen int1 litros de jugo de manzana que se desean repartir en envases de int2 litros. <br><br> ¿Cuántos envases se llenarán? <br> Arrastra los dibujos para armar la división.",
            ["int2", "int1"],
            [160, 180, 0],
            "/",
            [["fas fa-boxes", ""], ["fas fa-apple-alt", ""]]
        ]
    ],
    [ // √ sección 10
        [
            "grouped",
            "En tercer grado hay int1 alumnos.",
            "Se desea distribuirlos en int2 secciones. <br> ¿Cuántos alumnos habrá en cada sección? <br> Arrastra los dibujos para armar la división.",
            "Se le quiere dar a cada alumno int3 lápices. <br> ¿Cuántos lápices se necesitan? <br> Arrastra los dibujos para armar la multiplicación.",
            ["int1", "int2", "int3"],
            [[30, 40], [2, 10]],
            ["/", "×"],
            [["fas fa-users", ""], ["fas fa-object-group", ""], ["fas fa-pencil-alt", ""]]
        ],
        [
            "grouped",
            "Se tienen int1 kilos de chiles para distribuir en cajas de int2 kilos.",
            "¿Cuántas cajas se pueden llenar? <br> Arrastra los dibujos para armar la división.",
            "Un kilo de chiles cuesta int3 pesos. <br> ¿Cuánto costarán los int1 kilos? <br> Arrastra los dibujos para armar la multiplicación.",
            ["int1", "int2", "int3"],
            [[150, 180], [2, 5]],
            ["/", "×"],
            [["fas fa-pepper-hot", ""], ["fas fa-box-open", ""], ["fas fa-coins", ""]]
        ]
    ],
    [ // √? sección 11
        [
            "decomp",
            "Completa descomponiendo el siguiente número: <br><br> int1",
            [50, 2000]
        ],
        [
            "decomp",
            "Completa descomponiendo el siguiente número: <br><br> int1",
            [50, 50000]
        ],
        [
            "decomp",
            "Completa descomponiendo el siguiente número: <br><br> int1",
            [1000, 99000]
        ],
        [
            "decomp",
            "Completa descomponiendo el siguiente número: <br><br> int1",
            [80000, 999000]
        ]
    ],
    [ // √ sección 12
        [
            "round",
            "¿Cuántos hipopótamos hay si redondeamos a la power1 más cercana?",
            [100, 1100],
            "fas fa-hippo",
        ],
        [
            "round",
            "¿Cuántos peces hay si redondeamos a la power1 más cercana?",
            [100, 1100],
            "fas fa-fish"
        ],
        [
            "round",
            "¿Cuántos pájaros hay si redondeamos a la power1 más cercana?",
            [100, 1100],
            "fas fa-dove"
        ],
        [
            "round",
            "¿Cuántos kiwis hay si redondeamos a la power1 más cercana?",
            [100, 1100],
            "fas fa-kiwi-bird"
        ]
    ],
    [ // √ sección 13
        [
            "fraction-table",
            "Completa el siguiente cuadro.",
            4
        ]
    ],
    [ // √ sección 14
        [
            "decimals",
            "Transforma la siguiente fracción a una expresión decimal.",
            [1,5],
            10
        ],
        [
            "decimals",
            "Transforma la siguiente fracción a una expresión decimal.",
            [5,10],
            10
        ],
        [
            "decimals",
            "Transforma la siguiente fracción a una expresión decimal.",
            [1,50],
            100
        ],
        [
            "decimals",
            "Transforma la siguiente fracción a una expresión decimal.",
            [50,100],
            100
        ]
    ],
    [ // √ sección 15
        [
            "units",
            "Un río tiene int1 <em>kilómetros</em> de longitud. <br> ¿Cuántos <em>metros</em> de longitud tiene el río?",
            [3, 8, 1],
            3,
            "fas fa-water"
        ],
        [
            "units",
            "Una cama mide int1 <em>centímetros</em> de largo. <br> ¿Cuántos <em>metros</em> mide de largo?",
            [150, 200, 0],
            -2,
            "fas fa-bed"
        ],
        [
            "units",
            "Para hacer pollo hervido se necesita llenar una olla con int1 <em>litros</em> de agua. <br> ¿Cuántos <em>mililitros</em> de agua se necesitan para llenar la olla?",
            [6, 10, 2],
            3,
            "fas fa-drumstick-bite"
        ],
        [
            "units",
            "El equipaje de Fernando pesa int1 <em>gramos</em>.  <br> ¿Cuántos <em>kilogramos</em> pesa?",
            [2000, 3000, 0],
            -3,
            "fas fa-suitcase-rolling"
        ]
    ]
]