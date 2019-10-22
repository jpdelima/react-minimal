import React from 'react'
import AppTitle from './AppTitle'
import studentsRawData from './students.json'

const generateArray = (n) => [...Array(10).keys()].map(x => x+1);

const generateRandomArray = (n) => Array(n).fill().map(() => Math.floor(Math.random() * 25) + 1);

const array1 = [2, 56, 23, 88, 17, 4];

const array2 = [2, 5, 8, 10];

const squareRoots = (arr) => arr.map(Math.sqrt);

const preprocessStudents = (rawData) => rawData.map(t => t.students.map(s => ({ ...s, active: t.active }))).flat();

class MyApp extends React.Component {
  constructor() {
    super();
    
    const preprocessedStudents = preprocessStudents(studentsRawData);

    this.showAll = this.showAll.bind(this);
    this.showSorted = this.showSorted.bind(this);
    this.showFiltered = this.showFiltered.bind(this);

    this.state = {
      students: preprocessedStudents,
      displayedStudents: [],
    }
  }

  showAll() {
    const { students } = this.state;
    this.setState({ displayedStudents: students });
  }

  showSorted() {
    const { students } = this.state;
    const sortedStudents = students.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({ displayedStudents: sortedStudents });
  }

  showFiltered() {
    const { students } = this.state;
    const filteredStudents = students.filter(s => s.age > 20 && s.active);
    this.setState({ displayedStudents: filteredStudents });
  }

  render() {
    const { displayedStudents } = this.state;

    return (
      <div>
        <AppTitle />
        <h1>Minimal React delimatj</h1>  
        <p>Array of integers from 1 to 10: {JSON.stringify(generateArray(10))}</p>
        <p>Array of random integers from 1 to 25: {JSON.stringify(generateRandomArray(10))}</p>
        <p>Array of elements from  {JSON.stringify(array1)} that are larger than 15: {JSON.stringify(array1.filter(x => x > 15))}</p>
        <p>Square roots of {JSON.stringify(array2)}: {JSON.stringify(squareRoots(array2))}</p>
        
        <h2>Students assignment</h2>
        <span>
          <button onClick={this.showAll}>Show all</button>
          <button onClick={this.showSorted}>Show sorted</button>
          <button onClick={this.showFiltered}>Show filtered</button>
        </span>
        {displayedStudents.length > 0 && <p>Students: {JSON.stringify(displayedStudents)}</p>}
      </div>
    )
  }
}

export default MyApp;