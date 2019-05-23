import React, { Component } from 'react';


export default class SpecItems extends Component {
    static defaultProps = {
        index: 0,
        feature: 0,
        value: 0,
        item: 0,
    }
  render() {
        return (
            <li className="feature__item">
                <div 
                    className={this.props.featureClass}
                    onClick={ e => this.props.onUpdateFeature(this.props.feature, this.props.item)}>
                    { this.props.item.name }
                    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                        .format(this.props.item.cost) })
                </div>
            </li>
    );
  }
}

