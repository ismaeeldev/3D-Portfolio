Costly Divorce Calculator SAAS
https://costly-chi.vercel.app/
https://github.com/ismaeeldev/Costly--Divorce-Cost-Calculalor-Plateform

Costly - Financial Clarity for a New Future
Costly Logo

Costly is a premium Divorce Cost Calculator platform designed to provide financial clarity for individuals navigating the complexities of divorce. Built with a focus on privacy, precision, and ease of use, Costly helps users understand the real financial impact of divorce—before it happens—enabling smarter decisions and more confident negotiations.

🚀 Key Features
📊 Precision Financial Engine
Child Support Estimates: Instant calculations based on income and custody arrangements.
Spousal Maintenance (Alimony): Accurate projections of future liability.
Reality Score: A unique metric that analyzes your post-divorce discretionary income to ensure financial sustainability.
🔄 Scenario Comparison Workbench
Save and model multiple outcomes (e.g., primary vs. joint custody).
Side-by-side comparison of net delta effects.
Dynamic adjustments for assets, retirement accounts, and housing.
🤖 AI Advisor
Powered by OpenAI, the built-in advisor provides instant answers to common divorce-related financial questions.
Integrated directly into your dashboard for immediate guidance.
🛡️ Bank-Level Privacy
100% Anonymous: We never ask for your name or Social Security Number.
Encrypted Data: 256-bit encryption ensures your data remains yours alone.
✨ Product Showcase
Costly Dashboard Sample

🛠️ Tech Stack
Frontend: Next.js 14 (App Router), Tailwind CSS
Logic & Animations: Framer Motion, Lucide React
Database & ORM: Prisma with PostgreSQL
Authentication: NextAuth.js
Payments: Stripe Integration
AI Integration: OpenAI API
Email: SMTP integration for authentication and reports.









Casino web3 Game ( poker plateform)
https://github.com/ismaeeldev/Multiplayer-Web3-Gaming-System

🎲 Crypto-Betting Casino (Poker Platform)
A high-performance, real-time cryptocurrency betting platform specifically designed for Poker enthusiasts. This project combines modern web technologies with blockchain integration to provide a seamless and secure gambling experience.

🚀 Key Features
Real-time Poker Games: Multi-player poker rooms with live updates using WebSockets.
Tournament Management: Organized poker tournaments with real-time leaderboards and rewards.
Crypto Wallet Integration: Securely manage your funds with direct blockchain interaction (BSC, Moonbeam, etc.).
Interactive UI: Sleek, modern dashboard built with Material UI and Framer Motion for smooth animations.
User Profiles: Comprehensive user management, including game history, wallet balance, and settings.
Robust Backend: Scalable Express server with Sequelize ORM for efficient data management.
🛠️ Technology Stack
Frontend
Framework: React 18
State Management: Redux Toolkit & Redux Persist
Styling: Material UI (MUI) v5, Tailwind CSS, Framer Motion
Web3: Ethers.js, Web3.js, Moralis, @usedapp/core
Forms: React Hook Form with Yup/Hookform Resolvers
Backend
Runtime: Node.js
Framework: Express.js
Database: MySQL with Sequelize ORM
Communication: WebSockets (ws/socket.io logic)
Security: JWT Authentication, Bcryptjs, Passport.js
📦 Project Structure
casino/
├── backend/            # Express server, controllers, models, and routes
├── src/                # React frontend components and logic
│   ├── components/     # Reusable UI components
│   ├── pages/          # Main application views (Home, Poker, Wallet)
│   ├── redux/          # State management logic
│   └── theme/          # Custom MUI theme configuration
├── public/             # Static assets and index.html
├── uploads/            # User-uploaded files (avatars, etc.)
└── setup.md            # Detailed local setup guide
⚙️ Quick Start
Prerequisites
Node.js (v18 or v20 recommended)
MySQL Server
A crypto wallet (e.g., MetaMask) for testing Web3 features







Point of sale System ( PWA)
https://point-of-sale-system-three.vercel.app/
https://github.com/ismaeeldev/Point-of-Sale-System


🚀 Medico POS: Professional Offline-First Point of Sale
Medico POS is a production-grade, high-reliability Point of Sale system built with Next.js. It is specifically engineered to handle unstable internet environments through a robust Offline-First MOTO architecture and full PWA (Progressive Web App) support.

Medico POS Banner

