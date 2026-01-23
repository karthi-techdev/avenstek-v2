"use client";

import { useEffect, useRef } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '@/lib/api-config';

const VisitorTracker = () => {
    const initialized = useRef(false);

    useEffect(() => {
        if (initialized.current) return;
        initialized.current = true;

        const trackVisitor = async () => {
            try {
                // Get IP and Location Data from ipapi.co (Free tier, no key needed for basic usage)
                // Alternatively could use ipinfo.io, etc.
                const { data } = await axios.get('https://ipapi.co/json/');

                const visitorData = {
                    ip: data.ip,
                    city: data.city,
                    country: data.country_name,
                    browser: 'Chrome', // Simplification, real detection needs userAgent parsing
                    os: 'Windows', // Simplification
                    device: window.innerWidth < 768 ? 'Mobile' : 'Desktop'
                };

                // Add simple User Agent parsing
                const ua = window.navigator.userAgent;
                if (ua.indexOf("Firefox") > -1) visitorData.browser = "Firefox";
                else if (ua.indexOf("Safari") > -1 && ua.indexOf("Chrome") === -1) visitorData.browser = "Safari";
                else if (ua.indexOf("Chrome") > -1) visitorData.browser = "Chrome";
                else if (ua.indexOf("Edge") > -1) visitorData.browser = "Edge";

                if (ua.indexOf("Win") > -1) visitorData.os = "Windows";
                else if (ua.indexOf("Mac") > -1) visitorData.os = "MacOS";
                else if (ua.indexOf("Linux") > -1) visitorData.os = "Linux";
                else if (ua.indexOf("Android") > -1) visitorData.os = "Android";
                else if (ua.indexOf("like Mac") > -1) visitorData.os = "iOS";

                // Send to backend
                // Adjust based on your API URL - since this is client side, we use full URL or proxy if setup
                // Assuming nextjs rewrites or accessible via localhost:5000 if cors allowed
                // But wait, the previous code uses `api` lib which points to localhost:5000
                // We should use axios directly to avoid auth interceptors if any (visitor tracking is public)

                await axios.post(`${API_BASE_URL}/api/content/track-visitor`, visitorData);

            } catch (error) {
                console.error("Tracking Error:", error);
            }
        };

        trackVisitor();
    }, []);

    return null; // Invisible component
};

export default VisitorTracker;
