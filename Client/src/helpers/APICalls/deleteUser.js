import masterApi from "../../api/masterApi";

export default  async function deleteUser (id) {
    try {
        const result = await masterApi("deleteUser","DELETE",{},id)
        return result;
    } catch (error) {
        console.log(error)
    }
}