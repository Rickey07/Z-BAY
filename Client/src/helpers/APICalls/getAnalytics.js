import masterApi from '../../api/masterApi';

export default  async function getAnalytics () {
    const result = await masterApi("analytics","GET");
    return  result
}