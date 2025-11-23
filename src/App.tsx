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
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router >
          <ScrollToTop />
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/SignUp' element={<SignUp />} />
            <Route path='/' element={<Home />} />
            <Route path='/checkout' element={<CheckOutPage />} />
            <Route path='/item/:id' element={<ItemPage />} />
            <Route path='/productList/:id' element={<ItemList />} />
            <Route path='/search' element={<SearchResults />} />
            <Route path='/orderPage' element={<OrderPage />} />
            <Route path='/orderTrack' element={<OrderTrack />} />
            <Route path='/userProfile' element={<UserProfile />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router >
      </Provider >
    </>
  );
}

export default App;
