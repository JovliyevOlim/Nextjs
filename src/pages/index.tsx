import React from 'react';
import Head from "next/head";
import {Box, Button} from "@mui/material";
import Layout from "../layout/layout";
import {Content, Hero, Sidebar} from "../component";

function Index() {
    return (
        <Layout>
          <Hero/>
            <Box sx={{display:'flex',gap:'20px',padding:'20px'}}>
                <Sidebar/>
                <Content/>
            </Box>
        </Layout>
    );
}

export default Index;