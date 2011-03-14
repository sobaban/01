/**
 * object‚Ì˜AŒ‹
 * @param {Object} dst —v‘f‚ð’Ç‰Á‚³‚ê‚éObject
 * @param {Object} src ’Ç‰Á‚·‚é—v‘f‚ð‚à‚ÂObject
 * @returns {Object} —v‘f‚ð’Ç‰Á‚³‚ê‚½dst
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
