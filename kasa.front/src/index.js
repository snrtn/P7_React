import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
const Home = React.lazy(() => import("./views/homeView"));
const About = React.lazy(() => import("./views/aboutView"));
const ProductDetails = React.lazy(() => import("./views/productDetailsView"));
const NotFound = React.lazy(() => import("./views/notFound"));

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path="*" element={<NotFound />} />
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
