import conf from '../conf/conf.js'
import { Client, Account, ID} from 'appwrite';

// const client = new Client()
//     .setEndpoint('https://cloud.appwrite.io/v1')
//     .setProject('<YOUR_PROJECT_ID>'); // Replace with your project ID

// const account = new Account(client);

// const user = await account.create(
//     ID.unique(),
//     'email@example.com',
//     'password'
// ); this is older way 

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)
    
    }
    async createAccount({email, password, name}){
        try {
        const userAccount = await this.account.create(ID.unique(), email, password, name)  
        if (userAccount) {
            // call another method
            return this.login(email, password)
        } else {
            return userAccount;
        }
        } catch (error) {
            throw error;
        }
    }
    
    async login({email, password}){
        try {
         return await this.account.createEmailSession(email,password)
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get() ;
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }

        return null
    }

    async logout() {
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService;

