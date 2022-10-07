
const fs = require('fs')


let origen = './package.json'
let destino = './info.txt'


function leerArchivoComoString(ruta,cb){
    fs.readFile(ruta,'utf-8',cb)  
}

function getSize(ruta,cb){
    fs.stat(ruta,cb)
}

function escribirTextoEnArchivo(ruta,contenido,cb){
    fs.writeFile(ruta,JSON.stringify(contenido, null, '\t'), cb)
    console.log("Archivo creado");
}


leerArchivoComoString(origen,(error,datos) => {
    if(error) throw new Error(`Error al leer archivo: ${error.message}`)
    string = datos
    obj = JSON.parse(datos)
                    
    getSize(origen,(error,datos) => {
        if(error) throw new Error(`Error al leer archivo: ${error.message}`)
        tamaño = datos.size

        let info = {
            contenidoStr: string,
            contenidoObj: obj,
            size: tamaño
        }
        console.log(info)


        escribirTextoEnArchivo(destino,info,(error,datos) =>{            
            if(error) throw new Error(`Error al escribir archivo: ${error.message}`)
        })        
    })
})
//4 manejo de errores Try catch