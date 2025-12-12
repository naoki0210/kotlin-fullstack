import Box from '@mui/material/Box';
import {TextField} from "@mui/material"


function GoalInput() {
    return (

        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            background: " #f5f5f5",
        }}>
            <Box sx={{
                textAlign: "center",
                width: 600,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "#fff",
                borderRadius: 2
            }}>
                <h1>今月の目標</h1>
                <TextField label="目安"
                           sx={{background: "white", mb: 5}}></TextField>
            </Box>
        </Box>
    )
}

export default GoalInput;