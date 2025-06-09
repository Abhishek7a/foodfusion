import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import CheckOutPage from './pages/CheckOutPage';
import ItemPage from './pages/ItemPage';
import ItemList from './pages/ItemList';
import OrderPage from './pages/OrderPage';
import NotFound from './pages/PageNotFound';
import ScrollToTop from './components/ScrollToTop';
import OrderTrack from './pages/TrackPage';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router basename='foodfusion'>
          <ScrollToTop />
          <Routes>
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/SignUp' element={<SignUp />} />
            <Route exact path='/' element={<Home />} />
            <Route exact path='/checkout' element={<CheckOutPage />} />
            <Route exact path='/item/:id' element={<ItemPage />} />
            <Route exact path='/productList/:id' element={<ItemList />} />
            <Route exact path='/orderPage' element={<OrderPage />} />
            <Route exact path='/orderTrack' element={<OrderTrack />} />
            <Route exact path='/userProfile' element={<UserProfile />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router >
      </Provider >
    </>
  );
}

export default App;
