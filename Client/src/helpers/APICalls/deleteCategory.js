import masterApi from "../../api/masterApi"

export default async function deleteCategory (data) {
    const result = await masterApi("deleteCategory","DELETE",data)
    return result;
}