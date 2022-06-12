import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Ticket from "./components/Ticket";
import Seat from "./components/Seat";
import Screens from "./components/Screens";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path ="/" element = {<div>메인화면</div>}></Route>
        <Route path ="/login" element = {<div>로그인화면</div>}></Route>
        <Route path ="/ticket" element = {<Ticket />}></Route>
        <Route path ="/register" element = {<div>회원가입화면</div>}></Route>
        <Route path ="/movie" element = {<div>영화화면</div>}></Route>
        <Route path ="/theater" element = {<Screens />}></Route>
        <Route path ="/store" element = {<div>스토어화면</div>}></Route>
        <Route path ="/ticket/reserve/:movie/:time" element = {<Seat />}></Route>
        <Route path ="/event" element = {<div>이벤트화면</div>}></Route>
        <Route path ="/benefits" element = {<div>혜택화면</div>}></Route>
      </Routes>
    </>
  );
}

export default App;
