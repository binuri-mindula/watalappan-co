# Watalappan & Co. React Frontend

A responsive React + JavaScript information website for **Watalappan & Co.**

## Features

- Responsive landing page
- Existing Watalappan & Co. logo included
- Product/menu cards for 400g and 1kg Watalappan
- Caramel pudding products
- WhatsApp order buttons
- Phone and email contact section
- Customer review screenshot carousel
- Facebook social-media section
- Mobile navigation
- Smooth scrolling
- Responsive desktop, tablet and mobile layout
- No backend required

## 1. Install Node.js

Make sure Node.js and npm are installed.

Check:

```bash
node -v
npm -v
```

## 2. Install dependencies

Open this project folder in VS Code and run:

```bash
npm install
```

If PowerShell gives an `npm.ps1` execution-policy error, use Command Prompt instead, or run:

```powershell
npm.cmd install
```

## 3. Start the website

```bash
npm run dev
```

Then open the local URL shown by Vite, normally:

```text
http://localhost:5173
```

## 4. Update business details

Open:

```text
src/data/business.js
```

Replace:

- Phone number
- WhatsApp number
- Email
- Facebook page URL
- Product prices

For example:

```js
phoneDisplay: "+94 77 123 4567",
phoneLink: "tel:+94771234567",
whatsappDisplay: "+94 77 123 4567",
whatsappLink: "https://wa.me/94771234567",
email: "hello@watalappanandco.com",
facebook: "https://www.facebook.com/your-page"
```

## 5. Add real customer review screenshots

Put your screenshots inside:

```text
public/reviews/
```

Then edit the `reviews` array in:

```text
src/data/business.js
```

Example:

```js
{
  image: "/reviews/customer-review-1.jpg",
  name: "Customer Review",
  text: "Optional short caption"
}
```

The carousel already works automatically.

## 6. Add real food/product photos

The current product cards use CSS illustrations so the site works immediately.

For a more realistic business website, add your own food photos under:

```text
public/images/
```

Then the product visual can be changed to use those photos.

## 7. Build for production

```bash
npm run build
```

The production files will be created in:

```text
dist/
```

## GitHub Pages

If you want to host this using GitHub Pages, add this to `vite.config.js`:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/YOUR-REPOSITORY-NAME/"
});
```

Then build and deploy the `dist` folder using GitHub Pages.

For a custom domain, the `base` can normally be `/`.

## Important

The project intentionally uses placeholders for private business information and prices. Replace those before publishing.