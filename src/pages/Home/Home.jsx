import React, { useContext } from 'react'
import Layout from '../../component/layout/Layout';
import myContext from '../../context/Data/myContext';

const Home = () => {
  const context=useContext(myContext)
  
  return (
    
    <Layout>
      Home
    </Layout> 
   
  )
}

export default Home
