import { useParams } from 'react-router-dom'
import PageHeader from '../components/Pages/PageHeader/PageHeader'
import ProductDetail from '../components/PagesDetail/ProductDetail/ProductDetail'
import useGetProduct from '../hooks/Products/useGetProduct'
import { useMemo } from 'react'
import type { Product } from '../types/product'

const PagesDetail = () => {
    const { id } = useParams()
    const data = useGetProduct()

    const product: Product = useMemo(() => {
        return data.filter(item => {
            return item.id == id
        })[0]
    }, [data])

    return (
        <>
            <PageHeader title="Product Detail"
                breadcrumbs={["Home", "Pages", "Product Details"]} />
            <ProductDetail product={product} />
        </>
    )
}

export default PagesDetail
