import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Container } from "../../Containers/Container";
import { TodoListDarkTheme } from "../../Themes/TodoListDarkTheme";
import { TodoListLightTheme } from "../../Themes/TodoListLightTheme"
import { TodoListPrimaryTheme } from '../../Themes/TodoListPrimaryTheme'


export default class TodoList extends Component {
  render() {
    return (
      <ThemeProvider theme={TodoListDarkTheme}>
        <Container>Lê Hoàng Trọng</Container>
      </ThemeProvider>
    );
  }
}
