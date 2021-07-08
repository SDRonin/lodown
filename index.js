'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: Takes any value and returns the value unchanged.
 * 
 * @param value: any value
 * 
 * @returns value: any value
 */

function identity(value) {
    return value;
}

module.exports.each = each;


/**
 * typeOf: Takes any value and determines its data type.  Testing if the
 * data type is an object is done in the last else if inorder to rule out other
 * data types that may also return a data type of object with the unary
 * operator typeof such as Array, Null, and Date.
 *
 * @param value: any value.
 * 
 * @returns {string}: the name of the data type of the parameter value or a
 * a message that the data type is unknown.
 */
 
function typeOf(value) {
    //return string of data type of value
    if (typeof value === "string"){
        return "string";
    } else if (Array.isArray(value)) {
        return "array";
    } else if (typeof value === "undefined") {
        return "undefined";
    } else if (typeof value === "number") {
        return "number";
    } else if (typeof value === "boolean") {
        return "boolean";
    } else if (value === null) {//is this value null?
        return "null"; //if true, return "null"
    } else if (typeof value === "function") {
        return "function";
    } else if (value instanceof Date) {//is this a date type?
        return "date";
    } else if (typeof value === "object") {//if it is not any of the above but still says its an object
        return "object";
    } else {
        return "This is not a recognized JS data type";
    }
}
 
module.exports.each = each; 
 
 
/**
 * first: Designed to return the first number of elements of an array.  It
 * first checks to see if there are sensible values for the parameters.  
 * Do to so, it checks to see if a given number paramter is not a number or
 * forgotten (undefined).  If not, the first element of the array is returned.
 * If the given number is negative, an empty array is returned. If the number
 * is larger than the length of the array, then it returns the whole array. If
 * all of the preceeding edge-cases are false, then the function can return 
 * the correct number of elements from the front of the array.
 * 
 * @param {array} array: Can have any length and any values in its elements.
 * @param {number} number: The number of elements to be returned.
 * 
 * @return {array|value}: Is an empty array if array param is not an array.
 *                  Is the first element's value if given number is not 
 *                  defined or is not a number.
 *                  Is the whole given array if given number is greater than
 *                  the number of elements in the given array.
 *                  Is an empty array if the given number is negative.
 *                  Is the first number of elements of the given array if all
 *                  of the preceeding conditionals are false.
 */
 
 function first(array, number) {
    //i: array array, number number
    //o: if array in not array, return [], 
    //      if number is 
    //c:
    //e: number is negative, number > array.length
    
    
    if (!Array.isArray(array)) {
        return [];
    } else if (typeof number !== "number" || typeof number === "undefined") {
        //if number is empty or NaN or undefined), return 1st element in array
        return array[0];
    } else if (number > array.length) {
        //if number > array length, return whole array
        return array;
    } else if (number < 0) {
        //if number is negative, return empty array
        return [];
    } else {
        //otherwise, return first number of elements in array 
        return array.slice(0, number);
    }

}
 
module.exports.each = each; 
 

/**
 * last: Designed to return the last number of elements of an array.  It
 * first checks to see if there are sensible values for the parameters.  
 * Do to so, it checks to see if a given number paramter is not a number or
 * forgotten (undefined).  If not, the last element of the array is returned.
 * If the given number is negative, an empty array is returned. If the number
 * is larger than the length of the array, then it returns the whole array. If
 * all of the preceeding edge-cases are false, then the function can return 
 * the correct number of elements from the end of the array.
 * 
 * @param {array} array: Can have any length and any values in its elements.
 * @param {number} number: The number of elements to be returned.
 * 
 * @return {array|value}: Is an empty array if array param is not an array.
 *                  Is the last element's value if given number is not 
 *                  defined or is not a number.
 *                  Is the whole given array if given number is greater than
 *                  the number of elements in the given array.
 *                  Is an empty array if the given number is negative.
 *                  Is the last number of elements of the given array if all
 *                  of the preceeding conditionals are false.
 */

