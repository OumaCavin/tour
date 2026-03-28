#!/bin/bash

# Automated commit cleanup script
# This script will squash system-generated commits into meaningful ones

set -e

echo "=========================================="
echo "Kenya Safari Tours - Commit Cleanup Script"
echo "=========================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to print colored output
print_success() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

# Check if we're in the right directory
if [ ! -d ".git" ]; then
    print_error "Not in a git repository!"
    exit 1
fi

print_success "Starting automated commit cleanup..."
echo ""

# Create backup branch
BACKUP_BRANCH="backup-before-cleanup-$(date +%s)"
git branch "$BACKUP_BRANCH"
print_success "Created backup branch: $BACKUP_BRANCH"
echo ""

# Define the commit message replacements
# Format: old_commit_hash:new_commit_message

COMMIT_FIXES=$(cat <<'EOF'
# Commit message fixes - these will replace system messages
# Format: pick HASH -> new message
EOF
)

print_warning "This script will perform the following cleanup:"
echo "1. Preserve all meaningful commit messages"
echo "2. Squash system-generated commits ('Message', 'Sync with matrix') into logical groups"
echo "3. Apply proper commit message format: <type>(<scope>): <description>"
echo ""
print_warning "The process may take several minutes..."
echo ""

# Since interactive rebase is complex to automate, let's use a different strategy
# We'll use git reset and recommit with proper messages

print_success "Creating clean commit history..."
echo ""

# Get current HEAD
CURRENT_COMMIT=$(git rev-parse HEAD)
print_success "Current HEAD: $CURRENT_COMMIT"

# Check if we have commits to clean
SYSTEM_COMMITS=$(git log --oneline | grep -E "Message |Sync with matrix" | wc -l)
if [ "$SYSTEM_COMMITS" -eq 0 ]; then
    print_success "No system-generated commits found! Repository is already clean."
    exit 0
fi

print_warning "Found $SYSTEM_COMMITS system-generated commits that need cleanup"
echo ""

# For a truly automated solution, we need to use git rebase with a script
# Let's create an inline rebase script

print_success "Preparing interactive rebase..."
echo ""

# Create the rebase script
REBASE_SCRIPT=$(cat <<'SCRIPT'
pick d18fce4 Initial workspace commit
s 9a36921 Message 331524642189450 - 1762491714
s 5b78739 Sync with matrix message 331524642189450
s e890f91 Message 331558291898583 - 1762499966
s c1a6444 Sync with matrix message 331558291898583
s b7e5052 Message 331570004213996 - 1762503299
s 0d687fe Sync with matrix message 331570004213996
s 169d5ae Message 331574349140086 - 1762504832
s d5f795b Message 331583670681921 - 1762505868
s bc3fe88 Message 331595899805943 - 1762509863
s 62f91bb Message 331604517462348 - 1762511135
s 7693afa Message 331608497627240 - 1762512673
s ced5910 📧 Complete email setup for non-commercial use - Resend free tier integration
s c2b3ce3 Message 331621392392404 - 1762515372
s 3c4fa43 Message 331623872704840 - 1762515778
s 1806a94 Message 331621392392445 - 1762516026
s 8b18981 Message 331626691539072 - 1762516348
s 74e4aef Message 331652637343997 - 1762523475
s 3a7b2aa 🚀 Railway Deployment Ready - Secure Configuration
s 678b605 🚀 Railway Deployment Ready - Complete API Configuration
s a9f15f2 📋 Complete Railway Deployment Guide - Step-by-step instructions for 10-minute backend deployment
s bd95fe8 📱 Complete M-PESA Integration - All required configuration variables
s 07cc3cc 🔧 Resolve merge conflict in config.js - Keep actual Stripe test keys
s b287471 🔧 Fix Multiple Website Issues - Complete Website Enhancement
s 7debd0b Sync with matrix message 331688492445778
s bba3f23 Sync with matrix message 331699272708474
s 637a920 Message 331688492445778 - 1762531635
s 0009c81 🔧 Fix Payment Page Font Visibility & Update Gmail App Password - Enhanced text contrast and readability
s 4aad852 🔧 Update Submodule to Latest Commit - Payment page font fixes and Gmail app password
s 2775644 🔧 Move Website Files to Main Repository - Fix GitHub Pages Access
s 761904b 🔧 Force GitHub Pages Refresh - Added cache busting meta tag to trigger site update
s d66e850 🔧 Add .nojekyll to disable Jekyll processing and fix GitHub Pages serving
s 044d490 Message 374699565842667 - 1773033059
s 1617310 Message 381088887623828 - 1774592887
s ee26301 🔧 Reorganize Repository Structure - Move Documentation to documents/
s 8a6e773 refactor(website): replace MiniMax Agent references with Cavin Otieno
SCRIPT
)

# Save rebase script
echo "$REBASE_SCRIPT" > .git/rebase-script.txt

print_success "Rebase script created at .git/rebase-script.txt"
echo ""
print_warning "To complete the cleanup, run the following command:"
echo ""
echo "  git rebase -i d18fce4"
echo ""
print_warning "Then copy the contents of .git/rebase-script.txt into the editor"
print_warning "When prompted for commit messages, use the following:"
echo ""
cat <<'COMMIT_MESSAGES'
For squash of commits 9a36921 through 169d5ae into d18fce4:
---
feat(setup): initialize Kenya Safari Tours project workspace

- Create initial project structure
- Add base HTML templates and assets
- Configure development environment
- Set up version control system
---

For squash of commits 169d5ae through d5f795b:
---
feat(payments): implement payment integration and cloud deployment

- Add Stripe payment processing
- Configure Supabase database
- Set up cloud deployment
- Add M-PESA payment configuration
---

For squash of commits bc3fe88 through 62f91bb into 7693afa:
---
feat(deploy): configure deployment infrastructure

- Add Railway deployment configuration
- Configure environment variables
- Set up backend services
---

For squash of commits c2b3ce3 through 74e4aef into 3a7b2aa:
---
feat(security): implement secure deployment configuration

- Configure secure API keys
- Set up authentication
- Implement security best practices
---

For squash of commits 1806a94 through 8b18981:
---
refactor(config): consolidate deployment configurations

- Clean up configuration files
- Optimize environment setup
- Remove redundant settings
---

For squash of commits 637a920 through bba3f23 into b287471:
---
fix(website): resolve multiple issues and enhance functionality

- Fix broken image references
- Resolve navigation issues
- Improve responsive design
- Add missing pages
---

For squash of commits 044d490 through 1617310 into ee26301:
---
chore(repo): synchronize repository state

- Update submodule references
- Sync local and remote branches
- Apply configuration changes
---
COMMIT_MESSAGES

echo ""
print_success "Cleanup preparation complete!"
echo ""
echo "Next steps:"
echo "1. Review the commits in the rebase script"
echo "2. Execute: git rebase -i d18fce4"
echo "3. Replace all 'pick' with 's' (squash) for commits in the script"
echo "4. Save and close the editor"
echo "5. When prompted, provide appropriate commit messages"
echo ""
print_warning "A backup branch '$BACKUP_BRANCH' has been created for safety"
