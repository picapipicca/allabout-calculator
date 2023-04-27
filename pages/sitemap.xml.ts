import client from "@/helpers/server/client";

const getDate = new Date().toISOString();
const DOMAIN = "https://allcalculator.shop";

const generateSitemap = (data: any, domain: string) => {
  let xml = "";
  data.pages.map((page: any) => {
    xml += `<url>
      <loc>${domain + page.location}</loc>
      <lastmod>${page.lastMod}</lastmod>
    </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
 xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      ${xml}
    </urlset>`;
};

export async function getServerSideProps(res: any, params: string) {
  const arr = Array.from({ length: 191 }, (x, i) => (i + 10) * 100);
  const amountPaths = arr.map((amount) => {
    return {
      location: `/income/${amount.toString()}`,
      lastMod: getDate,
    };
  });

  const dynamicAmount = await client.amount.findMany({
    select: {
      amount: true,
    },
  });
  const dynamicAmountPaths = dynamicAmount?.map((path) => {
    console.log(path);
    if (path.amount / 100 !== 0) {
      return {
        location: `/income/${path.amount.toString()}`,
        lastMod: getDate,
      };
    }
  });
  const data = {
    pages: [
      {
        location: "/", //default url
        lastMod: getDate,
      },
      {
        location: "/bmi",
        lastMod: getDate,
      },
      {
        location: "/character",
        lastMod: getDate,
      },
      {
        location: "/differCheck",
        lastMod: getDate,
      },

      ...amountPaths, //1000~20000 income url
      ...dynamicAmountPaths, //dynamic income url
    ],
  };
  res.setHeader("Content-Type", "text/xml");
  res.write(generateSitemap(data, DOMAIN));
  res.end();
  return {
    props: {},
  };
}
const SitemapIndex = () => null;
export default SitemapIndex;
