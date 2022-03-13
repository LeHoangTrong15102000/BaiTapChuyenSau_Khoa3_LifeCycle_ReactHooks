const stateDefault = {
  // mảng comment chứa các thuộc tính như name, comment, avatar có thể có cả id
  // Thay vì dùng mapStateToProps thì trong bài giảng này chúng ta sẽ sử dụng useSelector
  comment: [
    {
      id: 1,
      name: 'Yasuo',
      comment: 'Hello, có ai solo với mình không',
      avatar: '',
    },
  ],
};
