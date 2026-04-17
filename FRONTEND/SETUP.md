# Setup Guide - Yesh Goyal Portfolio

## Quick Start

### Method 1: Using Command Prompt (Recommended)

1. Open Command Prompt (not PowerShell)
2. Navigate to the project directory:
   ```cmd
   cd "c:\Users\yeshg\Desktop\my new portfolio\FRONTEND"
   ```
3. Install dependencies:
   ```cmd
   npm install
   ```
4. Start the development server:
   ```cmd
   npm run dev
   ```

### Method 2: Using PowerShell (If Execution Policy Allows)

1. Open PowerShell as Administrator
2. Navigate to the project directory:
   ```powershell
   cd "c:\Users\yeshg\Desktop\my new portfolio\FRONTEND"
   ```
3. Run the setup script:
   ```powershell
   .\setup.ps1
   ```

### Method 3: Using Batch File

1. Double-click the `install.bat` file in the FRONTEND folder
2. This will install dependencies and start the server automatically

### Method 4: Manual PowerShell Execution

If you get execution policy errors, run this in PowerShell as Administrator:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then navigate to the project and run:
```powershell
cd "c:\Users\yeshg\Desktop\my new portfolio\FRONTEND"
npm install
npm run dev
```

## What Happens After Setup

1. **Dependencies Installation**: All required packages (Next.js, React, TypeScript, Tailwind CSS, Framer Motion, etc.) will be installed
2. **Development Server**: The portfolio will start on `http://localhost:3000`
3. **Live Reloading**: Any changes you make will automatically refresh in the browser

## Project Features

Once running, you'll see:
- **Hero Section**: Your profile with animated typing effect
- **Dark/Light Mode**: Toggle in the navbar
- **Smooth Animations**: Scroll-based animations throughout
- **Responsive Design**: Works perfectly on mobile and desktop
- **Interactive Elements**: Hover effects, transitions, and micro-interactions

## Customization

### Adding Your Profile Image

1. Replace the placeholder in `src/components/Hero.tsx`:
   ```tsx
   <img 
     src="/path/to/your/profile-image.jpg" 
     alt="Yesh Goyal"
     className="w-full h-full object-cover"
   />
   ```

### Updating Personal Information

Edit these files:
- `src/components/Hero.tsx` - Name, role, social links
- `src/components/About.tsx` - Personal introduction
- `src/components/Contact.tsx` - Contact information
- `src/components/Footer.tsx` - Footer information

### Customizing Colors

Edit `tailwind.config.js` to modify theme colors.

## Troubleshooting

### "npm cannot be loaded" Error

This is a PowerShell execution policy issue. Use Command Prompt instead or run:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### "Cannot find module" Errors

These disappear after running `npm install`.

### Port Already in Use

If port 3000 is busy, the server will automatically try the next available port (3001, 3002, etc.).

## Deployment

### Vercel (Easiest)

1. Push code to GitHub
2. Import to Vercel
3. Deploy automatically

### Netlify

1. Run `npm run build`
2. Upload the `.next` folder to Netlify

### Other Platforms

Any platform supporting Next.js will work.

## Need Help?

If you encounter any issues:
1. Check Node.js is installed (`node --version`)
2. Try Command Prompt instead of PowerShell
3. Make sure you're in the correct directory
4. Delete `node_modules` and try fresh install

---

**Your portfolio is ready to impress recruiters!**
