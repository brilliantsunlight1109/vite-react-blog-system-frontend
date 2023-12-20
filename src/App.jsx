import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Login, Signup, Home } from "./pages";
import AddStyle from "./pages/style/AddStyle";
import Error from "./pages/Error";
import AddStyleTemplate from "./pages/style/AddStyleTemplate";
import Blog from "./pages/blog/blog";
import AddBlog from "./pages/blog/addBlog";
import Notice from "./pages/notice/notice";
import StyleSetting from "./pages/stylesetting/styleSetting";
import Coupon from "./pages/coupon/coupon";
import SyncHistory from "./pages/synchistory/synchistory";
import UpdateStyle from "./pages/style/UpdateStyle";
import UpdateBlog from "./pages/blog/updateBlog";
import Admin from "./pages/admin/admin";
import UpdateAdmin from "./pages/admin/updateAdmin";
import AddCoupon from "./pages/coupon/addCoupon";
import UpdateCoupon from "./pages/coupon/updateCoupon";
import Stylist from "./pages/stylist/stylist";
import AddStylist from "./pages/stylist/addStylist";
import UpdateStylist from "./pages/stylist/updateStylist";
import "./index.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/add-style" element={<AddStyle />} />
          <Route path="/add-style-template" element={<AddStyleTemplate />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/add-blog" element={<AddBlog />} />
          <Route path="/setting" element={<StyleSetting />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/coupon" element={<Coupon />} />
          <Route path="/sync-history" element={<SyncHistory />} />
          <Route path="/update-style" element={<UpdateStyle />} />
          <Route path="/update-blog" element={<UpdateBlog />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/update-admin" element={<UpdateAdmin />} />
          <Route path="/add-coupon" element={<AddCoupon />} />
          <Route path="/update-coupon" element={<UpdateCoupon />} />
          <Route path="/stylist" element={<Stylist />} />
          <Route path="/add-stylist" element={<AddStylist />} />
          <Route path="/update-stylist" element={<UpdateStylist />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
