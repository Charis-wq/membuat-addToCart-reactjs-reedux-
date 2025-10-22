
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import ProductsPages from './pages/ProductsPage'
import CartPage from './pages/CartPages'
import './App.css'

function App() {

  return (
    <div className=''>
       <Router >
      <nav className='text-center text-cyan-50 m-3 text-2xl bg-cyan-400  '>
        <Link className='p-3 hover:text-black' to="/">Products</Link>
        <Link className='p-3 hover:text-black' to= "/cart">Cart</Link>
      </nav>

      <Routes>
        <Route path='/' element={<ProductsPages/>}></Route>
        <Route path='/cart' element= {<CartPage/>}></Route>
      </Routes>
     </Router>

    </div>
    
    
    
  )
}

export default App
