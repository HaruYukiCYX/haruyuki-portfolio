# YeeMe / 易秘 — project notes

By Yuxuan Chen · haruyuki

## Visual direction & responsive design

I established an ink-inspired visual language: landscape imagery, paper-like surfaces, serif typography and restrained red accents. I worked through colour, spacing and component treatments across the homepage, feature pages and account emails, adapting Chinese and English content to desktop and mobile layouts.

## Database & product data

I worked on the PostgreSQL data model for accounts, sessions, charts, generated readings, credits and feedback. Defining how those records relate and persist, through Drizzle schemas and migrations, was part of making the individual screens function as one product.

## Verification & account flows

I worked on registration, email verification, code resends and password resets. Signed, expiring proof-of-work challenges, server checks and a database replay registry support abuse prevention alongside rate limits. The account flows connect these checks with the steps visitors see.

## Feedback & email automation

I connected the feedback flow to database storage and automatic SMTP forwarding, retaining delivery status when sending fails. I also worked on verification and password-reset emails, including their message structure, sender and reply-to behaviour, and visual consistency.

## Domain, deployment & routing

I worked through domain setup and the routing for www.yeemeapp.com. API requests reach the server handler, while direct frontend URLs resolve to the application. Redirects and password-reset links connect these entry points with the account journey.

## AI models & system prompts

I worked on configurable model and endpoint integration behind a server-side adapter. Feature-specific Chinese and English system prompts define the reading structure, tone, context and response boundaries. Provider-error handling and output rules are part of that integration.

[Visit YeeMe](https://www.yeemeapp.com)

## Interface

![Desktop and mobile interface](../dist/assets/yeeme-device-transparent.png)
