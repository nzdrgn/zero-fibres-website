# Zero Fibres static website

A dependency-free static rebuild of the previous Wix/HTTrack site, ready for GitHub Pages.

## Publish with GitHub Pages
1. Create a new GitHub repository.
2. Upload the contents of this folder to the repository root.
3. In **Settings → Pages**, choose **Deploy from a branch**.
4. Select `main` and `/ (root)`, then save.
5. Test the generated `github.io` address before moving the domain.

## Custom domain
When ready, add the custom domain in **Settings → Pages**. GitHub will provide the required DNS records. Add a `CNAME` file containing only the intended domain after DNS is configured.

## Contact form
The original Wix form depended on Wix backend services. This version uses phone and email links, which work on GitHub Pages without a third-party form processor.
