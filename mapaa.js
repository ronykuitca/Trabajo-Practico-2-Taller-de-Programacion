const fs = require('fs')

let origen = './package.json'
let destino = './info1.txt'


function escribirTextoEnArchivo(ruta,contenido,cb){
    fs.writeFile(ruta,JSON.stringify(contenido, null, '\t'), cb)
    console.log("Archivo creado en mapaa");
}

const archivo_fs = async () =>{
    try {
        let info = {
            str: (await fs.promises.readFile(origen)).toString(),
            obj: (await fs.promises.readFile(origen)),
            size:await fs.promises.stat(origen)
        }
        escribirTextoEnArchivo(destino,info,(error,datos) =>{            
            if(error) throw new Error(`Error al escribir archivo: ${error.message}`)
        })        

        console.log(info);
    } catch (error) {
        console.log(error)
    }
}

archivo_fs() 

