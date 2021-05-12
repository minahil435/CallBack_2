const identity = function (value) {
  return value;
};

const indexOf = function (array, target) {
  //array = [1], target = 1
  var result = -1;

  each(array, function (item, index) {
    //item = 1
    if (item === target && result === -1) {
      result = index;
      //result = 1
    }
  });

  return result;
};

const each = function (collection, iterator) {
  if (collection instanceof Array) {
    for (let i = 0; i < collection.length; i++) {
      iterator(collection[i], i, collection);
    }
  } else if (collection instanceof Object) {
    for (let prop in collection) {
      iterator(collection[prop], prop, collection);
    }
  }
};

const map = function (collection, iterator) {
  var result = [];

  each(collection, function (element, index, array) {
    result.push(iterator(element));
  });

  return result;
};

const filter = function (collection, callback) {
  let filteredArray = []

  each(collection, function (element) {
    if (callback(element)) {
      filteredArray.push(element)
    }
  });

  return filteredArray;
};
//reject([1, 2, 3, 4, 5, 6], isEven);
const reject = function (collection, callbackTest) {
  let filteredArray = []

  each(collection, function (element) {
    if (!(callbackTest(element))) {
      filteredArray.push(element)
    }
  });

  return filteredArray;

};

const uniq = function (array) {
  let newArray = []

  each(array, function (element) {
    newArray.push(element)
  });

  each(newArray, function (element,i) {
    for (let j = i + 1; j <= newArray.length; j++) {
      if (newArray[i] === newArray[j]) {
        newArray.splice(j, 1);
      }
    }
  });

  return newArray

};




const reduce = function (collection, iterator, accumulator) {
  let sum = 0
 
  each(collection, function (element,i) {
    if (accumulator >= 0 ){
      sum =  iterator(sum , element)
    } 
    
    else{
      if ((i === 0)){
        sum = element
      }
      else{
        sum =  iterator(sum , element)
      }
      
    }
  });

  return sum 

 };

module.exports = {
  filter,
  reject,
  uniq,
  reduce,
  map,
};
