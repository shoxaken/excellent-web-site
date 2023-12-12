
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Singup from "./components/Singup/Singup";
import { auth } from "./firebase";
import Dashbaor from "./components/pages/Dashbaor";
import About from "./components/pages/About";
import Darslar from "./components/pages/Darslar";
import Comment from './components/pages/Comment'
import Navbar from "./components/Navbar/Navbar";
import AppFooter from "./components/AppFooter/Index";
import People from "./components/pages/People";
import Tolovtwo from "./components/pages/Tolov";
import Toqkunlar from "./components/pages/Toqkunlar";
import Juft from "./components/pages/Jusf";
import TolovQilmaganlar from "./components/pages/TolovQilmaganlar";
import Tolov20_25 from "./components/pages/Tolov20_25";
import Tolov_5_10 from "./components/pages/Tolov_5_10";
import Tolov_royxat from "./components/pages/Tolov_royxat";
import Tolov_25_30 from "./components/pages/Tolov_25_30";
import Bor from "./components/pages/Bor";
import Davomat_juft from "./components/pages/Davomat_juft";
import SearchBox from "./components/pages/Sinov";
import Create from "./components/pages/Create";
import DavomatKorish from "./components/pages/DavomatKorish";
import DavomatniBilish from "./components/pages/DavomatniBilish";
import BorToq from "./components/pages/BorToq";
import Davomat_Toq from "./components/pages/Davomat_Toq";
import DavomatKorishToq from "./components/pages/DavomatKorishToq";
import Api from "./components/pages/Api";
import UmumiyOquvchilar from "./components/pages/UmumiyOquvchilar";
import TolovMalumot from "./components/pages/TolovMalumot";
import Vip from "./components/pages/Vip";
import Ketgan from "./components/pages/Ketgan";
import ApiSnov from "./components/pages/ApiSnov";

function App() {
  const [userName, setUserName] = useState("");
  const [davomat, setDavomat] = useState('');
  const [isLoginPage, setIsLoginPage] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <>
      <Router>
        {!isLoginPage && <Navbar />}
        <Routes>
          <Route
            path="/"
            element={<Login setIsLoginPage={setIsLoginPage} />}
          />
          <Route path="/singup" element={<Singup />} />
          <Route path="/home" element={<Home name={userName} />} />
          <Route path="/dashbaor" element={<Dashbaor />} />
          <Route path="/Comment" element={<Comment />} />
          <Route path="/Darslar" element={<Darslar />} />
          <Route path="/About" element={<About />} />
          <Route path="/people" element={<People />} />
          <Route path="/Tolov_royxat" element={<Tolov_royxat />} />
          <Route path="/Tolov_5_10" element={<Tolov_5_10 />} />
          <Route path="/Tolov20_25" element={<Tolov20_25 />} />
          <Route path="/Tolov25_30" element={<Tolov_25_30 />} />
          <Route path="/tolovtwo" element={<Tolovtwo />} />
          <Route path="/tolovtree" element={<TolovQilmaganlar />} />
          <Route path="/toqkunlar" element={<Toqkunlar />} />
          <Route path="/juftkunlar" element={<Juft /> } />
          <Route path="/sinov" element={<SearchBox />} />
          <Route path="/create" element={<Create />} />
          <Route path="/TolovMalumot" element={<TolovMalumot />} />
          <Route path="/UmumiyOquvchilar" element={<UmumiyOquvchilar />} />
          {/* <Route path="/Qarzdorlar" element={<TolovQilmaganlar />} /> */}
          <Route path="/DavomatniKorish" element={<DavomatKorish />} />
          <Route path="/DavomatniKorishToq" element={<DavomatKorishToq />} />
          <Route path="/DavomatniBilish" element={<DavomatniBilish />} />
          <Route path="/Apisnow" element={<ApiSnov />} />
          <Route path="/bor" element={<Bor />} /> {/*setDavomat={setDavomat}*/}
          <Route path="/Apii" element={<Api />} /> {/*setDavomat={setDavomat}*/}
          <Route path="/borToq" element={<BorToq setDavomat={setDavomat} />} /> 
          <Route path={`/:id`} element={<Davomat_juft />} /> {/*davomat={davomat}*/}
          <Route path={`/${davomat}`} element={<Davomat_Toq davomat={davomat}/>} /> {/*davomat={davomat}*/}
          <Route path="/Vip" element={<Vip />} />
          <Route path="/Ketgan" element={<Ketgan />} /> 
        </Routes>
          
        
      </Router>
    </>
  );
}

export default App;
