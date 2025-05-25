import { useParams } from 'react-router-dom'
import PageHeader from '../components/Pages/PageHeader/PageHeader'

const PagesDetail = () => {
    const { id } = useParams()

    return (
        <>
            <PageHeader title="Product Detail"
                breadcrumbs={["Home", "Pages", "Product Details"]} />
        </>
    )
}

export default PagesDetail
