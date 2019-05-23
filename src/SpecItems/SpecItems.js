import React from 'react';
// import IndividualSpecs from './IndividualSpecs/IndividualSpecs';

export default class SpecItems extends React.Component {
  render() {
    return 
        const options = this.props.features[this.props.key].map((item, index) => {
            const selectedClass = item.name === this.props.selected[this.props.key].name ? 'feature__selected' : '';
            const featureClass = 'feature__option ' + selectedClass;
        return (
            <li key={index} className="feature__item">
                <div 
                    className={featureClass}
                    onClick={e => this.props.onUpdateFeature(this.props.key, item)}>
                    { item.name }
                    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                        .format(item.cost) })
                </div>
            </li>
        )
    });
  }
}