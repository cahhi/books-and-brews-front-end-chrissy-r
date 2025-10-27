import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    //Adding the layout for the pages so that the navbar and the footer show on every page
    <>
    <nav>NavBar</nav>  
     <main className='min-h-screen max-w-screen-2xl mx-auto px-4 py-6'> 
      <Outlet />
     </main>
     <footer>Footer</footer>
    </>
  )
}

export default App
