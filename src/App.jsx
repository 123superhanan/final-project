import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import BlogPage from "./Pages/BlogPage/BlogPage.jsx";
import BlogCate from "./Pages/BlogCate/BlogCate.jsx";
import {Routes, Route} from "react-router-dom"
import Search from "./Pages/Search/Search.jsx";
import AuthorPage from "./Pages/AuthorPage/AuthorPage.jsx";
import SinglePostPage from "./Pages/SinglePost/SinglePostPage.jsx";
import SignUp from "./Pages/SignUp/SignUp.jsx";
import LogIn from "./Pages/loggIn/LogIn.jsx";
import PrivateRoutes from "./Utils/PrivateRoute.jsx";

function App() {
  

  return (
    <>

     <Navbar/>
  <Routes>
  <Route  path="/" element={<HomePage/>} /> 
  <Route  path="/SignUp" element={<SignUp/>} /> 
  <Route  path="/LogIn" element={<LogIn/>} /> 
<Route element={<PrivateRoutes/>}>

   <Route  path="BlogPage" element={<BlogPage/>} />  
   <Route  path="/category/:category" element={<BlogCate/>} />  
   <Route  path="/search" element={<Search/>} />  
   <Route path="/blog/:id" element={<SinglePostPage />} /> {/* Single post route */}
   <Route  path="/author/:author" element={<AuthorPage/>} /> 
   </Route>
  
  </Routes>
     <Footer/>

    </>
  )
}

export default App
