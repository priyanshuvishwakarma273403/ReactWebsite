# WebNex Agency - Next.js 14 Migration & Architecture 🚀

A high-performance, 3D-heavy, full-stack digital agency website migrated from Vite to **Next.js 14 (App Router)**.

## 🏗️ Technical Architecture

Next.js was used to transform the static frontend into a robust production-grade application with the following core modules:

### 1. **Authentication (NextAuth.js)**
Implemented a secure authentication flow using **NextAuth.js**.
- **Provider**: Google OAuth 2.0.
- **Role-Based Access**: Automatic checking of the user's email against the `ADMIN_EMAIL` in `.env`. Users are assigned `user` or `admin` roles in the database.
- **Session Persistence**: JWT-based sessions for fast and secure access.
- **Entry Points**: 
  - `Login Page`: `http://localhost:3000/api/auth/signin`

### 2. **Admin Dashboard (`/admin`)**
A protected route built with **Server Components**.
- **Security**: Redirects unauthorized users or non-admin users to the home page.
- **Leads Management**: Fetches real-time contact form submissions directly from MongoDB.
- **Performance**: Uses `force-dynamic` to ensure data is always fresh.

### 3. **Database Integration (MongoDB + Mongoose)**
- **Cached Connection**: Optimized database connection utility in `src/lib/db.js` to prevent connection leaks during development.
- **Models**:
  - `User`: Stores authenticated user profiles and roles.
  - `Contact`: Stores leads submitted via the contact form.
  - `Post`: Prepared for future CMS/Blog updates.

### 4. **Modern UI/UX & 3D Engineering**
- **@react-three/fiber & @react-three/drei**: High-performance 3D rendering for the Loader and background effects.
- **GSAP & ScrollTrigger**: Premium scroll-driven animations and mouse-parallax effects.
- **Lenis**: Integrated for silky-smooth inertial scrolling across all browsers.
- **Tailwind CSS v3**: Clean, utility-first styling with custom configurations for the "WebNex" aesthetic.

### 5. **Server Actions (Contact Form)**
Located in `src/actions/contact.js`:
- Handles form submissions without traditional API routes.
- **Validation**: Uses Zod for schema-based validation.
- **Notifications**: Integrated with **Resend** to send automated notifications to the admin and auto-replies to users.

---

## 🛠️ How to View & Use

### **1. Navigation**
You can access all pages via the Navbar or direct URLs:
- **Home**: `/`
- **About**: `/about`
- **Services**: `/services`
- **Projects**: `/projects`
- **Gallery**: `/gallery`
- **Contact**: `/contact`

### **2. Testing Authentication & Admin**
1. Ensure your `.env.local` has valid `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`.
2. Set your email as `ADMIN_EMAIL` in the `.env` file.
3. Go to `/api/auth/signin` and log in with your Google account.
4. Once logged in, navigate to **`/admin`** to see your private dashboard.

### **3. Environment Variables**
Create a `.env.local` file with the following:
```env
MONGODB_URI=your_mongodb_uri
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=any_random_string
GOOGLE_CLIENT_ID=your_google_id
GOOGLE_CLIENT_SECRET=your_google_secret
ADMIN_EMAIL=your_email@gmail.com
RESEND_API_KEY=re_your_api_key
```

---

## 🚀 Running the Project
```powershell
# Clean start (recommended due to cache)
rm -rf .next
npm run dev
```

The site will be live at `http://localhost:3000`.

---
*Developed with ❤️ by Antigravity AI for WebNex Agency.*
