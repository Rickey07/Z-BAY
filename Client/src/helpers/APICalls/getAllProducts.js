import masterApi from "../../api/masterApi"

export default async function getAllProducts () {
    const result = await masterApi("getAllProducts","GET");
    return result
}