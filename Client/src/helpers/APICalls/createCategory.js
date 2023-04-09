import masterApi from "../../api/masterApi";

export default async function createCategory (data) {
    const response = masterApi("createCategory","POST",data);
    return response
}