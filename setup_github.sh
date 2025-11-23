#!/bin/bash

# Check if gh is installed
if ! command -v gh &> /dev/null; then
    echo "GitHub CLI (gh) is not installed. Please install it first."
    exit 1
fi

# Check authentication
echo "Checking GitHub authentication..."
if ! gh auth status &>/dev/null; then
    echo "You are not logged in to GitHub."
    echo "Please run: gh auth login"
    exit 1
fi

# Initialize Git if not exists
if [ ! -d ".git" ]; then
    echo "Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit"
else
    echo "Git repository already initialized."
fi

# Create Repo and Push
echo "Creating GitHub repository 'food_fusion'..."
# Try to create, if fails (e.g. already exists), try to just push
if gh repo create food_fusion --public --source=. --remote=origin --push; then
    echo "Repository created and code pushed."
else
    echo "Failed to create repository. It might already exist."
    echo "Trying to push to existing remote..."
    git push -u origin main
fi

# Deploy
echo "Deploying to GitHub Pages..."
npm run deploy
