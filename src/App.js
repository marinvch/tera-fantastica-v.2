import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";

const App = () => {
  return (
    <Grid container>
      <Navbar />
      <Outlet />
    </Grid>
  );
};

export default App;
