import masterApi from "../../api/masterApi";

export default async function getUserDetails (id) {
    const result = await masterApi("userDetails","GET",{},id)
    return result;

}