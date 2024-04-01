import 'src/styles/globals.css'
import type {AppProps} from 'next/app'
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import {ThemeProvider} from '@mui/material'
import theme from 'src/helpers/theme'
import Head from "next/head";
import {CssBaseline} from "@mui/material";


function MyApp({Component, pageProps}: AppProps) {


    return (
        <AppRouterCacheProvider>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Component {...pageProps} />
            </ThemeProvider>
        </AppRouterCacheProvider>

    )

}

export default MyApp
