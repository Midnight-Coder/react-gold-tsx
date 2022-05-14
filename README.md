# React Gold.tsx

### Stack: React, Material UI { using ts(x) }

1. React app bootstrapped with CRA
2. Material UI using emotion for style composition
3. SSL support + SSL setup for local dev
4. Auth0 integration for SSO authentication
5. Navigation tree setup
6. Respect system's dark/light mode

### Getting started

1. Generate SSL cert (don't self sign) using `mkcert`
2. `brew install mkcert` 
3. `mkcert --install` [GH](https://github.com/FiloSottile/mkcert)
4. `npm i`
5. `npm run start`

### Make it our own

1. Name your app. Then update names in 
   1. index.html 
   2. package.json
   3. manifest.json
   4. `Login.tsx`
2. Get your logos and icons. Update logos in
   1. public/
   2. Favicon in index.html 
   3. manifest.json
   4. src/assets/branding.png: Image for Login/Sign Up Page
   5. src/assets/logo.png: Image for nav bar
   6. src/assets/missing-page.jpeg: Image for HTTP 404
3. Footer: Update `BrandingBorder.tsx`
4. Colors, Fonts, spacing etc. - Update `theme.ts`
