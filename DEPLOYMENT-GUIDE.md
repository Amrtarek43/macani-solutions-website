# 🚀 Macani Solutions - Deployment & Domain Setup Guide

## 📦 **PROJECT SETUP LOCALLY**

### **1. Extract & Install**
```bash
# Extract the project
tar -xzf macani-solutions-final.tar.gz
cd macani-solutions

# Install dependencies
npm install

# Run locally
npm run dev
# Visit: http://localhost:3000
```

### **2. Build for Production**
```bash
npm run build
npm start
```

---

## 🌍 **DOMAIN SETUP WITH GODADDY → VERCEL**

### **OPTION A: Deploy to Vercel (Recommended)**

#### **Step 1: Deploy to Vercel**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy your project
vercel

# Follow prompts:
# - Login with GitHub/Email
# - Link to new project
# - Deploy
```

#### **Step 2: Connect Your GoDaddy Domain**

**In Vercel Dashboard:**
1. Go to your project → **Settings** → **Domains**
2. Add domain: `macani.llc`
3. Vercel will show you DNS settings

**In GoDaddy Dashboard:**
1. Go to **DNS Management** for macani.llc
2. **Delete existing A records**
3. **Add new records** as shown by Vercel:

```
Type: A
Name: @
Value: 76.76.19.61

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

#### **Step 3: SSL & Final Setup**
- **Automatic SSL** - Vercel provides free SSL
- **Custom domain** - macani.llc will point to your site
- **Propagation** - Takes 24-48 hours globally

---

### **OPTION B: Deploy to Other Platforms**

#### **Netlify:**
```bash
# Build the project
npm run build

# Deploy to Netlify:
# 1. Drag & drop the .next folder to netlify.com
# 2. Connect domain in Netlify dashboard
```

#### **Traditional Hosting:**
```bash
# Build static version
npm run build
npm run export

# Upload 'out' folder to your hosting provider
# Point macani.llc to the hosting server
```

---

## 🔧 **GODADDY DOMAIN CONFIGURATION**

### **DNS Settings for Vercel:**

**Login to GoDaddy:**
1. Go to [godaddy.com](https://godaddy.com)
2. **My Products** → **DNS**
3. Find **macani.llc** → **Manage**

**DNS Records to Add:**
```
Record Type: A
Host: @
Points to: 76.76.19.61
TTL: 1 Hour

Record Type: CNAME
Host: www
Points to: cname.vercel-dns.com
TTL: 1 Hour
```

**DNS Records to Remove:**
- Delete existing A records
- Delete existing CNAME records
- Keep MX records (if you have email)

---

## 📧 **UPDATING WEBSITE FOR YOUR DOMAIN**

### **Update Configuration Files:**

**1. Update package.json:**
```json
{
  "name": "macani-solutions",
  "version": "1.0.0",
  "homepage": "https://macani.llc",
  // ... rest of config
}
```

**2. Update next.config.ts:**
```typescript
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['macani.llc'],
  },
}
```

**3. Update src/app/layout.tsx:**
```typescript
export const metadata: Metadata = {
  title: 'Macani Solutions - IT Consulting & Technology Services',
  description: 'Professional IT consulting startup in Florida, Dubai, and Riyadh',
  metadataBase: new URL('https://macani.llc'),
  // ... rest of metadata
}
```

---

## 🌐 **ENVIRONMENT VARIABLES**

### **Create .env.local:**
```env
NEXT_PUBLIC_SITE_URL=https://macani.llc
NEXT_PUBLIC_CONTACT_PHONE=+966503240661
NEXT_PUBLIC_CONTACT_EMAIL=support@macani.llc
NEXT_PUBLIC_COMPANY_NAME=Macani Solutions
```

---

## 📈 **POST-DEPLOYMENT CHECKLIST**

### **Testing:**
- [ ] Visit https://macani.llc
- [ ] Test mobile responsiveness
- [ ] Check all forms work
- [ ] Verify AI chatbot functions
- [ ] Test contact information

### **SEO Setup:**
- [ ] Submit to Google Search Console
- [ ] Add Google Analytics
- [ ] Set up social media links
- [ ] Configure email forwarding

### **Performance:**
- [ ] Run Lighthouse audit
- [ ] Test loading speeds
- [ ] Verify SSL certificate
- [ ] Check all images load

---

## 🔧 **TROUBLESHOOTING**

### **Common Issues:**

**Domain not working:**
- Wait 24-48 hours for DNS propagation
- Check DNS settings in GoDaddy
- Verify Vercel domain configuration

**SSL Certificate:**
- Vercel automatically provides SSL
- May take 1-2 hours to activate

**Images not loading:**
- Check file paths in public/ folder
- Verify image optimization settings

---

## 📞 **NEED HELP?**

**Contact for Support:**
- **Email:** support@macani.llc  
- **Phone:** +966503240661

**Quick Support:**
- GoDaddy support for DNS issues
- Vercel support for deployment issues
- Next.js docs for technical questions

---

## 🎯 **FINAL STEPS SUMMARY**

1. **Extract project files**
2. **Deploy to Vercel** (easiest)
3. **Configure DNS in GoDaddy**
4. **Wait for propagation**
5. **Your website will be live at macani.llc!**

**Your professional Macani Solutions website will be live on your custom domain!** 🚀
