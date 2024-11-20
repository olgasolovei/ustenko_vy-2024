const events = [];

function addEvent(obj) {
    events.push(obj);
}

function getEvents() {
    return events;
}

function processEvents(eventsToProcess) {
    return eventsToProcess.filter((event) => (event.telemetry.temperature > 70)).map((event, index) => ({
        id: index,
        type: event.telemetry.temperature > 85 ? 'HIGH_DANGER' : 'MEDIUM_DANGER',
        location: index % 3 ? 'SITE_A' : 'SITE_B',
        date: event.enqueuedTime,
        state: index % 2 ? 'ON' : 'OFF',
    }));
}

module.exports = {
    addEvent,
    getEvents,
    processEvents
}
