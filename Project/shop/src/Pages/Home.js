import React, { Component } from 'react'
import Items from '../Components/Items'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Книга 1',
          img: '_pishheblok.jpg',
          price: '2 100'
        },
        {
          id: 1,
          title: 'Книга 2',
          img: '_poslednee-zhelanie.jpg',
          price: '8 500'
        },
        {
          id: 1,
          title: 'Книга 3',
          img: '_priklyucheniya-elektronika.jpg',
          price: '3 600'
        }
      ]
    } 
  }
  render() {
    return (
      <div>
        <div className='presentation'></div>
        <Items items={this.state.items}/>
      </div>
    )
  }
}
