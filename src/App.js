import React from 'react';
class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 4000)
  }
  render() {
    const { isLoading } = this.state;

    return (
      <div className="App">
        {/* { this.state.isLoading ? "Loading" : "We Are Ready" } */}
    
        { isLoading ? "Loading" : "We Are Ready" }
      </div>
    )
  }
}

export default App;
