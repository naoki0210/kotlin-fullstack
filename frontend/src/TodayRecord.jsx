import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import {Modal} from "@mui/material" ;
import Button from '@mui/material/Button';
import {useEffect, useState} from "react";
import {TextField} from "@mui/material";
import {MenuItem} from "@mui/material";
import {useNavigate} from 'react-router-dom';

function TodayRecord() {
    const navigate = useNavigate()
    const [drinkName, setDrinkName] = useState('');
    const [drinkCount, setDrinkCount] = useState('')
    const [percent, setPercent] = useState('')
    const [volume, setVolume] = useState('')
    const [modal, setModal] = useState(false);
    const [recordArray, setRecordArray] = useState([])

    function handleChange(e) {
        setDrinkName(e.target.value);
    }

    function handleCountChange(e) {
        setDrinkCount(e.target.value)
    }

    function percentFunc(e) {
        setPercent((e.target.value))
        console.log(percent)
    }

    function countFunc(e) {
        setDrinkCount(e.target.value);

    }

    function volumeFunc(e) {
        setVolume(e.target.value);
    }

    function modalOnOff() {
        setModal(!modal);
    }

    const del = async (id) => {
        const delArray = recordArray.filter((obj) => obj.id !== id);
        setRecordArray(delArray);
        await fetch(`/api/drinks/${id}`, {
            method: 'DELETE',
        });
    }
    const putFetch = async () => {
        const body = {
            drinkName: drinkName,
            volume: Number(volume),
            count: Number(drinkCount),
            percent: Number(percent),
            alcohol: Number(alcohol),
        }
    }

    const postFetch = async () => {
        const alcohol = Number(volume) * Number(drinkCount) * Number(percent / 100) * 0.8;
        const body = {
            drinkName: drinkName,
            volume: Number(volume),
            count: Number(drinkCount),
            percent: Number(percent),
            alcohol: Number(alcohol),
        }

        const res = await fetch('/api/drinks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        const data = await res.json()
        setRecordArray([...recordArray, data])
        setModal(false);
    }

    useEffect(() => {
        (async function () {
            const res = await fetch("/api/log/week");
            const data = await res.json();
            return setRecordArray(data);
        })()
    }, []);
    const selectBox = [
        {label: "ビール", value: "ビール"},
        {label: "チューハイ", value: "チューハイ"},
        {label: "日本酒", value: "日本酒"},
        {label: "ワイン", value: "ワイン"}
    ];


    return (
        <>
            <Box sx={{textAlign: "center"}}>
                <div className="title-history">1週間の履歴</div>
                <Button onClick={() => setModal(true)}>今日の記録を追加</Button>

                <Table>
                    <TableHead>
                        <TableRow sx={{borderBottom:"1px solid #ccc"}}>
                            <TableCell align="center">種類</TableCell>
                            <TableCell align="center">容量</TableCell>
                            <TableCell align="center">本数</TableCell>
                            <TableCell align="center">度数</TableCell>
                            <TableCell align="center">アルコール量</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {recordArray.map((obj) => (

                            <TableRow key={obj.id}>
                                <TableCell align="center">{obj.drinkName}</TableCell>
                                <TableCell align="center">{obj.volume}ml</TableCell>
                                <TableCell align="center">{obj.count}本</TableCell>
                                <TableCell align="center">{obj.percent}%</TableCell>
                                <TableCell align="center">{obj.alcohol}g</TableCell>
                                <TableCell>
                                    <Button onClick={() => del(obj.id)}>削除</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Button onClick={() => navigate("/")}>戻る</Button>
            </Box>
            <Modal open={modal} onClose={() => setModal(false)}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh'
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        maxWidth: 300,
                        bgcolor: "white",
                        p: 3

                    }}>

                        <TextField
                            className="textfield"
                            id="selectbox"
                            label="種類"
                            sx={{width: 200}}
                            select
                            value={drinkName}
                            onChange={handleChange}
                        >
                            {selectBox.map((item, index) => (
                                <MenuItem key={index} value={item.value} className="menu-item">
                                    {item.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField label="容量(ml)"
                                   type="number"
                                   onChange={volumeFunc}
                        >
                        </TextField>
                        <TextField label="何本飲んだか"
                                   type="number"
                                   onChange={countFunc}
                        >
                        </TextField>
                        <TextField label="アルコール度数"
                                   type="number"
                                   onChange={percentFunc}
                        >
                        </TextField>
                        <Button onClick={postFetch}>追加</Button>
                        <Button onClick={() => setModal(false)}>閉じる</Button>
                    </Box>
                </Box>
            </Modal>

        </>
    )
}

export default TodayRecord;