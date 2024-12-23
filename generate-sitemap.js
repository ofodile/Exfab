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
  { url: '/masturbation', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/esther-has-big-fluffy-boobs', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/leak-video-of-queen-in-hotel-room', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/pretty-and-boyfriend-sextape-leaked-today', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/my-visitor-cant-wait-to-ride-my-dick', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/ugandan-girl-record-herself-riding-friends-boyfriend', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/pretoria-guy-ended-his-date-with-fuck-inside-car', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/fat-ass-riding-my-dick-how-she-wants', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/ebony-benita-fucked-hardcore-in-darknaija-porn', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/i-set-camera-to-fuck-my-neighbor', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/benita-clapping-her-soft-booty', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/tema-girl-joyce-fucked-doggy-in-leak-sextape', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/teen-girl-fucked-good-in-naija-porn', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/leak-of-megan-from-kimberley', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/fucking-my-auchi-girlfriend-jecinta', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/enjoying-full-hand-inside-pussy-in-lesbian-fuck-party', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/two-pussy-tasting-eachother', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/leak-video-of-naija-bad-bitches', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/mistresses-of-baltasar-engonga-having-orgy-sex', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/mouth-and-tongue-in-her-pussy', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/lesbian-besties-having-fun-in-bed', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/horny-lesbians-in-darknaija-porn', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/freaky-ugandan-babes', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/my-girls-are-so-horny', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/beauty-and-lydia-recorded-having-fun', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/my-girls-are-so-horny-after-drinking', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/lynda-doesnt-want-my-dick-in-her-mouth', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/nairobi-babe-marianne-working-hard-on-dick', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/natasha-giving-blowjob-to-big-dick-boyfriend', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/leak-blowjob-video-of-olivia', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/cape-town-escort-zena-sucking-dick', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/recorded-olivia-eating-my-dick', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/69-sex-in-darknaija-homemade-porn', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/leak-video-of-baltasar-ebang-engonga-receiving-blowjob-from-friends-wife', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/mimi-sucking-my-dick-like-candy', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/leak-sextape-of-tiktok-influencer-molly-awele', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/davido-baby-mama-anita-brown-displaying-her-boobs', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/egungun-of-lagos-nude-video-leaked', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/phoebe-girl-leaked-viral-video-', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/watch-phoebe-girl-leak-tape', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/yahweh-girl-posted-her-video-on-twitter-', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/yahweh-nurse-video', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/yeweh-girls-video-that-got-people-talking-', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/tiktoker-esther-raphael-aka-buba-girl-leak-more-video', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/nollywood-actress-moyo-lawal-leak-sextape', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/naija-transgender-jay-boogie-nude-video-leaked', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/baltasar-fucked-this-woman-like-no-other', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/yahweh-girl-trending-videos-that-got-people-talking-', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/watch-nurse-yahweh-trending-leak-video', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/horny-ella-standup-masturbation', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/she-need-a-dick-to-fuck-her', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/she-masturbate-and-squirt-on-her-pant', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/nairobi-lady-enjoying-cucumber-in-pussy', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/yoruba-babe-aramide-masturbate-on-camera', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/ghana-girl-frances-masturbate-while-recording', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/satisfying-my-pussy-before-going-to-work', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/she-got-very-horny-in-her-office', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/teen-girl-rebecca-masturbate-hard', changefreq: 'weekly', priority: 0.8 },
  { url: '/video/kate-showing-boobs-on-live-video', changefreq: 'weekly', priority: 0.8 }
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