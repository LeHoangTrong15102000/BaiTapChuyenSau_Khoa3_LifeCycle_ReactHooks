import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Container } from "../../ComponentsTodoList/Container";
import { TodoListDarkTheme } from "../../Themes/TodoListDarkTheme";
import { TodoListLightTheme } from "../../Themes/TodoListLightTheme";
import { TodoListPrimaryTheme } from "../../Themes/TodoListPrimaryTheme";
import { Dropdown } from "../../ComponentsTodoList/Dropdown";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
} from "../../ComponentsTodoList/Heading";
import { TextField, Label, Input } from "../../ComponentsTodoList/TextField";
import { Button } from "../../ComponentsTodoList/Button";
import {
  Table,
  Tr,
  Th,
  Td,
  T,
  Thead,
  Tbody,
} from "../../ComponentsTodoList/Table";
import { connect } from "react-redux";

class TodoList extends Component {


  // Viết hàm Render ra giao diện các task Todo
  renderTableTaskTodo = () => {
    return this.props.taskList.map((task, index) => {
      return (
        <Tr key={index}>
          <Th style={{ verticalAlign: "middle" }}>{task.taskName}</Th>
          <Th className="text-right">
            <Button className="mr-2">
              <i className="fa fa-edit"></i> Sửa
            </Button>
            <Button className="mr-2">
              <i className="fa fa-check"></i> Done
            </Button>
            <Button className="">
              <i className="fa fa-trash"></i>
            </Button>
          </Th>
        </Tr>
      );
    });
  };

  // Viết hàm render ra giao diện task completed
  // Lọc ra thằng nào có done = true thì mới cho thực hiện tiếp
  renderTableTaskCompleted = () => {
    return this.props.taskList.filter(item => item.done).map((task, index) => {
      return <Tr key={index}>
      <Th style={{ verticalAlign: "middle" }}>{task.taskName}</Th>
      <Th className="text-right">
        <Button className="">
          <i className="fa fa-trash"></i>
        </Button>
      </Th>
    </Tr>
    })
  }
  render() {
    return (
      <ThemeProvider theme={this.props.themeTodoList}>
        <Container className="w-50">
          {/* Để thẻ Dropdown để chọn theme vào */}
          <Dropdown>
            {/* Trong Dropdown mới chứa các option
              Và những cái này chúng ta sẽ quản lí nó bằng Redux để nó linh động mỗi thứ
            */}
            <option>Dark Theme</option>
            <option>Light Theme</option>
            <option>Primary Theme</option>
          </Dropdown>

          {/* Heading 1 */}
          <Heading1>To do List</Heading1>

          {/* Sử dụng thẻ Text Field */}
          <TextField label="Task name" className="w-50" />
          <Button className="ml-2">
            <i className="fa fa-plus"></i> Add task
          </Button>
          <Button className="ml-2">
            <i className="fa fa-upload"></i> Update task
          </Button>
          <hr />
          <Heading2>Task to do</Heading2>

          {/* Dùng Table của chúng ta */}
          <Table>
            {/* Header */}
            <Thead>
              {this.renderTableTaskTodo()}
            </Thead>
            {/* Body */}
            <Tbody></Tbody>
          </Table>
          {/* Task Completed */}
          <Heading2>Task completed</Heading2>
          <Table>
            {/* Header */}
            <Thead>
              {/* Render task Completed thì mới cần filter dựa vào thuộc tính Done */}
              {this.renderTableTaskCompleted()}
            </Thead>
            {/* Body */}
            <Tbody></Tbody>
          </Table>
        </Container>
      </ThemeProvider>
    );
  }
}

// Tạo một hàm binding dữ liệu từ store về
const mapStateToProps = (state) => ({
  themeTodoList: state.TodoListReducer.themeTodoList,
  // binding taskList
  taskList: state.TodoListReducer.taskList,
});

// Tạo một hàm gửi sự kiện xử lý lên store
const mapDispatchToProps = () => {
  // Mỗi lần thay đổi theme thì chúng ta sẽ dispatch lên store cai action để lấy theme mới
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
