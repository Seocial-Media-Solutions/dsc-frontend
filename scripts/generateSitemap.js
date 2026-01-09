const fs = require('fs');
const path = require('path');

// Base URL of your website - CHANGE THIS TO YOUR ACTUAL DOMAIN
const WEBSITE_URL = 'https://dsconcept.in';

// List of static routes from your React app
const routes = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/studio', priority: 0.8, changefreq: 'monthly' },
  { path: '/projects', priority: 0.9, changefreq: 'weekly' },
  { path: '/contact', priority: 0.7, changefreq: 'monthly' },
  { path: '/blog', priority: 0.9, changefreq: 'daily' },
];

// Function to read and parse JSON file
function readJsonFile(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(data);
    } else {
      console.log(`File does not exist: ${filePath}`);
      return [];
    }
  } catch (error) {
    console.error(`Error reading file from ${filePath}:`, error);
    return [];
  }
}

// Add dynamic routes based on your data
async function addDynamicRoutes() {
  try {
    // Add blog routes from blogs.json
    const publicDir = path.resolve(__dirname, '../public');
    const blogsFilePath = path.join(publicDir, 'blogs.json');
    
    console.log(`Looking for blogs.json at: ${blogsFilePath}`);
    
    const blogs = readJsonFile(blogsFilePath);
    
    if (blogs && blogs.length > 0) {
      blogs.forEach(blog => {
        routes.push({
          path: `/blog/${blog.slug}`,
          priority: 0.8,
          changefreq: 'monthly',
          lastmod: blog.date ? new Date(blog.date).toISOString() : new Date().toISOString()
        });
      });
      console.log(`Added ${blogs.length} blog routes to sitemap`);
    } else {
      console.log('No blog posts found or blogs.json file does not exist');
    }
    
    // You can add additional dynamic routes for projects here if needed
    
  } catch (error) {
    console.error('Error adding dynamic routes:', error);
  }
}

// Format date for sitemap
function formatDate(date) {
  const d = new Date(date);
  return d.toISOString();
}

// Generate sitemap XML
function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(route => {
    return `  <url>
    <loc>${WEBSITE_URL}${route.path}</loc>
    <lastmod>${route.lastmod || formatDate(new Date())}</lastmod>
    <changefreq>${route.changefreq || 'monthly'}</changefreq>
    <priority>${route.priority || 0.5}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;

  return sitemap;
}

// Generate robots.txt
function generateRobotsTxt() {
  const robotsTxt = `# robots.txt file for website
User-agent: *
Allow: /

# Sitemap location
Sitemap: ${WEBSITE_URL}/sitemap.xml`;

  return robotsTxt;
}

// Write sitemap to file
function writeSitemap(sitemap) {
  const publicDir = path.resolve(__dirname, '../public');
  
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(
    path.join(publicDir, 'sitemap.xml'),
    sitemap,
    'utf8'
  );
  
  console.log('Sitemap generated successfully at public/sitemap.xml');
  
  // Write robots.txt
  const robotsTxt = generateRobotsTxt();
  fs.writeFileSync(
    path.join(publicDir, 'robots.txt'),
    robotsTxt,
    'utf8'
  );
  
  console.log('Robots.txt generated successfully at public/robots.txt');
}

// Main function to generate sitemap
async function main() {
  await addDynamicRoutes();
  const sitemap = generateSitemap();
  writeSitemap(sitemap);
}

main().catch(error => {
  console.error('Error generating sitemap and robots.txt:', error);
  process.exit(1);
});