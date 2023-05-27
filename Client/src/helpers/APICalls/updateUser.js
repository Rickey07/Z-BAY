import masterApi from "../../api/masterApi";

export default async function updateUser (data) {
    const result = await masterApi("updateUser","PUT",data,data?.id);
    return result
}