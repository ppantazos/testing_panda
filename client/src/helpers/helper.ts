export function generateColor(){
    var result = '#';
    var characters = 'ABCDEF0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 6; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result
}

export function cleanObj(obj:any){
    for (var key in obj){
        if (obj[key] === null || obj[key] === undefined){
            delete obj[key]
        }
    }

    return obj
}