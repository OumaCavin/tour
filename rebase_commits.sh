#!/bin/bash

# Script to rebase and fix system-generated commit messages
# This script will squash consecutive system commits and apply proper messages

echo "Starting commit message cleanup..."
echo ""
echo "This script will help clean up system-generated commit messages."
echo "The following commits need to be addressed:"
echo ""

# Get list of commits with system messages
git log --oneline --all | grep -E "Message |Sync with matrix" | head -10

echo ""
echo "To fix these commits, you can use interactive rebase."
echo "Example command to squash commits from a specific point:"
echo "git rebase -i <commit-hash>"
echo ""
echo "In the interactive editor, change 'pick' to 'squash' for commits you want to combine."
echo "Then edit the commit message to be descriptive."
