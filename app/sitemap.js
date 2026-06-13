export default async function sitemap() {
  const baseUrl = 'https://jnualumniassociation.com';
  const routes = ['', '/about', '/contact', '/gallery', '/events', '/feeds', '/login', '/signup'];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
