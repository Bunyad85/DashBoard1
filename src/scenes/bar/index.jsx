import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import { tokens } from "../../theme";

const Bar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="Bar Chart" subtitle="Simple Bar Chart" />
            <Box
                height="75vh"
                backgroundColor={colors.primary[400]}
                borderRadius="4px"
                p="10px"
            >
                <BarChart />
            </Box>
        </Box>
    );
};

export default Bar;
