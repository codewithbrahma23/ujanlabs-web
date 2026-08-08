TypeScript data modelling
reusable React components
rendering with .map()
sticky scrolling
responsive layouts
simulated dashboards
simulated charts built only with <div> elements
dynamic Tailwind classes
light and dark mode

The important point is:

The product cards and charts are not images, screenshots, or a charting library. They are ordinary React components styled with Tailwind CSS.

1. Overall component structure

The file is organised like this:

FeaturedProduct
│
├── products[] data
│
├── section heading
│
└── sticky card stack
│
└── ProductCard
│
├── product information
└── ProductPreview
│
├── toolbar
├── PreviewMetric × 2
├── fake bar chart
└── activity rows

Each component has one responsibility:

FeaturedProduct

Controls the overall section and sticky behaviour.

ProductCard

Controls the appearance of one product card.

ProductPreview

Creates the fake product dashboard.

PreviewMetric

Creates one small metric card.

2. Imports

At the top:

import Link from "next/link";

This imports Next.js’s navigation component.

Instead of:

<a href="/products/school-erp">

we use:

<Link href="/products/school-erp">

Link allows Next.js to navigate without reloading the whole page.

Next:

import {
ArrowUpRight,
Building2,
GraduationCap,
Sparkles,
type LucideIcon,
} from "lucide-react";

These are SVG icons from Lucide.

ArrowUpRight

Appears inside the call-to-action button.

Building2

Represents the dummy Business Operations Platform.

GraduationCap

Represents School ERP.

Sparkles

Represents the AI product.

This part:

type LucideIcon

imports only the TypeScript type—not a visual component.

It is used to tell TypeScript:

Every product’s icon property must contain a valid Lucide icon component.

3. Component props
   type FeaturedProductProps = {
   data?: unknown;
   };

This defines what the main component can receive.

Your homepage currently calls it like:

<FeaturedProduct data={homepage} />

Therefore, the component accepts a data prop.

The question mark means it is optional:

data?

So this is also valid:

<FeaturedProduct />

unknown means:

We have not yet defined the precise CMS data structure.

Later, this should be replaced with a proper Payload type.

For now, data is not used because the product cards are coming from a local array.

4. The Product TypeScript type
   type Product = {
   eyebrow: string;
   title: string;
   description: string;
   features: string[];
   href: string;
   cta: string;
   icon: LucideIcon;
   accent: string;
   preview: {
   label: string;
   value: string;
   secondaryLabel: string;
   secondaryValue: string;
   };
   };

This defines the required structure of every product.

eyebrow
eyebrow: string;

A short label displayed above the product name:

FLAGSHIP PRODUCT
COMING SOON
FUTURE PRODUCT
title
title: string;

The product name:

School ERP
description
description: string;

The product summary.

features
features: string[];

This means an array of strings:

features: [
"Admissions and student records",
"Fee collection and reporting",
]
href
href: string;

The page users visit after clicking the button.

cta
cta: string;

The text displayed inside the button.

icon
icon: LucideIcon;

A Lucide React component.

Notice that we store this:

icon: GraduationCap

not this:

icon: <GraduationCap />

We store the component itself and render it later.

accent
accent: string;

A collection of Tailwind gradient classes:

"from-blue-600 via-cyan-500 to-blue-400"

It lets each product have its own colour theme.

preview
preview: {
label: string;
value: string;
secondaryLabel: string;
secondaryValue: string;
};

This nested object stores the fake dashboard values.

For School ERP:

