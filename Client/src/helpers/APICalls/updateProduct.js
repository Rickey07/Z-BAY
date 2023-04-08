import masterApi from "../../api/masterApi";

export default async function updateProduct (data) {
    const response = await masterApi("updateProduct","PUT",data);
    return response;
}