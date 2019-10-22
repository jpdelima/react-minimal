import React from 'react'
import AppTitle from './AppTitle'

const generateArray = (n) => [...Array(10).keys()].map(x => x+1);

const generateRandomArray = (n) => Array(n).fill().map(() => Math.floor(Math.random() * 25) + 1);

const MyApp = () => (
  <div>
    <AppTitle />
    <h1>Minimal React delimatj</h1>  
    <p>Array of integers from 1 to 10: {JSON.stringify(generateArray(10))}</p>
    <p>Array of random integers from 1 to 25: {JSON.stringify(generateRandomArray(10))}</p>
  </div>
)

export default MyApp