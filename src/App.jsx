import Layout from "./assets/components/root/Layout"
import Aboutpage from "./pages/Aboutpage"
import Home from "./pages/Home"
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom"
import Servicepage from "./pages/Servicepage"
import Pages from "./pages/Pages"






function App() {
  
let router = createBrowserRouter(createRoutesFromElements(
<Route element={<Layout/>}>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/about" element={<Aboutpage/>}></Route>
  <Route path="/service" element={<Servicepage/>}></Route>
  <Route path="/pages" element={<Pages/>}></Route>
</Route>
))
return(
  <>
    
  <RouterProvider router={router}/>

  </>
)

   
   

    
  
}

export default App
