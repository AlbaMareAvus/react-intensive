import React from "react";
import './HelloForm.css';

class HelloForm extends React.Component {
  constructor() {
    super();
    this.state = {date: new Date(), inputText: ''};
    this.inputFocus = this.inputFocus.bind(this);
  }

  sayHello = () => {
    const helloForm = document.querySelector('.form');
    helloForm.addEventListener('submit', (evt) => {
      evt.preventDefault();

      if (this.state.inputText) {
        alert(`I told you, ${this.state.inputText} !== react)0`);
        this.setState({
          inputText: ''
        });
      }
    });

  };

  tick() {
    this.setState({
      date: new Date()
    });
  }

  inputFocus() {
    this.textInput.focus()
  }

  isReact() {
    return this.state.inputText.toLocaleLowerCase() === 'react'
  }

  inputHandle(evt) {
    this.setState({
      inputText: evt.target.value
    });
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);

    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    clearInterval(this.timerID);

    console.log('componentWillUnmount');
  }

  render() {
    return (
      <form className="form">
        <h1>{`You can't say react!`}</h1>
        <input
          type="text"
          placeholder="Just try it"
          ref={input => this.textInput = input}
          onChange={evt => this.inputHandle(evt)}
        />
        <button
          onClick={this.sayHello}
          disabled={this.isReact()}
        >Say React</button>
        <span>Сейчас {this.state.date.toLocaleTimeString()}</span>
        <button onClick={(evt) => {
          evt.preventDefault()
          this.inputFocus()
        }}>Set focus to input</button>
      </form>
    );
  }
}

export default HelloForm;
