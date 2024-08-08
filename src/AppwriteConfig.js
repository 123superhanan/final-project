import { Client, Account } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66b4b960001e0921e718');
    export const account = new Account(client);
export default client