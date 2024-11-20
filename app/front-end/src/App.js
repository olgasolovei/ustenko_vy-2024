import './App.css';
import EventsPage from "./components/EventsPage";
import {AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";

function App() {
  return (
    <div className="App">
        <AppBar position="sticky" sx={{ width: '100%' }}>
            <Toolbar sx={{ display: 'flex', flexGrow: 1, alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant="h6">
                    Management System
                </Typography>
                <Box>
                    <Button color="inherit">
                        Events
                    </Button>
                    <Button color="inherit">
                        Notifications
                    </Button>
                    <Button color="inherit">
                        Users
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
      <EventsPage />
    </div>
  );
}

export default App;
