Function.prototype.myCall = function(thisArg,...otherArg){

    thisArg = (thisArg === null || thisArg === undefined) ? window : Object(thisArg)

    thisArg.fn = this
    thisArg.fn(...otherArg)

    delete thisArg.fn
}