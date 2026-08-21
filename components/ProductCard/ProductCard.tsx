interface ProductCardProps {
    name: string
    categoryName: string
    price: number
    image: string
    salePrice?: number
    salePercent?: number
}

function ProductCard(props: ProductCardProps) {
    return <>
        <div className="product-card" />
    </>
}

export default ProductCard
