function calculateDiscount(price) {
    return price - (price * 0.15);
}

const finalPrice = calculateDiscount(100);
console.log(`Preço com desconto: ${finalPrice}`);
