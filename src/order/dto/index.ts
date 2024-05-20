import { OrderStatus } from "@prisma/client"

export class CreateOrderDto {
    text:string
}

export class UpdateOrderDto {
    status:OrderStatus
    message:string
}