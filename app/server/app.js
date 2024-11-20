const express = require('express');
const cors = require('cors')

const { getEvents, processEvents } = require('./event');
const { main } = require('./listener');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/events', async (req, res) => {
    try {
        const events = getEvents();

        const processedEvents = processEvents(events);

        res.json(processedEvents);
    } catch (e) {
        console.log(e);
        res.status(500).send('Error');
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
main();
