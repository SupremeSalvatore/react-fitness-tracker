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
