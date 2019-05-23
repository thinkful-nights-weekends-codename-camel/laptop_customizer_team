import React, { Component } from 'react';
import SpecItems from '../SpecItems/SpecItems';

export default class IndividualSpecs extends Component { 
    render() {
        const features = Object.keys(this.props.features)
        .map(key => 
            <SpecItems { ...features } key={key}/>);

            return (
                <div className="feature" key={this.props.key}>
                    <div className="feature__name">{this.props.key}</div>
                        <ul className="feature__list">
                            { this.props.options }
                        </ul>
                </div>
            )

    return (
        <div>
           <section className="main__form">
                <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                    {features}
            </section> 
        </div>
    );
  }
}

IndividualSpecs.defaultProps = {
    features: {}
  };