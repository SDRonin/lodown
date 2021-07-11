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
 * typeOf: Takes any value and determines its data type.  Testing if the data 
 *          type is an object is done in the last else if inorder to rule out
 *          other data types that may also return a data type of object with 
 *          the unary operator typeof such as Array, Null, and Date.
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
    } else if (typeof value === "object") {//none of the above but still an object
        return "object";
    } else {
        return "This is not a recognized JS data type";
    }
}
 
module.exports.each = each; 
 
 
/**
 * first: Designed to return the first number of elements of an array.  It 
 *          first checks to see if there are sensible values for the 
 *          parameters.  Do to so, it checks to see if a given number paramter 
 *          is not a number or forgotten (undefined).  If not, the first 
 *          element of the array is returned.  If the given number is negative,
 *          an empty array is returned. If the number is larger than the length
 *          of the array, then it returns the whole array. If all of the 
 *          preceeding edge-cases are false, then the function can return the 
 *          correct number of elements from the front of the array.
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
    //      if number is not a number type or is undefined, return first element,
    //      if number requested > number of elements in array, return whole array
    //      if number is negative, return empty string
    //      otherwise, return 1st number of elements of array

    
    
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
 * last: Designed to return the last number of elements of an array.  It first 
 *          checks to see if there are sensible values for the parameters.  Do 
 *          to so, it checks to see if a given number paramter is not a number
 *          or forgotten (undefined).  If not, the last element of the array is
 *          returned.  If the given number is negative, an empty array is 
 *          returned. If the number is larger than the length of the array, 
 *          then it returns the whole array. If all of the preceeding 
 *          edge-cases are false, then the function can return the correct 
 *          number of elements from the end of the array.
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
    //o: if array in not array, return [], 
    //      if number is not a number type or is undefined, return last element,
    //      if number requested > number of elements in array, return whole array
    //      if number is negative, return [];
    //      otherwise, return last number of elements of array

    
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
 * indexOf: Returns the index of the first occurance of a given value in a 
 *              given array.  If the value is not in the array, a -1 number is
 *              returned.
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
 

/**
 * contains: Returns a true or false boolean indicating whether a given value
 *              is in given array. Also, check if this search value is indeed
 *              given.
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
    //using '?' operator, return true or false if value is in array
    return array.includes(value) ? true : false;
    }
    
}

module.exports.each = each; 


/**
 * each: Applies a function to each value of a collection.  It does not return
 *          any values, but it may modify the original collection's values with
 *          the given function parameter.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
 
function each(collection, action) {
    //if the collection is an array, loop as an array
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            //run the given function using the current elements value collection[i]
            action(collection[i], i, collection);
        }
    } else {
        //must be object, therefore loop with for-in
        for (var key in collection) {
            //run the given function using the current elements value collection[i]
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;



/**
 * unique: Returns an array containing only the unique values from a given 
 *          array. It does this by selecting the first instance of a value
 *          from an array and pushes this value to a new array.
 * 
 * @param {array} array: an array of any length and containing any values.
 * 
 * @returns {array}: an array containing only the unique values from param array.
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
        //Above if-statement works without using indexOf()
        //Below if-statement works using indexOf()
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
 *          of a given collection and pushing this new value to a new array.
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
 * pluck: Returns all of the values of a given key from all of the objects in a
 *          list/array.  Uses the map() function to return a list of these 
 *          values of the given key.  Note: the map function uses a declared
 *          function that returns the value of the desired key.
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
 * @returns {array}: an array of all values of all objects in an array with a
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


/**
 * every: Returns boolean true if a given function returns true for all 
 *          elements of a given array.  If the given function returns false for
 *          any of the elements, this every() function returns a boolean false.
 *          
 *          The every() function uses the map() function to apply a given 
 *          function to produce true or false values for each element of a 
 *          given collection.  These values are then pushed to a new array, 
 *          which a final for-loop checks to see if all elements returned by 
 *          map() are true.
 * 
 *          Note: a function testTruthy is defined to be used by the map() 
 *          function if a function is not given.  This function simply returns 
 *          the truthy values for each elements value.
 * 
 * @param {array|object} collection: either an array or object of any length
 *          and any value
 * @param {function} func: a function that takes the value of an element of a
 *          given collection and returns a boolean
 * 
 * @returns {boolean}: returns true if func returns true for all elements, 
 *          and returns false if func returns any false
 */
 
 function every(collection, func) {
  //i: collection array|object, func function
  //o: boolean
  //c:
  //e: if not boolean return true for thruthy, false for falsy.
  //     -func may not be a function
  
  //create function that returns truthy values of the element's value for when
  //    no function is given
  function testTruthy(e,i,collection) {
      if (e) {
          return true;
      } else {
          return false;
      }
  }
  
  //if func is a func then run _.map() with func, if not just test if value is truthy/falsy
  if (typeof func === "function" && func !== undefined) {
      //console.log(1, collection);
      //run func on each element of collection, here chose to use _.map()
      var testarray = map(collection, func);
      //loop through collection to evaluate trues and falses
      //console.log(2, collection);
      //console.log(3, testarray);  
  } else {
      //func must be not a func nor defined
      //therefore, apply truthiness test
      testarray = map(collection, testTruthy);
  }
  
  //if all elements return as true, then have _.every() return true
  //if any one of the elements are false, then return false
  //loop through the returned array of booleans from _.map()
  for (var i = 0; i <= testarray.length - 1; i++) {
      //if any element if false return false, return true if no false elements
      if (testarray[i] === false) {
          return false;
      }
  }
  //above loop found no false values, so return true
  return true;
  
}
module.exports.each = each;


