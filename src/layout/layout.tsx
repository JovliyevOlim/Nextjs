import {LayoutProps} from "./layout.props";
import {Footer, Navbar} from "../component";
import {Box} from "@mui/material";

function Layout({children}: LayoutProps) {
    return (
        <>
            <Navbar/>
            <Box minHeight={'90vh'}>
                {children}
            </Box>
            <Footer/>
        </>
    );
}

export default Layout;