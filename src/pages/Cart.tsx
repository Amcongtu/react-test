import CartSection from "../components/Cart/CartSection/CartSection"
import PageHeader from "../components/Pages/PageHeader/PageHeader"

const Cart = () => {
    return <>
        <PageHeader title="Shopping Curt"
            breadcrumbs={["Home", "Pages", "Shopping Curt"]} />
        <CartSection />
    </>
}

export default Cart