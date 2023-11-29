import React, { useContext } from 'react'
import Layout from '../../component/layout/Layout'
import myContext from '../../context/Data/myContext'

const Order = () => {
  const context = useContext(myContext)
  return (
    
    <Layout>
    
      Order
      
    </Layout>
   
  )
}

export default Order
