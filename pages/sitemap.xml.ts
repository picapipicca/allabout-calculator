import client from "@/helpers/server/client";

const getDate = new Date().toISOString();
const DOMAIN = "https://allcalculator.shop";

const generateSitemap = (datas: any, domain: string) => {
  let xml = "";
  datas.pages.map((page: any) => {
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

export async function getServerSideProps({ res }: any) {
  const dynamicAmount = await client.amount.findMany({
    select: {
      amount: true,
    },
  });
  
  const arr = Array.from({ length: 291 }, (x, i) => (i + 10) * 1000000);
  const amountPaths = arr.map((amount) => {
    return {
      location: `/income/${amount.toString()}`,
      lastMod: getDate,
    };
  });

  const dynamicAmountPaths = dynamicAmount
    ?.filter(
      (path: any) =>
        (path.amount <= 300000000 && path.amount % 1000000 !== 0) ||
        path.amount > 300000000
    )
    .map((data: any) => {
      return {
        location: `/income/${data.amount.toString()}`,
        lastMod: getDate,
      };
    });
  const datas = {
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
  res.write(generateSitemap(datas, DOMAIN));
  res.end();
  return {
    props: {},
  };
}
const SitemapIndex = () => null;
export default SitemapIndex;
