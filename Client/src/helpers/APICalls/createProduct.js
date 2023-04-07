import masterApi from "../../api/masterApi";

export default async function createProduct (data) {
    try {
        const response = await masterApi("createProduct","POST",data)
        return response
    } catch (error) {
        
    }
}