import ReactDOM from 'react-dom'
import App from './App.js'

const persons = [
  {
    id: 1,
    name: 'karthik'
  },
  {
    id: 2,
    name: 'jaya'
  },
  {
    id: 3,
    name: 'chandra'
  }
]

ReactDOM.render(
  <App persons={persons} />,
  document.getElementById('root')
)