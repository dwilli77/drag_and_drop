import React from 'react';
import './Card.css'

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: props.index,
      complete: props.markedComplete
    }
  }

  render(){
    return(
      <div className="card" 
            draggable 
            onDragStart={e => this.props.onDragStart(e, this.state.index)} 
            onDragOver={e => this.props.onDragOver(e, this.state.index)} 
            onDragEnd={this.props.onDragEnd}>
        <div className="card-content">
          <p style={{textDecoration: this.props.markedComplete ? 'line-through' : 'none'}}>
            {this.props.content}
          </p>
        </div>
        <div className="card-footer">
          <button className="card-button" 
                  onClick={e => this.props.onComplete(e, this.state.index)}
          >
            {this.state.complete ? "Show Active" : "Mark Complete"}</button>
          <button className="card-button" onClick={()=> this.props.onRemove(this.state.index)}>Remove</button>
        </div>
      </div>
    )
  }

}

export default Card;