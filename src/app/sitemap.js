export default function sitemap() {
  const homePage = {
    url: 'https://example.com',
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  };

  return [homePage];
}