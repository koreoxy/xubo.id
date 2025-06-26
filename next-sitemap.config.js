/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.xubo.my.id",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/admin/*"],
};
