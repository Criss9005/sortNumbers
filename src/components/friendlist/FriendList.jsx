import React from 'react'
import PropTypes from 'prop-types'
import styles from "./FriendList.module.css"

function FriendList({ friends}) {
    //console.log(friends[0])
  return (
    
     
          <ul className={styles.friendList }>
              
              {friends.map((element, index) =>
                  <li className={styles.item} key={"friend" + index}>
                      <span className={element.isOnline ? styles.statusOn: styles.statusOut}></span> 
                      <img className={styles.avatar } src={`${element.avatar}`} alt="User avatar" width="48" />
                      <p className={styles.name }>{`${element.name}`}</p>
                  </li>)}
            
            
              
        </ul>
     
  )
}

FriendList.propTypes = {
    friends: PropTypes.array
}

export default FriendList
