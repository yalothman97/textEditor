import React, { Component } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

class App extends Component {
  state = {
    color: "black",
    bold: false,
    italic: false,
    underline: false
  };

  styleHandler = style => {
    this.setState({ [style]: !this.state[style] });
  };
  render() {
    let stylesApplied = {
      color: this.state.color,
      fontWeight: this.state.bold ? "bold" : "",
      fontStyle: this.state.italic ? "italic" : "",
      textDecorationLine: this.state.underline ? "underline" : ""
    };
    let styleNames = ["bold", "italic", "underline"];
    let colors = ["yellow", "blue", "red", "black", "purple"];

    let stylingBoxes = styleNames.map(style => {
      return (
        <button
          style={styles[style]}
          key={style}
          className={this.state[style] ? "btn-info" : "btn-primary"}
          onClick={() => this.styleHandler(style)}
        >
          {style}
        </button>
      );
    });

    let colorBoxes = colors.map(color => {
      return (
        <button
          style={{ backgroundColor: color, height: 30, width: 30 }}
          key={color}
          onClick={() => this.setState({ color: color })}
        />
      );
    });

    return (
      <div className="App">
        <div className="my-3">{stylingBoxes}</div>
        <textarea style={stylesApplied} />
        <div className="my-3">{colorBoxes}</div>
      </div>
    );
  }
}

export default App;
