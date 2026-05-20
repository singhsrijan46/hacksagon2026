# Hacksagon 2026

Official website for **Hacksagon 2026**, the premier hardware and software hackathon hosted by Atal Bihari Vajpayee Indian Institute of Information Technology and Management (ABV-IIITM), Gwalior.

Hacksagon brings together innovators, creators, and problem solvers from across India. The 2026 edition features 10 tracks across Software and Hardware + Software categories, with a cash prize pool of 2,50,000 INR.

## About

Hacksagon began in 2020 as a collaborative initiative with six other IIITs. The event runs in multiple phases, from online ideation and prototyping to an offline grand finale at ABV-IIITM Gwalior.

**Registration:** [Hacksagon 2026 on Unstop](https://unstop.com/p/hacksagon-2026-atal-bihari-vajpayee-indian-institute-of-information-technology-and-management-1626084)

## Site sections

| Route | Description |
|-------|-------------|
| `/` | Home — hero, about, schedule preview, sponsors, and highlights |
| `/schedule` | Full event timeline and phases |
| `/themes` | Hackathon tracks and themes |
| `/rewards` | Prizes and rewards |
| `/sponsors` | Sponsorship information and brochure |
| `/partners` | Partner organizations |
| `/committees` | Organizing and faculty committees |
| `/brochure` | Event brochure download |
| `/contact` | Contact details |

## Tech stack

- **React 18** with **Vite**
- **React Router** for client-side routing
- **Tailwind CSS** for styling
- **GSAP** and **Motion** for animations
- **Three.js** and **postprocessing** for 3D visuals

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- npm (included with Node.js)

## Getting started

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd hacksagon2026
npm install
```

Run the development server:

```bash
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

## Available scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Vite dev server with hot reload |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint on the project |

## Project structure

```
hacksagon2026/
├── public/           # Static assets
├── src/
│   ├── components/   # Reusable UI components
│   ├── pages/        # Route-level page components
│   ├── App.jsx       # Routes and layout
│   └── main.jsx      # Application entry point
├── index.html
├── package.json
└── vite.config.js
```

## Contributing

This repository hosts the public event website. For content updates (schedule, sponsors, contact details), edit the relevant components under `src/components/` and `src/pages/`.

## License

All rights reserved. Copyright 2026 Hacksagon.
