import React, { Component } from 'react';

export default class IndividualSpecs extends Component {
  const features = Object.keys(this.props.features).map(key => {
    const options = props.features[key].map((item, index) => {
      const selectedClass = item.name === props.selected[key].name ? 'feature__selected' : '';
      const featureClass = 'feature__option ' + selectedClass;
    })
  })

  render() {
    
    return (
      <>
        <li key={index} className="feature__item">
          <div className={featureClass}
            
            onClick={e => updateFeature(key, item)}>
              { item.name }
              ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                .format(item.cost) })
          </div>
        </li>
        <div className="feature__name">{key}</div>
        <div className="feature__name">{key}</div>
          <ul className="feature__list">
            { options }
          </ul>
      </>
    ) 
  }
}
    
