import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./components/PrivateRoute";

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
      </Route>
    </Routes>
  )
}
export default App