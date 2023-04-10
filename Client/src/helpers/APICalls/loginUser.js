import masterApi from '../../api/masterApi'

export default async function LoginUser (data) {
    const result = await masterApi("loginUser","POST",data);
    return result
}