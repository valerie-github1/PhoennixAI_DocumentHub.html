# Skill: pulse-content

Manages PULSE social media content creation and the PULSE Social Media Command Centre app.

## What this skill does

- Draft, update, and schedule social media posts for the PhoennixAI brand
- Update post data inside `PhoennixAI_PULSE_App.html` (BL-024)
- Maintain the Week 1 (and subsequent week) content schedule
- Generate Instagram, LinkedIn, and other platform copy in PhoennixAI brand voice
- Update analytics data, lead intelligence entries, and mood board content in the PULSE app

## Agent owner

**PULSE** — Agent 003, Soft Violet #A78BFA  
Social Media and Content Intelligence. Beta Launch Campaign Owner.

## Brand voice rules

- Direct. Authoritative. No fluff.
- Speaks to founders who are serious about growth.
- No em dashes. Ever. (Key Decision 6 -- zero tolerance.)
- Tagline: "Created to Create. Intelligent by nature."
- Sub-tagline: "Rise. Automate. Dominate."
- Tone is confident, not arrogant. Energising, not hype.

## Brand colours for social content

- Primary: Phoenix Blue #00E5FF
- Accent: Phoenix Fire #FF6B2B (10-15% max)
- Gold accent: #FFB830 (10-15% max)
- Background: Deep navy #060A18

## PULSE app structure (PhoennixAI_PULSE_App.html)

The app has six sections: Dashboard, Schedule, All Posts, Compose, Analytics, Lead Intel, Mood Board, and Figma Whiteboard. All Week 1 posts are pre-loaded. Supabase sync is live. When adding new posts, maintain the existing data structure in the JavaScript post array.

## Content schedule reference

- Week 1 campaign: active from 24 March 2026
- First flyer: posted
- Posting cadence: defined in the PULSE app Schedule tab

## Rules

- All social content must be approved in brand voice before being added to the schedule
- The PULSE app is live at GitHub Pages -- changes pushed to `main` go live immediately
- PhoennixAI logo watermark must appear on all visual content
- Every new post added to the app must include: platform, date, copy, status, and engagement target
