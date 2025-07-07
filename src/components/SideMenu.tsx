import type { JSX } from "@emotion/react/jsx-runtime";
import * as React from "react";
import {
  styled,
  useTheme,
  type Theme,
  type CSSObject,
} from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, {
  type AppBarProps as MuiAppBarProps,
} from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GridViewIcon from "@mui/icons-material/GridView";
import SourceIcon from '@mui/icons-material/Source';
import DescriptionIcon from '@mui/icons-material/Description';
import { Link } from "react-router";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const drawerWidth = 320;

interface MainMenuProps {
    name: string,
    path: string,
    icon: JSX.Element,
    collapseable : boolean
}

const mainMenu: MainMenuProps[] = [
    {
        name: "Target Recommendation",
        path: "",
        icon: <GridViewIcon sx={{ color: "white"}}/>,
        collapseable: false
    },
    {
        name: "Master",
        path: "masterData",
        icon: <SourceIcon sx={{ color: "white"}}/>,
        collapseable: true
    },
    {
        name: "Report",
        path: "reportData",
        icon: <DescriptionIcon sx={{ color: "white"}}/>,
        collapseable: true
    },
    {
        name: "Log Audit",
        path: "logData",
        icon: <DescriptionIcon sx={{ color: "white"}}/>,
        collapseable: true
    }
]

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  backgroundColor: "#660404",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  backgroundColor: "#660404",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  backgroundColor: "#900404",
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

export default function SideMenuPage(props: { content: JSX.Element }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openM1, setOpenM1] = React.useState(false);
  const [openM2, setOpenM2] = React.useState(false);
  const [openM3, setOpenM3] = React.useState(false);
  const [selectedMenu, setSelectedMenu] = React.useState("")

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClickMenu = (data: string) =>{
    setSelectedMenu(data)
    if(data === "Master"){
        setOpenM1(!openM1)
    }
    if(data === "Report"){
        setOpenM2(!openM2)
    }
    if(data === "Log Audit"){
        setOpenM3(!openM3)
    }
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: "none" },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
            {
                mainMenu.map((val,index) => !val.collapseable ? (
                    <Link to={val.path} key={index} style={{ textDecoration: "none", color: "white" }}>
            <ListItemButton selected={ selectedMenu === val.name ? true : false}>
            <ListItemIcon >
              {
                val.icon
              }
            </ListItemIcon>
            <ListItemText primary={val.name} sx={{ ml: open ? -2 : 0}} />
          </ListItemButton>
            </Link>
                ) : (<ListItemButton onClick={() => handleClickMenu(val.name)}>
            <ListItemIcon >
              {
                val.icon
              }
            </ListItemIcon>
            <ListItemText primary={val.name} sx={{ ml: open ? -2 : 0, color: "white"}} />
            {
                val.name === "Master" ? (openM1 ? <ExpandLess sx={{ color: "white"}}/> : <ExpandMore sx={{ color: "white"}}/>) : 
                val.name === "Report" ? (openM2 ? <ExpandLess sx={{ color: "white"}}/> : <ExpandMore sx={{ color: "white"}}/>) :
                val.name === "Log Audit" ? (openM3 ? <ExpandLess sx={{ color: "white"}}/> : <ExpandMore sx={{ color: "white"}}/>) : null

            }
          </ListItemButton>))
            }
            
          
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {props.content}
      </Box>
    </Box>
  );
}
