import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import { tokens } from "../../theme";

const Line = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="Line Chart" subtitle="Simple Line Chart" />
            <Box
                height="75vh"
                sx={{
                    backgroundColor:
                        theme.palette.mode === "dark" ? colors.primary[400] : "#fcfcfc",
                    p: 2,
                    borderRadius: "8px",
                }}
            >
                <LineChart />
            </Box>
        </Box>
    );
};

export default Line;
