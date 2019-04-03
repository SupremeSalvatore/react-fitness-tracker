import React, {Component, Fragment} from 'react';
import {Header, Footer} from './components/Layouts';
import Excercises from './components/Excercises';
import './App.css';

class App extends Component {
	render() {
		return (
			<Fragment>
				<Header />
				<Excercises />
				<Footer />
			</Fragment>
		);
	}
}

export default App;
