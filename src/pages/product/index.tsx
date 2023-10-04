import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductPage = () => {
    const [isLogin, setIsLogin] = useState(false)
    const { push } = useRouter()
    useEffect(()=>{
        if(!isLogin){
            push('/auth/login')
        }
    }, []);
    return (
        <div className="w-screen h-screen flex items-center justify-center text-xl">Product Page</div>
    )
}

export default ProductPage;