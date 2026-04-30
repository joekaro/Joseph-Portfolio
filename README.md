# Joseph Obanovwe — Portfolio

A professional full-stack developer portfolio built with Next.js 14, TypeScript, and Tailwind CSS.


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


## Customisation

- **Contact form**: Replace the `handleSubmit` function in `components/Contact.tsx` with your preferred form handler (Formspree, EmailJS, etc.)
- **Projects**: Edit the `projects` array in `components/SelectedWork.tsx`
- **Experience**: Edit the `experiences` array in `components/Experience.tsx`
- **Colors**: Customize the palette in `tailwind.config.ts`
