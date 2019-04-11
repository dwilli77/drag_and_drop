import React, { Component } from 'react';
import {Container} from './Components/Container'
import Form from './Components/Form'
import Card from './Components/Card'
import './App.css';

class App extends Component {

  state ={
    toDo: "",
    items:[],
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  addListItem = event => {
    event.preventDefault();
    if (this.state.toDo){
      this.setState({
        toDo: "",
        items: [...this.state.items, this.state.toDo]
      })
    } else {
      alert("enter a list item to add")
    }
  }

  removeItem = index => {
    console.log("value of index: " + index);
    this.setState({
      items: this.state.items.filter((item, j) => index !== j)
    });
  }

  dragStart = (e, index) => {
    this.el = this.state.items[index];
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.innerHTML);
  }

  dragOver = (e, index) => {
    e.preventDefault();
    
    const dragItem = this.state.items[index];
    
    if(dragItem === this.el) {
      return;
    }
    let items = this.state.items.filter(item => item !== this.el);

    items.splice(index, 0, this.el);

    this.setState({
      items: items
    })
  }

  dragEnd = e => {
    this.el = null;
  }

  render() {
    return (
      <Container>
        <Form content={this.state.toDo} name="toDo" onChange={this.handleInputChange} onClick={this.addListItem}/>

        <div className="list-area">
          {this.state.items.map(item =>{
            let index = this.state.items.indexOf(item);
            return <Card onDragEnd={this.dragEnd} onDragOver={this.dragOver} onDragStart={this.dragStart} key={index} index={index} content={item} onRemove={this.removeItem}/>
          })}
        </div>
      </Container>
    )
  }
}

export default App;
