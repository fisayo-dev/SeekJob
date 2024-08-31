import { Databases, Client, Account } from "appwrite";

const client = new Client();

client
  .setEndpoint(import.meta.env.VITE_ENDPOINT)
  .setProject(import.meta.env.VITE_PROJECT_ID);

const databases = new Databases(client);
const account = new Account(client);
// const users = new Users(client);

export { client, databases, account };
