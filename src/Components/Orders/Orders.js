import React from 'react'
import css from './Orders.module.css'
import { ordersData } from '../../data/data'
import { groupNumber } from '../../data/data'
import OrdersPieChart from '../OrdersPieChart/OrdersPieChart'
const Orders = () => {
  return (
    <div className={`${css.container}`}>
        <div className={css.head}>
            <img src='/orders.jpg' alt='Logo' />
            <span>Orders Today</span>
        </div>
        <div className={`grey-container ${css.stat}`}>
            <span>Amount</span>
            <span>{groupNumber(3062)}</span>
        </div>
        <div className={css.orders}>
            {
                ordersData.map((order,idx)=>{
                    return (
                    < div key={idx} className={css.order}>
                        <div >
                            <span>{order.name}</span>
                            <span>{order.change}</span>
                        </div>
                        <div>
                            <span>
                                {order.type}
                            </span>
                            <span>
                                {order.items}
                            </span>
                        </div>
                    </ div>
                    )
                })
            }
        </div>
        <div className={css.orderChart}>
            <span>Split by Orders</span>
            <OrdersPieChart />
        </div>
    </div>
  )
}

export default Orders