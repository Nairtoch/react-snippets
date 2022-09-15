import { Routes, Route } from 'react-router-dom';
import { Home } from '../../Pages/Home/Home';
import { Login } from '../../Pages/Login/Login';
import { ProductDetails } from '../../Pages/Products/ProductDetails';
import { ProductList } from '../../Pages/Products/ProductList';

export const AppRouter = () => {
    return(
        <Routes>
            <Route index element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path="/products">
                <Route index element={<ProductList />}></Route>
                <Route path=":product_id" element={<ProductDetails />}></Route>
            </Route>
        </Routes>
    )
}