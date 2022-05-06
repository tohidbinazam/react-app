import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddDevs from "./Components/Admin/AddDevs/AddDevs";
import Admin from "./Components/Admin/Admin";
import GridAdmin from "./Components/Admin/GridAdmin/GridAdmin";
import TbAdmin from "./Components/Admin/TbAdmin/TbAdmin";
import Footer from "./Components/Layout/Footer/Footer";
import Header from "./Components/Layout/Header/Header";
import Profile from "./Components/Team/Profile/Profile";
import Team from "./Components/Team/Team";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={ <Team /> }/>
            <Route path="/:uName" element={ <Profile /> }/>
            <Route path="/admin" element={ <Admin /> }>
              <Route path="/admin/table-view" element={ <TbAdmin /> } />
              <Route path="/admin/grid-view" element={ <GridAdmin /> } />
            </Route> 
            <Route path="/add-devs" element={ <AddDevs /> }/>
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