✨ Key Features
📶 Production-Grade Offline MOTO
Manual Sync Bridge: Collect card details securely while offline and process them online with a specialized manual-entry bridge to maintain 100% PCI compliance and bypass Stripe restrictions.
Idempotency Protection: Every transaction (online or offline) is protected by unique idempotency keys to prevent double-charging.
Cross-Tab Safety: Implements a browser-level locking mechanism to prevent race conditions when multiple POS tabs are open.
📱 Progressive Web App (PWA)
Fully Installable: Works like a native app on iOS, Android, macOS, and Windows.
Offline Access: The entire POS UI and logic are cached locally, allowing the app to boot and operate without any internet connection.
Standalone Display: Optimized layout that removes browser bars for a true "Kiosk" experience.
💳 Payment Orchestration
Enhanced Terminal UX: A granular, step-by-step payment flow (Initializing → Waiting for Card → Processing) with real-time reader identification and heartbeat monitoring.
Stripe Terminal: Integrated support for physical card readers (S700, WisePad 3, etc.) with automatic status polling.
Hardware Simulation: A high-fidelity "Simulation Mode" that mimics real hardware interactions for development, training, and testing without physical readers.
Multi-Currency: Native support for AUD and USD with smart routing based on payment type (Terminal/MOTO).
📊 Real-Time Management & UI
Transaction Detail Modal: A premium, full-screen interactive view for every transaction, featuring rich metadata, status badges, and receipt-style formatting.
Sequential Sync Engine: Batch-process offline transactions with a visual progress tracker.
Premium Aesthetic: Built with a sleek, interactive design system featuring Framer Motion micro-animations, glassmorphism, and consistent dark mode support.
Accessibility First: Fully compliant Radix-UI based dialogs and interactions.
🛠️ Tech Stack
Frontend: Next.js 15, React, Tailwind CSS, Framer Motion
UI Components: Shadcn UI, Lucide Icons
Database: Neon Postgres (Serverless)
ORM: Prisma
Payments: Stripe SDK (Terminal, Elements, Node.js)
PWA: next-pwa with Workbox caching





TrustEscrow Platform 
https://github.com/ismaeeldev/TrustEscrow
https://trust-escrow-dun.vercel.app/


🛡️ TrustEscrow: The Sovereign Escrow Forge
Developed by Muhammad Ismaeel

TrustEscrow is a premium, high-fidelity Escrow infrastructure built for modern digital commerce. It provides a secure "Hold-and-Release" logic that protects both buyers and sellers through an immutable ledger and a dedicated Auditor Control Center.

💎 Project Objectives
Maximum Trust: Funds are captured via Stripe and held in a secure platform balance until delivery is verified.
Auditor Oversight: A proprietary "Order Forge" dashboard allows administrators to examine transactions and authorize releases with precision.
Immutable Ledger: Every financial movement (Credit/Debit) is synchronized to a Neon Serverless PostgreSQL database with detailed audit trails.
Real-time Intelligence: High-fidelity UI with auto-syncing status trackers and performance-optimized skeletons.
🛠️ Technology Stack
Core: Next.js 16 (App Router)
Database: Prisma ORM with Neon (Serverless Postgres)
Payments: Stripe Connect (Standard Onboarding) & Checkout Sessions
UI/UX: Tailwind CSS, Shadcn UI, Framer Motion (Animations)
Monitoring: Redundant Metadata Tagging & Webhook Synchronization
🚀 Key Features
🏢 The Order Forge (Admin Dashboard)
A bento-grid inspired dashboard for administrators to orchestrate secure escrow transactions.

Transaction Ledger: Center-aligned, responsive data grid.
Sovereign Sync: Real-time revalidation of all ledger states.
Intelligence Stats: Live tracking of Page Volume, Active Status, and Settlement Rates.
🛡️ Auditor Control Center (Order Detail)
A high-fidelity interface for examining individual transactions.

Verification Module: Direct links to delivery proof with high-attention alerts for missing metadata.
Authorization Hub: confirm fund release with glowing feedback and safety confirmation loops.
🔄 Status Tracker (Buyer View)
A client-side polling system that ensures the UI reflects the real-time state of the transaction immediately after payment success.

🤝 Seller Onboarding
A specialized portal for sellers to link their payout accounts via Stripe Connect.







Medicine Authorization System 
https://github.com/ismaeeldev/Medicine-Authorization-System

Medico | Medicine Authorization System
Medico is a modern, production-ready SaaS dashboard designed to verify whether a medicine product is authorized and registered under a specific company using its serial number or barcode.

Built with performance, security, and a beautiful UI in mind, it provides a complete flow for registering manufacturing companies and instantly verifying medicine authenticity through an integrated live camera scanner or image upload.

