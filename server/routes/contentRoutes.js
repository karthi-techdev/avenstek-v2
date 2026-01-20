const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const upload = require('../middleware/upload');
const {
    Home, About, BlogPost, Category, Author, Contact,
    Subscriber, FAQ, ServicesPage, CareersPage, Department, Job,
    JobApplication, Testimonial, Setting, Product, Footer
} = require('../models/Content');

// --- Helper for Single Document (Home, About, Settings) ---
const handleSingleDoc = (Model) => async (req, res) => {
    try {
        let doc = await Model.findOne();
        if (req.method === 'GET') {
            return res.json(doc || {});
        }
        if (req.method === 'POST' || req.method === 'PUT') {
            if (doc) {
                doc = await Model.findOneAndUpdate({}, req.body, { new: true });
            } else {
                doc = await Model.create(req.body);
            }
            return res.json(doc);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// --- Routes ---

// Home Page
router.route('/home').get(handleSingleDoc(Home)).post(protect, handleSingleDoc(Home));

// About Page
router.route('/about').get(handleSingleDoc(About)).post(protect, handleSingleDoc(About));

// Settings
router.route('/settings').get(handleSingleDoc(Setting)).post(protect, handleSingleDoc(Setting));

// Blogs
router.route('/blogs').get(async (req, res) => {
    const blogs = await BlogPost.find().populate('categoryId').populate('authorId');
    res.json(blogs);
}).post(protect, async (req, res) => {
    try {
        const data = { ...req.body };
        if (data.categoryId === "") delete data.categoryId;
        if (data.authorId === "") delete data.authorId;
        const blog = await BlogPost.create(data);
        res.json(blog);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.route('/blogs/:id').get(async (req, res) => {
    const blog = await BlogPost.findById(req.params.id);
    res.json(blog);
}).put(protect, async (req, res) => {
    try {
        const data = { ...req.body };
        if (data.categoryId === "") delete data.categoryId;
        if (data.authorId === "") delete data.authorId;
        const blog = await BlogPost.findByIdAndUpdate(req.params.id, data, { new: true });
        res.json(blog);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}).delete(protect, async (req, res) => {
    await BlogPost.findByIdAndDelete(req.params.id);
    res.json({ message: 'Blog deleted' });
});

// Categories
router.route('/categories')
    .get(async (req, res) => res.json(await Category.find()))
    .post(protect, async (req, res) => res.json(await Category.create(req.body)));

router.route('/categories/:id')
    .put(protect, async (req, res) => res.json(await Category.findByIdAndUpdate(req.params.id, req.body, { new: true })))
    .delete(protect, async (req, res) => {
        await Category.findByIdAndDelete(req.params.id);
        res.json({ message: 'Category deleted' });
    });

// Authors
router.route('/authors')
    .get(async (req, res) => res.json(await Author.find()))
    .post(protect, async (req, res) => res.json(await Author.create(req.body)));

router.route('/authors/:id')
    .put(protect, async (req, res) => res.json(await Author.findByIdAndUpdate(req.params.id, req.body, { new: true })))
    .delete(protect, async (req, res) => {
        await Author.findByIdAndDelete(req.params.id);
        res.json({ message: 'Author deleted' });
    });

// Services Page
router.route('/services').get(handleSingleDoc(ServicesPage)).post(protect, handleSingleDoc(ServicesPage));

// FAQs
router.route('/faqs')
    .get(async (req, res) => res.json(await FAQ.find().sort('order')))
    .post(protect, async (req, res) => {
        try {
            if (Array.isArray(req.body)) {
                await FAQ.deleteMany({});
                const cleaned = req.body.map(({ _id, id, ...rest }) => rest);
                const result = await FAQ.insertMany(cleaned);
                return res.json(result);
            }
            const faq = await FAQ.create(req.body);
            res.json(faq);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });

router.route('/faqs/:id')
    .put(protect, async (req, res) => res.json(await FAQ.findByIdAndUpdate(req.params.id, req.body, { new: true })))
    .delete(protect, async (req, res) => {
        await FAQ.findByIdAndDelete(req.params.id);
        res.json({ message: 'FAQ deleted' });
    });

// Testimonials
router.route('/testimonials')
    .get(async (req, res) => res.json(await Testimonial.find()))
    .post(protect, async (req, res) => {
        try {
            if (Array.isArray(req.body)) {
                await Testimonial.deleteMany({});
                const cleaned = req.body.map(({ _id, id, ...rest }) => rest);
                const result = await Testimonial.insertMany(cleaned);
                return res.json(result);
            }
            const testimonial = await Testimonial.create(req.body);
            res.json(testimonial);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });

router.route('/testimonials/:id')
    .put(protect, async (req, res) => res.json(await Testimonial.findByIdAndUpdate(req.params.id, req.body, { new: true })))
    .delete(protect, async (req, res) => {
        await Testimonial.findByIdAndDelete(req.params.id);
        res.json({ message: 'Testimonial deleted' });
    });

// Products (Navbar Dropdown)
router.route('/products')
    .get(async (req, res) => res.json(await Product.find().sort('order')))
    .post(protect, async (req, res) => {
        try {
            if (Array.isArray(req.body)) {
                // Batch update/sync: delete current and insert new
                // Note: This is a simple implementation. For production, you might want to match by ID.
                await Product.deleteMany({});
                const cleanedProducts = req.body.map(({ _id, id, ...rest }) => rest);
                const result = await Product.insertMany(cleanedProducts);
                return res.json(result);
            }
            const product = await Product.create(req.body);
            res.json(product);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });

router.route('/products/:id')
    .put(protect, async (req, res) => res.json(await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })))
    .delete(protect, async (req, res) => {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: 'Deleted' });
    });

// Careers Configuration (Singleton)
router.route('/careers/config').get(handleSingleDoc(CareersPage)).post(protect, handleSingleDoc(CareersPage));

// Departments
router.route('/departments')
    .get(async (req, res) => res.json(await Department.find()))
    .post(protect, async (req, res) => {
        try {
            if (Array.isArray(req.body)) {
                await Department.deleteMany({});
                const cleaned = req.body.map(({ _id, id, ...rest }) => rest);
                return res.json(await Department.insertMany(cleaned));
            }
            res.json(await Department.create(req.body));
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });

router.route('/departments/:id').delete(protect, async (req, res) => {
    await Department.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
});

// Jobs
router.route('/jobs')
    .get(async (req, res) => res.json(await Job.find().populate('departmentId')))
    .post(protect, async (req, res) => {
        try {
            if (Array.isArray(req.body)) {
                await Job.deleteMany({});
                const cleaned = req.body.map(({ _id, id, ...rest }) => rest);
                return res.json(await Job.insertMany(cleaned));
            }
            res.json(await Job.create(req.body));
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });

router.route('/jobs/:id')
    .put(protect, async (req, res) => res.json(await Job.findByIdAndUpdate(req.params.id, req.body, { new: true })))
    .delete(protect, async (req, res) => {
        await Job.findByIdAndDelete(req.params.id);
        res.json({ message: 'Deleted' });
    });

// Job Applications
router.route('/applications')
    .get(protect, async (req, res) => res.json(await JobApplication.find().populate('jobId').sort('-createdAt')))
    .post(upload.single('resume'), async (req, res) => {
        try {
            const applicationData = { ...req.body };
            if (req.file) {
                applicationData.resumeFile = `/uploads/${req.file.filename}`;
            }
            const app = await JobApplication.create(applicationData);
            res.json(app);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });

router.route('/applications/:id').delete(protect, async (req, res) => {
    await JobApplication.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
});

// Footer
router.route('/footer').get(handleSingleDoc(Footer)).post(protect, handleSingleDoc(Footer));

// Contacts (Enquiries)
router.route('/contacts').get(protect, async (req, res) => res.json(await Contact.find().sort('-createdAt'))).post(async (req, res) => res.json(await Contact.create(req.body)));
router.route('/contacts/:id').delete(protect, async (req, res) => {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: 'Enquiry deleted' });
});

// Subscribers
router.route('/subscribers').get(protect, async (req, res) => res.json(await Subscriber.find().sort('-createdAt'))).post(async (req, res) => res.json(await Subscriber.create(req.body)));
router.route('/subscribers/:id').delete(protect, async (req, res) => {
    await Subscriber.findByIdAndDelete(req.params.id);
    res.json({ message: 'Subscriber removed' });
});

// File Upload
router.post('/upload', protect, upload.single('image'), (req, res) => {
    if (req.file) {
        res.json({ url: `/uploads/${req.file.filename}` });
    } else {
        res.status(400).json({ message: 'No file uploaded' });
    }
});

// Dashboard Stats
router.get('/dashboard-stats', protect, async (req, res) => {
    try {
        const totalBlogs = await BlogPost.countDocuments();
        const totalEnquiries = await Contact.countDocuments();
        const totalSubscribers = await Subscriber.countDocuments();

        // Mocking some data for visitors and click rate since we don't have tracking yet
        res.json({
            visitors: 11400, // Mock
            blogs: totalBlogs,
            enquiries: totalEnquiries,
            subscribers: totalSubscribers,
            clickRate: "3.42%" // Mock
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
