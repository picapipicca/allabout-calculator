import type { NextApiRequest, NextApiResponse, NextApiHandler } from "next";

export interface ResponseType {
  ok: boolean;
  [key: string]: any;
}
type method = "GET" | "POST";

interface ConfigProps {
  methods: method[];
  handler: NextApiHandler;
}

const viewHandler = ({
  methods,
  handler,
}: ConfigProps): NextApiHandler => {
  return async (req:NextApiRequest, res:NextApiResponse) => {
    if (req.method && !methods.includes(req.method as any)) {
      return res.status(405).end();
    }
    try {
      await handler(req, res);
    } catch (error) {
      return res.status(500).json({ error });
    }
  };
};

export default viewHandler;
