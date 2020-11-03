import React from 'react';
import QuoteCard from './components/QuoteCard';
import axios from 'axios';
import './App.css';

const sampleQuote = {
  quote: "Marriage is like a coffin and each kid is another nail.",
  character: "Homer Simpson",
  image: 	"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
}

class App extends React.Component {
  state = {
    quote: sampleQuote
  }
  getRandomQuote = () => {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then(response => this.setState({
        quote: response.data[0]}))
  }
  render() {
    return (
      <div className="App">
       <QuoteCard simpsonCharacter={this.state.quote}/>
       <button onClick={this.getRandomQuote}>Get New Quote</button>
      </div>
    );
  }
}

export default App;
