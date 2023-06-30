import './App.css';
// import Banner from './components/Banner';
import Footer from '././components/Footer';
import Home from './pages/Home';
// import FoodCard from './components/FoodCard';
import ItemCard from './components/ItemCard';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Checkout from './components/Checkout';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import store from './Redux/Store';
function App() {
  return (
    <>
      <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/SignUp' element={<SignUp />} />
        </Routes>
        {/* <Routes> */}
        {/* </Routes> */}
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/checkout' element={<Checkout />} />
          <Route exact path='/item/:id' element={<ItemCard />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/productList/:id' element={<ProductList />} />
        </Routes>
        <Footer />
      </Router >
    </Provider >
    </>
  );
}

export default App;
