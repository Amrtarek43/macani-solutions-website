# Macani Solutions - Professional IT Consulting Website

> **Open Source Project** - Professional website for Macani Solutions IT consulting startup

A modern, clean website built with Next.js, TypeScript, and Tailwind CSS featuring neon lime green design, 3D animations, and AI chatbot assistance.

## 🌟 **Features**

- **🎨 Neon Lime Green Design**: Professional color scheme with bright lime green accents
- **🖥️ 3D Laptop Animation**: Interactive floating laptop with scroll-triggered effects
- **🤖 AI Chatbot**: Smart customer support assistant
- **📱 Fully Responsive**: Optimized for all devices and screen sizes
- **⚡ Fast Performance**: Next.js 15 with optimized loading
- **🔍 SEO Optimized**: Complete meta tags and structured data
- **♿ Accessible**: WCAG compliant design patterns

## 🚀 **Quick Start**

### **Prerequisites**
- Node.js 18 or higher
- npm or pnpm

### **Installation**

1. **Extract the project files**
2. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)** in your browser

### **Production Build**

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📁 **Project Structure**

```
macani-solutions/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with SEO & fonts
│   │   ├── page.tsx            # Main page component
│   │   └── globals.css         # Global styles & Tailwind
│   └── components/
│       ├── Header.tsx          # Navigation header
│       ├── Hero.tsx            # Hero section with typing animation
│       ├── About.tsx           # Company information
│       ├── Services.tsx        # IT services showcase
│       ├── Locations.tsx       # Office locations (FL, Dubai, Riyadh)
│       ├── Careers.tsx         # Application form (no job listings)
│       ├── Contact.tsx         # Contact form & information
│       ├── Footer.tsx          # Professional footer
│       ├── Laptop3D.tsx        # 3D floating laptop animation
│       └── Chatbot.tsx         # AI assistant chat
├── public/                     # Static assets
├── package.json               # Project dependencies
├── tailwind.config.ts         # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── next.config.ts            # Next.js configuration
├── postcss.config.js         # PostCSS configuration
└── README.md                 # This file
```

## 🎨 **Design System**

### **Colors**
- **Primary**: Neon Lime Green (`#84cc16` to `#65a30d`)
- **Background**: Pure White (`#ffffff`)
- **Text**: Dark Gray (`#111827`)
- **Accents**: Various lime green shades

### **Typography**
- **Headings**: Orbitron (futuristic, tech-focused)
- **Body Text**: Inter (clean, readable)
- **Code/Terminal**: Monospace

## 🏢 **Business Information**

### **Company Details**
- **Name**: Macani Solutions
- **Type**: IT Consulting Startup
- **Domain**: macani.llc
- **Email**: support@macani.llc
- **Phone**: +966503240661

### **Office Locations**
1. **🇺🇸 Florida, USA** - North American Headquarters
2. **🇦🇪 Dubai, UAE** - Middle East Operations Hub  
3. **🇸🇦 Riyadh, Saudi Arabia** - Regional Office

### **Services**
- IT Consulting & Strategy
- Managed Services (24/7 Support)
- Cloud Solutions
- Technology Outsourcing
- Digital Transformation

## 🛠️ **Development Commands**

```bash
# Development
npm run dev              # Start dev server (hot reload)
npm run build           # Build for production
npm start               # Start production server
npm run lint            # Run ESLint
```

## 🚀 **Deployment**

### **Vercel (Recommended)**
1. Connect GitHub repository to Vercel
2. Automatic deployments on push
3. Custom domain: macani.llc

### **Other Platforms**
- **Netlify**: `npm run build` → Deploy build files
- **AWS/Azure**: Use static hosting or containers

## 📞 **Support**

- **Email**: support@macani.llc
- **Phone**: +966503240661
- **Website**: https://macani.llc

## 📄 **License**

MIT License - Open source project

© 2024 Macani Solutions. All rights reserved.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
