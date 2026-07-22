const priceFormatter = (price: number) => {
    const NewFormat =  Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  maximumSignificantDigits: 3,
                }).format(price)

    return NewFormat
}

export default priceFormatter