import {
    AppBar,
    Box,
    Button,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton, ListItemText,
    Toolbar,
    Typography
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from "react";
import {navItems} from "../../config/constants";
import CloseIcon from '@mui/icons-material/Close';
import ApiIcon from '@mui/icons-material/Api';


interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}
const drawerWidth = '100%';

const Navbar = ({window}:Props) => {

    const [mobileOpen, setMobileOpen] = useState(false);
    const container = window !== undefined ? () => window().document.body : undefined;


    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };


    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',paddingX:'20px'}}>
                <Box sx={{ my: 2, display:'flex' , alignItems:'center',gap:'5px' }}>
                    <ApiIcon/>
                    <Typography variant="h6" component='div'>
                    Olim
                    </Typography>
                </Box>
                <CloseIcon/>
            </Box>

            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.route} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box height={'10vh'} sx={{display: 'flex'}}>
            <AppBar sx={{height:'10vh',backgroundColor:'#141414'}} component='nav'>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Box sx={{ my: 2,flexGrow: 1, display: {xs: 'none', sm: 'flex'} , alignItems:'center',gap:'5px' }}>
                        <ApiIcon/>
                        <Typography variant="h6" >
                            Olim
                        </Typography>
                    </Box>
                    <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                        {navItems.map((item) => (
                            <Button key={item.route} sx={{color: '#fff'}}>
                                {item.label}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
};

export default Navbar;