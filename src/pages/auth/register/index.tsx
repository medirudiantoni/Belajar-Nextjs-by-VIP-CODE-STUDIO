import Link from "next/link"

const RegisterPage = () => {
  return (
    <div className="w-screen h-screen">
        <div className="container p-5 max-w-xl border-2 border-black rounded-xl mx-auto my-32">
            <h1 className="text-xl font-bold mb-5">Register page</h1>
            <div className="">
                <p>Sudah punya akun?</p>
                <Link href={'./login'}><span className="text-blue-700">Login</span></Link>
            </div>
        </div>
    </div>
  )
}

export default RegisterPage