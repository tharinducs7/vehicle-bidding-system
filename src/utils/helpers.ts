export const currencyFormat = (number: number) => {
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'LKR' }).format(number)
}