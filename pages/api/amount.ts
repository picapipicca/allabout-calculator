import client from "@/helpers/server/client";
import viewHandler, { ResponseType } from "@/helpers/server/viewHandler";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) => {
  const {
    body: { income },
  } = req;

  await client?.amount.upsert({
    where: {
      amount: Number(income),
    },
    create: {
      amount: Number(income),
    },
    update: {
      count: {
        increment: 1,
      },
    },
  });

  res.json({
    ok: true,
  });
};
// };

export default viewHandler({ methods: ["POST"], handler });
