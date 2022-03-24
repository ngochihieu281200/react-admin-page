import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import '../asset/custome1.css';

export default function ListVoucher() {
   
    const formatWithIcon = (cell,row) => {
        return(
 
            <div>
                
                     
                <a className="product_action-edit margin-0-20 text-warning" href>
                  <i className="far fa-edit font-size-20" />
                </a>
                      
                      
            </div>
        )
    } 
    // const photos = (cell,row) => { 
    //   return(
    //     <img src="https://product.hstatic.net/1000187449/product/nam_vai_xamtro_1_v2_large.png" style={{width: 100, height: 100}} alt="" />
    //   )
    // } 
//   const formatWithIcons = (cell,row) => { 
//     return(
//       <a className="product_action-remove margin-0-20 text-danger" href>
//         <i className="far fa-trash-alt font-size-20" />
//       </a>
//     )
//   }
  const [datatable, setDatatable] = React.useState({
    
    columns: [
      {
        label: '#',
        field: 'name',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Tên Loại Khuyến Mãi',
        field: 'VC',
        width: 270,
      },
      {
        label: 'Chi Tiết Khuyến Mãi',
        field: 'KM',
        width: 200,
      },
      {
        label: 'Chỉnh Sửa',
        field: 'edit',
        sort: 'asc',
        width: 100,
      },
      
    //   {
    //     label: 'Xóa',
    //     field: 'Del',
    //     sort: 'disabled',
    //     width: 100,
    //   },
      
    ],
    rows: [
      {
        name: '0',
        VC: 'Khuyến Mãi Hàng Tháng',
        KM: 'Khuyến Mãi Hàng Tháng 5%',
        edit: formatWithIcon(),
        // Del: formatWithIcons(),
        
      },
      {
        name: '1',
        VC: 'Khuyến Mãi Sinh Nhật',
        KM: 'Nhân Dịp Sinh Nhật Cửa Hàng Khuyến Mãi 10%',
        edit: formatWithIcon(),
        // Del: formatWithIcons(),

      },
      {
        name: '2',
        VC: 'Khuyến Mãi Ngày Lễ',
        KM: 'Nhân Dịp Ngày Lễ Cửa Hàng Khuyến Mãi 10%',
        edit: formatWithIcon(),
        // Del: formatWithIcons(),

      },
    //   {
    //     name: '3',
    //     VC: 'Khuyến Mãi Sinh Nhật',
    //     KM: 'Nhân Dịp Sinh Nhật Cửa Hàng Khuyến Mãi 10%',
    //     edit: formatWithIcon(),
    //     Del: formatWithIcons(),

    //   },
      
     
    ],
  });

  return (
    <div>
      <div className='ct'>
        <strong>Danh Sách Khuyến Mãi</strong>
      </div>
        <div className="row">
            <div className="offset-md-9 ">
            </div>   
            <div className="col-3">
              {/* <div>
                <strong className='BV '>Danh Sách Bài Viết</strong>
              </div> */}
                 <div className="addProduct float-right pr-4">
                     <a className="btn btn-warning" href>Thêm mới Voucher</a>
                 </div>
            </div>       
        </div>
        {/* <div className="addProduct float-right pr-3">
            <a className="btn btn-warning" href>Thêm mới nhãn hiệu</a>
      </div> */}
    <div id='khung' style={{margin: '0 10px'}}>
        <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} searchTop searchBottom={false} />
    </div>
    </div>
);
}




// import React from 'react'
// import '../asset/custome1.css'

// function ListVoucher() {
//   return (
//     <div className="container-fluid">
//         <div className="row">
//             <div className="col-lg-12">
//                 <div class="activities flex justify-between margin-bottom-20">
//                     <div class="addProduct">
//                         <a class="btn btn-success" href="">Thêm mới khuyến mãi</a>
//                     </div>
//                 </div>    
//             </div>
//             {/* <div className="col">
//                 <div className="row">
//                     <div class="col-lg-6 margin-bottom-20">
//                         <div class="voucher_item shadow">
//                             <div class="voucher_item-info flex  ">
//                                 <div class="voucher_item-img flex justify-center flex-align-center pad-10 background-darkgreen txt-center">
//                                     <p class="text-uppercase" style="color: white;"> Khuyễn mãi Giáng Sinh </p>
//                                     <i class="fas fa-ticket-alt voucher_item-icon"></i>
//                                 </div>
//                                 <div class="voucher_item-content pad-10 w-100">Khuyến mãi 10% nhân dịp giáng sinh <strong> PETCHRISTMAS </strong></div>
//                                 <div class="voucher_action flex justify-center flex-align-center w-50">
//                                     <a class="btn-circle btn-warning" href="">
//                                         <i class="far fa-edit font-size-20"></i>
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div> */}
//         </div>    
//     </div>
//   )
// }

// export default ListVoucher