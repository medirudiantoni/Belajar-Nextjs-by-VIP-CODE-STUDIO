import React from 'react'

const SettingPage = () => {
    return (
        <div className="w-screen h-screen">
            <div className='p-2 w-fit text-center mx-auto my-10 text-2xl font-bold'>
                <h1>Setting Page</h1>
                <div className="flex gap-3">
                    <a href="./setting/app">App setting</a>
                    <a href="./setting/user">User setting</a>
                </div>
            </div>
        </div>
    )
}

export default SettingPage