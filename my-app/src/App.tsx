import React, { useState } from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import clsx from 'clsx';

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ToggleButton from '@material-ui/lab/ToggleButton';

import AppMenu from '../src/components/AppMenu/AppMenu';
import Dashboard from '../src/components/Dashboard/Dashboard';
import Chiropractors from '../src/components/Chiropractors/Chiropractors';
import Patients from '../src/components/Patients/Patients';
import SocialMedia from '../src/components/Share/SocialMedia';

const PageDashboard = () => <Dashboard />
const PageChiropractors = () => <Chiropractors />
const PageOrders = () => <Typography variant="h3" component="h1">Orders Page</Typography>
const PagePatients = () => <Patients />


const App: React.FC = () => {
    const [darkMode, setDarkMode] = useState(false);
    const classes = useStyles()
    const theme = createMuiTheme({
        palette: {
            type: darkMode ? "dark" : "light",
        },
    });
    //clsx allows us to compose string class names
    return (
        <ThemeProvider theme={theme}>
            <Paper>
                <BrowserRouter>
                    <div className={clsx('App', classes.root)}>
                        <CssBaseline />
                        <Drawer variant="permanent" classes={{paper: classes.drawerPaper,}}>
                            <AppMenu />
                            <ToggleButton selected={darkMode} onChange={() => setDarkMode(!darkMode)}>DarkMode</ToggleButton>
                            <SocialMedia />
                        </Drawer>
                        <main className={classes.content}>
                            <Container maxWidth="lg" className={classes.container}>
                                <Switch>
                                    <Route path="/" exact component={PageDashboard} />
                                    <Route path="/chiropractors" exact component={PageChiropractors} />
                                    <Route path="/orders" component={PageOrders} />
                                    <Route path="/patients" component={PagePatients} />
                                </Switch>
                            </Container>
                            
                        </main>
                    </div>
                </BrowserRouter>
            </Paper>
        </ThemeProvider>
    );
}
const drawerWidth = 240

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        background: '#0253B3',
        color: '#fff',
    },
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
   
}));


export default App;
