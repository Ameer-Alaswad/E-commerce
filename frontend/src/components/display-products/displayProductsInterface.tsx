export interface Props {
    products: {
        name: string
        id: string
        category: string
        image: string // 679px × 829px
        price: number
        countInStock: number
        brand: string
        rating: number
        numReviews: number
        description: string
    }[]
}