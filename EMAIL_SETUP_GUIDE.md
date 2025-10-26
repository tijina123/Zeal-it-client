# Email Setup Guide for Contact Form

## Prerequisites
1. A Gmail account (or other email service)
2. Node.js installed on your system

## Setup Steps

### 1. Install Server Dependencies
```bash
# Copy the server-package.json to package.json in a new server directory
mkdir server
cd server
cp ../server-package.json package.json
npm install
```

### 2. Configure Email Settings

#### For Gmail:
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Copy the 16-character password

#### Create Environment Variables:
Create a `.env` file in your server directory:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password
PORT=5000
```

### 3. Update Client Configuration
In your React app, create a `.env` file in the root directory:
```env
REACT_APP_API_URL=http://localhost:5000
```

### 4. Start the Server
```bash
cd server
npm start
```

### 5. Start the React App
```bash
# In your main project directory
npm start
```

## Testing
1. Fill out the contact form on your website
2. Check the email inbox: tijinamariamtitus@gmail.com
3. You should receive a formatted email with the form data

## Troubleshooting

### Common Issues:
1. **"Invalid login" error**: Make sure you're using an App Password, not your regular Gmail password
2. **CORS errors**: The server includes CORS middleware, but make sure the API_URL is correct
3. **Email not sending**: Check your internet connection and email credentials

### Alternative Email Services:
If you prefer not to use Gmail, you can modify the transporter configuration in `server.js`:

```javascript
// For Outlook/Hotmail
const transporter = nodemailer.createTransporter({
  service: 'hotmail',
  auth: {
    user: 'your-email@outlook.com',
    pass: 'your-password'
  }
});

// For Yahoo
const transporter = nodemailer.createTransporter({
  service: 'yahoo',
  auth: {
    user: 'your-email@yahoo.com',
    pass: 'your-password'
  }
});
```

## Security Notes
- Never commit your `.env` file to version control
- Use environment variables for all sensitive information
- Consider using a dedicated email service like SendGrid or Mailgun for production
