import "./App.css";
import NavbarSection from "./compoments/navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Product } from "./compoments/pages/product";
import { Shop } from "./compoments/pages/shop";
import { Productcat } from "./compoments/pages/productcat";
import { Login } from "./compoments/pages/login";

function App() {
  
  return (
    <BrowserRouter>
      <NavbarSection />
      <Routes>
        <Route path="/" element={<Shop/>}/>
          <Route path="men" element={<Product/>} />
          <Route path="womens" element={<Productcat />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="*" element={<NoPage />} /> */}
       
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
