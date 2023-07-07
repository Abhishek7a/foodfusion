import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import CheckOutPage from './pages/CheckOutPage';
import ItemPage from './pages/ItemPage';
import ItemList from './pages/ItemList';
import OrderPage from './pages/OrderPage';
import NotFound from './pages/PageNotFound';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <ScrollToTop/>
          <Routes>
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/SignUp' element={<SignUp />} />
            <Route exact path='/' element={<Home />} />
            <Route exact path='/checkout' element={<CheckOutPage />} />
            <Route exact path='/item/:id' element={<ItemPage />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/orderPage' element={<OrderPage />} />
            <Route exact path='/productList/:id' element={<ItemList />} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </Router >
      </Provider >
    </>
  );
}

export default App;
