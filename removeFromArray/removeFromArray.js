const removeFromArray = function(array, ...args) {
    for (let i = 0; i < args.length; i++) {       
        array = array.filter(value => value !==  args[i]);
    }
    return array;
}

module.exports = removeFromArray
