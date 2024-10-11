function calculateMonthlyPayment(principalLoanAmountInK, yearlyInterestRate, termInYears) {

const monthlyInterestRate = yearlyInterestRate / 12;
const numberOfPayments = termInYears * 12;

const P = principalLoanAmountInK * 1000;
const r = monthlyInterestRate / 100;
const n = numberOfPayments;

const M = P * r * ((1 + r) ** n) / (((1 + r) ** n) - 1);
    const monthlyPayment = M;
    return monthlyPayment
}
console.log(calculateMonthlyPayment(200, 4, 30))
