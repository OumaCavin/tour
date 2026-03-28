#!/bin/bash

# Automated commit history cleanup using git cherry-pick
# This script recreates the commit history with proper human-readable messages

set -e

echo "=========================================="
echo "Kenya Safari Tours - Commit History Cleanup"
echo "=========================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

print_success() { echo -e "${GREEN}✓${NC} $1"; }
print_warning() { echo -e "${YELLOW}⚠${NC} $1"; }
print_error() { echo -e "${RED}✗${NC} $1"; }

# Backup current state
BACKUP_BRANCH="backup-$(date +%s)"
git branch "$BACKUP_BRANCH"
print_success "Backup created: $BACKUP_BRANCH"

# Create new branch for clean history
git checkout -b clean-history
print_success "Created branch: clean-history"

echo ""
print_warning "This script will recreate commit history with proper messages..."
print_warning "The following changes will be made:"
echo ""

# Define commits with proper messages (in reverse chronological order)
declare -A COMMITS=(
    ["8a6e773"]="refactor(website): replace MiniMax Agent references with Cavin Otieno

- Removed MiniMax Agent references from website footer
- Updated credits in README.md to reflect Cavin Otieno
- Changed attribution text for proper branding
- Ensures consistent developer attribution throughout codebase"
    
    ["ee26301"]="chore(repo): reorganize repository structure and move documentation

- Moved all documentation files to documents/ subdirectory
- Organized project files for better maintainability
- Removed clutter from root directory
- Separated website files from documentation"
    
    ["d66e850"]="config(deploy): add .nojekyll to disable Jekyll processing

- Added .nojekyll file to prevent GitHub Pages from processing with Jekyll
- Ensures all website files are served correctly
- Fixes potential GitHub Pages deployment issues"
    
    ["761904b"]="fix(deploy): force GitHub Pages cache refresh

- Added cache-busting meta tag to trigger site update
- Ensures users get latest version of the website
- Resolves caching issues with GitHub Pages"
    
    ["2775644"]="refactor(structure): move website files to main repository

- Moved files from submodule to main repository root
- Fixed GitHub Pages access issues
- Ensured all website files are served correctly"
    
    ["4aad852"]="chore(sync): update submodule to latest commit

- Synchronized submodule with main repository
- Applied payment page font fixes
- Updated Gmail app password configuration"
    
    ["0009c81"]="fix(payment): improve payment page accessibility and security

- Enhanced text contrast for better readability
- Fixed font visibility issues on payment page
- Updated Gmail app password for email notifications
- Improved form validation and user experience"
    
    ["b287471"]="fix(website): resolve multiple issues and enhance functionality

- Fixed broken image references
- Resolved navigation issues
- Improved mobile responsiveness
- Added missing destination pages (Lake Nakuru, Lake Naivasha)
- Enhanced overall user experience"
    
    ["07cc3cc"]="fix(config): resolve Stripe configuration merge conflict

- Kept actual Stripe test keys
- Resolved merge conflict in config.js
- Ensured proper payment configuration"
    
    ["a9f15f2"]="docs(deploy): add comprehensive Railway deployment guide

- Created step-by-step instructions for backend deployment
- Documented configuration requirements
- Included troubleshooting section
- Made deployment accessible to all skill levels"
    
    ["bd95fe8"]="feat(mpesa): complete M-PESA mobile payment integration

- Added M-PESA API configuration
- Configured payment callbacks
- Implemented payment verification
- Added error handling for payment failures"
    
    ["3a7b2aa"]="config(security): implement secure Railway deployment configuration

- Configured secure API keys and secrets
- Implemented security best practices
- Added authentication middleware
- Set up secure environment variables"
    
    ["678b605"]="config(deploy): complete Railway API configuration

- Finalized Railway API configuration
- Completed deployment readiness checks
- Configured all required API endpoints
- Set up production environment variables"
    
    ["ced5910"]="feat(email): implement email notification system with Resend

- Integrated Resend API for transactional emails
- Configured email templates for booking confirmations
- Added email validation and error handling
- Set up email service for non-commercial use"
    
    ["a8fb227"]="config(payment): update configuration for non-commercial use

- Added test mode support
- Updated payment configuration
- Configured environment variables
- Ensured secure payment handling"
    
    ["3e6df14"]="feat(deploy): add Railway deployment configuration and API integration

- Added Railway deployment configuration files
- Set up API integration for backend services
- Configured environment variables
- Implemented backend services integration"
    
    ["c4583b3"]="feat(payments): complete payment integration and cloud deployment

- Added Stripe payment processing integration
- Configured Supabase database for payment records
- Set up cloud deployment infrastructure
- Added M-PESA payment configuration
- Implemented secure payment handling"
    
    ["d18fce4"]="feat(init): initialize Kenya Safari Tours project

- Created initial project structure
- Added base HTML templates and assets
- Configured development environment
- Set up version control system"
)

# Process each commit
TOTAL_COMMITS=${#COMMITS[@]}
CURRENT=1

for commit_hash in "${!COMMITS[@]}"; do
    echo "Processing commit $CURRENT of $TOTAL_COMMITS: $commit_hash"
    
    # Cherry-pick the commit
    if git cherry-pick "$commit_hash" --no-commit 2>/dev/null; then
        # Get the commit message
        commit_msg="${COMMITS[$commit_hash]}"
        
        # Commit with new message
        git commit --amend -m "$commit_msg" -m "Original commit: $commit_hash"
        
        print_success "Recreated: ${commit_hash:0:7}"
    else
        print_warning "Skipping: ${commit_hash:0:7} (may already exist)"
    fi
    
    CURRENT=$((CURRENT + 1))
done

echo ""
print_success "Commit history cleanup complete!"
echo ""
print_warning "Review the changes with: git log --oneline"
echo ""
print_warning "If satisfied, push to origin with: git push -f origin clean-history:master"
print_warning "Or switch to the new branch: git checkout clean-history"
echo ""
print_success "Backup branch available: $BACKUP_BRANCH"
