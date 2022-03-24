import React from 'react'
import ColumnGroupingTable from './component/List'
import ListBrand from './component/ListBrand'
import ListProduct from './component/ListProduct'
import Addproduct from './component/Addproduct'
import { Redirect, Route, Switch } from 'react-router'
import {Context} from '../../App'
// import Addproduct from './Component/Addproduct';

export default function ProductManage() {
 
    // let {user} = useContext(Context);
    // if(user.idPermission!=='61aed3c47812fa068eee6d4f') return <Redirect to="/" />
    return (
        <div className="container-fluid">
            <div className="row">
                <Switch>
                    <Route path="/product-manage/product" exact component={ListProduct} />
                    <Route path="/product-manage/Brand" exact component={ListBrand} />

                    <Route path="/product-manage/list" exact component={ColumnGroupingTable} />

                    <Route path="/product-manager/add" exact component={Addproduct} />

                    {/* <Route path="/main-manager/permission" exact component={Permission} />

                    <Route path="/main-manager/customer" exact component={ListCustomer} /> */}
                </Switch>

            </div>
        </div>
    )
  
}
