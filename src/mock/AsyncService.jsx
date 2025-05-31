const products =[
    {
        id:'01',
        name:'Yerba Mañanita 500gr',
        price:5,
        description: 'Sabor suave y equilibrado, ideal para compartir. Libre de gluten, apta para celíacos. Con palo para una infusión más limpia. Bajo contenido de polvo, sin residuos',
        stock:10,
        category:'yerbas',
        img: '../mananita500.jpeg'
    },
    {
        id:'02',
        name:'Yerba Playadito 500gr',
        price:4.5,
        description: 'Yerba mate suave y equilibrada para disfrutar en cualquier momento. Con palo, para una infusión tradicional y auténtica. Bajo contenido de polvo, mejorando la calidad de la bebida. Libre gluten.',
        stock:15,
        category:'yerbas',
        img:'../playadito500.jpeg'
    },
    {
        id:'03',
        name:'Surtido Bagley',
        price:2,
        description: 'Galletitas Bagley Surtido. Cada paquete ofrece una mezcla irresistible de sabores surtidos incluyendo las favoritas como Chocolinas, Rumba, Sonrisas y mas. Peso neto: 398gr.',
        stock:13,
        category:'galletitas',
        img:'../surtido.webp'
    },
    {
        id:'04',
        name:'Rumba',
        price:2.5,
        description: 'Galletitas Rumba sabor chocolate rellenas de crema de coco. Peso neto: 108gr.',
        stock:7,
        category:'galletitas',
        img:'../rumba.png'
    },
    {
        id:'05',
        name:'Don Satur',
        price:1.9,
        description: 'Bizcochos salados de grasa. Ideales para acompañar tus comidas o como un snack perfecto. Con un sabor salado y una textura crujiente. Peso neto 200gr.',
        stock:6,
        category:'galletitas',
        img:'../donSatur.webp'
    },
    {
        id:'06',
        name:'Bandera',
        price:20,
        description: 'Bandera poliamida, con sol estampado y costura francesa, reforzada con tiras para atar o colgar. Largo x ancho: 70 cm x 40 cm',
        stock:15,
        category:'accesorios',
        img:'../bandera.webp'
    },
    {
        id:'07',
        name:'Bombilla',
        price:15,
        description: 'Bombilla de acero inoxidable. Altura 16cm.',
        stock:4,
        category:'accesorios',
        img:'../bombilla.webp'
    },
    {
        id:'08',
        name:'Mate Calabaza',
        price:7,
        description: 'Mate camionero algarrobo virola acero. Altura 10cm, diámetro 9,5cm.',
        stock:9,
        category:'accesorios',
        img:'../mate.webp'
    }
    
    /*{
        id:'',
        name:'',
        price:,
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem minima laborum quae inventore eum, blanditiis corporis commodi recusandae adipisci, deleniti non incidunt. Dolores quis repellendus esse excepturi cumque voluptatem atque.',
        stock:,
        category:'',
        img:'https://picsum.photos/201'
    } */
]

let error = false
export const getProducts = () => {
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            if (!error){
                resolve(products)
            }else{
                reject('Hubo un error. Intentelo nuevamente')
            }
        },2000)
    })
}
