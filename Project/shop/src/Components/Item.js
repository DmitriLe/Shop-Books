import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
        <div className='item'>
            <img src={"./cart/" + this.props.item.img} />
            <h2>{this.props.item.title}</h2>
            <p>{this.props.item.desc}</p>
            <b>{this.props.item.price}р.</b>
            <div className='add-to-cart'>+</div>
        </div>
    )
  }
}

export default Item