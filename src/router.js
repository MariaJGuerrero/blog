import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Form from "./pages/form";
import Post from "./pages/post";
import Principal from "./pages/principal";

const AppRouter = () => {
    return(
    <Router>
        <Routes>
          <Route exact path="/" element={<Principal />}></Route>
          <Route path="/post/:id" element={<Post />}></Route>
          <Route path="/form" element={<Form/>}></Route>
        </Routes>
      </Router>
    )
}
export default AppRouter;