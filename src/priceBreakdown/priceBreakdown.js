import React, { Component } from 'react';

 export default class PriceBreakdown extends Component {
    render() {  // component priceBreakDown
        const summary = Object.keys(this.state.selected)
              .map(key => <div className="summary__option" key={key}>
                <div className="summary__option__label">{key}  </div>
                <div className="summary__option__value">{this.state.selected[key].name}</div>
                <div className="summary__option__cost">
                  { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                      .format(this.state.selected[key].cost) }
                </div>
            </div>)
    
        const total = Object.keys(this.state.selected)
              .reduce((acc, curr) => acc + this.state.selected[curr].cost, 0);    
      return (
        <section className="main__summary">
            <h3>NEW GREENLEAF 2018</h3>
            {summary}
            <div className="summary__total">
            <div className="summary__total__label">Your Price: </div>
            <div className="summary__total__value">
            { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                .format(total) }
            </div>
            </div>
        </section>
      )
    }
}