import React from 'react';
import Head from "next/head";
import {Button} from "@mui/material";
import Layout from "../layout/layout";

function Index() {
    return (
        <Layout>
            <Head>
                <title>Index</title>
            </Head>
        <div>Indexpage</div>
            <Button>Click</Button>
        </Layout>
    );
}

export default Index;