export const API_CONFIG = {
    isLive: false,
    localUrl: "http://localhost:5000",
    liveUrl: "https://api.avenstek.com", // Example live URL
    get commonUrl() {
        return this.isLive ? this.liveUrl : this.localUrl;
    }
};

export const API_BASE_URL = API_CONFIG.commonUrl;
export const API_ENDPOINTS = {
    BLOGS: `${API_BASE_URL}/api/content/blogs`,
    CATEGORIES: `${API_BASE_URL}/api/content/categories`,
    AUTHORS: `${API_BASE_URL}/api/content/authors`,
    PRODUCTS: `${API_BASE_URL}/api/content/products`,
    SUBMIT_CONTACT: `${API_BASE_URL}/api/content/contact`,
    SUBSCRIBE: `${API_BASE_URL}/api/content/subscribers`,
    UPLOAD: `${API_BASE_URL}/api/content/upload`,
};
