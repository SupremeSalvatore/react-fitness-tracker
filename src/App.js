import React, { Component, Fragment } from 'react';
import { Header, Footer } from './components/Layouts';
import Exercises from './components/Exercises/Exercises';
import { muscles, exercises } from './store.js';
import './App.css';

class App extends Component {
  state = {
    exercises,
    exercise: {}
    // editMode:false
  };
  getExercisesByMuscles() {
    //Even if we delete all exercises categories still remain, add it in 2nd reduce method
    const initExercises = muscles.reduce(
      (exercises, category) => ({
        ...exercises,
        [category]: []
      }),
      {}
    );
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;
        exercises[muscles] = [...exercises[muscles], exercise];
        return exercises;
      }, initExercises)
    );
  }
  handleCategorySelect = category => {
    this.setState({ category });
  };
  handleExerciseSelect = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: false
    }));
  };
  handleExerciseCreate = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [...exercises, exercise]
    }));
  };
  handleExerciseDelete = id => {
    this.setState(({ exercises }) => ({
      exercises: exercises.filter(ex => ex.id !== id),
      editMode: false,
      exercise: {}
    }));
  };
  handleExerciseSelectEdit = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: true
    }));
  };
  handleExerciseEdit = exercise =>
    this.setState(({ exercises }) => ({
      exercises: [...exercises.filter(ex => ex.id !== exercise.id), exercise],
      exercise
    }));
  render() {
    const exercises = this.getExercisesByMuscles();
    const { category, exercise, editMode } = this.state;
    return (
      <Fragment>
        <Header
          muscles={muscles}
          onExerciseCreate={this.handleExerciseCreate}
        />
        <Exercises
          exercise={exercise}
          category={category}
          exercises={exercises}
          editMode={editMode}
          muscles={muscles}
          onSelect={this.handleExerciseSelect}
          onDelete={this.handleExerciseDelete}
          onSelectEdit={this.handleExerciseSelectEdit}
          onEdit={this.handleExerciseEdit}
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
