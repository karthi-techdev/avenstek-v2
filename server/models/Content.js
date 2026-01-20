const mongoose = require('mongoose');

// Home Model
const homeSchema = new mongoose.Schema({
    hero: {
        heroTitle: String,
        highlightedText: String,
        heroSubtitle: String
    },
    specializations: [{
        title: String,
        iconName: String,
        order: Number,
        isActive: Boolean
    }],
    seo: {
        title: String,
        description: String,
        keywords: String
    }
}, { timestamps: true });

// About Model
const aboutSchema = new mongoose.Schema({
    hero: {
        heroTitle: String,
        highlightedText: String,
        heroSubtitle: String,
        bannerImage: String,
        primaryBtnText: String,
        primaryBtnUrl: String,
        secondaryBtnText: String,
        secondaryBtnUrl: String
    },
    team: [{
        name: String,
        position: String,
        photo: String,
        order: Number,
        status: Boolean
    }],
    seo: {
        title: String,
        description: String,
        keywords: String
    }
}, { timestamps: true });

// Blog Model
const blogPostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    readTime: String,
    thumbnail: String,
    authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' },
    content: String,
    scrollSpyHeadings: [String],
    publishedAt: { type: Date, default: Date.now },
    status: { type: Boolean, default: true },
    seoTitle: String,
    seoDescription: String,
    seoKeywords: String
}, { timestamps: true });

const categorySchema = new mongoose.Schema({
    name: String,
    slug: String,
    status: { type: Boolean, default: true }
});

const authorSchema = new mongoose.Schema({
    name: String,
    photo: String,
    bio: String
});

// Other models...
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    source: String,
    message: String,
    status: { type: String, default: 'New' }
}, { timestamps: true });

const subscriberSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    source: { type: String, default: 'Website Footer' },
    status: { type: String, default: 'Active' }
}, { timestamps: true });

const faqSchema = new mongoose.Schema({
    question: String,
    answer: String,
    order: Number,
    isActive: { type: Boolean, default: true }
}, { timestamps: true });

const servicesPageSchema = new mongoose.Schema({
    services: [{
        title: String,
        subtext: String,
        iconName: String,
        isFeatured: { type: Boolean, default: false }
    }],
    seo: {
        title: String,
        description: String,
        keywords: String
    }
}, { timestamps: true });

const careersPageSchema = new mongoose.Schema({
    hero: {
        heroTitle: String,
        highlightedText: String,
        heroSubtitle: String,
        ctaText: String,
        images: [String]
    },
    whyAvenstek: [{
        icon: String,
        title: String,
        description: String,
        order: Number
    }],
    principles: [{
        icon: String,
        title: String,
        description: String,
        order: Number
    }],
    seo: {
        title: String,
        description: String,
        keywords: String
    }
}, { timestamps: true });

const departmentSchema = new mongoose.Schema({
    name: String,
    slug: String,
    status: { type: Boolean, default: true }
});

const jobSchema = new mongoose.Schema({
    departmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
    title: String,
    preText: String,
    description: String,
    jobType: String,
    salaryMin: Number,
    salaryMax: Number,
    currency: { type: String, default: 'INR' },
    location: String,
    workMode: String,
    slug: { type: String, unique: true },
    status: { type: Boolean, default: true },
    seoTitle: String,
    seoDescription: String,
    seoKeywords: String
}, { timestamps: true });

const jobApplicationSchema = new mongoose.Schema({
    jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
    name: String,
    email: String,
    phone: String,
    aboutYourself: String,
    resumeFile: String, // Path to file
    status: { type: String, default: 'Review' }
}, { timestamps: true });

const testimonialSchema = new mongoose.Schema({
    name: String,
    position: String,
    company: String,
    text: String,
    photo: String,
    isActive: { type: Boolean, default: true }
}, { timestamps: true });

const settingSchema = new mongoose.Schema({
    companyName: String,
    companyTagline: String,
    companyEmail: String,
    companyPhone: String,
    themeColor: String,
    logoUrl: String,
    faviconUrl: String,
    isMaintenanceMode: { type: Boolean, default: false },
    socials: {
        linkedin: String,
        twitter: String,
        instagram: String,
        facebook: String
    }
}, { timestamps: true });

const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    logo: String,
    redirectUrl: String,
    order: Number,
    status: { type: Boolean, default: true }
}, { timestamps: true });

const footerSchema = new mongoose.Schema({
    categories: [{
        id: String,
        title: String,
        order: Number
    }],
    links: [{
        id: String,
        categoryId: String,
        title: String,
        url: String,
        order: Number,
        status: Boolean
    }]
}, { timestamps: true });

module.exports = {
    Home: mongoose.model('Home', homeSchema),
    About: mongoose.model('About', aboutSchema),
    BlogPost: mongoose.model('BlogPost', blogPostSchema),
    Category: mongoose.model('Category', categorySchema),
    Author: mongoose.model('Author', authorSchema),
    Contact: mongoose.model('Contact', contactSchema),
    Subscriber: mongoose.model('Subscriber', subscriberSchema),
    FAQ: mongoose.model('FAQ', faqSchema),
    ServicesPage: mongoose.model('ServicesPage', servicesPageSchema),
    CareersPage: mongoose.model('CareersPage', careersPageSchema),
    Department: mongoose.model('Department', departmentSchema),
    Job: mongoose.model('Job', jobSchema),
    JobApplication: mongoose.model('JobApplication', jobApplicationSchema),
    Testimonial: mongoose.model('Testimonial', testimonialSchema),
    Setting: mongoose.model('Setting', settingSchema),
    Product: mongoose.model('Product', productSchema),
    Footer: mongoose.model('Footer', footerSchema)
};
