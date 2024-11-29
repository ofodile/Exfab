import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import path from 'path';

const hostname = 'https://www.naijaleakhub.com.ng';

const categories = [  
  { url: '/', changefreq: 'weekly', priority: 0.8 },
  { url: '/teen', changefreq: 'weekly', priority: 0.8 },
  { url: '/lesbian', changefreq: 'weekly', priority: 0.8 },
  { url: '/blowjob', changefreq: 'weekly', priority: 0.8 },
  { url: '/celebrities', changefreq: 'weekly', priority: 0.8 },
  { url: '/masturbation', changefreq: 'weekly', priority: 0.8 }
  // Add all categories here
];

const posts = [
  // Add individual posts URLs here, if needed
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname });
  const writeStream = createWriteStream(path.join(path.resolve(), 'public', 'sitemap.xml'));

  sitemap.pipe(writeStream);

  categories.forEach(category => sitemap.write(category));
  posts.forEach(post => sitemap.write(post));
  
  sitemap.end();

  streamToPromise(sitemap)
    .then(() => console.log('Sitemap created!'))
    .catch(err => console.error('Error creating sitemap:', err));
}

generateSitemap();