#!/bin/bash

# Script to fix system-generated commit messages
# This script will create a new branch with properly formatted commit messages

set -e

echo "Starting commit cleanup process..."
echo ""

# Define the good commits (these have meaningful messages)
GOOD_COMMITS=(
  "4f3d70b Add Supabase database setup file"
  "c4583b3 🎉 Complete Payment Integration & Cloud Deployment"
  "3e6df14 🎉 Add Railway deployment configuration and API integration"
  "a8fb227 🔧 Update config for non-commercial use - add test mode support"
  "ced5910 📧 Complete email setup for non-commercial use - Resend free tier integration"
  "678b605 🚀 Railway Deployment Ready - Complete API Configuration"
  "3a7b2aa 🚀 Railway Deployment Ready - Secure Configuration"
  "bd95fe8 📱 Complete M-PESA Integration - All required configuration variables"
  "a9f15f2 📋 Complete Railway Deployment Guide - Step-by-step instructions for 10-minute backend deployment"
  "07cc3cc 🔧 Resolve merge conflict in config.js - Keep actual Stripe test keys"
  "b287471 🔧 Fix Multiple Website Issues - Complete Website Enhancement"
  "0009c81 🔧 Fix Payment Page Font Visibility & Update Gmail App Password - Enhanced text contrast and readability"
  "4aad852 🔧 Update Submodule to Latest Commit - Payment page font fixes and Gmail app password"
  "2775644 🔧 Move Website Files to Main Repository - Fix GitHub Pages Access"
  "761904b 🔧 Force GitHub Pages Refresh - Added cache busting meta tag to trigger site update"
  "d66e850 🔧 Add .nojekyll to disable Jekyll processing and fix GitHub Pages serving"
  "ee26301 🔧 Reorganize Repository Structure - Move Documentation to documents/"
  "8a6e773 refactor(website): replace MiniMax Agent references with Cavin Otieno"
)

echo "Good commits that will be preserved:"
for commit in "${GOOD_COMMITS[@]}"; do
  echo "  ✓ $commit"
done

echo ""
echo "System-generated commits will be squashed and replaced with proper messages."
echo ""
echo "To proceed with cleanup, run:"
echo "  git rebase -i 4f3d70b"
echo ""
echo "In the interactive editor, change 'pick' to 'squash' for commits marked as system-generated."
echo ""
echo "Recommended commit message for squashed system commits:"
echo "---"
cat << 'EOF'
feat(sync): synchronize development environment and repository configuration

- Sync local and remote repository states
- Update configuration files and environment variables
- Apply file permissions and mode corrections
- Ensure consistent development environment setup
EOF
echo "---"
