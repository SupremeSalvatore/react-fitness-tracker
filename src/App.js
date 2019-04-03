import React, {Component, Fragment} from 'react';
import {Header, Footer} from './components/Layouts';
import Exercises from './components/Exercises';
import {muscles, exercises} from './store.js';
import './App.css';

class App extends Component {
	state = {
		exercises,
    category: '',
    exercise:{}
	};
	getExercisesByMuscles() {
		return Object.entries(
			this.state.exercises.reduce((exercises, exercise) => {
				const {muscles} = exercise;
				exercises[muscles] = exercises[muscles]
					? [...exercises[muscles], exercise]
					: [exercise];
				return exercises;
			}, {})
		);
	}
	handleCategorySelected = category => {
		this.setState({category});
	};
	handleExerciseSelected = id => {
		this.setState(({exercises}) => ({
			exercise: exercises.find(ex => ex.id === id)
		}));
	};
	render() {
		const exercises = this.getExercisesByMuscles();
		const {category, exercise} = this.state;
		return (
			<Fragment>
				<Header />
				<Exercises
					category={category}
					exercises={exercises}
					exercise={exercise}
					onSelect={this.handleExerciseSelected}
				/>
				<Footer
					muscles={muscles}
					category={category}
					onSelect={this.handleCategorySelected}
				/>
			</Fragment>
		);
	}
}

export default App;
