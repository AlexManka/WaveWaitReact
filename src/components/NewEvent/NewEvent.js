import React,{ Component } from 'react'
import './NewEvent.css';
import Wait from '.././Wait/Wait';
import Wave from '.././Wave/Wave';
  
class NewEvent extends Component{ 
  constructor(props){ 
    super(props) 
    this.state = { action:'',mood:'',seenwave:false,seenwait:false} 
    this.handleChange = this.handleChange.bind(this) 
    this.handleSubmit = this.handleSubmit.bind(this) 
  } 
  
  // Form submitting logic, prevent default page refresh  
  handleSubmit(event){ 
    const { action, mood, } = this.state 
    event.preventDefault() 
    alert(` 
      ____Your Details____\n 
      Action : ${action} 
      Mood : ${mood}
    `) 
  } 
  
  // Method causes to store all the values of the  
  // input field in react state single method handle  
  // input changes of all the input field using ES6  
  // javascript feature computed property names 
  handleChange(event){ 
    this.setState({ 
      // Computed property names 
      // keys of the objects are computed dynamically 
      [event.target.name] : event.target.value 
    }) 
  }

  toggleWave = () => {
   this.setState({
    seenwave: !this.state.seenwave
   });
  }

  toggleWait = () => {
   this.setState({
    seenwait: !this.state.seenwait
   });
  }  
  
  // Return a controlled form i.e. values of the  
  // input field not stored in DOM values are exist  
  // in react component itself as state 
  render(){ 
    return( 
      <form onSubmit={this.handleSubmit}> 
        <div> 
          <label htmlFor='action'>Action </label> 
          <input  
            name='action'
            placeholder='Action' 
            value = {this.state.action} 
            onChange={this.handleChange} 
          /> 
        </div> 
        <div> 
          <label htmlFor='mood'>Mood </label> 
          <input 
            name='mood' 
            placeholder='Mood'
            value={this.state.mood} 
            onChange={this.handleChange} 
          /> 
        </div>
        <div className="btn1" onClick={this.toggleWave}>
          <button>Wave</button>
        </div>
        <div className="btn2" onClick={this.toggleWait}>
          <button>Wait</button>
        </div>
        {this.state.seenwait ? <Wait toggle={this.toggleWait} /> : null}
        {this.state.seenwave ? <Wave toggle={this.toggleWave} /> : null} 
      </form>
    ) 
  } 
} 
  
export default NewEvent