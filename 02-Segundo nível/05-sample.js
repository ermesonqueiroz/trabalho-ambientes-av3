function calculateEmployeeCompensation(workedHours, valuePerHour, role) {
    const baseCompensation = workedHours * valuePerHour;

    let compensationWithBonus;
    if (role === 'gerente') {
        compensationWithBonus = baseCompensation + 1000;
    } else if (role === 'supervisor') {
        compensationWithBonus = baseCompensation + 500;
    } else {
        compensationWithBonus = baseCompensation + 200;
    }

    const compensationWithDiscount = compensationWithBonus - 300;

    let finalCompensation;
    if (compensationWithDiscount > 5000) {
        finalCompensation = compensationWithDiscount - (compensationWithDiscount * 0.27);
    } else if (compensationWithDiscount > 3000) {
        finalCompensation = compensationWithDiscount - (compensationWithDiscount * 0.18);
    } else {
        finalCompensation = compensationWithDiscount - (compensationWithDiscount * 0.11);
    }

    return finalCompensation;
}

const compensation = calculateEmployeeCompensation(160, 25, 'gerente');
console.log(`O salário final é: ${compensation}`);
