import React, { Component } from 'react';
import './App.css';
import IndividualSpecs from './IndividualSpecs/IndividualSpecs.js';
import PriceBreakdown from './PriceBreakdown/PriceBreakdown.js';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: {
        Processor: {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
        "Operating System": {
            name: 'Bodhi Linux',
            cost: 300
          },
        "Video Card":{
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
        Display: {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          }
      }
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
            features={this.props.features}
            
            <IndividualSpecs 
            PriceBreakdown summary={this.props.features}/>
          </section>
        </main>
      </div>
    )} 
}