function last(array, number) {
    //i: array array, number number
    //o: return [] if array not array
    //      return last element of array if num NaN or undefined
    //c:
    //e: number is neg, number is > array length
    
    //return [] if array not array
    if (!Array.isArray(array)) {
        return [];
    } else if (typeof number !== "number" || typeof number === "undefined") {
        //if number is empty or NaN or undefined, return last element in array
        return array[array.length - 1];
    } else if (number > array.length) {
        //if number > array length, return whole array
        return array;
    } else if (number < 0) {
        //if number is negative, return empty array
        return [];
    } else {
        //otherwise, return last number of elements in array 
        return array.slice(-number);
    }
    
}

module.exports.each = each;


/**
 * indexOf: Returns the index of an array that conatain the value.  If the
 *          the value is not in the array, a -1 number is returned.
 * 
 * @param {array} array: can be of any length and conatain any values.
 * @param {value} value: can be of any data type.
 * 
 * returns {number} index: the index of the array that conatains the same
 *                          value as the given value.
 * returns {number} -1: if given number is a negative number
 */ 
 
function indexOf(array, value) {
    //i: array array, value value
    //o: return index of 1st element that === value
    //      return -1  if value is not in array
    //c: do not use .indexOf method
    //e: edge-cases are taken care of by the objectives themselves
    
    //loop to return index of when element === value
    for (var i = 0; i <= array.length -1; i++) {
        if (array[i] === value) {
            return i;
        } 
    }
    
    //return -1  if value is not in array
    if (!array.includes(value)) {
        return -1;
    }
    
}
 
module.exports.each = each; 
 

/**contains: Returns a true or false boolean indicating whether a given value
 *              is in given string. Also, make sure that a value is given.
 * 
 * @param {array} array: can be any length and contain any values
 * @param {value} value: can be any value
 * 
 * returns {string}: Warning that a value was not given to the parameter value.
 * returns {boolean}: If value is in array, it is true.  If value is not in
 *                      array, then it is false.
 */

function contains(array, value) {
    //i: array array, value value
    //o: return true if array contains value
    //      return false otherwise
    //c: use ternary operators to for control flow
    //e: ? is ternary
    //      value could be undefined
    
    //check if value is undefined
    if (typeof value === "undefined") {
        return "You did not enter a value";
    } else {
    //using ?, return true or false if value is in array
    return array.includes(value) ? true : false;
    }
    
}

module.exports.each = each; 


/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * unique: Selects the first instance of values from an array and returns a new
 *          array containing these unique values.
 * 
 * @param {array} array: an array of any length and containing any values.
 * 
 * @returns {array}: contains the unique values from param array.
 */


function unique(array) {
    //i: array array
    //o: return new array of all elements with dups removed
    //c:
    //e: use indexOf()
    
    //create a new array to enter non duplicates
    var returnArr = [];
    //loop through given array to check each element for uniqness
    for (var i = 0; i <= array.length -1; i++) {
        // if (!returnArr.includes(array[i])) {
        //     returnArr.push(array[i]);
        // }
        //Above if statement works without using indexOf()
        //Below if statement works using indexOf()
        if (indexOf(returnArr, array[i]) === -1) {
            returnArr.push(array[indexOf(array, array[i])]);
        }
        
    }
    return returnArr;
}
module.exports.each = each;


/**
 * filter: Returns an array of values from another array that when a function 
 *          is run using the value, the function returns true. 
 * 
 * @param {array} array: an array of any length and values
 * @param {function} func: takes args (element, index, collection) and returns
 *                          boolean for each element of the collection.
 * 
 * @returns {array}: an array of values from another array that when a function 
 *                      is run using the value, the function returns true.
 */

function filter(array, func) {
    //i: array array, func function
    //o: return new array of elements for which func returns true
    //c: use function passed into _.filter
    //e: func returns not boolean
    
    //create new arrray to store the filterd elements
    var filteredElements = [];
    //loop through array to access each element
    for(var i = 0; i <= array.length - 1; i++) {
        //use func on each element
        //if true, push element to new array
        if (func(array[i],i,array) === true) {
            //must === true to cover edge-case that func
            //  does not return boolean
            filteredElements.push(array[i]);
        }
    }
    //return new array of filtered elements
    return filteredElements;

}
module.exports.each = each;


