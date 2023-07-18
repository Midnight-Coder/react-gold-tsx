# React Gold.tsx

![image](https://user-images.githubusercontent.com/2917027/168412960-87809a0b-a8cc-4521-91bf-e2cf7d4018ab.png)

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
6. Add Auth0 keys to `.env.development.local` file

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
   5. src/assets/logo.png: Image for nav bar (full width)
   6. src/assets/logoSm.png: Image for collapsed nav bar (32x32)
   7. src/assets/missing-page.jpeg: Image for HTTP 404
3. Footer: Update `BrandingBorder.tsx`
4. Colors, Fonts, spacing etc. - Update `theme.ts`
5. Add Auth0 keys to `.env` and `.env.development.local` files
