import React, { Component } from 'react';
import SpecItems from '../SpecItems/SpecItems';

export default class IndividualSpecs extends Component { 
    static defaultProps = {
        features: [],
        selected: {}
      }

    render() {
        const features = Object.keys(this.props.features)
            .map(key => {
                const options = this.props.features[key].map((item, index) => {
                    const selectedClass = item.name === this.props.selected[key].name ? 'feature__selected' : '';
                    const featureClass = 'feature__option ' + selectedClass;
                    
                    return <SpecItems 
                            key={index}
                            feature={key}
                            item={item}
                            selected={this.props.selected}
                            onUpdateFeature={this.props.onUpdateFeature}
                            featureClass={this.props.featureClass}
                            />
                });
            return <div className="feature" key={key}>
                    <div className="feature__name">{key}</div>
                        <ul className="feature__list">
                            { options }
                        </ul>
                    </div>
            });

    return (
        <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                {features}
        </section> 
    );
  }
}

