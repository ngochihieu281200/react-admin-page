import React,{useEffect} from 'react'
let $ = window.$

function Nav() {
    useEffect(() => {

        $('#sidebarToggle').on('click', () => {
            document.querySelector('.accordion').classList.toggle('toggled')
        })


    }, [])
  return (
    < ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar" >
    {/* Sidebar - Brand */}
    <a className="sidebar-brand d-flex align-items-center justify-content-center" to="/" >
        <div className="sidebar-brand-icon">
            <img src="" alt="" style={{ width: '24px' }} />
        </div>
        <div className="sidebar-brand-text mx-3">PET PARADISE</div>
    </a>
    {/* Divider */}
    < hr className="sidebar-divider my-0" />
    {/* Nav Item - Dashboard */}
    <li li className="nav-item active" >
        <a className="nav-link" to="/">
            <i class="fas fa-pager"></i>
            <span>Home</span></a>
    </li >
    {/* Divider */}
    < hr className="sidebar-divider" />
    {/* Heading */}
    <div div className="sidebar-heading" >
        Chức vụ
    </div >
    {/* Nav Item - Pages Collapse Menu */}
    <li li className="nav-item" >
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
            <i class="fas fa-tasks"></i>
            <span>Quản Lý</span>
        </a>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Tasks:</h6>
                <a  className="collapse-item" to="/main-manager/customer">Khách Hàng</a>
                <a  className="collapse-item" to="/main-manager/staffs">Nhân Viên</a>
                <a className="collapse-item" to="/main-manager/permission">Chức vụ</a>
                <a className="collapse-item" to="/main-manager/report">Thu Chi</a>
                <a className="collapse-item" to="/main-manager/vouchers" > Voucher </a>

            </div>
        </div>
    </li >
    {/* Nav Item - Utilities Collapse Menu */}
    <li li className="nav-item" >
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
            <i class="fas fa-boxes"></i>
            <span>Quản Lý Kho Hàng</span>
        </a>
        <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Tasks:</h6>
                <a className="collapse-item" to="/warehouse-manage/brand">Nhãn Hiệu</a>
                <a className="collapse-item" to="/warehouse-manage">Sản Phẩm</a>
                <a className="collapse-item" to="/warehouse-manage/category">Danh Mục</a>
            </div>
        </div>
    </li >
    {/* Nav Item - Pages Collapse Menu */}
    <li li className="nav-item" >
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
            <i class="fas fa-user-tag"></i>
            <span>Nhân Viên Quầy</span>
        </a>
        <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Tasks:</h6>
                <a className="collapse-item" to="/staff">Danh sách Đơn hàng</a>
            </div>
        </div>
    </li >
    <li li className="nav-item" >
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePage" aria-expanded="true" aria-controls="collapsePages">
            <i class="fas fa-ad"></i>
            <span>Nhân Viên Truyền Thông</span>
        </a>
        <div id="collapsePage" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
                <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Tasks:</h6>
                    <a className="collapse-item" to="/media">Bài Đăng</a>
                    <a className="collapse-item" to="/rate"> Đánh giá </a>
                </div>
            </div>
        </div>
    </li >
    <br />
    <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
    </div>
    {/* Sidebar Message */}
    {/* <div class="sidebar-card d-none d-lg-flex">
  <img class="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="...">
  <p class="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
  <a class="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
</div> */}
</ul >
  )
}

export default Nav