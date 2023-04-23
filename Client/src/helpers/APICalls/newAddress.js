import masterApi from '../../api/masterApi';

export default async function newAddress (data) {
    const result = await masterApi("newAddress","POST",data);
    return result
}