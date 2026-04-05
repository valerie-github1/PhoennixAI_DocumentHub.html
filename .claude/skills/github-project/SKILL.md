# Skill: github-project

Manages GitHub repository operations for the PhoennixAI Mission Control project.

## What this skill does

- Push new or updated HTML files to the `main` branch of `valerie-github1/phoennixai-mission-control`
- Verify GitHub Pages deployment status after a push
- Stage, commit, and push changes following the session close protocol
- Check what files have changed since the last commit (`git diff --stat`, `git status`)
- Confirm the live GitHub Pages URL reflects the latest build

## When to use

- At the end of every session (session close protocol requires pushing all changes to `main`)
- When a new HTML file, asset, or config file has been created or updated
- When asked to check what is staged, unstaged, or unpushed

## Rules

- Always commit to `main`. There is no separate dev branch in Phase 0.
- Never force-push. Never amend published commits.
- Commit messages should be clear and reference the session or backlog item where relevant (e.g. `Session 15: PULSE content update, BL-024`).
- After pushing, confirm GitHub Pages is live at: `https://valerie-github1.github.io/phoennixai-mission-control/`
- The public repo hosts all client-facing apps. The private repo holds backend/Supabase config. Never push secrets or Supabase keys to the public repo.

## Repo details

- Public repo: `valerie-github1/phoennixai-mission-control`
- Branch: `main`
- Hosting: GitHub Pages (auto-deploys on push to `main`)
- Connected to Claude.ai Projects for full codebase access every session (Key Decision 35)
