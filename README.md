# Interactive Software Engineering Portfolio

A premium, highly interactive personal portfolio website designed for software engineering graduates. Built using HTML5, CSS3, and modern Javascript.

Features a dynamic particle background, automatic typing banner, responsive mobile navigation drawer, interactive skill bars, multi-category project gallery, and simulated contact system.

## 🚀 Deploying to GitHub Pages (github.io)

Since this website consists entirely of static assets (HTML, CSS, JS), you can deploy it for **free** on GitHub Pages. Follow these step-by-step instructions:

### 1. Create a GitHub Repository
1. Log in to [GitHub](https://github.com).
2. Click **New** to create a new repository.
3. Define the **Repository name**:
   - **Recommended (User Site)**: Name it exactly `<your-username>.github.io` (replace `<your-username>` with your actual GitHub username). This hosts your portfolio directly at your root domain: `https://<your-username>.github.io`.
   - **Alternative (Project Site)**: Name it something else (e.g. `portfolio`). This hosts the site at a sub-path: `https://<your-username>.github.io/portfolio`.
4. Ensure the visibility is set to **Public** (required for free hosting).
5. Leave all initialization checkboxes (README, gitignore, license) **unchecked**.
6. Click **Create repository**.

### 2. Push Your Code
Open your terminal (PowerShell or Git Bash) in your portfolio folder (`C:\Users\haloo\.gemini\antigravity\scratch\portfolio`) and run the following commands:

```bash
# Initialize local git repository
git init

# Add all files to staging
git add .

# Commit changes
git commit -m "feat: initial commit of interactive portfolio"

# Rename the default branch to main
git branch -M main

# Link to your remote GitHub repository
# (Replace <your-username> with your actual GitHub account username)
git remote add origin https://github.com/<your-username>/<your-username>.github.io.git

# Push code to GitHub
git push -u origin main
```

*(Note: If you chose the alternative repository name, change the remote URL accordingly, e.g. `https://github.com/<your-username>/portfolio.git`)*

### 3. Enable GitHub Pages (Only if you chose the alternative name)
If your repository name is exactly `<your-username>.github.io`, GitHub will automatically build and publish it. 

If you used a custom name (e.g., `portfolio`):
1. Go to your repository on GitHub.com.
2. Click the **Settings** tab.
3. Select **Pages** from the sidebar on the left.
4. Under **Build and deployment -> Branch**, select `main` from the dropdown list and `/ (root)` directory.
5. Click **Save**.

### 4. Check Your Live Site
GitHub will compile the page within 1-2 minutes.
- Root repository path live URL: `https://<your-username>.github.io`
- Custom repository path live URL: `https://<your-username>.github.io/<repo-name>`
