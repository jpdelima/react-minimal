import React from 'react'
import AppTitle from './AppTitle'

const generateArray = (n) => [...Array(10).keys()].map(x => x+1);

const generateRandomArray = (n) => Array(n).fill().map(() => Math.floor(Math.random() * 25) + 1);

const array1 = [2, 56, 23, 88, 17, 4];

const array2 = [2, 5, 8, 10];

const squareRoots = (arr) => arr.map(Math.sqrt);

const MyApp = () => (
  <div>
    <AppTitle />
    <h1>Minimal React delimatj</h1>  
    <p>Array of integers from 1 to 10: {JSON.stringify(generateArray(10))}</p>
    <p>Array of random integers from 1 to 25: {JSON.stringify(generateRandomArray(10))}</p>
    <p>Array of elements from  {JSON.stringify(array1)} that are larger than 15: {JSON.stringify(array1.filter(x => x > 15))}</p>
    <p>Square roots of {JSON.stringify(array2)}: {JSON.stringify(squareRoots(array2))}</p>
  </div>
)

export default MyApp