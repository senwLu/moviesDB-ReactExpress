import React, { Component } from 'react';

class Movies extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <ul className="movies">
      
      {this.props.movies.map((movie, i) => {
        return (
          <li className="movie_item" key={i}>
            <img src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`} />
            <div className="movie_description">
              <h2>{movie.original_title}</h2>
              <section className="movie_details">
                <div className="movie_year">
                  <span className="title">Year</span>
                  <span>{movie.release_date.split('-')[0]}</span>
                </div>
                <div className="movie_rating">
                  <span className="title">Rating</span>
                  <span>{movie.vote_average}</span>
                </div>
              </section>
            </div>
          </li>
        )
      })}

      </ul>

    );
  }
}

export default Movies;