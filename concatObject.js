/**
 * object�̘A��
 * @param {Object} dst �v�f��ǉ������Object
 * @param {Object} src �ǉ�����v�f������Object
 * @returns {Object} �v�f��ǉ����ꂽdst
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
