import React from 'react';
import './Form.css';

const Form = props => {
  return(
    <div className='form-container'>
      <form>
        <input value={props.content} type="text" placeholder="To Do Item" name={props.name} onChange={props.onChange}/>
        <button className="add-button" type="submit" onClick={props.onClick}>Add to List</button>
      </form>
    </div>
  )
}


export default Form;