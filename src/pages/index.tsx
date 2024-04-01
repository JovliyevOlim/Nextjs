import React from 'react';
import Head from "next/head";
import {Button} from "@mui/material";
import Layout from "../layout/layout";
import {Hero} from "../component";

function Index() {
    return (
        <Layout>
          <Hero/>
        </Layout>
    );
}

export default Index;