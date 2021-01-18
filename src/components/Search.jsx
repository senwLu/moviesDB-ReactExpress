import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {
   constructor(props) {
      super(props)
      this.state = {
        genres: [],
        search: 20
      };
      this.handleChange = this.handleChange.bind(this);
    }
  
    componentDidMount() {
      this.getGenres()
    }
  
    getGenres() {
      axios.get('/movies/genres')
      .then(result => {
        this.setState({ genres: result.data.genres })
      })
      .catch(err => console.log(err));
    }
  
    handleChange(e) {
      this.setState({search: e.target.value});
    }
  
    render() {
      return (
        <div className="search">
          <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
          <br/><br/>
  
          <select onChange={(e) => (this.handleChange(e))}>
          {this.state.genres.map((genre, i) => {
             return <option key={i} value={genre.id}>{genre.name}</option> 
          })}
          </select>
          <br/><br/>
          <button>Search</button>
  
        </div>
      );
    }
  }
  
  export default Search;