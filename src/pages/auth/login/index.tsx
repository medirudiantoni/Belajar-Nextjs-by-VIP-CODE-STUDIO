import Link from "next/link"
import { useRouter } from "next/router"

const LoginPage = () => {
  const { push } = useRouter()
  const handlerLogin = () => {
    push('/product')
  }
  return (
    <div className="w-screen h-screen">
        <div className="container p-5 max-w-xl border-2 border-black rounded-xl mx-auto my-32">
            <h1 className="text-xl font-bold mb-5">Login page</h1>
            <button className="mb-5 py-1 px-4 rounded-lg bg-blue-600 text-white" onClick={handlerLogin}>Login</button>
            <div className="">
                <p>Belum punya akun?</p>
                <Link href={'./register'}><span className="text-blue-700">Buat Akun</span></Link>
            </div>
        </div>
    </div>
  )
}

export default LoginPage