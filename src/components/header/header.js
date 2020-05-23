import React from 'react';
import './header.css';
import Logo from './logo/logo'

class Header extends React.Component
{
  state= {
    "value" : 5
  } 

  add(){
    this.setState({
      "value" : this.state.value + 1
    })
  }

  sub(){
    this.setState({
      "value" : this.state.value - 1
    })
  }

  mul(){
    this.setState({
      "value" : this.state.value * 2
    })
  }

  divd(){
    this.setState({
      "value" : this.state.value / 2
    })
  }

  render()
  {
    return (
      <div className="header">
        <span> {this.state.value} </span>
        <span> {this.props.headertitle } </span>
        <button onClick={(this.add.bind(this))}> + </button>
        <button onClick={(this.sub.bind(this))}> - </button>
        <button onClick={(this.mul.bind(this))}> * </button>
        <button onClick={(this.divd.bind(this))}> / </button>
      </div>
    );
  }
}
export default Header;
