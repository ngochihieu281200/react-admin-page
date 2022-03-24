import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import '../../../asset/custome1.css';

export default function ListOrder() {
   
    const formatWithIcon = (cell,row) => {
        return(
 
            <div>
                
                     
                <a class="btn-circle btn-success " href="">
                  <i class="fas fa-check"></i>
                </a> 
                      
                      
            </div>
        )
    }  
  const formatWithIcons = (cell,row) => { 
    return(
          <a class="btn-circle btn-warning " href="">
            <i class="fas fa-check"></i>
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
        label: 'Mã Đơn Hàng',
        field: 'order',
        width: 270,
      },
      {
        label: 'Khách Hàng',
        field: 'customer',
        width: 200,
      },
      {
        label: 'Nhân Viên Xác Nhận',
        field: 'staff',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Trạng Thái',
        field: 'status',
        sort: 'disabled',
        width: 150,
      },
      {
        label: 'Thao Tác',
        field: 'TT',
        sort: 'disabled',
        width: 100,
        
      },
      {
        label: 'Ngày Đặt Hàng',
        field: 'orderdate',
        sort: 'disabled',
        width: 100,
      },
      {
        label: 'Tổng Hóa Đơn',
        field: 'bill',
        sort: 'disabled',
        width: 100,
      },
    ],
    rows: [
      {
        name: '0',
        order: '61c588282bed057c8e64ff5a	',
        customer: 'Nguyễn Hữu Trí',
        staff: 'Nguyễn Hữu Trí',
        status: 'Đã Xác Nhận',
        TT: formatWithIcon(),
        orderdate: '2011/04/25',
        bill: '255.000 VND'
        
      },
      {
        name: '1',
        order: '61c588282bed057c8e64ff5a	',
        customer: 'Nguyễn Hữu Trí',
        staff: 'Nguyễn Hữu Trí',
        status: 'Chờ Xác Nhận',
        TT: formatWithIcons(),
        orderdate: '2011/04/25',
        bill: '255.000 VND'

      },
      {
        name: '2',
        order: '61c588282bed057c8e64ff5a	',
        customer: 'Nguyễn Hữu Trí',
        staff: 'Nguyễn Hữu Trí',
        status: 'Đã Xác Nhận',
        TT: formatWithIcon(),
        orderdate: '2011/04/25',
        bill: '255.000 VND'

      },
      {
        name: '3',
        order: '61c588282bed057c8e64ff5a	',
        customer: 'Nguyễn Hữu Trí',
        staff: 'Nguyễn Hữu Trí',
        status: 'Đã Xác Nhận',
        TT: formatWithIcon(),
        orderdate: '2011/04/25',
        bill: '255.000 VND'

      },
      
     
    ],
  });

  return (
    <div>
      <div className="ct">
        <strong>Danh Sách Đơn Hàng</strong>
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
    <div style={{margin: '0 10px'}}>
        <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} searchTop searchBottom={false} />
    </div>
    </div>
);
}

// import React from 'react'
// import '../../asset/custome1.css'

// function ListOrder() {
//   return (
//     <div className="col">
//         <div className="card shadow mb-4">
//           <div className="car-header py-3">
//             <h6 class="m-0 font-weight-bold text-primary">Danh sách Đơn Hàng </h6>
//           </div>
//           <div className="card-body">
//             <div className="table-responsive">
//               <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
//                 <thead>
//                   <tr>
//                     <th>#</th>
//                     <th>Mã đơn hàng </th>
//                     <th>Khách hàng</th>
//                     <th>Nhân Viên xác nhận</th>
//                     <th> Trạng thái</th>
//                     <th>Thao tác</th>
//                     <th>Ngày đặt hàng</th>
//                     <th>Tổng hoá đơn</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td> 0 </td>
//                     <td> 61d6c28c8c9ea7c6d383f62a </td>
//                     <td> Bùi Minh Chiến </td>
//                     <td> </td>
//                     <td> Chờ Xác Nhận</td>
//                     <td class="text-center"> 
//                       <a class="btn-circle btn-warning " href="">
//                         <i class="fas fa-check"></i>
//                       </a> 
//                     </td>
//                     <td> 06-12-2021 </td>
//                     <td> 160.000&nbsp;VND </td>
//                   </tr>
//                   <tr>
//                     <td> 1 </td>
//                     <td> 61c588282bed057c8e64ff5a </td>
//                     <td> Nguyễn Hữu Trí </td>
//                     <td> Ngô Chí Hiếu </td>
//                     <td> Đã nhận hàng</td>
//                     <td class="text-center"> 
//                       <a class="btn-circle btn-success " href="">
//                         <i class="fas fa-check"></i>
//                       </a> 
//                     </td>
//                     <td> 24-12-2021 </td>
//                     <td> 255.000&nbsp;VND </td>
//                   </tr>
//                   <tr>
//                     <td> 2 </td>
//                     <td> 61d6c28c8c9ea7c6d383f62a </td>
//                     <td> Ngô Chí Hiếu </td>
//                     <td> Bùi Minh Chiến </td>
//                     <td> Đã nhận hàng</td>
//                     <td class="text-center"> 
//                       <a class="btn-circle btn-success " href="">
//                         <i class="fas fa-check"></i>
//                       </a> 
//                     </td>
//                     <td> 06-12-2021 </td>
//                     <td> 160.000&nbsp;VND </td>
//                   </tr>
//                   <tr>
//                     <td> 2 </td>
//                     <td> 61d6c28c8c9ea7c6d383f62a </td>
//                     <td> Ngô Chí Hiếu </td>
//                     <td> Nguyễn Hữu Trí </td>
//                     <td> Đã nhận hàng</td>
//                     <td class="text-center"> 
//                       <a class="btn-circle btn-success " href="">
//                         <i class="fas fa-check"></i>
//                       </a> 
//                     </td>
//                     <td> 06-12-2021 </td>
//                     <td> 160.000&nbsp;VND </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>  
//           </div>
//         </div>        
//     </div>
//   )
// }

// export default ListOrder