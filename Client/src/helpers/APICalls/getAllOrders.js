import masterApi from "../../api/masterApi";

export default async function getAllOrders () {
    const result = await masterApi("allOrders","GET");
    return result
}