import './App.css';
//import Header from './Authentication/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Authentication/Login'
import Register from './Authentication/Register';
import AddProducts from './Authentication/AddProducts';
import UpdateProduct from './Authentication/UpdateProduct'
import Protected from './Authentication/Protected';
import Product from './Authentication/Product';

//import Google from './Login/Google';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Product/>}/>
          <Route  path='/login' element={<Login />}/>
          <Route  path='/register' element={<Register/>}/>
          <Route  path='/add' element={<Protected/>}/>
          <Route  path='/update' element={<Protected/>} />

          {/* <Route  path='/update' element={<UpdateProduct/>}/> */}
        </Routes>
      </BrowserRouter>
      {/* <Google /> */}
    </div>
  );
}

export default App;
