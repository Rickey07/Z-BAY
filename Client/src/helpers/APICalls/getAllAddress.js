import masterApi from "../../api/masterApi";

export default async function getAllAddress (id) {
    const result = await masterApi("allAddress","GET",{},id);
    return result;
}