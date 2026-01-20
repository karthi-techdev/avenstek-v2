const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const path = require('path');
const User = require('./models/User');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Static folder for uploads
app.use('/uploads', express.static(path.join(__dirname, '../public/uploads')));

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/content', require('./routes/contentRoutes'));

// Default route
app.get('/', (req, res) => {
    res.send('Avenstek API is running...');
});

// Seed Admin User
const seedAdmin = async () => {
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@avenstek.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin@%$#!)(*&';

    const user = await User.findOne({ email: adminEmail });
    if (!user) {
        await User.create({
            email: adminEmail,
            password: adminPassword,
            role: 'admin'
        });
        console.log('Default admin account created');
    } else {
        user.password = adminPassword;
        await user.save();
        console.log('Admin account credentials synchronized');
    }
};
seedAdmin();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
