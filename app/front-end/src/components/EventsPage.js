import React, { useState, useEffect } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { getEvents } from '../api';

const EventsPage = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        setInterval(() => fetchEvents().then((data) => setEvents(data.data)), 10000);
    }, []);

    const fetchEvents = async () => {
        try {
            return await getEvents();
        } catch (error) {
            console.error('Error fetching clients', error);
        }
    };

    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>Notifications Management</Typography>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Location</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>State</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {events.map((event) => (
                            <TableRow key={event.id}>
                                <TableCell>{event.id}</TableCell>
                                <TableCell>{event.type}</TableCell>
                                <TableCell>{event.location}</TableCell>
                                <TableCell>{event.date}</TableCell>
                                <TableCell>{event.state}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default EventsPage;
