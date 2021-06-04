import './App.css';
import React from 'react'

const App = () => {
  const course = 'FULL STACK DEVELOPMENT'
  const part1 = 'Fundamental of React'
  const exercises1 = 20
  const part2 = 'Using props to pass data used'
  const exercises2 = 27
  const part3 = 'States of a component'
  const exercises3 = 24

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App;