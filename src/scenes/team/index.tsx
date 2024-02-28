import { Typography, Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { data } from "../../data/data";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockedOpenOutlinedIcon from "@mui/icons-material/LcokedOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";


const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [{ field: "id", headerName: "ID"}, { field: "name", headerName: "Name", flex: 1, }];
  return (
    <Box>
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Box>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </Box>
    </Box>
  );
};

export default Header;
