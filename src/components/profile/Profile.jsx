import React from 'react'
import PropTypes from 'prop-types'
import styles from "./Profile.module.css"

function Profile({username, tag, location, stats }) {
    
  return (
    <div className={ styles.profile}>
  <div className={styles.description}>
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
                  width={180}
                  height={180}
    />
    <p className={styles.name}> <strong>{username }</strong></p>
    <p className={styles.tag}>@{tag }</p>
    <p className={styles.location}>{location }</p>
  </div>

  <ul className={styles.stats}>
        <li className={ styles.list}>
      <span className={styles.label}>Followers</span>
      <span className={styles.quantity}><strong>{stats.followers }</strong></span>
    </li>
    <li className={ `${styles.list} ${styles.borderGray} `}>
      <span className={styles.label}>Views</span>
      <span className={styles.quantity}><strong>{stats.views }</strong></span>
    </li>
    <li className={ `${styles.list} ${styles.borderGray} `}>
      <span className={styles.label}>Likes</span>
      <span className={styles.quantity}><strong>{stats.likes }</strong></span>
    </li>
  </ul>
          
          
    </div>
  )
}

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
}

export default Profile
