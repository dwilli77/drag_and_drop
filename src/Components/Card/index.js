import React from 'react';
import './Card.css'

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: props.index,
      complete: false
    }
  }

  toggleComplete = () => {
    this.state.complete ? this.setState({complete: false}) : this.setState({complete: true})
  }

  render(){
    return(
      <div className="card" draggable>
        <div className="card-content">
          <p style={{textDecoration: this.state.complete ? 'line-through' : 'none'}}>
            {this.props.content}
          </p>
        </div>
        <div className="card-footer">
          <button className="card-button" onClick={this.toggleComplete}>{this.state.complete ? "Show Active" : "Mark Complete"}</button>
          <button className="card-button" onClick={()=> this.props.onRemove(this.state.index)}>Remove</button>
        </div>
      </div>
    )
  }

}

export default Card;