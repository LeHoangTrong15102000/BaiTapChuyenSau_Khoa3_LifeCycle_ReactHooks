import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { addCommentAction } from '../redux/actions/FakeBookAction';
import { rootReducer } from '../redux/reducers/rootReducer';

const DemoReduxApp = (props) => {
  // Dùng React hook để DOM tới thẻ
  let inputName = useRef(null);
  let inputContent = useRef(null);

  // Muốn lấy các state từ Redux về thì sử dụng useSelector, còn muốn đưa 1 cái action lên store thì dùng useDispatch
  // useState thay cho mapStateToProps
  let comments = useSelector((state) => state.FakeBookReducer.comments);

  // Lấy hàm dispatch từ useDispatch => để gửi giá trị lên Reducer
  let dispatchComment = useDispatch();

  // Lấy thông tin người dùng nhập vào
  let [userComment, setUserComment] = useState({
    // có 3 trường đó là name , content, avatar
    // useState nó dùng cái setUserComment nhưng mà cái này không lưu lại giá trị trước nên chúng ta phải clone lại cái object ban đầu
    name: '',
    content: '',
    avatar: '',
  });
  // console.log('userComment', userComment)
  // Để mà lấy thông tin người dùng nhập vào khi mà người dùng change cái input thì tạo cái hàm
  const handleChangeInput = (event) => {
    let { value, name } = event.target;
    // Dựa vào cái name để lấy thông tin người dùng nhập vào, bởi vì có cái name mới biết được là người dùng đang nhập vào ô nào
    setUserComment({
      //clone lại dữ liệu cũ người dùng nhập từ trước
      ...userComment,
      [name]: value,
    });
  };

  // Xử lý sự kiện submit form, Xử lý thông tin người dùng lên Reducer
  const handleSubmit = (event) => {
    // chặn sự kiện load lại trang của trình duyệt
    event.preventDefault();

    // Khi đưa lên set  thêm cái avatar mà người dùng nhập vào, do đó nên ta sẽ clone lại object cũ và thêm thuộc tính avatar vào
    let usComment = {
      ...userComment,
      avatar: `https://i.pravatar.cc/150?u=${userComment.name}`,
    };
    // let action = {
    //   type: 'add_comment',
    //   // sẽ gửi lên userComment là thông tin người dùng nhập vào
    //   userComment: usComment,
    // };
    dispatchComment(addCommentAction(usComment)); // gửi cái action này đi
  };

  // Hàm xử lý sự kiện click vào nút send
  const handleSendInfo = () => {};

  return (
    <div className="container">
      <h3 className="display-4 text-center">FakeBook App!</h3>
      <div style={{ width: 1000 }} className="card text-left">
        <div className="card-header">
          {comments.map((user, index) => (
            <div className="row" key={index}>
              <div className="col-1 text-center">
                <img
                  style={{ height: 70 }}
                  src={user.avatar}
                  alt="picture123"
                />
              </div>

              <div className="col-11">
                {' '}
                <h6 style={{ marginBottom: '0.5rem' }} className="text-danger">
                  {user.name}
                </h6>
                <p>{user.content}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Form group chứa các nội dung của người nhập vào */}
        <form className="card-body" onSubmit={handleSubmit}>
          {/* <h4 className="card-title">Title</h4>
          <p className="card-text">Body</p> */}
          {/* Cardbody chứa các form input */}
          <div className="form-group">
            <h4 className="card-title">Name</h4>
            <input
              onChange={handleChangeInput}
              className="form-control"
              type="text"
              name="name"
              ref={inputName}
            />
          </div>

          <div className="form-group">
            <h4 className="card-title">Content</h4>
            <input
              onChange={handleChangeInput}
              className="form-control"
              type="text"
              name="content"
              ref={inputContent}
            />
          </div>

          <div className="form-group">
            <button onClick={handleSendInfo} className="btn btn-success">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   comment: state.FakeBookReducer.comment,
// })

// export default connect(mapStateToProps)(DemoReduxApp);
export default DemoReduxApp;