/**
 * reject: Returns an array of values from another array that when a function 
 *          is run using the value, the function returns false.
 * 
 * @param {array} array: an array of any length and values.
 * @param {function} func: takes args (element, index, collection) and returns
 *                          boolean for each element of the collection.
 * 
 * @returns {array}: an array of values from another array that when a function 
 *                      is run using the value, the function returns false.
 */

function reject(array, func) {
    //i: array array, func function
    //o: return new array of elements for which func returns false
    //c: use function passed into _.reject
    //e: func returns not boolean
    
    //create new arrray to store the filterd elements
    var filteredElements = [];
    //loop through array to access each element
    for(var i = 0; i <= array.length - 1; i++) {
        //use func on each element
        //if true, push element to new array
        if (func(array[i],i,array) === false) {
            //must === true to cover edge-case that func
            //  does not return boolean
            filteredElements.push(array[i]);
        }
    }
    //return new array of filtered elements
    return filteredElements;

}
module.exports.each = each;

/**
 * partition: Separate values from one array into two arrays, and return a
 *              single array with two elements that each contains one of the
 *              arrays of separated values.
 * 
 * @param {array} array: an array of any length or value.
 * @param {function} func: takes args (element, index, collection) and returns
 *                          boolean for each element of the collection.
 * 
 * @returns {array}: a single array with two elements that each contains one 
 *                      of the arrays of separated values.
 */
 
function partition(array, func) {
    //create one array to hold and return vals that func gives truthy, and one
    //  array for vals that func gives falsy
    var retTruValArr = [];
    var retFalValArr = [];
    var ansArr = [];
    //call func for each element in array, which returns boolean
    //do this by looping through array
    for (var i = 0; i <= array.length - 1; i++) {
        if (func(array[i], i, array)) {
            //if truthy, push current value to retTruValArr
            retTruValArr.push(array[i]);
        } else {
            //must be falsy, so push value to retFalValArr
            retFalValArr.push(array[i]);
        }
    }
    //after looping to apply func, return new arrays as one array
    ansArr.push(retTruValArr, retFalValArr);
    return ansArr;
    
    
}
module.exports.each = each;

/**
 * map: Returns a new array of modified values.  These values are the
 *          result of running a function on the value on each index or key
 *          of a given collection and returning a new value.
 * 
 * @param {array|object} collection: collection of any length or values
 * @param {function} func: takes args (element, index, collection) and returns
 *                          a new value for each element of the collection.
 * 
 * @returns {array}: an array containin the new values created by func param.
 */


function map(collection, func) {
    //map() function basically returns a new collection that was modified by 
    //  the func param
    
    //create new array to return new values modified by func
    var retArrVals = [];
   
    //check if collection is an array
    if (Array.isArray(collection)) {
        //loop through arrray to access each element
        for (var i = 0; i <= collection.length - 1; i++) {
            //apply func to each element, and push to new array
            retArrVals.push(func(collection[i], i , collection));
        }
        //return new array
        return retArrVals;
    } else {
        //must be object, so loop through it
        for (var key in collection) {
            //apply func to each value, and push to new array
            retArrVals.push(func(collection[key], key, collection));
        }
        //return new array
        return retArrVals;
    }

}
module.exports.each = each;


/**
 * pluck: Uses the map() function to return a value from an object within an
 *          array, and return these values in an array. This value taken from
 *          the object is the value pair of a given key.
 * 
 * @param {array} array: an array which its elements contain objects
 * @param {string} key: the given property of an object to which its value
 *                          is desired to be returned.
 * 
 * @param {object} arrayElement: the collection[i] argument of the func 
 *                      function in map(). This is the indexed object that
 *                      map() is iterating and applying the getKeyValue() to 
 *                      get the value of the object's key. 
 * 
 * @return {array}: an array of all values of all objects in an array with a
 *                  property of key param
 */

function pluck(array, key) {
    //i: array array of objects, key property
    //o: return an array of values that are paired to key param
    //c: must use map()
    //e:
    
    //map() takes collection and func, which returns array modified by func.
    //the modification done here by map()'s func param is it must return value
    //  of object's key.
    //remember, func in map takes args (collection[i], i , collection)
    function getKeyValue(arrayElement) {
        return arrayElement[key];
    }
    //return an array of values that are paired to key param using _.map()
    return map(array, getKeyValue);
    
}
module.exports.each = each;