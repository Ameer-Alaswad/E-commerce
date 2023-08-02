export type productsType = {

    name: string
    label: string
    category: string
    image: string // 679px × 829px
    price: number
    countInStock: number
    brand: string
    rating: number
    numReviews: number
    description: string
    product: string
    _id: string

}

export type RatingProps = {
    numReviews: number | undefined
    rating: number | undefined
}

export type productProps = {
    data: productsType[] | undefined
}