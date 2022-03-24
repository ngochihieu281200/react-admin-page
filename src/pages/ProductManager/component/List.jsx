import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import '../../../asset/custome1.css'
// import { textAlign } from '@mui/system';

export default function ColumnGroupingTable() {
   
    const formatWithIcon = (cell,row) => {
        return(
 
            
                <div>
                   <a className="btn-circle btn-warning " href=""><i className="fas fa-plus-square" /></a>
                  <a className="product_action-edit margin-0-20 " href><i className="fas fa-eye font-size-20" /></a>
                  <a className="product_action-edit margin-0-20 text-warning " href><i className="far fa-edit font-size-20" /></a>
                  <a className="product_action-remove  text-danger" href><i className="far fa-trash-alt font-size-20" /></a>
                      
                 
                
                <div className=" custom-control custom-switch product_action-edit ">
                    
                  
                  {/* <input type="checkbox" className="custom-control-input font-size-20" id="customSwitch1" defaultChecked />
                  <label className="custom-control-label " htmlFor="far customSwitch1 "></label> */}
                  
                </div>
                </div>
               
            
        )
    }
    const photos = (cell,row) => { 
      return(
        <img src="https://product.hstatic.net/1000187449/product/nam_vai_xamtro_1_v2_large.png" style={{width: 100, height: 100}} alt="" />
      )
    }  
  // const styles = { header: { textAlign: 'center' }}  
  const [datatable, setDatatable] = React.useState({
    
    columns: [
      {
        label: 'Đồng Hồ',
        field: 'name',
        width: 150,
        
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Dây Đeo',
        field: 'HA',
        width: 270,
      },
      {
        label: 'Dịch Vụ',
        field: 'DM',
        width: 200,
      },
      {
        label: 'Đồng Hồ Nam',
        field: 'Price',
        sort: 'asc',
        width: 100,
      },  
      {
        label: 'Đồng Hồ Nữ',
        field: 'SL',
        sort: 'disabled',
        width: 150,
      },
      // {
      //   label: 'Thao Tác',
      //   field: 'TT',
      //   sort: 'disabled',
      //   width: 100,
        
      // },
      // {
      //   label: 'Thông Tin Hệ Thống',
      //   field: 'HT',
      //   sort: 'disabled',
      //   width: 100,
      // },
    ],
    rows: [
      {
        name: formatWithIcon(),
        HA: formatWithIcon(),
        DM: formatWithIcon(),
        Price: formatWithIcon(),
        SL: formatWithIcon(),
        // TT: formatWithIcon(),
        // HT:'ABCD',

        
      },
      {
        // name: 'Viwat Sai Gon Nam VW-105S Dây Nato Xám Tro',
        // HA: photos(),
        // DM: 'Edinburgh',
        // Price: '1.199.000 VNĐ',
        // SL: '100',
        // TT: formatWithIcon(),
        // HT:'ABCD',
      },
      // {
      //   name: 'Viwat Sai Gon Nam VW-105S Dây Nato Xám Tro',
      //   HA: photos(),
      //   DM: 'Edinburgh',
      //   Price: '1.199.000 VNĐ',
      //   SL: '100',
      //   TT: formatWithIcon(),
      //   HT:'ABCD',

      // },
      // {
      //   name: 'Viwat Sai Gon Nam VW-105S Dây Nato Xám Tro',
      //   HA: photos(),
      //   DM: 'Edinburgh',
      //   Price: '1.199.000 VNĐ',
      //   SL: '100',
      //   TT: formatWithIcon(),
      //   HT:'ABCD',

      // },
      // {
      //   name: 'Viwat Sai Gon Nam VW-105S Dây Nato Xám Tro',
      //   HA: photos(),
      //   DM: 'Edinburgh',
      //   Price: '1.199.000 VNĐ',
      //   SL: '100',
      //   TT: formatWithIcon(),
      //   HT:'ABCD',

      // },
     
    ],
  });

  return (
    <div>
        <div  className="ct">
          <a >Danh Mục Sản Phẩm</a>
        </div>
        <div className="row">
            <div className="offset-md-9 ">
            </div>   
            
            <div className="col-3">
                  
                 <div className="addProduct float-right pr-3">
                     <a className="btn btn-warning" href>Thêm Mới Danh Mục</a>
                 </div>
            </div>       
        </div>
        {/* <div className="addProduct float-right pr-3">
            <a className="btn btn-warning" href>Thêm mới nhãn hiệu</a>
      </div> */}
    <div id='khung' style={{margin: '0 10px' }}>
        <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} searchTop searchBottom={false} />
    </div>
    </div>
);
}

