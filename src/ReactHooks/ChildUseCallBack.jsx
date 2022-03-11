import React, {memo} from 'react'

function ChildUseCallBack(props) {

    let title = 'CyberLearn'
    let object = {id: 1, name: 'Le Hoang Trong'}

    // Sử dụng UseCallBack

    console.log(title)
    console.log('object', object)
    console.log('re-render')

  return (
    <div>
        <small>{props.renderNotify()}</small>
        <textarea></textarea> 
        <br /> <br />
        <button className="btn btn-success">Gửi</button>
    </div>
  )
}

export default  memo(ChildUseCallBack)