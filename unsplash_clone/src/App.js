import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router";
// import { SignUp } from "./Components/Auth/Signup";
// import { LogIn } from "./Components/Auth/Login";
// import { Blog } from "./Pages/Blog";
// import { Inputform } from './components/Advertise/Inputform';
// import {Advertise} from "./Pages/Advertise";
// import { SuccessForm } from "./components/Advertise/SuccessForm";
// import { Error } from "./Components/Navbar/Error";
import Home from "./home";

function App() {
  return (
    <div className="App">
      {/* <Routes></Routes> */}
      {/* <Home /> */}
      <Routes>
        <Route
          path="/"
          element={
            <Navbar>
              <Home query={"office"} />
            </Navbar>
          }
        ></Route>
        {/* <Route path="/" element={<Home/> }></Route> */}
        {/* <Route path="/error" element={<Error />}></Route> */}
        {/* <Route path="/advertise" element={<Advertise />}></Route> */}
      </Routes>
      <Routes>
        {/* <Route path="/Inputform" element={<Inputform />}></Route> */}
        {/* <Route path="/SuccessForm" element={<SuccessForm />}></Route> */}
        {/* <Route path="/login" element={<LogIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route> */}
        {/* <Route path="/blog" element={<Blog />}></Route> */}
      </Routes>
      {/* <h1>hello</h1> */}
    </div>
  );
}

export default App;
