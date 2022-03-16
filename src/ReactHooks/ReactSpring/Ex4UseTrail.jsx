import React, { useState, useEffect } from 'react';
import { useTrail, useSpring, useSprings, animated } from 'react-spring';
import { useSelector, useDispatch } from 'react-redux';

// khai báo một cái item
const items = [
  { title: 'FrontEndDeveloper', content: 'CyberLearn' },
  { title: 'FrontEndOnline', content: 'CyberSoft' },
  { title: 'FrontEndOffline', content: 'CyberLap' },
  { title: 'FrontEndAndFullStack', content: 'CyberFantasic' },
];

const Ex4UseTrail = () => {
  let [status, setStatus] = useState(true); // mặc định cho nó là true

  // thz Trail này nó thiết kếm một cái spring cho tất cả phần tử
  // Vì thằng này trả về một mảng nên phải bóc tách nó ra thì mới dùng được còn không thì sử dụng phần tử thứ index để gọi ra ví dụ -> propsUseTrail[0]
  const [propsUseTrail, set, stop] = useTrail(items.length, () => {
    return {
      opacity: status ? 1 : 0,
      x: status ? 0 : 20,
      height: status ? 110 : 0,
      color: 'red',
      from: { opacity: 0, x: 20, height: 0, color: 'green' },
      config: { duration: 1000 },
    };
  });
  // Nó sẽ thực hiện tuần tự liên tiếp nhau với từng string
  // Khi mà nó trả về giống nhau hết thì nó sẽ có thuộc tính là set() và stop(), thì thằng này sẽ thực hiện tuần tự khi mà thằng đâu tiên được render ra rồi chạy animation thì mới đến thằng thứ 2, còn useSpring chạy liên tục hết một loạt các phần tử

  // Muốn animation mà chuyển động đẹp thì phải học thêm tọa độ x y z

  // Khi mà giao diện render lại thì nó sẽ gọi tới hàm set() để set lại giá trị
  set({
    opacity: status ? 1 : 0,
    x: status ? 0 : 20,
    height: status ? 110 : 0,
    color: 'red',
    from: { opacity: 0, x: 20, height: 0, color: 'green' },
    config: { duration: 2000 },
  });
  return (
    <div>
      <button
        onClick={() => {
          setStatus(!status);
        }}
      >
        setState
      </button>

      <button
        onClick={() => {
          set({ color: 'purple' });
        }}
      >
        setColor
      </button>

      {propsUseTrail.map((propsUseSpring, index) => (
        <animated.h1 key={index} style={propsUseSpring}>
          {items[index].title}
        </animated.h1>
      ))}
    </div>
  );
};

export default Ex4UseTrail;
