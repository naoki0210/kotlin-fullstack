import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';

import BasicBars from "./barChart.jsx";

import './App.css'
import WeekBars from "./barWeekChart.jsx";

function Dashboard({drinkLog, drinkWeek}) {

    const totalCount = drinkLog.reduce((acc, obj) => acc + obj.count, 0);
    const totalVolume = drinkLog.reduce((acc, obj) => acc + obj.volume, 0);
    const totalAlcohol = drinkLog.reduce((acc, obj) => acc + obj.alcohol, 0);
    const totalWeekCount = drinkWeek.reduce((acc, obj) => acc + obj.count, 0)
    const totalWeekVolume = drinkWeek.reduce((acc, obj) => acc + obj.volume, 0)
    const totalWeekAlcohol = drinkWeek.reduce((acc, obj) => acc + obj.alcohol, 0)

    return (
        <section className="card">
            <Box sx={{
                border: "2px solid #ddd",
                borderRadius: "12px",
                padding: "20px",
                mb: 4,
                backgroundColor: "#fafafa"
            }}>
                <div className="section-headline">
                    <div className="section-title">今日の飲酒履歴</div>
                </div>

                <Box sx={{textAlign: "center", mt: 5, width: "100%"}}>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell align="center">総本数</TableCell>
                                <TableCell align="center">総容量</TableCell>
                                <TableCell align="center">総アルコール量</TableCell>
                            </TableRow>
                            <TableRow sx={{backgroundColor: "#f5f5f5"}}>
                                <TableCell align="center">{totalCount}本</TableCell>
                                <TableCell align="center">{totalVolume}ml</TableCell>
                                <TableCell align="center">{totalAlcohol}g</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Box>
                <BasicBars totalCount={totalAlcohol} totalVolume={totalVolume} totalAlcohol={totalAlcohol}/>
            </Box>

            <Box sx={{
                border: "2px solid #ddd",
                borderRadius: "12px",
                padding: "20px",
                backgroundColor: "#fafafa"
            }}>
                <div className="section-headline">
                    <div className="section-title">1週間の合計</div>
                </div>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell align="center">総本数</TableCell>
                            <TableCell align="center">総容量</TableCell>
                            <TableCell align="center">総アルコール量</TableCell>
                        </TableRow>
                        <TableRow sx={{backgroundColor: "#f5f5f5"}}>
                            <TableCell align="center">{totalWeekCount}本</TableCell>
                            <TableCell align="center">{totalWeekVolume}ml</TableCell>
                            <TableCell align="center">{totalWeekAlcohol}g</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <WeekBars drinkWeek={drinkWeek}/>
            </Box>

        </section>
    );
}

export default Dashboard;