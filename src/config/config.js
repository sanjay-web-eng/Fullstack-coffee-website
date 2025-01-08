const config = {
	appwriteUrl: String(import.meta.env.VITE_APPWRITE_API_ENDPOINT),
	appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
	appwriteDbId: String(import.meta.env.VITE_APPWRITE_DB_ID),
	appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
};

export default config;
