# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @hisbanshiraz/lotide`

**Require it:**

`const _ = require('@hisbanshiraz/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: This function will assert if provided arrays are equal or not
* `assertEqual(actual, expected)`: This function will assert if provided values are equal or not. Use this function for primitive types only.
* `assertObjectsEqual(actual, expected)`: This function will assert if provided objects are equal or not.
* `head(array)`: This function will return you the head i.e. first element of the array.
* `tail(array)`: This function will return you the tail i.e. every element except the head of the array.
* `eqArrays(arr1, arr2)`: This function will compare two arrays for a perfect match.
* `without(source, itemsToRemove)`: This function will  will return a subset of a given array, removing unwanted elements.
* `flatten(array)`: This function will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
* `middle(array)`: This function will take in an array and return the middle-most element(s) of the given array.
* `countOnly(allItems, itemsToCount)`: This function will take in a collection of items and return counts for a specific subset of those items. It won't count everything. In order to decide what to count, it will also be given an idea of which items we care about and it will only count those, ignoring the others.Items are limited to Strings.
* `countLetters(sentence)`: The function will take in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `letterPositions(sentence)`: The function will return all the indices (zero-based positions) in the string where each character is found.
* `findKeyByValue(object, value)`: The function will search for a key on an object where its value matches a given value.
* `eqObjects(object1, object2)`: The function will take in two objects and returns true or false, based on a perfect match.
* `map(array, callback)`: The function will take in two arguments, an array to map and a callback function. The function will return a new array based on the results of the callback function.
* `takeUntil(array, callback)`: The function will take in two arguments, an array to map and a callback function. The function will return a slice of the array with elements taken from the beginning and it will keep going until callback/predicate returns a truthy value. The callback should only be provided one value: The item in the array.
* `findKey(object, callback)`: This function takes in an object and a callback function. It will scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it will return undefined.