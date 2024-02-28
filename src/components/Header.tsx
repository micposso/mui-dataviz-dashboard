import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subtitle }: { title: string, subtitle: string }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return <Box>
    <Typography variant="h2" color={colors.grey[100]} font-weight="bold" sx={{}}>
      {title}
    </Typography>
    <Typography variant="h5" color={colors.greenAccent[400]}>
      {subtitle}
      </Typography>
  </Box>
}

export default Header;