import { Client, Account, ID } from "appwrite";
import config from "../config/config";

const client = new Client().setEndpoint(config.appwriteUrl).setProject(config.appwriteProjectId);
const account = new Account(client);

async function createUser(email, password, name ) {
	try {
		const user = await account.create(ID.unique(), email, password, name);
		console.log(user);
	} catch (error) {
		console.log(error);
	}
}

async function loginTheUser(email, password) {
	try {
		const login = await account.createEmailPasswordSession(email, password);
		//const userToken = await account.createEmailToken(ID.unique() ,email )
		console.log(login);
	} catch (error) {
		console.log(error);
	}
}
async function logOutUser() {
	try {
		const logout = await account.deleteSessions();
		console.log(logout);
	} catch (error) {
		console.log(error);
	}
}
// async function authUserOTP(token) {
// 	try {
// 		const AuthOTP = await account.updateEmailVerification(token);
// 		console.log(AuthOTP);
// 	} catch (error) {}
// }

async function updatePassword(password) {
	try {
		const updatePass = await account.updatePassword(password);
		console.log("your password is update", updatePass);
		return updatePass;
	} catch (error) {
		 console.log(error)
	}
}

async function updateEmail(email, password) {
	try {
		const updateEmail = await account.updateEmail(email, password);
		console.log("your email is update", updateEmail);
	} catch (err) {
		console.log(err);
	}
}
async function getUserInfo() {
	try {
		const userInfo = await account.get();
		return userInfo;
	} catch (error) {
		console.log(error);
	}
}
export { createUser, loginTheUser, logOutUser, updatePassword, updateEmail, getUserInfo };


