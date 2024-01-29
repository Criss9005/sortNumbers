import React from 'react'
import PropTypes from 'prop-types'
import styles from "./Statistics.module.css"

function Statistics(data) { 
    let randomColor = Math.floor(Math.random()*16777215);
    //console.log(randomColor)
  return (
      <div>
          <section className={styles.statistics} >
            <h2 className={styles.title }>UPLOAD STATS</h2>

              <ul className={styles.statList}>
                  
                  {data.stats.map((element, index) => 
                    <li className={styles.item} key={"data" + index} style={{backgroundColor: `#${(randomColor+(index*160)).toString(16)}`}}>
                <span className={styles.label}>{element.label}</span>
                <span className={styles.percentage}>{element.percentage }%</span>
            </li>
        )}
                        
                    
            </ul>
        </section>
      </div>
  )
}

Statistics.propTypes = {
    data: PropTypes.string
}

export default Statistics

