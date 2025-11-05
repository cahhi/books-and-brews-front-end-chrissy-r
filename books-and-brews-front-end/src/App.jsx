import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/footer';


function App() {
  const [count, setCount] = useState(0);


  return (
    //Adding the layout for the pages so that the navbar and the footer show on every page
    <>
    <Navbar/> 
     <main className='min-h-screen max-w-screen-2xl mx-auto px-4 py-6'> 
      <Outlet />
     </main>
     <Footer />
    </>
  )
}

export default App
