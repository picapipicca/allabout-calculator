import client from "@/helpers/server/client";
import viewHandler, { ResponseType } from "@/helpers/server/viewHandler";
import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) => {
  const amounts = await client.amount.findMany({
    select: {
      amount: true,
      count: true,
    },
  });
  res.json({ ok: true, amounts });
};

export default viewHandler({ methods: ["GET"], handler });
