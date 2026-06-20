# Java Full Stack Developer Portfolio - Vaibhav Jadhav

A premium, recruiter-focused portfolio website for **Vaibhav Jadhav**, a Java Full Stack Developer. Built using **React 19**, **Vite**, **Tailwind CSS**, and **Framer Motion**, the site features modern animations, a developer-centric theme, an interactive particle background, and fully integrated sections showcasing professional credentials.

---

## 🚀 Key Features

*   **Dark Theme Design**: Built using sleek palettes tailored for software engineering recruiters (`#0F172A`, `#111827`, `#1E293B`).
*   **Terminal-Style Loading Screen**: Compiles JVM files, boots Spring Boot, and establishes database foundations dynamically before unlocking the portfolio.
*   **Interactive Particle Background**: Custom canvas-based system displaying repelling brackets (`{}`, `[]`, `<>`) on cursor movement.
*   **Custom Developer Cursor**: Standard cursor ring with rotating code symbols (`=>`, `&&`, `||`, `;`) on button/link hover.
*   **Detailed Project Metrics**: Spotlights the **AI-Powered Database Console** and **Hospital Management System** with separate problem statements, technical solutions, challenges, and contribution sections.
*   **Interactive Resume Preview & Download**: Dynamic ATS-friendly resume file preview next to a large one-click PDF download button.
*   **Fully Responsive Form**: Validation-protected contact form integrated with EmailJS (and developer-friendly fallback simulation).
*   **Active Link Tracker**: Sticky navigation bar with Intersection Observer matching browser scroll positions automatically.

---

## 📂 Project Structure

```text
my-portfolio/
├── public/
│   ├── favicon.svg             # Custom code-bracket SVG icon
│   └── VAIBHAV_JADHAV_CV.pdf   # ATS-friendly resume download target
├── src/
│   ├── assets/
│   │   ├── profile.jpg         # Professional photo
│   │   └── resume_preview.png  # Resume graphic preview card
│   ├── components/
│   │   ├── BackToTop.jsx       # Floating back to top anchor
│   │   ├── CustomCursor.jsx    # Developer ring cursor
│   │   ├── LoadingScreen.jsx   # Terminal compilation loader
│   │   ├── Navbar.jsx          # Blur header navigation
│   │   ├── ParticleBackground.jsx # Canvas floating bracket particles
│   │   └── ScrollProgressBar.jsx # Horizontal reading indicator
│   ├── data/
│   │   └── portfolioData.js    # Centralized CV/Resume data store
│   ├── sections/
│   │   ├── About.jsx           # Bio, preferences, roadmap
│   │   ├── Certifications.jsx  # Oracle & NIELIT grids
│   │   ├── Contact.jsx         # EmailJS submission console
│   │   ├── Education.jsx       # Degree timelines
│   │   ├── Experience.jsx      # Software internship timelines
│   │   ├── Footer.jsx          # Quick links & developers tags
│   │   ├── Hero.jsx            # Typer greeting & visual anchors
│   │   ├── Projects.jsx        # Problem/Solution cards
│   │   └── ResumeSection.jsx   # PDF mockup & download controls
│   ├── styles/
│   │   └── index.css           # Global custom CSS rules
│   ├── App.css                 # Cleared stylesheet
│   ├── App.jsx                 # App controller
│   └── main.jsx                # React mount entrypoint
├── index.html                  # HTML template with SEO meta tags
├── tailwind.config.js          # Tailwind theme configurations
├── postcss.config.js           # Postcss layout engine
├── package.json                # Project dependencies
└── README.md                   # Project documentation
```

---

## 🛠️ Installation & Local Setup

### Prerequisites

*   [Node.js](https://nodejs.org/) (v18 or higher recommended)
*   [NPM](https://www.npmjs.com/) (v9 or higher)

### Setup Steps

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/Vaibhav0248/portfolio.git
    cd portfolio
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

3.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

4.  **Build for Production**:
    ```bash
    npm run build
    ```
    This compiles the output bundles inside the `/dist` directory.

---

## 📧 EmailJS Setup (Optional)

To connect the contact form to your own email address:

1.  Create an account on [EmailJS](https://www.emailjs.com/).
2.  Add a **Email Service** (e.g. Gmail) and copy the **Service ID**.
3.  Create a **Email Template** with variables matching:
    *   `{{name}}`
    *   `{{email}}`
    *   `{{subject}}`
    *   `{{message}}`
    and copy the **Template ID**.
4.  Copy your Account **Public Key** from the EmailJS Account settings.
5.  Open [src/sections/Contact.jsx](file:///d:/Antigravity%20Projects/my-portfolio/src/sections/Contact.jsx#L42-L44) and update the credentials:
    ```javascript
    const serviceId = 'YOUR_EMAILJS_SERVICE_ID';
    const templateId = 'YOUR_EMAILJS_TEMPLATE_ID';
    const publicKey = 'YOUR_EMAILJS_PUBLIC_KEY';
    ```

---

## 🌐 Deployment to Vercel

The easiest way to deploy this portfolio is using Vercel.

### Option 1: Vercel CLI

1.  Install the Vercel CLI globally:
    ```bash
    npm install -g vercel
    ```
2.  Run the deployment command in the project directory:
    ```bash
    vercel
    ```
3.  Follow the command-line prompts (accept defaults). Vercel will build and output your production link.

### Option 2: Vercel Dashboard

1.  Push your code to a GitHub repository.
2.  Go to the [Vercel Dashboard](https://vercel.com/dashboard) and click **Add New** > **Project**.
3.  Import your GitHub repository.
4.  Ensure the configuration parameters are set as:
    *   **Framework Preset**: `Vite`
    *   **Root Directory**: `./` (current directory)
    *   **Build Command**: `npm run build`
    *   **Output Directory**: `dist`
5.  Click **Deploy**.
