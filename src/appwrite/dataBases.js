import { Client, Databases, ID, Query } from "appwrite";
import config from "../config/config";

const client = new Client().setEndpoint(config.appwriteUrl).setProject(config.appwriteProjectId);
const database = new Databases(client);

function storeAlldData(name, dec, price, img , category ) {
	try {
		const promisss = database.createDocument(
			config.appwriteDbId,
			config.appwriteCollectionId,
			ID.unique(),
			{ name:name, dec:dec, price:price, img:img ,category:category}
		);
		promisss.then(
			function (res) {
				console.log(res);
			},
			function (err) {
				console.log(err);
			}
		);
	} catch (error) {
		console.log(error);
	}
}
function listForHomePage() {
	try {
		return database
			.listDocuments(config.appwriteDbId, config.appwriteCollectionId, [Query.limit(8)])
			.then(
				function (res) {
					return res;
				},
				function (err) {
					console.log(err);
					throw err;
				}
			);
	} catch (error) {
		console.log(error);
	}
}
function getAllData() {
	try {
		return database.listDocuments(config.appwriteDbId, config.appwriteCollectionId, []).then(
			function (res) {
				return res.documents;
			},
			function (err) {
				console.log(err);
				throw err;
			}
		);
	} catch (error) {
		console.log(error);
	}
}
function listForDetailsPage(id) {
	try {
		return database.listDocuments(config.appwriteDbId, config.appwriteCollectionId, [
			Query.equal("$id", id),
		]);
	} catch (error) {
		console.log(error);
	}
}
function listForcategory(category) {
	try {
		return database.listDocuments(config.appwriteDbId, config.appwriteCollectionId, [
			Query.equal("category", category),
		]);
	} catch (error) {
		console.log(error);
	}
}
listForHomePage()
	.then((data) => {
		//console.log("Fetched data:", data);
	})
	.catch((err) => {
		console.error("Error fetching data:", err);
	});

getAllData()
	.then((data) => {
		//console.log("Fetched data:", data);
	})
	.catch((err) => {
		console.error("Error fetching data:", err);
	});

listForDetailsPage()
	.then((res) => {
		//console.log(res);
	})
	.catch((err) => {
		console.log(err);
	});
export { listForHomePage, storeAlldData, getAllData, listForDetailsPage , listForcategory};
