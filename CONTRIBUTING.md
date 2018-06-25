# Contributing Guide

I'm not really expecting anyone who isn't me to write code for this, but I know that me a week from now will have forgotten all the best practices I wanted to use today, so attempting to keep things consistant with documentation!

## Git Commits
1. Add changed files to staging: 
    ```sh
    git add <files>
    ```
2. Commit staged files with a message: 
    ```sh
    git commit -m 'message'
    ```
    - If commit is not fully functional code, or is not the completed feature: preface message with: **'WIP: '** and what is being worked on. 

## Tagging

- More information: [docs](https://git-scm.com/book/en/v2/Git-Basics-Tagging)
- Attempt to follow [Semantic Versioning](https://semver.org/):

    X.Y.Z <br />
    X --> MAJOR version: Incompatible API Changes<br />
    Y --> MINOR version: Add functionality in backwards-compatible manner<br />
    Z --> PATCH version: backwards-compatible bug fixes

**Add Tags with Git:**
- Add tags as features are completed
    ```sh
    git tag -a v0.0.0 dd4d1c2e2da -m 'message'
    ```
- View tags already created:
    ```sh
    git tag
    ```
- Push all tags to remote: 
    ```sh
    git push origin --tags
    ```
