/*
* Only draft, don't use it
*todo: replace [].concat with simle iterator 
*/


function merge(result, extend) {

    for (var prop in result) {
        if (bothHave(prop, result, extend)) {
            if (eachPropertyIs("[object Array]", result[prop], extend[prop])) {
                result[prop] = result[prop].concat(extend[prop])
            }
            if (eachPropertyIs("[object Object]", result[prop], extend[prop])) {
                merge(result[prop], extend[prop])
            }
            if (isPrimitive(result[prop], extend[prop])) {

                result[prop] = extend[prop];
            }
        }
    }
    return result;
}
