import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subtitle }: { title: string, subtitle: string }) => {
  const theme = useTheme();
  const color = tokens(theme.palette.mode);
  return <Box>
    <Typography>
      {title}
    </Typography>
    <Typography>
      {subtitle}
      </Typography>
  </Box>
}

export default Header;