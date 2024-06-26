import React from 'react'
import css from './Dashboard.module.css'
import Orders from '../../Components/Orders/Orders'
import { INITIAL_EVENTS,
  cards,
  cardsData,
  ordersData,
  groupNumber,
  boardData,
  userData
} from '../../data/data'
import Statistics from '../../Components/Statistics/Statistics'
const Dashboard = () => {
  return (
    <div className={css.container}>
      <div className={css.dashboard}>
        <div className={`${css.dashboardHead} theme-container`}>
          <div className={css.head}>
            <span>Dashboard</span>
          </div>
          <div className={css.cards}>
            {cardsData.map((card,idx)=>{
              return(
              <div key={card.title} className={css.card}>
                <div className={css.cardHead}>
                  <span>{card.title}</span>
                  <span>{card.change}</span>
                </div>
                <div className={css.cardAmount}>
                  <span>$</span>
                  <span>{groupNumber(card.amount)}</span>
                </div>
              </div>
              )
            })}
          </div>
        </div>
        <Statistics />
      </div>
        <Orders />
    </div>
  )
}

export default Dashboard
