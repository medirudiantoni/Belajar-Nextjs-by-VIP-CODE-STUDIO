import { useRouter } from "next/router";

const ShopPage = () => {
    const { query } = useRouter()
    return (
        <div className="w-screen h-screen">
            <div className="mx-auto w-fit my-40">
                <h2 className="text-xl mb-3">Detail Produk</h2>
                <p className="">Produk : {query.slugs ? query.slugs[0] : ""} - {query.slugs ? query.slugs[1] : ""}</p>
            </div>
        </div>
    )
}

export default ShopPage;