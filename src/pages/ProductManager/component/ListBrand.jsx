import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import '../../../asset/custome1.css';

export default function ListBrand() {
   
    const formatWithIcon = (cell,row) => {
        return(
 
            <div>
                
                     
                {/* <a className="product_action-edit margin-0-20 " href><i className="fas fa-eye font-size-20" /></a> */}
                <a className="product_action-edit margin-0-20 text-warning " href><i className="far fa-edit font-size-20" /></a>
                <a className="product_action-remove  text-danger" href><i className="far fa-trash-alt font-size-20" /></a>
                      
                      
            </div>
        )
    } 
    // const photos = (cell,row) => { 
    //   return(
    //     <img src="https://product.hstatic.net/1000187449/product/nam_vai_xamtro_1_v2_large.png" style={{width: 100, height: 100}} alt="" />
    //   )
    // } 
  const formatWithIcons = (cell,row) => { 
    return(
      <a className="product_action-remove margin-0-20 text-danger" href>
        <i className="far fa-trash-alt font-size-20" />
      </a>
    )
  }
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
        label: 'Tên Nhãn Hiệu',
        field: 'NH',
        width: 270,
      },
      {
        label: 'Danh Mục',
        field: 'DM',
        width: 200,
      },
      {
        label: 'Xuất Sứ',
        field: 'XS',
        sort: 'asc',
        width: 100,
      },
      
      {
        label: 'Ngày Thêm',
        field: 'Date',
        sort: 'disabled',
        width: 100,
      },
      {
        label: 'Thao Tác',
        field: 'TT',
        sort: 'disabled',
        width: 100,
      },
      
    ],
    rows: [
      {
        name: '0',
        NH: 'Nhãn Hiệu A',
        DM: 'Đồng Hồ Đeo Tay',
        XS: 'Thụy Sỹ',
        Date: '25/10/2021',
        TT:formatWithIcon(),
        
      },
      {
        name: '1',
        NH: 'Nhãn Hiệu A',
        DM: 'Đồng Hồ Đeo Tay',
        XS: 'Thụy Sỹ',
        Date: '25/10/2021',
        TT:formatWithIcon(),

      },
      {
        name: '2',
        NH: 'Nhãn Hiệu A',
        DM: 'Đồng Hồ Đeo Tay',
        XS: 'Thụy Sỹ',
        Date: '25/10/2021',
        TT:formatWithIcon(),

      },
      {
        name: '3',
        NH: 'Nhãn Hiệu A',
        DM: 'Đồng Hồ Đeo Tay',
        XS: 'Thụy Sỹ',
        Date: '25/10/2021',
        TT:formatWithIcon(),

      },
      
     
    ],
  });

  return (
    <div>
      <div className='ct'>
        <strong>Nhãn Hiệu Sản Phẩm</strong>
      </div>
        <div className="row">
            <div className="offset-md-9 ">
            </div>   
            <div className="col-3">
              {/* <div>
                <strong className='BV '>Danh Sách Bài Viết</strong>
              </div> */}
                 <div className="addProduct float-right pr-3">
                     <a className="btn btn-warning" href>Thêm mới Nhãn Hiệu</a>
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



