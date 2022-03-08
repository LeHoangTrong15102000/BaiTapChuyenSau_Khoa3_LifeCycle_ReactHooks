import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Container } from '../../ComponentsTodoList/Container';
import { TodoListDarkTheme } from '../../Themes/TodoListDarkTheme';
import { TodoListLightTheme } from '../../Themes/TodoListLightTheme';
import { TodoListPrimaryTheme } from '../../Themes/TodoListPrimaryTheme';
import { Dropdown } from '../../ComponentsTodoList/Dropdown';
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
} from '../../ComponentsTodoList/Heading';
import { TextField, Label, Input } from '../../ComponentsTodoList/TextField';
import { Button } from '../../ComponentsTodoList/Button';
import {
  Table,
  Tr,
  Th,
  Td,
  T,
  Thead,
  Tbody,
} from '../../ComponentsTodoList/Table';

export default class TodoList extends Component {
  render() {
    return (
      <ThemeProvider theme={TodoListLightTheme}>
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
              <Tr>
                <Th style={{ verticalAlign: 'middle' }}>Task name</Th>
                <Th className="text-right">
                  <Button className="mr-2">
                    <i className="fa fa-edit"></i> Xóa
                  </Button>
                  <Button className="mr-2">
                    <i className="fa fa-check"></i> Sửa
                  </Button>
                  <Button className="">
                    <i className="fa fa-trash"></i>
                  </Button>
                </Th>
              </Tr>
              <Tr>
                <Th style={{ verticalAlign: 'middle' }}>Task name</Th>
                <Th className="text-right">
                  <Button className=" mr-2">
                    <i className="fa fa-edit"></i> Xóa
                  </Button>
                  <Button className="mr-2">
                    <i className="fa fa-check"></i> Sửa
                  </Button>
                  <Button className="">
                    <i className="fa fa-trash"></i>
                  </Button>
                </Th>
              </Tr>
            </Thead>
            {/* Body */}
            <Tbody>
              <Tr>
                <Td></Td>
              </Tr>
            </Tbody>
          </Table>
          {/* Task Completed */}
          <Heading2>Task completed</Heading2>
          <Table>
            {/* Header */}
            <Thead>
              <Tr>
                <Th style={{ verticalAlign: 'middle' }}>Task name</Th>
                <Th className="text-right">
                  <Button className="">
                    <i className="fa fa-trash"></i>
                  </Button>
                </Th>
              </Tr>
              <Tr>
                <Th style={{ verticalAlign: 'middle' }}>Task name</Th>
                <Th className="text-right">
                  <Button className="">
                    <i className="fa fa-trash"></i>
                  </Button>
                </Th>
              </Tr>
            </Thead>
            {/* Body */}
            <Tbody>
              <Tr>
                <Td></Td>
              </Tr>
            </Tbody>
          </Table>
        </Container>
      </ThemeProvider>
    );
  }
}