/**
 * some: Returns boolean true if a given function returns true for any 
 *          element of a given array.  Only if the given function returns false for
 *          all of the elements, this some() function returns a boolean false.
 *          
 *          The some() function uses the map() function to apply a given 
 *          function to produce true or false values for each element of a 
 *          given collection.  These values are then pushed to a new array, 
 *          which a final for-loop checks to see if any element returned by 
 *          map() are true.
 * 
 *          Note: a function testTruthy is defined to be used by the map() 
 *          function if a function is not given.  This function simply returns 
 *          the truthy values for each elements value.
 * 
 * @param {array|object} collection: either an array or object of any length
 *          and any value
 * @param {function} func: a function that takes the value of an element of a
 *          given collection and returns a boolean
 * 
 * @returns {boolean}: returns true if func returns true for any element, 
 *          and returns false only if func returns false for all elements
 */
 
function some(collection, func) {
    //Objective 1 is _.map(), apply function to each element and return new array
    //i: collection array|object, func function
  //o: boolean
  //c:
  //e: if not boolean return true for thruthy, false for falsy.
  //     -func may not be a function
  
  //create function that returns truthy values
  function testTruthy(e,i,collection) {
      if (e) {
          return true;
      } else {
          return false;
      }
  }
  
  //if func is a func then run _.map() with func, if not just test if value is 
  //    truthy/falsy
  if (typeof func === "function" && func !== undefined) {
      //console.log(1, collection);
      //run func on each element of collection, here chose to use _.map()
      var testarray = map(collection, func);
      //loop through collection to evaluate trues and falses
      //console.log(2, collection);
      //console.log(3, testarray);  
  } else {
      //func must be either not a func nor defined
      testarray = map(collection, testTruthy);
  }
  
  //if all elements return as false, then have _.every() return false
  //if any one of the elements are true, then return true
  //loop through the returned array of booleans from _.map()
  for (var i = 0; i <= testarray.length - 1; i++) {
      //if any element if true return true, return false if no true elements
      if (testarray[i] === true) {
          return true;
      }
  }
  //above loop found no true values, therefore return false
  return false;
    
}
module.exports.each = each;


/**
 * reduce: Uses a function to create a new value given two values, a starting 
 *          value and a value from an element from a given array.  By 
 *          entering the starting value and the value from the array into
 *          the function, a new value is produced.  This new value is used as 
 *          the starting value of the next iteration through the array.  
 *          If no starting value is given, then the first element of the 
 *          array is the starting value, and the second element will be
 *          the second value given to the funtion.  The returned value of
 *          reduce() is the final value returned by the given function after
 *          iterating through the entire array. 
 * 
 * @param {array} array: must be an array with values that the given function
 *          can handle properly.
 * @param {function} func: a function that returns a new value given a starting
 *          value and a value from the given array.
 * @param {value} seed: the given starting value
 * 
 * @returns {value}: the final value returned by the given function after
 *          iterating through the entire given array.
 */
 
 function reduce(array, func, seed) {
    //i: array array, func function, seed
    //o: return value of final func call
    //c: 
    //e: seed may not be given, therefore chose to give default value of 1
    
    var prevSum;
    //check to see if seed is given
    if (seed === undefined) {
        //use first element as seed value
        prevSum = array[0];
        //proceed to loop starting at 2nd element
        //loop through array
        for (var i = 1; i <= array.length - 1;i++) {
            //apply function to each element
            //store value from function as the new value of prevSum
            prevSum = func(prevSum, array[i], i);
        }
    } else {
        prevSum = seed;
        //loop through array to apply function to each element
        for (var i = 0; i <= array.length - 1;i++) {
            //store value from function as the new value of prevSum
            prevSum = func(prevSum, array[i], i);
        }
    }
    //return the final value of prevSum
    return prevSum;
}
module.exports.each = each;

/**
 * extened: Makes a new object that contains all of the key/value pairs from
 *          any given number of objects.  It adds/orders these values from 
 *          each subsequent object in order.
 * 
 * @param {object} ...args: is an argument object combined with a spread 
 *          operator representing any given number of objects.
 * 
 * @returns {object}: a new object that contains all the key/value pairs of all
 *          objects given as parameters in order of how the parameters were
 *          assigned their object values.
 */
 
 function extend(...args) {
    
    var retObjOne;
    //loop through all args starting at [1] adding their k/v's to [0]
    for (var i = 1; i <= args.length - 1; i++) {
        //add current arg's k/v's to 1st object -> args[0] and store in
        //  new object
        retObjOne = Object.assign(args[0], args[i]);
    }
    //return new object with all of the new values
    return retObjOne;
    
}
module.exports.each = each;