import React, { Component } from 'react';
import './App.css';
import IndividualSpecs from './IndividualSpecs/IndividualSpecs.js';
import PriceBreakdown from './PriceBreakdown/priceBreakdown.js';
import Header from './header/header';
// import SpecItems from './SpecItems/SpecItems';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: {
        Processor: {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
        "Operating System": {
            name: 'Ubuntu Linux 16.04',
            cost: 200
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

  updateFeature = (feature, newValue, selectedState) => {
    const selected = Object.assign({}, selectedState);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }

  render() {
    return (
      <div className="App">
        <Header />     
        <main>
          <IndividualSpecs 
            features={this.props.features}
            selected={this.state.selected}
            onUpdateFeature={(feat,val) => this.updateFeature(feat,val, this.state.selected)}

          />   
          <PriceBreakdown 
            features={this.props.features} 
            selected={this.state.selected}
          />
        </main>
      </div>
    );
  }
}

export default App;  
