import React from 'react'

const QuanCuoc = () => {
  // Code giao diện liên quan đến quân cược
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <img src="./img/BaiTapGameBauCua/bau.png" style={{width: 200, height: 200}} />

      <div className="bg-success mt-2 text-center pb-2" style={{width: 200, borderRadius: '10px'}}>
        <button className="btn btn-danger mr-2"><i className="fa fa-minus"></i></button>
        <span className="" style={{color: 'yellow', fontSize: 25}}>1000</span>
        <button  className="btn btn-danger ml-2"><i className="fa fa-plus"></i></button>
      </div>
    </div>
  )
}

export default QuanCuoc