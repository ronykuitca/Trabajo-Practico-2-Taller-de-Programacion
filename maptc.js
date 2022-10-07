const fs = require('fs')

let origen = './package.json'
let destino = './info.txt'
let string, obj, tamaño



function readFilePromise(file) {
    return new Promise((resolve,reject) => {
        fs.readFile(file,'utf-8', (error,datos) => {
            if(error) reject(error)
            else resolve(datos)
        })
    })
}

function getSize(ruta){
    return new Promise((resolve,reject) => {
        fs.promises.stat(ruta, (error,datos)=>{
            if(error) reject(error)
            else resolve(datos)
        })
    })
} 

readFilePromise(origen)
.then(datos=> {
    string = datos,
    obj = JSON.parse(datos)
    console.log(obj);
    return getSize(origen)
})
.then(datos => {
    tamaño = getSize(origen)
})
.catch( error => console.log(error))


  
