const fs = require('fs')


module.exports.listTable = (base, limit = 10) => {
    return new Promise((resolve, reject) => {
        for(let i = 1; i <= limit; i++){
            console.log(`${base} * ${i} =` ,base * i)
        }
    })
}

module.exports.createFile = (base, limit) => {

    return new Promise((resolve, reject) => {

        if(!Number(base)){
            reject(`${base} is not a number`)
            return
        }

        let data = ''
    
        for(let i = 1; i <= limit; i++){
            data += `${base} * ${i} = ${base * i}\n`
        }
    
        fs.writeFile(`tablas/tabla${base}.txt`, data, error => {
            
            if(error){
                reject("Care chimba")
            }
            else{
                resolve(`tabla${base}.txt`)
            }
        })

    })

}


// Otra forma de hacerlo
// module.exports = {
//     createFile
// }