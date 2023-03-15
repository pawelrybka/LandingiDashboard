import React from 'react'
import styles from './BasketInfo.module.css'
import { useContext } from 'react';
import Context from '../../Context/Context'
import Chart from '../Chart/Chart';
import Backdrop from '../../UI/Backdrop/Backdrop';
import { AiOutlineClose } from 'react-icons/ai'
import { motion } from "framer-motion"

interface props{
  basketInfoVisible: boolean
  setBasketInfoVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const BasketInfo = ({ basketInfoVisible, setBasketInfoVisible }: props) => {
  
  const { selectedBasket, setSelectedBasket } = useContext(Context);
  
  return (
    <>
      <motion.div 
        className={styles.basketinfo}
        initial={{  opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .3 }}
      >
        <div className={styles.basketinfo__header}>
          <div>
            <span>Basket ID: </span> {selectedBasket?.id}
          </div>
          <button 
            onClick={() => {
              setBasketInfoVisible(!basketInfoVisible)
              setSelectedBasket(null)
            }}
          >
            <AiOutlineClose size={20}/>
          </button>
        </div>
        <Chart/>
      </motion.div>
      <Backdrop/>
    </>
  )
}

export default BasketInfo

