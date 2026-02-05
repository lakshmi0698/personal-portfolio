# Git Commands Reference

This document contains all the Git commands used in this project for easy reference.

## Initial Setup

### Initialize Repository
```bash
git init
```
Creates a new Git repository in the current directory.

### Configure User Information
```bash
git config user.email "your.email@example.com"
git config user.name "Your Name"
```
Sets the email and name for commits in this repository.

## Basic Workflow

### Check Status
```bash
git status
```
Shows which files are modified, staged, or untracked.

### Stage Files
```bash
# Stage all files
git add -A

# Stage specific file
git add filename.txt

# Stage all files in current directory
git add .
```
Stages files for the next commit.

### Commit Changes
```bash
git commit -m "Your commit message here"
```
Creates a commit with the staged changes.

### View Commit History
```bash
# Simple one-line format
git log --oneline

# Graphical representation
git log --oneline --graph --decorate

# Detailed with file changes
git log --stat

# Last N commits
git log -3
```
Shows the commit history in various formats.

## Commit Messages Used in This Project

```bash
# Commit 1: Initial project structure
git commit -m "Initial commit: Add project structure with HTML, CSS, and JavaScript files"

# Commit 2: Documentation additions
git commit -m "Add: Enhanced meta tags, LICENSE, and CONTRIBUTING.md for better documentation"

# Commit 3: Improvements
git commit -m "Improve: Add accessibility features, performance optimizations, and comprehensive SETUP.md guide"

# Commit 4: Final documentation
git commit -m "Docs: Add comprehensive project summary documenting all improvements and best practices"
```

## Commit Message Conventions

### Prefixes Used:
- `Initial commit:` - First commit of the project
- `Add:` - Adding new features or files
- `Update:` - Modifying existing functionality
- `Fix:` - Bug fixes
- `Improve:` - Enhancements to existing features
- `Refactor:` - Code restructuring without changing functionality
- `Docs:` - Documentation changes
- `Style:` - Code formatting changes
- `Remove:` - Removing files or features

### Format:
```
Prefix: Brief description of what changed

Optional longer description if needed
```

## Branching (for future development)

### Create a New Branch
```bash
git branch feature-name
```

### Switch to a Branch
```bash
git checkout feature-name
# Or using newer syntax
git switch feature-name
```

### Create and Switch to New Branch
```bash
git checkout -b feature-name
# Or using newer syntax
git switch -c feature-name
```

### List All Branches
```bash
git branch
```

### Merge a Branch
```bash
git checkout main
git merge feature-name
```

## Remote Repository

### Add Remote Repository
```bash
git remote add origin https://github.com/username/repository.git
```

### Push to Remote
```bash
# First time push
git push -u origin main

# Subsequent pushes
git push
```

### Pull from Remote
```bash
git pull origin main
```

### Clone a Repository
```bash
git clone https://github.com/username/repository.git
```

## Useful Commands

### Undo Changes

#### Unstage Files
```bash
git reset HEAD filename.txt
```

#### Discard Changes in Working Directory
```bash
git checkout -- filename.txt
```

#### Amend Last Commit
```bash
git commit --amend -m "New commit message"
```

### View Differences
```bash
# See unstaged changes
git diff

# See staged changes
git diff --staged

# See changes in specific file
git diff filename.txt
```

### Ignore Files
Create a `.gitignore` file and add patterns:
```
# Example .gitignore
node_modules/
*.log
.env
.DS_Store
```

## Git Best Practices

1. **Commit Often**: Make small, frequent commits
2. **Write Clear Messages**: Explain what and why, not how
3. **Test Before Committing**: Ensure code works
4. **Use .gitignore**: Don't commit unnecessary files
5. **Keep Commits Focused**: One logical change per commit
6. **Review Before Pushing**: Check what you're about to share

## GitHub Integration

### Deploy to GitHub Pages
```bash
# Push your code to GitHub
git push origin main

# GitHub Pages will automatically deploy from:
# Settings > Pages > Select main branch > Save
```

### Create Pull Request
1. Fork the repository on GitHub
2. Clone your fork
3. Create a feature branch
4. Make changes and commit
5. Push to your fork
6. Open PR on original repository

## Troubleshooting

### View Remote URL
```bash
git remote -v
```

### Change Remote URL
```bash
git remote set-url origin new-url
```

### Recover Deleted Branch
```bash
git reflog
git checkout -b branch-name commit-hash
```

### Stash Changes
```bash
# Save changes temporarily
git stash

# List stashes
git stash list

# Apply stashed changes
git stash apply

# Apply and remove from stash
git stash pop
```

## This Project's Git History

```
* 826e8bb (HEAD -> master) Docs: Add comprehensive project summary
* 0c473cb Improve: Add accessibility features and SETUP.md guide
* 734bb46 Add: Enhanced meta tags, LICENSE, and CONTRIBUTING.md
* 0de2a37 Initial commit: Add project structure
```

## Additional Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [Interactive Git Tutorial](https://learngitbranching.js.org/)

---

**Remember**: Git is a powerful tool. Practice these commands to become proficient!
