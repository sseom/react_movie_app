import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

// state를 이용하기 위해서 className component를 사용
class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    // console.log('movies : ', movies.data.data.movies);

    // ES6에서의 기능으로 오브젝트 안에 있는 값을 불러옴
    const { data: { data: { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    // console.log('movies : ', movies);

    // state 데이터 넣기
    // this.setState({ movies : movies }); // 축약 가능 
    this.setState({ 
      movies,
      isLoading: false
    });
  };
  componentDidMount(){
    this.getMovies();
  };
  render() {
    const { isLoading, movies } = this.state;

    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
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
      </section>
    )
  }
}

export default App;
