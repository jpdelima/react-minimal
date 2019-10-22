import React from 'react'
import AppTitle from './AppTitle'

const generateArray = (n) => [...Array(10).keys()].map(x => x+1);

const MyApp = () => (
  <div>
    <AppTitle />
    <h1>Minimal React delimatj</h1>  
    <p>Array of integers from 1 to 10: {JSON.stringify(generateArray(10))}</p>
  </div>
)

export default MyApp