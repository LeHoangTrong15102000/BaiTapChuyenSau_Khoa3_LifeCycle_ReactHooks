import React, { useState, useEffect } from 'react';
import { useSprings, useSpring, animated } from 'react-spring';

const Ex3UseSprings = () => {
  // có mảng các opacity có nội dung như nhau mà giá trị là khác nhau
  let arrOpacity = [
    { opacity: 0.1, color: 'red', content: 'FullStack', num: 100 },
    { opacity: 0.3, color: 'green', content: 'BackEnd', num: 200 },
    { opacity: 0.5, color: 'blue', content: 'FrontEnd', num: 300 },
    { opacity: 0.7, color: 'orange', content: 'DevOps', num: 400 },
    { opacity: 1, color: 'purple', content: 'Tester', num: 500 },
  ];
  /**
   * Ý nghĩa của hàm useSpring
   * giá trị thứ 1: số lần mà nó sẽ thực thi -> thì nó sẽ tạo ra các useSprings theo số lần lặp tương ứng
   *  - Tham số thứ 1 tính theo số lần chứ không tính theo chỉ số phần tử
   * tham số thứ 2: là các CSS áp dụng cho style của từng phần tử trong springs, map
   * áp dụng vào những cái spring khác nhau
   */

  // duyệt qua cái mảng dữ liệu và tọa ra cái mảng useSpring
  let propsAniUseSpring = useSprings(
    arrOpacity.length,
    arrOpacity.map((item) => ({
      opacity: item.opacity,
      color: item.color,
      content: item.content,
      number: item.num,
      from: {
        color: 'black',
        opacity: 0,
        content: '',
        number: 0,
      },
      config: { duration: 5000 },
    }))
  );

  // Một cái đối tượng cảu chúng ta chứa cả animation và chứa cả nội dung
  // Mỗi thuộc tính mà nó chạy thì nó sẽ ứng với một cái animation

  // Xây dựng hàm renderContent để render ra các thuộc tính trong useSpring
  const renderContent = (propsAnim) => {
    // Lặp trên thuộc tính thì sử dụng for in
    // Thường chạy vòng lặp thì phải chấp nhận là tụi nó giống nhau hết
    let resultAnimComponent = [];

    for (let key in propsAnim) {
      if (key === 'content' || key === 'number') {
        resultAnimComponent.push(
          <animated.h1 style={propsAnim}>{propsAnim[key]}</animated.h1>
        );
      }
    }

    return resultAnimComponent;
  };

  // Nói chung đó là những dự án lớn mà người ta sẽ làm mà thôi, còn hiện tại học để đi xin việc, vào dự án lớn sẽ có cơ hội đụng tới những cái animation cỡ này

  return (
    <div>
      {/* chạy vòng lặp ở trong đây */}
      {propsAniUseSpring.map((props, index) => (
        <div>
          {/* <animated.span key={index} style={props}>
            {props.content}
          </animated.span>
          :
          <animated.span key={index} style={props}>
            {props.number}
          </animated.span> */}
          {renderContent(props)}
        </div>
      ))}
    </div>
  );
};

export default Ex3UseSprings;
