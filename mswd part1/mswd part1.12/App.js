import React, {useState} from "react";
import ReactDOM from "react-dom";

const App = () => {
	const [index, setIndex] = useState(0)
	
	const anecdotes = [
		'If it hurts, do it more frequently',
		'Adding manpower to a late software project makes it later!',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
	]
	
	const handleChange = () => {
		setIndex(Math.floor(Math.random()*anecdotes.length))
	}
	
	return (
		<div>
			<button onClick = {handleChange}>Press me!!!</button>
			<h1>{anecdotes[index]}</h1>
		</div>
	)
}

export default App;