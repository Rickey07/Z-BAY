export default function discountGenerator (total,discountPercentage) {
    const totalDiscount = (discountPercentage / 100) * total;
    const totalAfterDiscount = total - totalDiscount;
    console.log(total)
    return {totalDiscount,totalAfterDiscount}
}