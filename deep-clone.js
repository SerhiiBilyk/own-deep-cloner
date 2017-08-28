
function eachPropertyIs(type, ...obj) {
    return obj.every(function (el) {
        return type === Object.prototype.toString.call(el)
    })
}
  /**
  * If not Array and not Object
   */
function isPrimitive(...prop) {
    return prop.every(function (el) {
        return (typeof el !== 'object') || (el===null)
    })
}


function bothHave(prop, ...obj) {
    return obj.every(function (el) {
        return prop in el;
    })
}


var clone = function (src, obj) {
    function check(loopIndex) {
        if (isPrimitive(obj[loopIndex])) {
            src[loopIndex] = obj[loopIndex]
        }
        if (eachPropertyIs("[object Object]", obj[loopIndex])) {
            src[loopIndex] = {};      
            clone(src[loopIndex], obj[loopIndex])
        }
        if (eachPropertyIs("[object Array]", obj[loopIndex])) {
            src[loopIndex] = [];
            obj[loopIndex].forEach(function (el, i) {
                if (isPrimitive(obj[loopIndex][i])) {
                    src[loopIndex][i] = obj[loopIndex][i]
                } else {
                    src[loopIndex][i] = eachPropertyIs("[object Array]", obj[loopIndex][i]) ? [] : {};
                    clone(src[loopIndex][i], obj[loopIndex][i])
                }
            }) 
        }
    }

    /**
     * Choose iterator for Object or Array
     */

    if (eachPropertyIs("[object Object]", obj)) { 
        for (let prop in obj) {
            check(prop)
        }
    }

    if (eachPropertyIs("[object Array]", obj)) {
        console.log(obj)
        obj.forEach(function (el, i) {
            check(i)
        })   
    }
    return src;
}
