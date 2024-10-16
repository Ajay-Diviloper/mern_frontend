import { BrowserRouter as Router, Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Employeemamange from './components/Employeemamange';
import Employeedetail from './components/Employeedetail';
function App() {
  return (
    <div>
   <BrowserRouter>
   <Routes>
    <Route path='/' element = {<Navigate to = 'employee' />} />
    <Route path='/employee' element = {<Employeemamange/>}/>
    <Route path='/employee/:id' element = {<Employeedetail/>}/>
    <Route path='/'/>
   </Routes>
   </BrowserRouter>
 
    </div>
  );
}

export default App;
