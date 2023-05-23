import masterApi from "../../api/masterApi";

export default async function placeOrder (data) {
    const result = await masterApi("newOrder","POST",data);
    return result
}