🎯 Core Features
🏢 Company Registration
Add a new company manually to the secure database.
Auto-fill and register unique serial numbers.
Prevent duplicate serial registrations.
View and manage a clean data table of all authorized companies.
🔎 Product Authorization Scanner
Live Camera Scanning: Instantly scan a medicine's barcode using your device's camera.
Image Upload: Upload a photo of a barcode to extract the serial number.
Real-time Verification: The system queries the database and immediately returns the result:
✅ Authorized: Shows the registered Company Name.
❌ Not Registered: Alerts that the product is illegitimate or not in the system.
🎨 Modern UI/UX
Premium dark mode aesthetic with frosted glassmorphism cards.
Fully responsive layout (Mobile, Tablet, Desktop).
Smooth toast notifications for successes and errors.
Loading skeletons and animated states for a seamless experience.
🧱 Tech Stack
This project is built using a modern, scalable, and robust technology stack:

Framework: Next.js 14 (App Router)
Language: TypeScript for end-to-end type safety
Styling: Tailwind CSS (v4)
UI Components: shadcn/ui (Radix primitives)
Icons: Lucide React
Forms & Validation: React Hook Form + Zod
Database: MongoDB (via Atlas or Local)
ODM: Mongoose
Barcode Library: html5-qrcode (Client-side fast scanning)
Notifications: Sonner
📁 Project Architecture
The codebase follows Next.js App Router best practices, ensuring a clean separation of concerns:

medico/
├── app/
│   ├── api/                 # Backend API routes (REST)
│   │   ├── companies/       # GET (List), POST (Add), DELETE
│   │   └── verify/          # GET (Check serial authorization)
│   ├── dashboard/           # Main application shell
│   │   ├── companies/       # Company management module
│   │   └── scanner/         # Barcode scanning module
│   ├── globals.css          # Theme configuration & Tailwind Base
│   └── layout.tsx           # Root layout with Providers
├── components/
│   ├── layout/              # Sidebar & Topbar
│   └── ui/                  # Reusable shadcn/ui building blocks
├── lib/
│   └── db.ts                # MongoDB connection caching utility
└── models/
    └── Company.ts           # Mongoose Schema definitions
🚀 Getting Started (Beginner Friendly)
Follow these simple steps to run the project on your local machine.






Chain pattern System
https://github.com/ismaeeldev/Chain-Pattern-
Chain Pattern Analysis System (CPAS) - Milestone 1
This project is a deterministic, offline, desktop analytical system for time-series structural decomposition and pattern analysis.

Project Structure
The project follows a strict hierarchical structure as defined in the SRS:

/cpas
├── app.py                  # Entry point
├── ui/                     # GUI components (Tkinter)
│   ├── __init__.py
│   ├── main_window.py      # Main Dashboard
│   ├── plotting.py         # Matplotlib Embedding
│   └── dialogs.py          # Configuration Dialogs
├── core/                   # Domain Logic
│   ├── __init__.py
│   ├── data_loader.py      # CSV Ingestion & Validation
│   ├── extrema.py          # Peak/Trough Detection
│   ├── widgets.py          # Widget & Chain Logic
│   ├── pattern_mould.py    # Pattern Templates & Validation
│   ├── recurrence.py       # Recurrence Plot Logic
│   └── anchors.py          # Anchor Selection & State
├── algorithms/             # The 15 Mathematical Algorithms
│   ├── __init__.py
│   ├── needleman_wunsch.py
│   ├── smith_waterman.py
│   ├── levenshtein.py
│   ├── kruskal_katona.py
│   ├── aho_corasick.py
│   ├── kmp.py
│   ├── boyer_moore.py
│   ├── de_bruijn.py
│   ├── thue_morse.py
│   ├── burnside.py
│   ├── polya.py
│   ├── palindromic_complexity.py
│   ├── lyndon_factorization.py
│   ├── kasiski.py
│   └── index_of_coincidence.py
├── storage/                # Persistence
│   ├── __init__.py
│   └── db.py               # SQLite + JSON handling
└── models/                 # Data Classes
    ├── __init__.py
    └── structures.py       # Dataclasses for Chains, Patterns
Running the Application
Ensure you have Python 3.10+ installed.
Install dependencies (NumPy, Pandas, Matplotlib):
pip install numpy pandas matplotlib
Run the application from the root directory:
python -m cpas.app
OR
python cpas/app.py
Development Rules
Offline Only: No APIs, no cloud.
Deterministic: All outputs must be reproducible.
Strict Validation: Invalid CSVs must be rejected.

