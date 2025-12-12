import { useState,useEffect } from 'react'
import './App.css'
import Dashboard from "./Dashboard.jsx"
import logo from "./assets/logo.svg"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import MainPage from "./MainPage.jsx"
import GoalInput from "./GoalInput.jsx";
import TodayRecord from "./TodayRecord.jsx";

function App() {
    // const navigate = useNavigate();
  const [monthlyGoal,setMonthlyGoal] = useState(0);

    useEffect(() => {
        const getFetch = async() => {
            const res = await fetch('/todos');
            const data = await res.json();
            setMonthlyGoal(data);
        }
    }, []);
  return (
      <BrowserRouter>
          <Routes>
          <Route path = "/" element={<MainPage/>}/>

          <Route path = "/today" element={<TodayRecord/>}/>

          <Route path = "/goal" element={<GoalInput/>}/>


              </Routes>
      </BrowserRouter>



  )
}

export default App
