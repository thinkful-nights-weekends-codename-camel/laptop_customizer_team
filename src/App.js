import React, { Component } from 'react';
// import './App.css';
import IndividualSpecs from './IndividualSpecs/IndividualSpecs.js';
import PriceBreakdown from './PriceBreakdown/PriceBreakdown.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: {  }
      }
    }

  updateFeature(feature, newValue) {
    const selected = Object.assign({}, this.props.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>ELF Computing</h1>
          <h3>Laptops</h3>
          <h5>Customize your laptop</h5>  
        </header>      
        <main>
          <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            <IndividualSpecs  compFeatures={this.props.features}/>
          </section>
        </main>
      </div>
    )} 
}

export default App;  
