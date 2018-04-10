import React, { Component } from 'react';

class Bear extends Component {
  render() {
    if (!this.props.bears || !this.props.bears.length)
      return (<p>ไม่พบข้อมูล!</p>)
    else
      return (
        <ul>
          {
            this.props.bears.map(bear => {
              return (<li>{ bear.name } (น้ำหนัก { bear.weight } กรัม)</li>)
            })
          }
        </ul>
      )
  }
}

export default Bear;
