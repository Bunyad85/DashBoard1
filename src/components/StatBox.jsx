// StatBox.jsx
import { Box, Typography, useTheme, Tooltip } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({
    title,
    subtitle,
    icon,
    progress,
    increase,
    circleSize = 50,
    subtitleColor,
    increaseColor,
}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box
            width="100%"
            sx={{
                m: { xs: "0 10px", sm: "0 20px", md: "0 30px" },
                p: "15px",
                backgroundColor: colors.primary[400],
                borderRadius: "8px",
            }}
        >
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box display="flex" alignItems="center" gap="10px">
                    {icon}
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        sx={{ color: colors.grey[100] }}
                    >
                        {title}
                    </Typography>
                </Box>
                <Tooltip title={`Progress: ${progress}%`}>
                    <Box>
                        <ProgressCircle progress={progress} size={circleSize} />
                    </Box>
                </Tooltip>
            </Box>

            <Box display="flex" justifyContent="space-between" mt="5px">
                <Typography
                    variant="h5"
                    sx={{ color: subtitleColor || colors.greenAccent[500] }}
                >
                    {subtitle}
                </Typography>
                <Typography
                    variant="h5"
                    fontStyle="italic"
                    sx={{ color: increaseColor || colors.greenAccent[600] }}
                >
                    {increase}
                </Typography>
            </Box>
        </Box>
    );
};

export default StatBox;
