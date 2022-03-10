import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

export default class LifeCycleReact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 1,
    };
    console.log('Constructor');
  }

  // Được gọi khi component này được sử dụng trên DOM(giao diện của app)
  static getDerivedStateFromProps(newProps, currentState) {
    console.log('getDerivedStateFromProps');
    return null;
  }

  // Được gọi khi setState hoặc props
  shouldComponentUpdate() {
    // Return về true thì chạy tiếp các lifeCycle còn lại
    return true;
  } //không nên sử dụng cái lifeCycle này thay vào đó sẽ sử dụng PureComponent

  render() {
    console.log('Render Parent');
    return (
      <div>
        <h3>Parent Component</h3>
        <span>Number: {this.state.number}</span>
        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({
              number: this.state.number + 1,
            });
          }}
        >
          Xác nhận
        </button>
        {this.state.number === 1 ? <ChildComponent /> : ''}
      </div>
    );
  }

  // Được gọi sau render và chỉ gọi 1 lần duy nhất (trạng thái mounting)
  componentDidMount() {
    console.log('ComponentDidMount');
  }

  // Lần đầu không gọi, chỉ gọi khi setState hoặc thay đổi giá trị của props
  componentDidUpdate(prevProps, prevState) {
    console.log('ComponentDidUpdate');
  }
}
