# Decap CMS Blog Setup (Vercel + Static Site)

## Objective
Set up a simple blog system using Decap (Netlify) CMS where:
- Content is stored as Markdown in the repo
- A non-technical user can create/edit blog posts via a CMS UI
- Site is hosted on Vercel
- Blog pages are statically generated

---

## Tech Assumptions
- Site is already deployed on Vercel
- Repo is hosted on GitHub
- Static site (HTML/CSS or Astro/11ty preferred for Markdown support)

---

## High-Level Architecture
1. User visits `/admin` → Decap CMS UI
2. User logs in via GitHub OAuth
3. Creates/edits blog posts
4. CMS commits Markdown files to repo
5. Vercel auto-builds and deploys
6. Blog pages are generated from Markdown files

---

## Folder Structure

Ensure the project contains:

``