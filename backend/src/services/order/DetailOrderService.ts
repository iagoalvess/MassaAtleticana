import { Or } from "@prisma/client/runtime/library";
import prismaClient from "../../prisma";

interface DetailRequest {
  order_id: string;
}

class DetailOrderService {
  async execute({ order_id } : DetailRequest) {
    const items = await prismaClient.item.findMany({
      where:{
        order_id: order_id
      },
      include:{
        product: true,
        ordem: true
      }
    })

    return items;
  }
}

export { DetailOrderService }