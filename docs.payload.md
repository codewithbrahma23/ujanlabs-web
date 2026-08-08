Understanding Payload Before Writing Code

This is a lesson I don't want to skip because it will make everything else much easier.

Let's first understand how Payload stores content.

Think of Payload like this:

Payload CMS
│
├── Collections
│
├── Globals
│
├── Media
│
├── Users
│
└── Settings

--

1. Collections

Collections store multiple records.

Examples:

Blog Posts

Post 1
Post 2
Post 3
Post 4

or

Schools

Delhi Public School
St. Mary's
ABC Academy

or

Products

School ERP
RFID Attendance
Library System

A Collection is like a database table.

2. Globals ⭐

Globals store one document only.

For example:

Homepage

There is only one homepage.

Similarly:

Site Settings

Only one.

SEO Settings

Only one.

For Ujan Labs, our homepage should not be a Collection.

It should be a Global because there is only one homepage.

We'll create:

Homepage

and inside it:

Hero Title

Mission

Services

Vision

Primary Button

Secondary Button

When you edit it in the admin panel, you're editing that one homepage.

This is much cleaner than pretending the homepage is a "page" record.

3. Media

Media stores uploaded files.

For example:

Logo.png

hero.jpg

office.webp

rfid.png

Later, instead of hardcoding your logo or product screenshots, you'll upload them here.

4. Users

Payload already created this.

It controls who can log into:

/admin

Later, if Ujan Labs grows, you might have:

Administrator

Marketing

Content Writer

with different permissions.

5. Settings

These are configuration files rather than content. We'll leave them alone for now.

How our Ujan Labs CMS will look

Instead of the generic starter, we'll simplify it to something like:

Content
│
├── Homepage
│
├── Products
│
├── Services
│
└── Media

This is much easier for a content editor to understand.

What we want the editor experience to be

Imagine someone from your team logs in.

They should see:

Admin Dashboard

Content
│
├── Homepage
│
├── Products
│
├── Services
│
└── Media

They click Homepage, edit the mission statement, click Save, and the Next.js website shows the updated content.

No Git. No code changes.

### npx command to create thepayload

npx create-payload-app

### Install Payload Client in Frontend

Inside:

ujanlabs-web

Run:

pnpm add payload
