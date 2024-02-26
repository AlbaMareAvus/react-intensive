import React from "react";
import './HelloForm.css';

class HelloForm extends React.Component {
  constructor() {
    super();
    this.state = {date: new Date()};
  }

  sayHello = () => {
    const helloForm = document.querySelector('.form');
    helloForm.addEventListener('submit', (evt) => {
      evt.preventDefault();

      const name = evt.target[0].value;
      if (name) {
        alert(`Hello, React! My name is ${name})0`);
        evt.target[0].value = '';
      }
    });
  };

  tick() {
    this.setState({
      date: new Date()
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
        <h1>Say Hello Form</h1>
        <input type="text" placeholder="What's your name?"/>
        <button onClick={this.sayHello}>Say Hello</button>
        <span>Сейчас {this.state.date.toLocaleTimeString()}</span>
      </form>
    );
  }
}

export default HelloForm;
