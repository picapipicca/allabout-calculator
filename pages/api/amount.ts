import client from "@/helpers/server/client";
import viewHandler, { ResponseType } from "@/helpers/server/viewHandler";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) => {
  // if (req.method === "GET") {
  //   const amounts = await client.amount.findMany({
  //     select: {
  //       amount: true,
  //       count: true,
  //     },
  //   });
  //   res.json({ ok: true, amounts });
  // } else if (req.method === "POST") {
  const {
    body: { income },
  } = req;
  const isAmount = await client?.amount.findFirst({
    where: {
      amount: Number(income),
    },
    select: {
      id: true,
      count: true,
    },
  });

  if (!isAmount) {
    await client?.amount.create({
      data: {
        amount: Number(income),
        count: 1,
      },
    });
  } else {
    await client?.amount.update({
      where: { id: isAmount?.id },
      data: { count: isAmount?.count + 1 },
    });
  }
  res.json({
    ok: true,
  });
};
// };

export default viewHandler({ methods: ["POST"], handler });
