import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import '../../../asset/custome1.css';

export default function ListRated() {
   
    const formatWithIcon = (cell,row) => {
        return(
 
            <div>
                
                     
                <a className="product_action-edit margin-0-20 text-warning" href>
                  <i className="far fa-edit font-size-20" />
                </a>
                      
                      
            </div>
        )
    }  
  // const formatWithIcons = (cell,row) => { 
  //   return(
  //     <a className="product_action-remove margin-0-20 text-danger" href>
  //       <i className="far fa-trash-alt font-size-20" />
  //     </a>
  //   )
  // }
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
        label: 'Sản Phẩm',
        field: 'Product',
        width: 270,
      },
      {
        label: 'Số Sao Đánh Giá',
        field: 'Star',
        width: 200,
      },
      {
        label: 'Khách Hàng',
        field: 'customer',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Nội Dung',
        field: 'content',
        sort: 'disabled',
        width: 150,
      },
      {
        label: 'Trả Lời Đánh Giá/Chi Tiết',
        field: 'TT',
        sort: 'disabled',
        width: 100,
        
      },
      // {
      //   label: 'Xóa',
      //   field: 'Del',
      //   sort: 'disabled',
      //   width: 100,
      // },
      
    ],
    rows: [
      {
        name: '0',
        Product: 'Viwat Sai Gon Nam VW-103S Dây Nato Xanh Quân Đội	',
        Star: '4',
        customer: 'Bùi Minh Chiến',
        content: 'Đông Hồ Khá Đẹp',
        TT: formatWithIcon(),
        // Del: formatWithIcons(),
        
      },
      {
        name: '0',
        Product: 'Viwat Sai Gon Nam VW-103S Dây Nato Xanh Quân Đội	',
        Star: '4',
        customer: 'Nguyễn Hữu Trí',
        content: 'Đông Hồ Khá Đẹp',
        TT: formatWithIcon(),
        // Del: formatWithIcons(),

      },
      {
        name: '0',
        Product: 'Viwat Sai Gon Nam VW-103S Dây Nato Xanh Quân Đội	',
        Star: '4',
        customer: 'Ngô Chí Hiếu',
        content: 'Đông Hồ Khá Đẹp',
        TT: formatWithIcon(),
        // Del: formatWithIcons(),

      },
      {
        name: '0',
        Product: 'Viwat Sai Gon Nam VW-103S Dây Nato Xanh Quân Đội	',
        Star: '4',
        customer: 'Bùi Minh Chiến',
        content: 'Đông Hồ Khá Đẹp',
        TT: formatWithIcon(),
        // Del: formatWithIcons(),

      },
      
     
    ],
  });

  return (
    <div>
        <div className='ct'>
          <strong >Danh Sách Đánh Giá</strong>
        </div>
        {/* <div className="row">
            <div className="offset-md-9 ">
            </div>   
            <div className="col-3">
            
                 <div className="addProduct float-right pr-3">
                     <a className="btn btn-warning" href>Thêm mới nhãn hiệu</a>
                 </div>
            </div>       
        </div> */}
        {/* <div className="addProduct float-right pr-3">
            <a className="btn btn-warning" href>Thêm mới nhãn hiệu</a>
      </div> */}
    <div id='khung' style={{margin: '0 10px'}}>
        <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} searchTop searchBottom={false} />
    </div>
    </div>
);
}

