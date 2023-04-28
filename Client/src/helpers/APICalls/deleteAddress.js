import masterApi from "../../api/masterApi";

export default async function deleteAddress (data) {
    const result = await masterApi("deleteAddress","DELETE",data);
    return result;
}