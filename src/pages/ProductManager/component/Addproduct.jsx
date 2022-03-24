import React from 'react'
import '../../../asset/custome1.css'

export default function Addproduct() {
  return (
    <div className='container'>
      <div className="row">
        <div></div>
        <form className='ad-activity' encType='multipart/form-data'>
          <div className="title margin-bottom-20 flex flex-align-center">
            <a className='margin-right-20' href="#">
            <i className='fas fa-chevron-circle-left text-success'></i>
            </a>
            <p>Thêm Mới Sản Phẩm</p>
          </div>
          <div className="from-group">
            <label htmlFor="">Nhãn Hiệu Sản Phẩm <span className='star'>*</span></label>
              <select class="form-select form-control" name="idCate" required="">
                <option value=""></option>
                <option value="619f5f1c7b1dd36bcb6a377a"> Nhãn Hiệu A </option>
                <option value="619f66d05afe3ade69996c94"> Nhãn Hiệu B  </option>
                <option value="61c046e5ef055e9763390575"> Nhãn Hiệu B   </option>
              </select>
          </div>
          <div className="from-group">
            <label htmlFor="">Tên Sản Phẩm <span className='star'>*</span></label>
              <select class="form-select form-control" name="idCate" required="">
                <option value=""></option>
                <option value="619f5f1c7b1dd36bcb6a377a"> Patek Philippe Grand 6102P-001 Complications Watch 44 </option>
                <option value="619f66d05afe3ade69996c94"> Patek Philippe Grand 6104R-001 Complications Watch 44  </option>
                <option value="61c046e5ef055e9763390575"> Patek Philippe Complications 5930G-010 Watch 39.5  </option>
              </select>
          </div>
          <div className="from-group">
            <label htmlFor="">Mặt Kính <span className='star'>*</span></label>
              <select class="form-select form-control" name="idCate" required="">
                <option value=""></option>
                <option value="619f5f1c7b1dd36bcb6a377a"> Mặt Kính A </option>
                <option value="619f66d05afe3ade69996c94"> Mặt Kính B </option>
                <option value="61c046e5ef055e9763390575"> Mặt Kính C  </option>
              </select>
          </div>
          <div className="from-group">
            <label htmlFor="">Dây Đeo <span className='star'>*</span></label>
              <select class="form-select form-control" name="idCate" required="">
                <option value=""></option>
                <option value="619f5f1c7b1dd36bcb6a377a"> Dây Đeo A </option>
                <option value="619f66d05afe3ade69996c94"> Dây Đeo B </option>
                <option value="61c046e5ef055e9763390575"> Dây Đeo C  </option>
              </select>
          </div>
          <div className="from-group">
            <label htmlFor="">Độ Chống Nước <span className='star'>*</span></label>
              <select class="form-select form-control" name="idCate" required="">
                <option value=""></option>
                <option value="619f5f1c7b1dd36bcb6a377a"> Độ Chống Nước </option>
                <option value="619f66d05afe3ade69996c94"> Độ Chống Nước </option>
                <option value="61c046e5ef055e9763390575"> Độ Chống Nước  </option>
              </select>
          </div>
          <div className="form-group">
            <label htmlFor="">Bảo Hành </label>
            {/* <textarea type="date" class="form-control" id="exampleFormControlTextarea1" name="long_description" rows="3" placeholder="Nhập mô tả ..."></textarea> */}
            <input type="date" class="form-control" id="exampleFormControlTextarea1" name="long_description" rows="3" />
          </div>
          <div className="form-group">
            <label htmlFor="">Xuất Sứ <span className='star'>*</span></label>
            <textarea type="date" class="form-control" id="exampleFormControlTextarea1" name="long_description" rows="3" placeholder="Nhập xuất sứ ..."></textarea>
            {/* <input type="date" class="form-control" id="exampleFormControlTextarea1" name="long_description" rows="3" /> */}
          </div>
          <div className="form-group">
            <label htmlFor="">Mô Tả Sẩn Phẩm <span className='star'>*</span></label>
            <textarea type="date" class="form-control" id="exampleFormControlTextarea1" name="long_description" rows="3" placeholder="Mô tả sản phẩm ..."></textarea>
            {/* <input type="date" class="form-control" id="exampleFormControlTextarea1" name="long_description" rows="3" /> */}
          </div>
          <div>
            <img src="https://bossluxury.vn/uploads/nhan-biet-dong-ho-patek-philippe-that-va-gia-46.jpg" alt="" className='h-110'/>
          </div>
          <div className='photo'>
            <strong>Hình Ảnh Sản Phẩm</strong>
          </div>
          <div>
            <button className='btn TH'>Thêm Hình</button>
            <button className='btn XH'>Xóa Hình</button>
          </div>
          <div className="custom-control custom-switch">
            <input type="checkbox" className="custom-control-input" id="customSwitch1" defaultChecked />
            <label className="custom-control-label" htmlFor="customSwitch1">Ẩn ảnh</label>
          </div>
          <div >
            <button class="btn pros ">Thêm Sản Phẩm</button>
            <button className="btn pro " >Thêm Loại Sản Phẩm</button>
            
          </div>
          
        </form>
      </div>
    </div>
  )
}
