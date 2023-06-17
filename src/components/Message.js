import React from "react";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: this.props.message,
    };
  }

  changeMessage() {
    this.setState({
      message: "Thank you for subscribing",
    });
  }

  render() {
    return (
      <div>
        <h1 style={{ color: "red" }}>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}
export default Message;
