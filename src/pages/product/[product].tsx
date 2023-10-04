import { useRouter } from "next/router";

const DetailProductPage = () => {
    const { query } = useRouter()
    console.log(query)
    return (
        <div className="w-screen h-screen">
            <div className="mx-auto w-fit my-10">
                <h2 className="text-xl mb-3">Detail Produk</h2>
                <p className="">Produk : {query.product}</p>
            </div>
        </div>
    )
}

export default DetailProductPage;