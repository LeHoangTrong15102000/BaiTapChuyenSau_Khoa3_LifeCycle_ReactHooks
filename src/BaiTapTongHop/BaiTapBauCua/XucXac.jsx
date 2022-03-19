import React, { Fragment } from 'react';

const XucXac = (props) => {
  // Để cái thẻ Fragment(cái thẻ mà không thực sự có trên giao diện)
  let { xucXacItem } = props;
  return (
    <Fragment>
      <img
        src={xucXacItem.hinhAnh}
        style={{ width: 50, height: 50 }}
        alt="picture123"
      />
    </Fragment>
  );
};

export default XucXac;
