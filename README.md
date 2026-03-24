# Joseph Obanovwe — Portfolio

A professional full-stack developer portfolio built with Next.js 14, TypeScript, and Tailwind CSS.

## Getting Started

### Prerequisites
- Node.js v18 or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
joseph-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   └── case-studies/
│       ├── layout.tsx      # Case study layout wrapper
│       ├── page.tsx        # Case studies index
│       ├── ecommerce-platform/page.tsx
│       ├── payment-integration/page.tsx
│       └── real-estate-platform/page.tsx
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── SelectedWork.tsx
│   ├── CaseStudiesTeaser.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel auto-detects Next.js — click Deploy

### Deploy to Netlify

```bash
npm run build
```
Upload the `.next` folder or connect your GitHub repo on Netlify.

## Customisation

- **Contact form**: Replace the `handleSubmit` function in `components/Contact.tsx` with your preferred form handler (Formspree, EmailJS, etc.)
- **Projects**: Edit the `projects` array in `components/SelectedWork.tsx`
- **Experience**: Edit the `experiences` array in `components/Experience.tsx`
- **Colors**: Customize the palette in `tailwind.config.ts`
