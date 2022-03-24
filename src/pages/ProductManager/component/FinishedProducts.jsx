// import React from 'react'
import React, { useEffect, useRef, useState } from 'react'
import '../../../asset/custome1.css'


let $ = window.$

export default function FinishedProducts() {
    let list = []
    
    let [imgPresent, setImgPresent] = useState()
    let [listImg, setListImg] = useState([])
    let notify = useRef()
    var options = {};
    options = {
        place: 'tr',
        message: (
            <div>
                Đã cập nhật thành công  😄😄😄
            </div>
        ),
        type: "success",
        icon: 'far fa-check-circle',
        autoDismiss: 7,
        closeButton: false
    }
    useEffect(() => {
        function previewImages() {

            var $preview = $('#preview').empty();
            if (this.files) $.each(this.files, readAndPreview);

            function readAndPreview(i, file) {
                if (!/\.(jpe?g|png|gif)$/i.test(file.name)) {
                    return alert(file.name + " is not an image");
                } // else...

                var reader = new FileReader();

                $(reader).on("load", function () {
                    $preview.append($("<img/>", { src: this.result, height: 100, marginLeft: 20 }));
                    // console.log(`this.result`, this.result)
                    list.push(this.result)
                    setListImg(list)
                    // setForm({...form,lisImage:list})
                });
                reader.readAsDataURL(file);
            }
        }

        $('#file-input').on("change", previewImages);
        function previewAvatar() {

            var $preview = $('#preview-avatar').empty();
            if (this.files) $.each(this.files, readAndPreview);

            function readAndPreview(i, file) {
                if (!/\.(jpe?g|png|gif)$/i.test(file.name)) {
                    return alert(file.name + " is not an image");
                } // else...
                // console.log(`file`, reader.readAsDataURL)
                var reader = new FileReader();

                $(reader).on("load", function () {
                    $preview.append($("<img/>", { src: this.result, height: 100 }));
                    // console.log(`this.result`, this.result)
                    setImgPresent(this.result)
                });
                reader.readAsDataURL(file);
            }
        }

        $('#avatar-input').on("change", previewAvatar);
    }, [])
    const handleChangeImage =(event)=>{
        var subImage;
        Array.from(event.target.files).forEach(file => {

            // Define a new file reader
            let reader = new FileReader();
            // Function to execute after loading the file
            console.log('file',file)
                reader.onload=()=>{
                    list.push(reader.result)
                }
            // reader.onload = () => {
            //     // list.push(reader.result)
            //     // setForm({ ...form, imageRepresent: reader.result })
            //     // subImage=reader.result;
            //     // console.log('subImage', subImage)
            //     // console.log('subImage',subImage.length)
            //     // console.log('subImage', subImage.substring(23,subImage.length))

            // };
            // subImage = subImage.slice(24,subImage.length)
            // Read the file as a text
            reader.readAsDataURL(file);
        });

    }

  return (
    <div className='container'>
        {/* thẻ chính */}
        <div className="col-lg-12">
            <div>
            <div></div>
            <form className='ad-activity' encType='multipart/form-data'>
            <div className="title margin-bottom-20 flex flex-align-center">
                <a className='margin-right-20' href="#">
                <i className='fas fa-chevron-circle-left text-success'></i>
                </a>
                <p className='more'>Thêm Mới Sản Phẩm</p>
            </div>
            {/* thẻ 2 */}
            <div className="col-lg-12">
            <div className='row'>
            <div className="col-md-6">

                <div className="row">
                    <div className="col-md-6">
                        <div className="from-group ">
                            <label htmlFor="">Danh Mục <span className='star'>*</span></label>
                            <select className="form-select form-control" name="idCate" required="">
                                <option value=""></option>
                                <option value="619f5f1c7b1dd36bcb6a377a"> Danh Mục A </option>
                                <option value="619f66d05afe3ade69996c94"> Danh Mục B  </option>
                                <option value="61c046e5ef055e9763390575"> Danh Mục B   </option>
                            </select>
                        </div>
                  </div>
                    <div className="col-md-6">
                        <div className="from-group   ">
                            <label htmlFor="">Nhãn Hiệu Sản Phẩm <span className='star'>*</span></label>
                            <select className="form-select form-control" name="idCate" required="">
                                <option value=""></option>
                                <option value="619f5f1c7b1dd36bcb6a377a"> Nhãn Hiệu A </option>
                                <option value="619f66d05afe3ade69996c94"> Nhãn Hiệu B  </option>
                                <option value="61c046e5ef055e9763390575"> Nhãn Hiệu B   </option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="form-group">
                            <label>Tên Sản Phẩm <span className='star'>*</span></label>
                            <input type="text" name="name" class="form-control" placeholder="Nhập Tên Sản Phẩm..." value=""/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="from-group">
                            <label htmlFor="">Mặt Kính <span className='star'>*</span></label>
                            <select className="form-select form-control" name="idCate" required="">
                                <option value=""></option>
                                <option value="619f5f1c7b1dd36bcb6a377a"> Mặt Kính A </option>
                                <option value="619f66d05afe3ade69996c94"> Mặt Kính B </option>
                                <option value="61c046e5ef055e9763390575"> Mặt Kính C  </option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="from-group">
                            <label htmlFor="">Dây Đeo <span className='star'>*</span></label>
                            <select className="form-select form-control" name="idCate" required="">
                                <option value=""></option>
                                <option value="619f5f1c7b1dd36bcb6a377a"> Dây Đeo A </option>
                                <option value="619f66d05afe3ade69996c94"> Dây Đeo B </option>
                                <option value="61c046e5ef055e9763390575"> Dây Đeo C  </option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="from-group">
                            <label htmlFor="">Độ Chống Nước <span className='star'>*</span></label>
                            <select className="form-select form-control" name="idCate" required="">
                                <option value=""></option>
                                <option value="619f5f1c7b1dd36bcb6a377a"> Độ Chống Nước </option>
                                <option value="619f66d05afe3ade69996c94"> Độ Chống Nước </option>
                                <option value="61c046e5ef055e9763390575"> Độ Chống Nước  </option>
                            </select>
                        </div>
                   </div>

                </div>
            <div className="form-group">
                <label htmlFor="">Bảo Hành </label>
                {/* <textarea type="date" className="form-control" id="exampleFormControlTextarea1" name="long_description" rows="3" placeholder="Nhập mô tả ..."></textarea> */}
                <input type="date" className="form-control" id="exampleFormControlTextarea1" name="long_description" rows="3" />
            </div>

            

            <div className="form-group">
                <label htmlFor="">Xuất Sứ <span className='star'>*</span></label>
                <textarea type="date" className="form-control" id="exampleFormControlTextarea1" name="long_description" rows="3" placeholder="Nhập xuất sứ ..."></textarea>
                {/* <input type="date" className="form-control" id="exampleFormControlTextarea1" name="long_description" rows="3" /> */}
            </div>
            <div className="form-group">
                <label htmlFor="">Mô Tả Sẩn Phẩm <span className='star'>*</span></label>
                <textarea type="date" className="form-control" id="exampleFormControlTextarea1" name="long_description" rows="3" placeholder="Mô tả sản phẩm ..."></textarea>
                {/* <input type="date" className="form-control" id="exampleFormControlTextarea1" name="long_description" rows="3" /> */}
            </div>
                    <div className="form-group">
                        <label for="">Ảnh Đại Diện Sản Phẩm</label>
                        <input type="file" id="file-input" onChange={handleChangeImage} className="form-control btn-file" multiple accept="gif|jpg|png" />

                        <div id="preview" className="margin-top-20 pad-20" style={{ border: '1px solid #d1d3e2', borderRadius: '7px' }}>
                            <p>No file chosen</p>
                        </div>
                    </div>
            {/* <div>
                <img src="https://bossluxury.vn/uploads/nhan-biet-dong-ho-patek-philippe-that-va-gia-46.jpg" alt="" className='h-110'/>
            </div> */}
            <div className='photo'>
                <strong>Hình Ảnh Sản Phẩm</strong>
            </div>
            
            
            
            <div>
                <button className='btn TH'>Thêm Hình</button>   
                <button className='btn XH'>Xóa Hình</button>
            </div>
            </div>

            <div className="col-md-6">
            {/* <div className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" id="customSwitch1" defaultChecked />
                <label className="custom-control-label" htmlFor="customSwitch1">Ẩn Sản Phẩm</label>
            </div> */}
            <div>
                
            <div class="form-group input-group mb-3 ">
                <label htmlFor="">Chức Năng <span className='star'>*</span></label>
                <input type="text" class="form-control" placeholder="Nhập Chức năng..." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <div class="input-group-append ml-1">
                        <button class="btn btn-outline-secondary m-0" type='button'>Thêm</button>
                 </div>
            </div>
            </div>
            
            <div className="product row">
                    <div className='col-md-3 h-100 ps-3' >
                        
                        
                        <img src="https://luxshopping.vn/Uploads/News/patek-philippe-grand-6102p-001-complications-watch-44.jpg" className="w-100 h-100" alt=""/>
                        
                        
                    </div>
                    <div className="col-md-6">
                        
                            
                        
                        <div className="detail">
                            <p>Tên: </p>
                            <p className="name">Số Lượng Tồn </p>
                            <p className="money">Giá: <span> 95.000&nbsp;VND </span></p>
                        </div>
                    </div>
                    <div className="col-md-3 flex justify-content-center align-items-center">
                        {/* <div className="product_action-edit pad-10">
                            <a className="btn-circle btn-warning " href="#">
                                <i className="fas fa-plus-square" />
                            </a>
                        </div> */}
                        <div className="p-1">
                            <a className="btn-circle btn-warning " href="#">
                                <i className="far fa-edit font-size-20"></i>
                            </a>
                        </div>
                        <div className="p-1">
                            <a className="btn-circle btn-danger" href="#">
                                <i className="far fa-trash-alt font-size-20"></i>
                            </a>
                        </div>
                    </div>
                    
                </div>
            {/* <div className='textproduct'> */}
            <div className="custom-control custom-switch ">
                <input type="checkbox" className="custom-control-input " id="customSwitch1" defaultChecked />
                <label className="custom-control-label  " htmlFor="customSwitch1"></label>
            
                
                
                <button className="btn pros ">Thêm Sản Phẩm</button>
                <button className="btn pro">Thêm Loại Sản Phẩm</button>
                
                
            </div>
            </div>
            </div>    
            </div>
            </form>
            </div>
        </div>
      </div>
    
  )
}
