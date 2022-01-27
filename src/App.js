import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './Components/Dashboard/AddProduct/AddProduct';
import Categories from './Components/Dashboard/Categories/Categories';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Dashboard/Home/Home';
import Products from './Components/Dashboard/Products/Products';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/dashboard" element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}>
          <Route path="home" element={<PrivateRoute><Home></Home> </PrivateRoute>} />
          <Route path="products" element={<PrivateRoute><Products></Products></PrivateRoute>}></Route>
          <Route path="addproduct" element={<PrivateRoute><AddProduct></AddProduct> </PrivateRoute>}/>
          <Route path="categories" element={<PrivateRoute> <Categories></Categories> </PrivateRoute>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
