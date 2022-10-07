const fs = require('fs')

const dir = 'package.json'

 function contenidoObj(file) {
    const data = fs.readFileSync(file,
    {encoding:'utf8', flag:'r'});
    return data;
}

function contenidoStr() {
    var data = contenidoObj(dir)
    const nuevoString = JSON.stringify(data, null, '\t')
    return nuevoString;
}

function getSize(dir){
    var stats = fs.statSync(dir)
    return stats.size
}

function guardarObjeto(dir){
    fs.writeFileSync("info.txt", dir);
}


try {
    let info = {
        contenidoStr: contenidoStr(),
        contenidoObj: contenidoObj(dir),
        size: getSize(dir)
    }
    guardarObjeto(dir)
    console.log(info);
} catch (error) {
    console.log('Error!');
}