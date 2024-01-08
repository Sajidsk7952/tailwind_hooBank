import React from 'react'
import {stats} from '../constants';
import styles from '../styles';
const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-wrap flex-row sm:mb-20 mb-6 `}>
      {stats.map((stat)=>(
        <div key={stat.id} className='flex flex-1 flex-row justify-start items-center'>
          <h4 className='font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>{stat.value}</h4>
          <p className='font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>{stat.title}</p>
        </div>
      ))}
    </section>
  )
}

export default Stats;