import masterApi from "../../api/masterApi";

export default async function registerUser (data) {
    const result = await masterApi("registerUser","POST",data);
    return result
}