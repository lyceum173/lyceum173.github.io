import { Client, Databases, ID } from 'appwrite';

// Default Client (for the original project)
const client = new Client();
client
    .setEndpoint('https://fra.cloud.appwrite.io/v1') // Your Appwrite endpoint
    .setProject('680f7897001b68a25d54'); // Your original project ID

// Database instance for the original project
const databases = new Databases(client);

// New Client (for the clicks project)
const clicksClient = new Client();
clicksClient
    .setEndpoint('https://fra.cloud.appwrite.io/v1') // Your Appwrite endpoint
    .setProject('680fb6db0003b7ec596e'); // Replace with your new project's ID for clicks

// Database instance for the clicks project
const clicksDatabases = new Databases(clicksClient);

// Export both database instances
export { client, databases, ID, clicksClient, clicksDatabases };