preview: {
label: "Students",
value: "2,480",
secondaryLabel: "Attendance today",
secondaryValue: "94.8%",
} 5. The fake product data
const products: Product[] = [

This creates an array called products.

The annotation:

: Product[]

means:

This must be an array where every entry follows the Product type.

If you accidentally omit a required field, TypeScript warns you.

For example, this would fail:

{
title: "School ERP",
}

because it is missing eyebrow, description, features, and the other required properties.

6. First product
   {
   eyebrow: "Flagship Product",
   title: "School ERP",

These are plain data values displayed by the card.

description:
"A complete cloud-based platform connecting school administration, teachers, students and parents.",

This becomes the paragraph under the card title.

features: [
"Admissions and student records",
"Fee collection and reporting",
"RFID attendance and notifications",
"Parent, teacher and student portals",
],

These are displayed using .map() later.

href: "/products/school-erp",

The destination of the button.

cta: "Explore School ERP",

The button’s visible wording.

icon: GraduationCap,

The icon component.

accent: "from-blue-600 via-cyan-500 to-blue-400",

The gradient colour combination.

It is reused in several places:

icon background
large atmospheric glow
chart bars
activity dots
dashboard glow

This makes the whole card visually consistent.

7. The main FeaturedProduct component
   export function FeaturedProduct({ data }: FeaturedProductProps) {

This declares and exports the component.

{ data }

destructures the data property from the props object.

Equivalent longer form:

export function FeaturedProduct(props: FeaturedProductProps) {
const data = props.data;
}

At present, data is unused. It remains there because we will later replace local product data with CMS data.

8. The section element
<section
  id="featured-products"

section is semantic HTML. It tells browsers and screen readers:

This is a distinct section of the page.

The ID allows links such as:

<Link href="#featured-products">
  View products
</Link>

to scroll here.

The classes:

relative

establish a positioning context for decorative absolute elements.

bg-[#eef3f8]

sets your light-mode background.

dark:bg-[#020817]

changes it to navy in dark mode.

py-20
lg:py-24

adds vertical padding:

py-20: top and bottom padding on smaller screens
lg:py-24: slightly larger padding on desktop 9. Shared site container

<div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

This aligns the section with your header, hero and footer.

mx-auto

sets automatic left and right margins, centring the container.

w-full

allows it to occupy all available width.

max-w-7xl

prevents it becoming excessively wide on large monitors.

px-6

adds horizontal padding on small screens.

lg:px-8

uses slightly more padding on desktop.

This is the standard alignment pattern we are using throughout the website:

mx-auto w-full max-w-7xl px-6 lg:px-8 10. Small section heading

You simplified it to something like:

<div className="mb-8">
  <p
    className="
      text-sm
      font-semibold
      uppercase
      tracking-[0.2em]
      text-blue-700
      dark:text-blue-400
    "
  >
    Featured Products
  </p>
</div>
mb-8

Creates space between the label and the first card.

text-sm

Uses a small font.

font-semibold

Makes it slightly bold.

uppercase

Displays:

FEATURED PRODUCTS
tracking-[0.2em]

Adds wide letter spacing, producing a premium section-label style.

11. Generating multiple cards using .map()
<div className="relative">
  {products.map((product, index) => (

products.map() loops through the products array.

For each product, React receives:

product

The current product object.

And:

index

Its numerical position.

For the three products:

School ERP index 0
Business Operations Platform index 1
AI Automation Suite index 2

The .map() function returns JSX for each product.

Instead of manually writing:

<ProductCard product={products[0]} />
<ProductCard product={products[1]} />
<ProductCard product={products[2]} />

we generate them automatically.

That is why this design is already CMS-friendly. If Payload returns five products, .map() generates five cards automatically.

12. The React key
    key={product.title}

React needs a unique key when rendering a list.

It uses the key to track which item has changed, moved, appeared or disappeared.

A CMS-backed version should ideally use the Payload product ID:

key={product.id}

because IDs are more reliable than titles.

13. The sticky wrapper
<div
  className="sticky"

This applies:

position: sticky;

A sticky element behaves normally until it reaches its specified top position. It then stays fixed relative to the viewport while its parent section continues scrolling.

The position is calculated dynamically:

style={{
top: `${96 + index * 20}px`,

For product zero:

96 + 0 × 20 = 96px

For product one:

96 + 1 × 20 = 116px

For product two:

96 + 2 × 20 = 136px

So the cards stop at slightly different vertical positions:

First card 96px from top
Second card 116px from top
Third card 136px from top

This leaves a small portion of each previous card visible, creating the stacked effect.

The 96px also keeps the cards beneath your sticky header.

14. zIndex
    zIndex: index + 1,

This decides which card appears in front.

The cards receive:

First card z-index 1
Second card z-index 2
Third card z-index 3

Therefore, the second card can cover the first, and the third can cover the second.

Without increasing z-index, a previous card might remain visually above the next one.

15. Creating scroll distance with paddingBottom
    paddingBottom:
    index === products.length - 1 ? "0px" : "112px",

This checks whether the current product is the final one.

index === products.length - 1

For three products:

products.length

is 3.

The final array index is:

3 - 1 = 2

Therefore:

index 0 → not final → 112px bottom padding
index 1 → not final → 112px bottom padding
index 2 → final → 0px bottom padding

The bottom padding creates enough vertical scrolling room for the next card to rise.

The ternary operator:

condition ? valueIfTrue : valueIfFalse

Here it means:

is this the final product
? use no bottom padding
: use 112px 16. Passing data to ProductCard
<ProductCard product={product} index={index} />

We pass two props:

product={product}

The complete current product object.

index={index}

The card number.

17. ProductCardProps
    type ProductCardProps = {
    product: Product;
    index: number;
    };

This tells TypeScript that ProductCard requires:

a correctly structured product
a number 18. Extracting the icon component
function ProductCard({ product, index }: ProductCardProps) {
const Icon = product.icon;

product.icon contains something such as:

GraduationCap

We assign it to a capitalised variable:

const Icon

React component variables must start with a capital letter.

Then later:

<Icon className="size-6" />

For School ERP, React effectively renders:

<GraduationCap className="size-6" />

For the second card, it becomes:

<Building2 className="size-6" />

That is a powerful React pattern: storing component references inside data.

19. The card <article>
<article

article is semantic HTML suitable for a self-contained product feature.

Key classes:

relative

Allows decorative layers inside it to be positioned absolutely.

min-h-[540px]
lg:min-h-[600px]

Ensures the cards maintain a substantial visual height.

It is min-height, not fixed height, so the card can grow if content needs more room.

overflow-hidden

Clips atmospheric glows and grid lines at the rounded edges.

rounded-[36px]

Creates the large rounded-card style.

border
border-slate-200/80

Adds a subtle light-mode border.

bg-white

Creates the light card surface.

shadow-[0_30px_90px_rgba(15,23,42,0.12)]

Creates a custom shadow.

The four shadow values mean roughly:

horizontal offset: 0
vertical offset: 30px
blur radius: 90px
colour: dark slate at 12% opacity

Dark-mode equivalents:

dark:border-white/10
dark:bg-[#071126]
dark:shadow-[0_35px_100px_rgba(0,0,0,0.45)] 20. Atmospheric background glow

<div
  aria-hidden="true"
  className={`
    pointer-events-none
    absolute
    -right-40
    -top-40
    h-[34rem]
    w-[34rem]
    rounded-full
    bg-gradient-to-br
    ${product.accent}
    opacity-15
    blur-[100px]
    dark:opacity-25
  `}
/>

This is simply an empty circular <div>.

It becomes a glow because it has:

rounded-full

which makes it circular.

bg-gradient-to-br

creates a diagonal gradient.

${product.accent}

inserts the current product’s colours.

For School ERP, the final class string includes:

from-blue-600 via-cyan-500 to-blue-400
blur-[100px]

heavily blurs the circle.

opacity-15

makes it subtle.

absolute -right-40 -top-40

places much of it outside the top-right edge.

aria-hidden="true"

tells screen readers this is decorative and contains no meaningful information.

pointer-events-none

prevents it intercepting mouse clicks.

21. The technical grid
<div
  aria-hidden="true"
  className="
    pointer-events-none
    absolute
    inset-0
    bg-[linear-gradient(...),linear-gradient(...)]
    [background-size:48px_48px]
  "
/>

This creates the faint grid without an image.

The first linear-gradient draws vertical lines:

linear-gradient(
to right,
rgba(...) 1px,
transparent 1px
)

The second draws horizontal lines:

linear-gradient(
to bottom,
rgba(...) 1px,
transparent 1px
)

The repeating background is sized:

[background-size:48px_48px]

Therefore, every grid square is 48px by 48px.

22. The card content grid
<div
  className="
    relative
    z-10
    grid
    min-h-[540px]
    items-center
    gap-14
    p-7
    sm:p-8
    lg:min-h-[600px]
    lg:grid-cols-[0.92fr_1.08fr]
    lg:p-10
  "
>
relative z-10

Keeps the real content above the decorative glow and grid.

grid

Turns the container into CSS Grid.

Mobile layout

Before the lg breakpoint, no column definition exists, so everything appears in one column:

Product details
Dashboard preview
Desktop layout
lg:grid-cols-[0.92fr_1.08fr]

Creates two columns:

Left column: 0.92 fraction
Right column: 1.08 fractions

The dashboard gets slightly more width than the text.

items-center

Vertically centres both columns.

gap-14

Adds space between them.

Padding
p-7
sm:p-8
lg:p-10

increases internal spacing gradually across screen sizes.

23. Product icon
    <span
    className={`    flex
  size-12
  items-center
  justify-center
  rounded-2xl
  bg-gradient-to-br
  ${product.accent}
  text-white
  shadow-lg`}
    >   <Icon className="size-6" aria-hidden="true" />
    > </span>

The outer <span> creates the icon tile.

flex items-center justify-center

centres the icon horizontally and vertically.

size-12

sets both width and height to 3rem.

rounded-2xl

rounds the tile.

bg-gradient-to-br ${product.accent}

uses the product’s gradient.

The icon has:

aria-hidden="true"

because the nearby text already identifies the product. Announcing the decorative icon would be redundant.

24. Product numbering
    Product {String(index + 1).padStart(2, "0")}

The first product has index 0, but humans expect numbering from 1, so:

index + 1

produces:

1
2
3

String() converts the number into text.

.padStart(2, "0")

ensures the text has at least two characters.

Therefore:

1 → "01"
2 → "02"
3 → "03"

The output becomes:

Product 01
Product 02
Product 03 25. Features list

<ul className="mt-8 grid gap-3 sm:grid-cols-2">
  {product.features.map((feature) => (

Again, .map() generates one list item for each feature.

key={feature}

uses the feature text as the React key.

The bullet is a custom glowing circle:

<span
  aria-hidden="true"
  className="
    mt-2
    size-1.5
    shrink-0
    rounded-full
    bg-cyan-500
    shadow-[0_0_8px_rgba(6,182,212,0.8)]
  "
/>

There is no standard HTML bullet because we styled our own.

shrink-0 prevents the dot becoming compressed when text wraps.

26. CTA button
<Link href={product.href}>

The destination changes for each product.

The button-looking link has:

group

This allows child components to react when the parent is hovered.

For example:

group-hover:translate-x-0.5
group-hover:-translate-y-0.5

on the arrow means:

When the entire link is hovered, move the arrow slightly right and upward.

The button changes between modes:

bg-slate-950 text-white

in light mode.

dark:bg-white dark:text-slate-950

in dark mode.

27. Product preview
    <ProductPreview product={product} />

Rather than putting all dashboard JSX inside ProductCard, it is separated into another component.

This improves readability and makes the dashboard reusable.

28. Preview wrapper
<div className="relative mx-auto w-full max-w-xl">
relative

anchors the glow.

mx-auto

centres it.

w-full

allows full available width.

max-w-xl

prevents excessive width.

29. Dashboard glow
<div
  aria-hidden="true"
  className={`
    absolute
    inset-[8%]
    rounded-full
    bg-gradient-to-br
    ${product.accent}
    opacity-20
    blur-[80px]
    dark:opacity-30
  `}
/>

This is another empty blurred circular <div>.

Because it sits behind the dashboard, it makes the preview appear illuminated.

30. Main dashboard surface
<div
  className="
    relative
    overflow-hidden
    rounded-[28px]
    border
    border-slate-200/80
    bg-slate-50/90
    p-4
    shadow-[0_28px_80px_rgba(15,23,42,0.16)]
    backdrop-blur-xl
    ...
  "
>

This creates a glass-like dashboard panel.

bg-slate-50/90

means slate background with 90% opacity.

backdrop-blur-xl

blurs any colour or glow behind the panel.

overflow-hidden

keeps children inside rounded corners.

31. Fake browser toolbar
<div className="flex items-center gap-2">
  <span className="size-2.5 rounded-full bg-red-400" />
  <span className="size-2.5 rounded-full bg-amber-400" />
  <span className="size-2.5 rounded-full bg-emerald-400" />
</div>

These are three empty circles.

They imitate the red, yellow and green window controls commonly seen on macOS.

They have no functionality. Their purpose is only to make the dashboard resemble a software application.

32. Preview metrics
<div className="grid gap-4 pt-5 sm:grid-cols-2">
  <PreviewMetric
    label={product.preview.label}
    value={product.preview.value}
  />

<PreviewMetric
    label={product.preview.secondaryLabel}
    value={product.preview.secondaryValue}
  />

</div>

This creates two small metric cards.

For School ERP:

Students Attendance today
2,480 94.8%

The values are data-driven, not hardcoded inside PreviewMetric.

33. Fake analytics chart

This is the most important learning part.

The chart is generated from:

{[42, 64, 51, 78, 68, 88, 96].map((height, index) => (

This is simply an array of numbers.

Each number represents the height of one bar as a percentage:

42%
64%
51%
78%
68%
88%
96%

For each value, React creates one bar.

<div
  key={index}
  className="
    relative
    flex-1
    overflow-hidden
    rounded-t-lg
    bg-blue-500/10
  "
  style={{ height: `${height}%` }}
>
flex-1

Every bar receives equal width.

The parent has:

flex h-44 items-end gap-3

So the bars are arranged horizontally.

items-end

Aligns all bars to the bottom.

That is why different heights rise upward from the same baseline.

Dynamic height
style={{ height: `${height}%` }}

For the first value, it becomes:

style={{ height: "42%" }}

For the second:

style={{ height: "64%" }}

This creates the chart shape.

The inner gradient:

<div
  className={`
    absolute
    inset-x-0
    bottom-0
    h-full
    bg-gradient-to-t
    ${product.accent}
    opacity-80
  `}
/>

fills the bar with the product’s colour.

So there is no chart library involved. It is essentially:

Flex container
├── div at 42% height
├── div at 64% height
├── div at 51% height
...

It looks like a chart because of layout and styling.

34. Why this fake chart is appropriate

The values are decorative and illustrative. They are not claiming to represent real customer data.

This works well in a product mockup because it:

demonstrates the appearance of an analytics dashboard
does not require a chart library
keeps the component lightweight
adapts to each product’s gradient
works in server-rendered React
can later be replaced with actual product screenshots or real chart data

For real reporting, you would likely use a chart library such as Recharts. For a decorative landing-page preview, CSS bars are often enough.

35. Activity rows
    {[
    "New activity recorded",
    "Report generated",
    "Workflow completed",
    ].map((item, index) => (

This array generates three dashboard activity rows.

Each row contains:

a coloured dot
activity text
fake relative time

The time is:

{index + 1}m ago

So the rows display:

New activity recorded 1m ago
Report generated 2m ago
Workflow completed 3m ago

Again, this is display-only demo data.

36. Reusing the product accent in activity dots
    <span
    className={`    size-2
  rounded-full
  bg-gradient-to-br
  ${product.accent}`}
    />

This is another benefit of keeping the accent in the product object.

School ERP gets blue/cyan dots.

The business platform gets violet/blue dots.

The AI product gets cyan/blue/violet dots.

One property controls many visual elements.

37. PreviewMetric
    type PreviewMetricProps = {
    label: string;
    value: string;
    };

This defines the inputs.

function PreviewMetric({ label, value }: PreviewMetricProps) {

The component destructures both values.

It creates one surface:

<div className="rounded-2xl border ... p-5">

The label:

<p className="text-xs text-slate-500 dark:text-slate-400">
  {label}
</p>

The value:

<p className="mt-3 text-3xl font-semibold ...">
  {value}
</p>

This avoids duplicating the same JSX twice.

Without it, you would write two nearly identical blocks. With it:

<PreviewMetric label="Students" value="2,480" />

is enough.

38. How the cards appear to rise

The effect does not come from an animation library.

It is a consequence of scrolling and sticky positioning.

Imagine the page vertically:

First sticky wrapper
Card 1
112px spacing

Second sticky wrapper
Card 2
112px spacing

Third sticky wrapper
Card 3

As you scroll:

Card 1 reaches top: 96px and sticks.
The document continues moving.
Card 2 approaches from below.
Card 2 has a higher z-index.
Card 2 reaches top: 116px.
It visually covers most of Card 1.
Card 3 repeats the effect.

The browser performs this behaviour natively. There is no scroll event listener.

That is significantly smoother than writing JavaScript such as:

window.addEventListener("scroll", ...) 39. Why sticky can stop working

position: sticky depends on the ancestor containers.

It can fail when a parent has:

overflow: hidden;
overflow: auto;
overflow: scroll;

It also needs enough vertical space to scroll through.

That is why your <main> should not have:

overflow-hidden

The individual card can use overflow-hidden; the large parent section should not.

40. How CMS integration will work later

Currently:

const products: Product[] = [...]

is the source of truth.

Later, Payload might return:

const products = data.featuredProducts;

The rest of the component does not fundamentally change because it already uses:

products.map(...)

Payload fields could be:

featuredProducts
├── title
├── eyebrow
├── description
├── features[]
├── CTA label
├── CTA URL
├── colour theme
├── preview label
├── preview value
├── secondary preview label
├── secondary preview value
└── display order

The only challenging field is the icon. Usually, I would store an icon name:

graduation-cap
building
sparkles

and map that string to a React component:

const iconMap = {
"graduation-cap": GraduationCap,
building: Building2,
sparkles: Sparkles,
};

Then:

const Icon = iconMap[product.icon];

CMS data cannot directly send a React component, so we use a controlled mapping.

41. The central lesson

This section follows a very important React pattern:

Data
↓
Reusable components
↓
.map()
↓
Generated interface

The data does not know how to display itself:

{
title: "School ERP",
value: "2,480",
}

The component does not know which product it will receive:

<ProductCard product={product} />

Separating data from presentation gives you flexibility.

You can:

add products without duplicating JSX
delete products
reorder products
change colours
connect Payload
reuse the preview component
maintain one card design

That is the main reason this code is scalable.

42. Simplified mental model

Think of the full system as four layers.

Layer 1: Data
const products = [...]

Defines what exists.

Layer 2: Loop
products.map(...)

Creates one UI block per product.

Layer 3: Card
<ProductCard />

Defines what every product card looks like.

Layer 4: Dashboard mockup
<ProductPreview />

Creates a visual demonstration of the product.

The chart itself is simply:

numbers.map(number => <div style={{ height: `${number}%` }} />)

The design makes those ordinary <div> elements look like a professional analytics chart.

This is one of the best things to study in the current site because the same architecture will later apply to services, testimonials, case studies, navigation, footer columns and CMS-driven products.

https://chatgpt.com/share/6a737263-adbc-83ec-a5dd-32ecceeab321
