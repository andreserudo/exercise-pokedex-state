import React, { Component } from 'react';
import Button from './Button';

class ButtonsFilter extends Component {
  render() {  
    const { types }  = this.props;
    console.log(types);
    return (
      <Button />
    );
  }
}

export default ButtonsFilter;