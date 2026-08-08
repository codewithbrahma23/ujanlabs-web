Step 1 – Install the UI Libraries

Run the following commands one at a time.

1. Initialize shadcn/ui
   npx shadcn@latest init

2. Install the components we'll use
   npx shadcn@latest add button
   npx shadcn@latest add card
   npx shadcn@latest add navigation-menu
   npx shadcn@latest add dropdown-menu
   npx shadcn@latest add separator
   npx shadcn@latest add sheet

3. Install icons
   npm install lucide-react
4. Install dark mode support
   npm install next-themes

Development Workflow

Step 1
Build the UI

↓

Step 2
Make the UI reusable

↓

Step 3
Create the CMS schema

↓

Step 4
Connect the UI to Payload

↓

Step 5
Replace hardcoded text with CMS data

↓

Step 6
Deploy

STARTING
Step 1 – Create the Project Structure
mkdir -p components/layout
mkdir -p components/landing
mkdir -p components/providers
mkdir -p components/shared
mkdir -p lib

components/
├── landing/
│ ├── hero.tsx
│ ├── mission.tsx
│ ├── services.tsx
│ ├── featured-product.tsx
│ ├── audience.tsx
│ ├── vision.tsx
│ └── footer.tsx

DESIGN SYSTEM:
Design System
│
├── Colors
├── Typography
├── Spacing
├── Buttons
├── Cards
├── Shadows
├── Radius
└── Animations

| Purpose       | Color                 |
| ------------- | --------------------- |
| Primary       | Blue (`#2563EB`)      |
| Primary Hover | `#1D4ED8`             |
| Accent        | Cyan (`#06B6D4`)      |
| Success       | Emerald               |
| Background    | White / Slate 950     |
| Cards         | Slate 50 / Slate 900  |
| Borders       | Slate 200 / Slate 800 |
| Text          | Slate 900 / Slate 100 |

Geist, the font created by the team behind Vercel.

npm install geist
