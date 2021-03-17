import React from "react";
import './Detail.css';

class About extends React.Component {
  componentDidMount(){ // render() 후에 실행됨
    const { location, history } = this.props;
    console.log('componentDidMount this.props : ', this.props);

    if (location.state === undefined) { 
      // state 값이 없으면 리다이렉트 (유알엘값을 치고 들어가면 값이 없음.)
      history.push("/");
    }
  };

  render() {
    const { location } = this.props;
    console.log('location : ', location);

    if (location.state) {
      return (
        <div className="detail">
          <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
          <div>
            <h3>{location.state.title}</h3>
            <h5>{location.state.year}</h5>
            <ul>
              { location.state.genres.map( (genres, index) => {
                return (
                  <li key={index}>{genres}</li>
                )
              }) }
            </ul>
            <p>{location.state.summary}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

// function About({location}) {
//   console.log('location : ', location);
//   return (
//     <div className="detail">
//       <span>
//         detail
//       </span>
//     </div>
//   );
// }

export default About;