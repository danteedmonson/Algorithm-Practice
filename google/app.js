

function longest(str) {

    obj={
    }

    let pairs= [];
    
    for(let i = 0; i < str.length; i++ ) {
        for(let j = i+1; j < str.length; j++ ) {
           let value = str[i] + str[j] 
           let arr = [i,j]

           if (value +"" in obj) {
               let inside = false;
               for(let k = 0; k<obj[value +""].length; k++ ) {
                  // for(let l = 0 ; l < obj[value +""][k].length; l++) {
                    if( obj[value +""][k].includes(i)||  obj[value +""][k].includes(j)) {
                        inside = true;
                    //}
                   }
               }
               if(inside == false) {
                obj[value +""].push(arr)
               }

           }else {
            obj[value +""] = [arr]
           }
        }
    }

    for (const property in obj) {
        if(pairs.length <= obj[property].length) {
            pairs = obj[property]
        }
        
      }


    return pairs.length;
}

console.log(longest([1,2,3, 3,7,4,2,8,3,6,9]))