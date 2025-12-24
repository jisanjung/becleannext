#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const pageName = process.argv[2];

if (!pageName) {
  console.error("❌ Please provide a page name");
  process.exit(1);
}

const appDir = path.join(process.cwd(), "src", "app", pageName);
const pageFile = path.join(appDir, "page.js");

if (fs.existsSync(appDir)) {
  console.error("❌ Page already exists");
  process.exit(1);
}

fs.mkdirSync(appDir, { recursive: true });

const boilerplate = `
export const metadata = {
  title: "${pageName} | beclean",
  description: "${pageName}.",
};
export default function ${capitalize(pageName)}Page() {
  return (
    <main>
        ${pageName} page
    </main>
  );
}
`.trim();

fs.writeFileSync(pageFile, boilerplate);

console.log(`✅ Page created at src/app/${pageName}/page.js`);

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
