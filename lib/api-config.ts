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
    HOME: `${API_BASE_URL}/api/content/home`,
    ABOUT: `${API_BASE_URL}/api/content/about`,
    SERVICES: `${API_BASE_URL}/api/content/services`,
    BLOGS: `${API_BASE_URL}/api/content/blogs`,
    CATEGORIES: `${API_BASE_URL}/api/content/categories`,
    AUTHORS: `${API_BASE_URL}/api/content/authors`,
    PRODUCTS: `${API_BASE_URL}/api/content/products`,
    FAQS: `${API_BASE_URL}/api/content/faqs`,
    TESTIMONIALS: `${API_BASE_URL}/api/content/testimonials`,
    CAREERS_CONFIG: `${API_BASE_URL}/api/content/careers/config`,
    DEPARTMENTS: `${API_BASE_URL}/api/content/departments`,
    JOBS: `${API_BASE_URL}/api/content/jobs`,
    APPLICATIONS: `${API_BASE_URL}/api/content/applications`,
    CONTACTS: `${API_BASE_URL}/api/content/contacts`,
    SUBSCRIBERS: `${API_BASE_URL}/api/content/subscribers`,
    FOOTER: `${API_BASE_URL}/api/content/footer`,
    SETTINGS: `${API_BASE_URL}/api/content/settings`,
    TERMS: `${API_BASE_URL}/api/content/terms`,
    PRIVACY: `${API_BASE_URL}/api/content/privacy`,
    SEARCH: `${API_BASE_URL}/api/content/search`,
    UPLOAD: `${API_BASE_URL}/api/content/upload`,
    TRACK_VISITOR: `${API_BASE_URL}/api/content/track-visitor`,
    NOTIFICATIONS: `${API_BASE_URL}/api/content/notifications`,
    DASHBOARD_STATS: `${API_BASE_URL}/api/content/dashboard-stats`,
};
