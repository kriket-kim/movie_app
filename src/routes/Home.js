import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";
class Home extends React.Component { // inheritance from react component - it is called class component
  //props -> object inherited from parents class / states-> object from class
  state = {
    //count: 0, this is why we use class componenet -> state is object that can be dynamically changed.
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
        <div className="movies">
          {movies.map(movie => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
          ))}
        </div>
       )}
      </section>);
    /*  add = () => {
        this.setState(current => ({ count: current.count + 1 })); //best way of doing
        //this.setState({count: this.state.count + 1}); setState automatically calls render function again ; do not change directly using this.state.count
        //this.state.count++; this doesnt work because the render is not refreshed
      }
      minus = () => {
        this.setState({ count: -1 });
      }*/
  }
}
export default Home;
