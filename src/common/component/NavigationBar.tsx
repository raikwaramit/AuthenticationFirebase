import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../datastore/Store";
import { red } from "@mui/material/colors";

export default function NavigationComponent() {
  const state = useSelector((state: RootState) => state.auth);
  console.log("Render nsvigstion bar");
  console.log(state);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to="/"> Firebase Authentication</NavLink>
          </Typography>
          {state.authToken !== "" ? <AfterNavLinks /> : <BeforeNavLinks />}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

function BeforeNavLinks() {
  return (
    <div className=" flex">
      <Button color="inherit" sx={{ p: 0, m: 1 }}>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? " bg-blue-800 rounded-lg p-2" : " bg-inherit p-2"
          }
        >
          Login
        </NavLink>
      </Button>
      <Button color="inherit" sx={{ p: 0, m: 1 }}>
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            isActive ? " bg-blue-800 rounded-lg p-2" : " bg-inherit p-2"
          }
        >
          Sign-Up
        </NavLink>
      </Button>
    </div>
  );
}

function AfterNavLinks() {
  return (
    <Button color="inherit" sx={{ p: 0, m: 1, bgcolor: red }}>
      Logout
    </Button>
  );
}
