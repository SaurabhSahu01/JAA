export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/adminpanel/', '/api/'],
    },
    sitemap: 'https://jnualumniassociation.com/sitemap.xml',
  };
}
