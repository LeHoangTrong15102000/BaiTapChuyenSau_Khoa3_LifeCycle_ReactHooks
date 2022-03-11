import React, {useState, useEffect, useCallback} from 'react'
import ChildUseCallBack from './ChildUseCallBack'
export default function DemoUseCallback(props) {

    // Sẽ học tới những hooks mở rộng/ trong đó useCallBack là một troing những hooks mở rộng
    // Trước khi thảo luận tiếp về 2 hooks còn lại là useCallBack và useMemo, ta hãy cùng điểm qua một khái niệm mới, gọi là Memo(tương ứng với pureComponent trong class component).
    // Ví dụ bên dưới, nếu như ta dùng hook useState khi ta setState thì component bên trong mặc định sẽ được load lại, vì vậy ta dùng memo để bọc Component Comment lại => khi nào có sự thay đổi props hoặc state lại Comment  thì comment mới load lại. (Thay đổi ở đây cũng giống như PureComponent so sánh shallow)

    let [like , setLike ] = useState(1)

    const renderNotify = () => {
        return `Bạn đã thả ${like} ♥`
    }

    // Khai báo một useCallback truyền cái tham số thứ 1 là cái hàm mà chúng ta không muốn nó render lại
    // tham số thứ 2 là cái state mà nó thay đổi, Nếu để mảng rỗng thì sẽ khai báo một lần duy nhất.

    // sử dụng cái hàm useCallback để muốn mỗi lần render lại thì nó không khai báo (render lại)
    const callbackRenderNotify = useCallback(renderNotify, [like]);// thằng like thay đổi thì nó mới tính là mới, còn không thay đổi thì vẫn là hàm cũ
    // Chỉ khi tham số thứ 2 có thay đổi thì thằng useCallback mới render lại.

    // Tóm lại useCallback dùng cho tình huống props truyền vào là một cái hàm và muốn render hay không render lại phụ thuộc vào tham số thứ 2 có hay không
    // perform phải là tốt nhất thì code mới lên tay được

  return (
    <div className="m-5">
        Like: {like} ♥
        
        <br />
        <span style={{cursor: 'pointer', color: 'red', fontSize: 25}} onClick={() => {
            setLike(like + 1)
        }}>♥</span>
        
        <small>{renderNotify()}</small>
        <br /> 
        <br />

        {/* Khi mà giao diện render lại thì nó sẽ kéo theo những thứ không setState vẫn sẽ render lại */}
        {/* Nên chỗ này không giống truyền props như class Component nên phải sử dụng useCallBack */}
        <ChildUseCallBack renderNotify={callbackRenderNotify }/>  
    </div>
  )
}
