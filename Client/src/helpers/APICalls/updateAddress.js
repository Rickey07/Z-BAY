import masterApi from "../../api/masterApi"

export default async function updateAddress (data) {
    const result = await masterApi("updateAddress","PUT",data);
        return result
}