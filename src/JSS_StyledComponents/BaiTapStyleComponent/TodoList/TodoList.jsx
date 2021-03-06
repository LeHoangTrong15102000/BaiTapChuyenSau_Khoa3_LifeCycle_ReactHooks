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
import { connect } from 'react-redux';
import {
  addTaskAction,
  changeThemeAction,
  deleteTaskAction,
  doneTaskAction,
  editTaskAction,
  restoreTaskAction,
  updateTaskAction,
} from '../../../redux/actions/TodoListAction';
import { arrTheme } from '../../Themes/ThemeManager';

class TodoList extends Component {
  // Object State để chứa thông tin người dùng nhập vào
  state = {
    taskName: '',
    disabled: true,
    disabledAddTask: true,
    // Mỗi lần người dùng nhập vào thì mình sẽ setState lại giá trị
  };

  // Viết hàm Render ra giao diện các task Todo
  renderTableTaskTodo = () => {
    return this.props.taskList
      .filter((task) => !task.done)
      .map((task, index) => {
        return (
          <Tr key={index}>
            <Th style={{ verticalAlign: 'middle' }}>{task.taskName}</Th>
            <Th className="text-right">
              <Button
                onClick={() => {
                  //gán cho disabled lại là false
                  // Nếu mà viết giống bên dưới thì nó rất dễ bị ảnh thưởng do hàm setState là hàm bất đồng bộ, khi mà setState xong thì mới đẩy nguồn dữ liệu lên Redux
                  this.setState(
                    {
                      disabled: false,
                    },
                    () => {
                      this.props.dispatch(editTaskAction(task));
                    }
                  );
                }}
                className="mr-2"
              >
                <i className="fa fa-edit"></i> Edit
              </Button>
              <Button
                onClick={() => {
                  this.props.dispatch(doneTaskAction(task.id));
                }}
                className="mr-2"
              >
                <i className="fa fa-check"></i> Done
              </Button>
              <Button
                onClick={() => {
                  this.props.dispatch(deleteTaskAction(task.id));
                }}
                className=""
              >
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
    return this.props.taskList
      .filter((item) => item.done)
      .map((task, index) => {
        return (
          <Tr key={index}>
            <Th style={{ verticalAlign: 'middle' }}>{task.taskName}</Th>
            <Th className="text-right">
              <Button
                onClick={() => {
                  this.props.dispatch(restoreTaskAction(task.id));
                }}
                className="mr-2"
              >
                <i className="fa fa-redo"></i> Restore
              </Button>
              <Button
                onClick={() => {
                  this.props.dispatch(deleteTaskAction(task.id));
                }}
                className=""
              >
                <i className="fa fa-trash"></i>
              </Button>
            </Th>
          </Tr>
        );
      });
  };

  // Viết hàm lấy thông tin người dùng nhập vào ô input
  // handleChange = (event) => {
  //   event.preventDefault();
  //   // lấy ra cái value của chính nó xong chúng ta sẽ chứa giá trị trong state
  //   // Mỗi lần người dùng nhập vào sẽ setState lại giá trị
  //   let { name, value } = event.target;
  //   this.setState({
  //     // taskName: event.target.value, // do chỉ có một thuộc tính nên chúng ta viết như vậy
  //     [name]: value,
  //   });
  // };

  // Viết một cái hàm addTask
  // handleAddTask = (newTask) => {
  //   return this.props.dispatch;
  // };

  // Viết hàm render ra theme
  renderTheme = () => {
    return arrTheme.map((theme, index) => {
      return (
        <option key={index} value={theme.id}>
          {theme.name}
        </option>
      );
    });
  };

  //lifeCycle bảng 16 nhận vào props mới được thực thi trước render
  // Nên chúng ta thống nhất lấy dữ liệu từ state của component thôi không lấy dữ liệu từ props của Redux nữa.
  // componentWillReceiveProps(newProps) {
  //   this.setState({
  //     taskName: newProps.taskEdit.taskName, // lấy giá trị mới của taskName mỗi lần người dùng click vào edit
  //   });
  // }

  // Xử lý UploadTask dispatch lên Redux
  render() {
    return (
      <ThemeProvider theme={this.props.themeTodoList}>
        <Container className="w-50">
          {/* Để thẻ Dropdown để chọn theme vào
            - Thằng styled Component nó không làm mất đi bản chất của thẻ select - styled component nó chỉ làm thay đổi giao diện thôi, chứ không làm thay đổi tính chất của component
             - Tại đây sẽ gọi sự kiện onChange để thay đổi thuộc tính theme - phải dispatch khi sự kiện này onChange.        
          */}
          <Dropdown
            onChange={(event) => {
              let { value } = event.target;
              // dispatch value lên reducer để xử lý
              this.props.dispatch(changeThemeAction(value));
            }}
          >
            {/* Trong Dropdown mới chứa các option
              Và những cái này chúng ta sẽ quản lí nó bằng Redux để nó linh động mỗi thứ
              // Thay vì render nó bằng object tĩnh thì chúng ta sẽ render nó bằng một object động
            */}
            {/* <option>Dark Theme</option>
            <option>Light Theme</option>
            <option>Primary Theme</option> */}
            {this.renderTheme()}
          </Dropdown>

          {/* Heading 1 */}
          <Heading1>To do List</Heading1>

          {/* Sử dụng thẻ Text Field */}
          <TextField
            value={this.state.taskName}
            onChange={(event) => {
              this.setState(
                {
                  taskName: event.target.value,
                }
                // () => {
                //   // thật ra thì khi gõ vào thì nó vẫn binding lại value của ô input
                //   console.log(this.state);
                // }
              );
            }}
            name="taskName"
            label="Task name"
            className="w-50"
          />
          <Button
            onClick={() => {
              // lấy thông tin người dùng nhập vào từ input
              let { taskName } = this.state;
              // tạo ra 1 task object mới
              let newTask = {
                id: Date.now(),
                taskName,
                done: false,
              };
              // console.log(task);
              // Đưa task object lên Redux thông qua phương thức là dispatch
              this.props.dispatch(addTaskAction(newTask));
            }}
            className="ml-2"
          >
            <i className="fa fa-plus"></i> Add task
          </Button>
          {this.state.disabled ? (
            <Button
              disabled
              onClick={() => {
                // Mỗi lần uploadTask thì nó sẽ đưa cái taskName của mình lên Reducer mà cập nhật lại Redux

                this.props.dispatch(updateTaskAction(this.state.taskName));
              }}
              className="ml-2"
            >
              <i className="fa fa-upload"></i> Update task
            </Button>
          ) : (
            <Button
              onClick={() => {
                // Mỗi lần uploadTask thì nó sẽ đưa cái taskName của mình lên Reducer mà cập nhật lại Redux
                // Trước khi mình setState thì mình sẽ lưu trữ lại giá trị là taskName
                let { taskName } = this.state;
                this.setState(
                  {
                    disabled: true,
                    // Và cũng clear đi cái nội dung trong input để người dùng có thể nhập tiếp
                    taskName: '', // Vì vậy phải set taskName này sau khi nó đã cập nhật thành công lại nội dung trên Redux
                  },
                  () => {
                    // Mình muốn là khi nút updateTask tắt đi xong thì mình mới dispatch state của taskName lên Redux
                    this.props.dispatch(updateTaskAction(taskName));
                  }
                );
              }}
              className="ml-2"
            >
              <i className="fa fa-upload"></i> Update task
            </Button>
          )}

          <hr />
          <Heading2>Task to do</Heading2>

          {/* Dùng Table của chúng ta */}
          <Table>
            {/* Header */}
            <Thead>{this.renderTableTaskTodo()}</Thead>
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

  // Đây là lifeCycle trả về state cũ và props cũ của component trước khi render (nhưng lifecycle này chạy sau render)
  componentDidUpdate(prevProps, prevState) {
    // mỗi lần render thì gán cái prevProps cho cái state hiện tại

    // So sánh nếu như props trước đó(taskEdit trước mà khác taskEdit hiện tại thì mình mới setState)
    // Nếu bấm trùng id taskName thì nó không chạy vào đây và nó vẫn sẽ là taskName cũ
    if (prevProps.taskEdit.id !== this.props.taskEdit.id) {
      // Thực hiện setState lại cho giá trị
      this.setState({
        taskName: this.props.taskEdit.taskName,
      });
    }
  }
}

// Tạo một hàm binding dữ liệu từ store về
const mapStateToProps = (state) => ({
  themeTodoList: state.TodoListReducer.themeTodoList,
  // binding taskList
  taskList: state.TodoListReducer.taskList,
  taskEdit: state.TodoListReducer.taskEdit, // Sau khi lấy được về thì binding cái task đó lên phần input thông qua giá trị value, giá trị này luôn luôn được theo dõi từ Redux
});

// Tạo một hàm gửi sự kiện xử lý lên Redux
// const mapDispatchToProps = () => {
//   // Mỗi lần thay đổi theme thì chúng ta sẽ dispatch lên store cai action để lấy theme mới
// };

// Cũng có thể sử dụng this.props.dispatch để xử lý sự kiện thêm task

export default connect(mapStateToProps)(TodoList);
