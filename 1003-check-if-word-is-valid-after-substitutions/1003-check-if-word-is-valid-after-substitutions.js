/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    while (s.length) {
        console.log("s",s)
        console.log("indexOf",s.indexOf("abc"))
        

        if (s.indexOf("abc") == -1) break
        s=s.replaceAll("abc","")
    }
    return !s.length
};