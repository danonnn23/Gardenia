import logo from '../assets/gardenia_logo_01.png';

const AdminLogin = () => {
    return (
        <div className="w-screen grid grid-rows-[1fr_750px] h-screen">
            <div className="flex items-center">
                <img src={logo} alt="" className='w-full' />
            </div>
            <div className="bg-white w-screen rounded-tl-[100px] flex items-center flex-col">
                <form action="" className='w-10/12 flex flex-col items-center min-h-full'>
                    <h1 className="text-4xl font-sans font-bold my-15 text-center">Вхід в кабінет адміністратора</h1>
                    <div>
                        <input type="email" placeholder='Email' className='border-b-3 border-black w-full py-2 px-3 text-2xl my-5
                        focus:outline-none focus:bg-[#e1e1e1]' />
                        <input type="password" placeholder='Пароль' className='border-b-3 border-black w-full py-2 px-3 text-2xl my-5
                        focus:outline-none focus:bg-[#e1e1e1]' />
                    </div>
                    <button className='bg-[#b4c6ae] text-4xl font-bold py-4 px-8 rounded-full w-max mt-auto mb-25'>Увійти</button>
                </form>
            </div>
        </div>
    )
}

export default AdminLogin