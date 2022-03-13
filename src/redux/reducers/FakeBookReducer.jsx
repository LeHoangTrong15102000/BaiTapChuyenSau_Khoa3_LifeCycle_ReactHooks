const stateDefault = {
  // mảng comment chứa các thuộc tính như name, comment, avatar có thể có cả id
  // Thay vì dùng mapStateToProps thì trong bài giảng này chúng ta sẽ sử dụng useSelector
  comments: [
    {
      id: 1,
      name: 'Yone',
      content: 'Hello, có ai solo với mình không',
      avatar: `https://i.pravatar.cc/150?u=yone`,
    },
    {
      id: 2,
      name: 'Yasuo',
      content: 'Hello! mình là Trọng hiện tại mình đang học Front End tại CyberSoft',
      avatar: `https://i.pravatar.cc/150?u=yasuo`,
    },
  ],
};

// Khai báo cái Reducer cho bài
const FakeBookReducer = (state = stateDefault, action) => {
  // eslint-disable-next-line default-case
  switch(action.type) {
    case 'add_comment' : {
      // clone lại giá trị mảng ban đầu, ghi thêm vào giá trị người dùng nhập vào
      state.comments = [...state.comments, action.userComment]
    }
  }

  return {...state}

}

// Khi đã lưu trên kho rồi thì chỉ cần lên kho gọi về là được

export default FakeBookReducer;