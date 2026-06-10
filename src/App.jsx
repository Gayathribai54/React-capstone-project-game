
import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";
import GameDetails from "./pages/GameDetails";
import Footer from "./components/Footer";
export default function App(){
 return <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/favorites" element={<Favorites/>}/>
  <Route path="/profile" element={<Profile/>}/>
  <Route path="/game/:id" element={<GameDetails/>}/>
  <Route path="/footer" element={<Footer/>}/>
 </Routes>
}
