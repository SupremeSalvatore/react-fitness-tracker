import React, {Component, Fragment} from 'react';
import {Header, Footer} from './components/Layouts';
import Exercises from './components/Exercises/Exercises';
import {muscles, exercises} from './store.js';
import './App.css';

class App extends Component {
	state = {
		exercises,
		category: '',
		exercise: {}
	};
	getExercisesByMuscles() {
		//Even if we delete all exercises categories still remain, add it in 2nd reduce method
		const initExercises=muscles.reduce((exercises,category)=>({
			...exercises,[category]:[]
		}),{})
		console.log(initExercises)
		return Object.entries(
			this.state.exercises.reduce((exercises, exercise) => {
				const {muscles} = exercise;
				exercises[muscles] = [...exercises[muscles], exercise]
				return exercises;
			}, initExercises)
		);
	}
	handleCategorySelect = category => {
		this.setState({category});
	};
	handleExerciseSelect = id => {
		this.setState(({exercises}) => ({
			exercise: exercises.find(ex => ex.id === id)
		}));
	};
	handleExerciseCreate = exercise => {
		this.setState(({exercises}) => ({
			exercises: [...exercises, exercise]
		}));
	};
	handleExerciseDelete=id=>{
		this.setState(({exercises})=>({
			exercises:exercises.filter(ex=>ex.id!==id)
		}))
	}
	render() {
		const exercises = this.getExercisesByMuscles();
		const {category, exercise} = this.state;
		return (
			<Fragment>
				<Header
					muscles={muscles}
					onExerciseCreate={this.handleExerciseCreate}
				/>
				<Exercises
					category={category}
					exercises={exercises}
					exercise={exercise}
					onSelect={this.handleExerciseSelect}
					onDelete={this.handleExerciseDelete}
				/>
				<Footer
					muscles={muscles}
					category={category}
					onSelect={this.handleCategorySelect}
				/>
			</Fragment>
		);
	}
}

export default App;
