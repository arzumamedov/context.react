import './App.css'
import MainLayout from './layout/MainLayout'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShopPage from './pages/Shop';
import BasketProvider from './context/BasketProvider';
import BlogPage from './pages/Blog';
import Wish from './pages/Wish';

function App() {

  return (
    <>
      <BrowserRouter >
        <BasketProvider>
          <Routes>

            <Route path="/" element={<MainLayout />}></Route>
            <Route path="/shop" element={<BlogPage />}></Route>
            <Route path="/wish" element={<Wish />}></Route>
          </Routes>
        </BasketProvider>
      </BrowserRouter>
    </>
  )
}

export default App
