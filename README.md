# DojoShop -2023

# Full Stack E-Commerce + Dashboard & CMS: Next.js 13 App Router, React, Tailwind, Prisma, MySQL, 2023

Key Features:

-   We will be using Shadcn UI for the Admin!
-   Our admin dashboard is going to serve as both CMS, Admin and API!
-   You will be able to control mulitple vendors / stores through this single CMS! (For example you can have a "Shoe store" and a "Laptop store" and a "Suit store", and our CMS will generate API routes for all of those individually!)
-   You will be able to create, update and delete categories!
-   You will be able to create, update and delete products!
-   You will be able to upload multiple images for products, and change them whenever you want!
-   You will be able to create, update and delete filters such as "Color" and "Size", and then match them in the "Product" creation form.
-   You will be able to create, update and delete "Billboards" which are these big texts on top of the page. You will be able to attach them to a single category, or use them standalone (Our Admin generates API for all of those cases!)
-   You will be able to Search through all categories, products, sizes, colors, billboards with included pagination!
-   You will be able to control which products are "featured" so they show on the homepage!
-   You will be able to see your orders, sales, etc.
-   You will be able to see graphs of your revenue etc.
-   You will learn Clerk Authentication!
-   Order creation
-   Stripe checkout
-   Stripe webhooks
-   MySQL + Prisma + PlanetScale

### Prerequisites

**Node version 14.x**

### Cloning the repository
git clone https://github.com/anon-pradip/DojoShop-Next.js13.git

### Install packages

npm i

## FOR ADMIN APP

### Setup .env file

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY= \n
CLERK_SECRET_KEY= \n
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in \n
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up \n
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/ \n
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/ \n

#This was inserted by `prisma init`: \n
#Environment variables declared in this file are automatically made available to Prisma.\n
#See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema \n

#Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB. \n
#See the documentation for all the connection string options: https://pris.ly/d/connection-strings \n

DATABASE_URL=''
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""
STRIPE_API_KEY=
FRONTEND_STORE_URL=http://localhost:3001
STRIPE_WEBHOOK_SECRET=

### Connect to PlanetScale and Push Prisma
npx prisma generate
npx prisma db push

### Start the app

npm run dev

## FOR STORE (FRONTEND PART) APP
### MAKE SURE YOU HAVE  ADMIN SETUP FIRST!
### Setup .env file
NEXT_PUBLIC_API_URL=
### Start the app
npm run dev