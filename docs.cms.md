Step 1 – Install Payload Packages

From your project root:

You are currently here:

ujanlabs-cms-demo

Run:

#### pnpm add payload @payloadcms/next @payloadcms/db-postgres

We also need PostgreSQL driver:

#### pnpm add pg

Step 2 – Create Payload folders

Create this structure:

ujanlabs-cms-demo

├── app
│
├── components
│
├── payload
│ |
│ ├── collections
│ |
│ ├── globals
│ |
│ └── payload.config.ts
│
└── payload-types.ts

We are separating CMS code from UI code.

This is important.

Step 3 – Create Payload Config

Create:

payload/payload.config.ts

Add:

import { buildConfig } from "payload";

import { postgresAdapter } from "@payloadcms/db-postgres";

export default buildConfig({

admin: {
user: "users",
},

db: postgresAdapter({

    pool: {
      connectionString:
        process.env.DATABASE_URL,
    },

}),

collections: [],

});
Step 4 – Add Environment Variables

Open:

.env

Add:

DATABASE_URL=postgres://sandeepbrahma@localhost:5432/ujanlabs

PAYLOAD_SECRET=my-super-secret-key

Important:

Your earlier problem happened because Payload was trying:

postgres user

but your Mac PostgreSQL user is:

sandeepbrahma

So we use the correct one.

Step 5 – Create Payload Entry Point

Create:

app/(payload)/admin/[[...segments]]/page.tsx

Add:

import { RootLayout } from "@payloadcms/next/layouts";

export default function AdminPage() {

return (

<div>
Payload Admin
</div>
);

}

Before we continue, let's verify the foundation.

Run:

pnpm dev

You should see:

✓ Ready

Then open:

http://localhost:3000

Your existing homepage should still work.

Stop here and verify

Please do only these steps first:

Install packages:
pnpm add payload @payloadcms/next @payloadcms/db-postgres pg
Create:
payload/payload.config.ts
Update .env
Start:
pnpm dev

Once you confirm it starts without errors, we will do Module 4.2 – Creating the Homepage Global in Payload CMS.

This is where it gets exciting: we will create your first editable CMS content:

Homepage
|
├── Hero
│ ├── Badge
│ ├── Title
│ ├── Description
│ ├── Primary Button
│ └── Secondary Button
|
├── Mission
|
├── Services
|
├── Product
|
└── Vision

Then your Ujan Labs website will officially become CMS-driven.
