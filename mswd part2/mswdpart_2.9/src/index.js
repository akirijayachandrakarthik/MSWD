import ReactDOM from 'react-dom'
import App from './App.js'

const persons = [
  {
    id: 1,
    name: 'karthik',
    number: 7989802035
  },
  {
    id: 2,
    name: 'jaya',
    number: 9246650231
  },
  {
    id: 3,
    name: 'chandra',
    number: 7416182926
  }
]

ReactDOM.render(
  <App persons={persons} />,
  document.getElementById('root')
)