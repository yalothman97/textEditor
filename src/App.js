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
    bold: "",
    italic: "",
    underline: ""
  };

  styleHandler = style => {
    if (style === "bold") {
      if (this.state.bold === "") {
        this.setState({ bold: "bold" });
      } else {
        this.setState({ bold: "" });
      }
    } else if (style === "italic") {
      if (this.state.italic === "") {
        this.setState({ italic: "italic" });
      } else {
        this.setState({ italic: "" });
      }
    } else if (style === "underline") {
      if (this.state.underline === "") {
        this.setState({ underline: "underline" });
      } else {
        this.setState({ underline: "" });
      }
    }
  };
  render() {
    let styleNames = ["bold", "italic", "underline"];
    let colors = ["yellow", "blue", "red", "black", "purple"];

    let stylingBoxes = styleNames.map(style => {
      return (
        <button
          style={styles[style]}
          key={style}
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
        <textarea
          style={{
            color: this.state.color,
            fontWeight: this.state.bold,
            fontStyle: this.state.italic,
            textDecorationLine: this.state.underline
          }}
        />
        <div className="my-3">{colorBoxes}</div>
      </div>
    );
  }
}

export default App;
