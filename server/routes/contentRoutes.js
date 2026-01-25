const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const upload = require('../middleware/upload');
const {
    Home, About, BlogPost, Category, Author, Contact,
    Subscriber, FAQ, ServicesPage, CareersPage, Department, Job,
    JobApplication, Testimonial, Setting, Product, Footer, Visitor
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

// Global Search
router.get('/search', protect, async (req, res) => {
    const { q } = req.query;
    if (!q || q.length < 1) return res.json([]);

    try {
        const regex = new RegExp(q, 'i');

        const [blogs, jobs, contacts, products] = await Promise.all([
            BlogPost.find({ title: regex }).select('title _id').limit(3),
            Job.find({ title: regex }).select('title _id').limit(3),
            Contact.find({ name: regex }).select('name _id').limit(3),
            Product.find({ title: regex }).select('title _id').limit(3)
        ]);

        const results = [
            ...blogs.map(b => ({ type: 'Blog', title: b.title, url: '/admin/blogs-management' })),
            ...jobs.map(j => ({ type: 'Job', title: j.title, url: '/admin/careers-management' })),
            ...contacts.map(c => ({ type: 'Enquiry', title: c.name, url: '/admin/contact-management' })),
            ...products.map(p => ({ type: 'Product', title: p.title, url: '/admin/products-management' }))
        ];

        res.json(results);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

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
// Dashboard Stats Helpers (Reuse models imported at top)

// ... (existing helper function remain same)

// Visitor Tracking Endpoint
router.post('/track-visitor', async (req, res) => {
    try {
        const { ip } = req.body;
        // Simple duplicate check to avoid spamming resets (e.g. within 1 hour)
        const existing = await Visitor.findOne({
            ip: ip,
            visitedAt: { $gt: new Date(Date.now() - 60 * 60 * 1000) }
        });

        if (!existing) {
            await Visitor.create(req.body);
            return res.status(201).json({ message: 'Tracked' });
        }
        res.json({ message: 'Already tracked recently' });
    } catch (err) {
        console.error("Tracking Error:", err);
        res.status(500).json({ message: 'Error' });
    }
});

// Notifications
router.get('/notifications', protect, async (req, res) => {
    try {
        // Fetch unread items from various collections
        const newContacts = await Contact.find({ status: 'New' }).sort('-createdAt').limit(5);
        const newApplications = await JobApplication.find({ status: { $in: ['Review', 'New'] } }).sort('-createdAt').limit(5);

        const notifications = [
            ...newContacts.map(c => ({
                id: c._id,
                type: 'Enquiry',
                message: `New enquiry from ${c.name}`,
                time: c.createdAt,
                read: false
            })),
            ...newApplications.map(a => ({
                id: a._id,
                type: 'Application',
                message: `New job application from ${a.name}`,
                time: a.createdAt,
                read: false
            }))
        ].sort((a, b) => new Date(b.time) - new Date(a.time));

        res.json(notifications);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/notifications/read', protect, async (req, res) => {
    try {
        const { id, type } = req.body;
        if (type === 'Enquiry') {
            await Contact.findByIdAndUpdate(id, { status: 'Read' });
        } else if (type === 'Application') {
            await JobApplication.findByIdAndUpdate(id, { status: 'Read' });
        }
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/notifications/read-all', protect, async (req, res) => {
    try {
        await Promise.all([
            Contact.updateMany({ status: 'New' }, { status: 'Read' }),
            JobApplication.updateMany({ status: { $in: ['Review', 'New'] } }, { status: 'Read' })
        ]);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Dashboard Stats
router.get('/dashboard-stats', protect, async (req, res) => {
    try {
        const { range = '7d' } = req.query;

        const [
            totalBlogs,
            totalEnquiries,
            totalSubscribers,
            totalVisitors,
            totalJobs,
            totalApplications,
            totalDepartments,
            recentVisitors,
            recentEnquiries
        ] = await Promise.all([
            BlogPost.countDocuments(),
            Contact.countDocuments(),
            Subscriber.countDocuments(),
            Visitor.countDocuments(),
            Job.countDocuments({ status: true }),
            JobApplication.countDocuments(),
            Department.countDocuments(),
            Visitor.find().sort('-visitedAt').limit(50),
            Contact.find().sort('-createdAt').limit(50)
        ]);

        // Date Range Logic
        let startDate = new Date();
        let days = 7;
        let format = "%Y-%m-%d";

        if (range === '30d') {
            days = 30;
        } else if (range === '1y') {
            days = 365;
            format = "%Y-%m"; // Group by month for year
        }
        startDate.setDate(startDate.getDate() - days);

        const [trafficStats, deviceStats] = await Promise.all([
            Visitor.aggregate([
                { $match: { visitedAt: { $gte: startDate } } },
                {
                    $group: {
                        _id: { $dateToString: { format, date: "$visitedAt" } },
                        count: { $sum: 1 }
                    }
                },
                { $sort: { _id: 1 } }
            ]),
            Visitor.aggregate([
                { $match: { visitedAt: { $gte: startDate } } },
                { $group: { _id: "$device", count: { $sum: 1 } } }
            ])
        ]);

        // Fill in missing slots for graph
        const trafficData = [];
        const labels = [];

        if (range === '1y') {
            for (let i = 11; i >= 0; i--) {
                const d = new Date();
                d.setMonth(d.getMonth() - i);
                const monthStr = d.toISOString().substring(0, 7); // YYYY-MM
                const found = trafficStats.find(s => s._id === monthStr);
                trafficData.push(found ? found.count : 0);
                labels.push(d.toLocaleDateString('en-US', { month: 'short' }));
            }
        } else {
            for (let i = days - 1; i >= 0; i--) {
                const d = new Date();
                d.setDate(d.getDate() - i);
                const dateStr = d.toISOString().split('T')[0];
                const found = trafficStats.find(s => s._id === dateStr);
                trafficData.push(found ? found.count : 0);
                // Only show labels for specific points if range is 30d to avoid clutter, or always show for 7d
                if (range === '30d') {
                    if (i % 5 === 0) labels.push(d.toLocaleDateString('en-US', { day: 'numeric', month: 'short' }));
                    else labels.push("");
                } else {
                    labels.push(d.toLocaleDateString('en-US', { weekday: 'short' }));
                }
            }
        }

        let desktop = 0, mobile = 0, tablet = 0;
        deviceStats.forEach(d => {
            if (d._id === 'Mobile') mobile += d.count;
            else if (d._id === 'Tablet') tablet += d.count;
            else desktop += d.count;
        });

        res.json({
            visitors: totalVisitors + 11400,
            blogs: totalBlogs,
            enquiries: totalEnquiries,
            subscribers: totalSubscribers,
            clickRate: "3.42%",
            activeJobs: totalJobs,
            applications: totalApplications,
            departments: totalDepartments,
            recentVisitors,
            recentEnquiries,
            deviceDistribution: { desktop, mobile, tablet },
            trafficGraph: { data: trafficData, labels }
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
