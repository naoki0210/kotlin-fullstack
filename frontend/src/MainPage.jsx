import {useState, useEffect} from 'react'
import './App.css'
import Dashboard from "./Dashboard.jsx"
import logo from "./assets/logo.svg"
import {useNavigate} from 'react-router-dom';
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";

function MainPage() {
    const navigate = useNavigate();
    const [monthlyGoal, setMonthlyGoal] = useState(0);
    const [total, setTotal] = useState(0);
    const [drinkLog, setDrinkLog] = useState([])
    const [drinkWeek, setDrinkWeek] = useState([])
    const test = async () => {
        const resGoal = await fetch("/todos");
        const resTotal = await fetch("/");
        const goalData = await resGoal.json();
        const totalData = await resTotal.json();
        setMonthlyGoal(goalData[0].text);
        setMonthly(totalData)
    }
    const tes = async () => {
        const res = await fetch("/todos", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"text": "こんにちは"})
        })
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/log/today');
            const resWeek = await fetch('/api/log/week');
            console.log(resWeek)
            const data = await res.json();
            const dataWeek = await resWeek.json()
            setDrinkLog(data)
            setDrinkWeek(dataWeek)

        }
        fetchData()
    }, []);
    return (
        <div className="app">

            <header className="header">
                <div className="header-logo">
                    <img className="img" src={logo} alt="ビールのアイコン"/>
                    <h1 className="title">ほろ酔いノート</h1>
                </div>
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="list" onClick={() => navigate("/today")}>記録する</li>
                    </ul>
                </nav>
            </header>
            <main className="main">

                <Dashboard drinkLog={drinkLog} drinkWeek={drinkWeek}></Dashboard>
            </main>
            <Table sx={{width: "90%", margin: "0 auto"}}>
                <TableBody>
                    <TableRow>
                        <TableCell colSpan={5} sx={{textAlign: "center", fontWeight: "bold"}}
                                   align="center">今日の履歴</TableCell>

                    </TableRow>
                    {drinkLog.map(log => {
                        return (
                            <TableRow sx={{backgroundColor: "#fff", borderRadius: "12px"}} key={log.id}>
                                <TableCell>{log.drinkName}</TableCell>
                                <TableCell>{log.count}本</TableCell>
                                <TableCell>{log.volume}ml</TableCell>
                                <TableCell>{log.percent}%</TableCell>
                                <TableCell>{log.alcohol}g</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>


    )
}

export default MainPage
