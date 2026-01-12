import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import ProductDetail from "./pages/ProductDetail";


function App(){
  return(
    <Routes>
      <Route element = {<Layout/>}>
        <Route path="/" element = {<Home/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/profile" element = { 
          <PrivateRoute>
          <Profile/>
        </PrivateRoute>}/>
        <Route path="*" element = {<NotFound/>}/>
        <Route path="/products/:id" element = {<ProductDetail/>}/>
      </Route>
    </Routes>
  )
}
export default App