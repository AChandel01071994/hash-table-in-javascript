{
    class HashTable {
        // taking size as prime num to have less collisions
        constructor(size = 53){
            this.keyMap = new Array(53);
        }
        _hash(key){
            // taking random prime num to multiply to the total to have less collisions
            let total = 0, randomPrime = 31;
            for(let i = 0; i < Math.min(key.length,100); i++){
                let char = key[i];
                let value = char.charCodeAt(0) - 96;
                total = (total * randomPrime) + value;
            }
            return total % this.keyMap.length;
        }

        set(key, val){
            let index = this._hash(key);
            // if key map already exists,check if key exists & update value else do seperate chaining (append)
            if(this.keyMap[index]){
                let pair = this.keyMap[index].find(v => v[0] === key);
                if(pair) 
                    pair[1] = val;
                else  
                    this.keyMap[index].push([key,val]);
                
            } else {
                // set value if key map does not exists
                this.keyMap[index] = [[key,val]];
            }
        }

        get(key){
            let index = this._hash(key);
            let values = this.keyMap[index];
            // if key map exists return value
            if(values) 
                return values.find(v => v[0] === key)[1];
             else 
                return undefined;
        }

        keys(){
           let res = [];
           for(let v of this.keyMap){
               if(v){
                   for(let vv of v){
                        res.push(vv[0])
                    }
               }
           }

           return res;
        }

        values(){
           let res = [];
           for(let v of this.keyMap){
               if(v){
                   for(let vv of v){
                        res.push(vv[1])
                    }
               }
           }

           return res;
        }
    }

    let hash = new HashTable();
    hash.set('name','abhishek');
    hash.set('sdsds','Gurgaon');
    hash.set('name','akash');
    hash.keys().forEach(function(k){
        console.log(hash.get(k))
    })
//     hash.get('sdsdsq');
}
