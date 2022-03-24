import React from 'react'
import ListOrder from './component/ListOrder'
import ListRated from './component/ListRated'
import ListStaffProduct from './component/ListStaffProduct'
import { Redirect,Route,Switch } from 'react-router'
import {context} from '../../App'



export default function Staff() {
  // let {user} = useContext(Context);
    // if(user.idPermission!=='61aed3c47812fa068eee6d4f') return <Redirect to="/" />
    return (
        <div className="container-fluid">
            <div className="row">
                <Switch>
                    <Route path="/Staff/list-order" exact component={ListOrder} />
                    <Route path="/Staff/list-Rated" exact component={ListRated} />

                    <Route path="/product-manage/list-StaffProduct" exact component={ListStaffProduct} />

                    {/* <Route path="/main-manager/vouchers" exact component={Vouchers} />

                    <Route path="/main-manager/permission" exact component={Permission} />

                    <Route path="/main-manager/customer" exact component={ListCustomer} /> */}
                </Switch>

            </div>
        </div>
    )
}
