# GOGO

Frontend to power the console

Named after the legendary Crime Master - Gogo.

<img src="https://github.com/supercmo/gogo/assets/2917027/817504e9-c2a6-4c0e-b00a-47c33dde9d3e" width="500px" />


### Stack: 
React, Material UI { using ts(x) }

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
