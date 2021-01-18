import React, { Component } from 'react';
import axios from 'axios';
import TopNavBar from './TopNavBar.jsx';
import Search from './Search.jsx';
import Movies from './Movies.jsx'


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: [],
			favorites: [],
			showFaves: false
		};

		this.getMovies = this.getMovies.bind(this);
	};

	componentDidMount() {
		this.getMovies();
	}

	getMovies() {
		axios.get('/movies/search')
		.then((result) => {
		  this.setState({movies: result.data.results})
		})
		.catch((err) => res.status(500).send(err))
	}

	swapFavorites() {
		this.setState({
			showFaves: !this.state.showFaves
		});
	}


	render() {
		return (
			<div>
				<TopNavBar />
				<Search swapFavorites={this.swapFavorites} showFaves={this.state.showFaves}/>
				<Movies movies={this.state.showFaves ? this.state.favorites : this.state.movies} showFaves={this.state.showFaves}/>
			</div>
		)
	};
};

export default App;