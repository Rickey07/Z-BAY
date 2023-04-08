import masterApi from '../../api/masterApi';

export const deleteProduct = async (id) => {
    const deletedProduct = await masterApi("deleteProduct","DELETE",{"_id":id})
    return deletedProduct
}