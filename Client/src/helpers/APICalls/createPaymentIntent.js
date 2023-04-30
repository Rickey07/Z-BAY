import masterApi from "../../api/masterApi";

export default async function createPayment (data) {
    const result = await masterApi("payment","POST",data);
    return result
}