
import './App.css';
import {Header} from './component/Auth/Header';
import {Patient} from './component/Master/Patient'
import { Routes, Route } from "react-router-dom";
import { Johnson } from './component/Master/Johnson';
import { Partice } from './component/Master/Partice';
import Calender from './component/Master/Calender';
import ListOfMedical from './component/Master/ListOfMedical';
import ListOfMedicalJohnson from './component/Master/ListOfMedicalJohnson';
import MedicalPartice from './component/Master/MedicalPartice';


 function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Header" element={<Header/>} />
        <Route path="/patient" element={<Patient/>} />
        <Route path='/Johnson' element={<Johnson/>}/>
        <Route path='/partice' element={<Partice/>}/>
        <Route path='/calender' element={<Calender/>}/>
        <Route path='/ListOfMedical'element={<ListOfMedical/>}/>
        <Route path='/ListOfMedicalJohnson' element={<ListOfMedicalJohnson/>}/>
        <Route path='/MedicalPartice' element={<MedicalPartice/>}/>
       </Routes>
    </div>
  );
}

export default App;
