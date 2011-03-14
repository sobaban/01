/**
 * objectの連結
 * @param {Object} dst 要素を追加されるObject
 * @param {Object} src 追加する要素をもつObject
 * @returns {Object} 要素を追加されたdst
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
    return dst;
}
