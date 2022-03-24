import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import '../asset/custome1.css';


export default function ListPermission() {
   
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
        label: 'Mã Chức Vụ',
        field: 'CV',
        width: 270,
      },
      {
        label: 'Chức Vụ',
        field: 'position',
        width: 200,
      },
      {
        label: 'Chỉnh Sửa',
        field: 'edit',
        sort: 'asc',
        width: 100,
      },
      
      {
        label: 'Xóa',
        field: 'Del',
        sort: 'disabled',
        width: 100,
      },
      
    ],
    rows: [
      {
        name: '0',
        CV: '023165666bdsdb20',
        position: 'Media',
        edit: formatWithIcon(),
        Del: formatWithIcons(),
        
      },
      {
        name: '1',
        CV: '023165666bdsdb20',
        position: 'Media',
        edit: formatWithIcon(),
        Del: formatWithIcons(),
        

      },
      {
        name: '2',
        CV: '023165666bdsdb20',
        position: 'Media',
        edit: formatWithIcon(),
        Del: formatWithIcons(),
        

      },
      {
        name: '3',
        CV: '023165666bdsdb20',
        position: 'Media',
        edit: formatWithIcon(),
        Del: formatWithIcons(),
        

      },
      
     
    ],
  });

  return (
    <div>
      <div className='ct'>
        <strong>Danh Sách Quyền</strong>
      </div>
        <div className="row">
            <div className="offset-md-9 ">
            </div>   
            <div className="col-3">
              {/* <div>
                <strong className='BV '>Danh Sách Bài Viết</strong>
              </div> */}
                 <div className="addProduct float-right pr-4">
                     <a className="btn btn-warning" href>Thêm mới Quyền</a>
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




