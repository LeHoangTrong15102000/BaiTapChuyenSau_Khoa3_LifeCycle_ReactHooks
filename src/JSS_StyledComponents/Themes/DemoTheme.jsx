import styled, { ThemeProvider } from "styled-components";
import React, { Component } from "react";
import { toHaveAccessibleDescription } from "@testing-library/jest-dom/dist/to-have-accessible-description";

const configDarkTheme = {
    background: "#000",
    color: "#fff",
    fontSize: "35px",
    fontWeight: "bold",
  };

  const configLightTheme = {
    background: "#6633ff",
    color: "#fff",
    fontSize: "30px",
    fontWeight: "400",
  };

export default class DemoTheme extends Component {


    // Mặc định sẽ cho nó là configDarkTheme
    state = {
        currentTheme: configDarkTheme,  
    }

     // Xây dựng hàm setTheme
    handleChangeTheme = (event) => {
        this.setState({
            // Nếu giá trị click vào là 1 thì gán nó bằng DarkTheme còn nếu ngược lại là 2 thì gán cho nó là LightTheme
            currentTheme: event.target.value === '1' ? configDarkTheme : configLightTheme,
        })
    }

  render() {
    // Đi vào định nghĩa một cái theme

    const configTheme = {
      darkColor: "pink",
      blueColor: "#3333cc",
      fontSize: "40px",
      fontWeight: "bold",
    };

   
   

    // Miễn là sử dụng cái thẻ này trong cái theme ở bên dưới thì cái theme "props.theme" sẽ ứng với giá trị configTheme
    // CÒn nếu dùng cái thẻ này cho một cái theme khác thì cái thuộc tính "theme" này sẽ ứng với config của theme khác
    const DivStyled = styled.div`
      color: ${(props) => props.theme.color};
      padding: 5%;
      background-color: ${(props) => props.theme.background};
      font-size: ${(props) => props.theme.fontSize};
      font-weight: ${(props) => props.theme.fontWeight};
    `;

    return (
      // Trỏng ThemeProvider thì nó có sẵn thuộc tính theme
      <ThemeProvider theme={this.state.currentTheme}>
        <DivStyled>Hello mình là Lê Hoàng Trọng</DivStyled>

        {/* Ví dụ có nút chuyển đổi giữa các theme */}
        <select onChange={this.handleChangeTheme}>
          <option value="1">Dark Theme</option>
          <option value="2">Light Theme</option>
        </select>
      </ThemeProvider>
    );
  }
}
