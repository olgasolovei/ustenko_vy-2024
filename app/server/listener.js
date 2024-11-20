const { EventHubConsumerClient } = require("@azure/event-hubs");
const { addEvent } = require("./event");

const connectionString = "<connection string>";
const eventHubName = "ustenko-tele";
const consumerGroup = "$Default";

const main = async () => {
    const consumerClient = new EventHubConsumerClient(
        consumerGroup,
        connectionString,
        eventHubName
    );

    console.log("Starting event hub consumer...");

    const subscription = consumerClient.subscribe(
        {
            processEvents: async (events, context) => {
                for (const event of events) {
                    addEvent(event.body);
                    console.log("Received event: ", event.body);
                    console.log("Properties: ", event.properties);
                }
            },
            processError: async (err, context) => {
                console.error(`Error processing events: ${err.message}`);
            },
        }
    );

    process.on("SIGINT", async () => {
        console.log("Shutting down...");
        await subscription.close();
        await consumerClient.close();
        console.log("Event hub consumer closed.");
        process.exit(0);
    });
};

module.exports = { main };
