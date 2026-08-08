The Problem: Renaming Project Folder Breaks Next.js Caches
When you rename your project folder, Next.js's build cache and Turbopack cache still reference the old paths. This causes hydration mismatches and the flickering you're seeing.

Here's what's happening:

Build Cache (./next folder) - Has old absolute paths

Turbopack Cache (.next/cache or ./node_modules/.cache) - Cached with old folder paths

Node.js Module Cache - Some modules are cached with old paths

The error FATAL: An unexpected Turbopack error occurred and the hydration warning confirm this.

Clear ALL Next.js Caches
Run these commands in your terminal (in the renamed project folder):

bash

# 1. Remove Next.js build cache

rm -rf .next

# 2. Remove Turbo cache

rm -rf .turbo

# 3. Remove Node.js module cache

rm -rf node_modules/.cache

# 4. If you're using pnpm (which you are), also clear:

rm -rf .pnpm-store
