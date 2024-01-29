import React from 'react'
import PropTypes from 'prop-types'
import styles from "./TransactionHistory.module.css"

function TransactionHistory(transaction) {
  //console.log(transaction.items[0])
  
  return (
      
    <table className={ styles.transactionHistory}>
            <thead>
        <tr className={styles.title }>
                <th>TYPE</th>
                <th>AMOUNT</th>
                <th>CURRENCY</th>
                </tr>
            </thead>

      <tbody className={ styles.tbody}>
        {transaction.items.map((element, index) =>
                 
                 <tr className={(index % 2 === 0) ? styles.trPar:  styles.trImpar} key={"transaccion" + index}>
                       <td>{ element.type}</td>    
                       <td>{ element.amount}</td>
                       <td>{ element.currency}</td>  
                       
          </tr>
          
               )}
              
            </tbody>
            </table>
      
  )
}

TransactionHistory.propTypes = {
  transaction: PropTypes.array
}

export default TransactionHistory
