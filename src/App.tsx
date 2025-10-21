
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import ProductsPages from './pages/ProductsPage'
import CartPage from './pages/CartPages'
import './App.css'

function App() {

  return (
    
     <Router>
      <nav style={{ display: "flex", gap: "1rem", justifyContent: "center", margin: "1rem" }}>
        <Link to="/">Products</Link>
        <Link to= "/cart">Cart</Link>
      </nav>

      <Routes>
        <Route path='/' element={<ProductsPages/>}></Route>
        <Route path='/cart' element= {<CartPage/>}></Route>
      </Routes>
     </Router>
    
  )
}

export default App
