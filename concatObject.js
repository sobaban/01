/**
 * concatenate objects
 * ex)
 * var a = {aProp:"ap"};
 * var b = {bProp:"bp"};
 * concatObjects(a, b);
 * for(var i in a) { console.log(a[i]); } // ap,bp
 * @param {Object} dst Object
 * @param {Object} src Object
 */
function concatObjects(dst, src) {
    if (typeof(src)!= 'object'
     || typeof(dst)!= 'object'){
         return null;
     }
    for(var elm in src){
        if (typeof(dst[elm]) == 'undefined') {
            dst[elm] = src[elm];
        }
    }
}
