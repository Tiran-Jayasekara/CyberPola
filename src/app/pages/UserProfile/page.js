'use client'
import Footer from '@/app/components/Footer';
import { GlobalContext } from '@/app/context'
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react'

const UserProfile = () => {
    const { userData } = useContext(GlobalContext);
    const router = useRouter();

    return (
        <>
            <div className='flex flex-col'>
                <img src='/assests/01.jpg' alt='Cover' />

                <h1 className='text-green-900 playfair-font text-center md:text-4xl text-2xl font-bold mx-10 md:mt-20 mt-10 mb-10'>User profile</h1>

                {userData ? <>
                    <img className='mx-auto rounded-full w-40 h-40' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6oC0cLNyFt4XMtPNe35Tct-8iicsxnDi--fghnv05pczTghd04zc3wR9ATttVVHswLX4&usqp=CAU' alt='' />
                    <p className='playfair-font text-center mt-10'>{userData.firstName} {userData.lastName}</p>
                    <p className='playfair-font text-center mt-4'>{userData.email}</p>
                    <p className='playfair-font text-center mt-4'>{userData.mobile}</p>
                    <p className='playfair-font text-center mt-4'>{userData.province}</p>
                    <p className='playfair-font text-center mt-4'>{userData.town}</p>
                    <p className='playfair-font text-center mt-4'>{userData.zipCode}</p>
                </>
                    : <>
                        <button onClick={() => { router.push('/pages/UserLogin') }} className='playfair-font bg-green-600 rounded-2xl p-2 mb-20 text-white text-center md:text-2xl text-xl font-bold mx-10 md:mt-20 mt-10'>Please Logging</button>
                    </>}

            </div>

            {userData ? <div className='flex flex-row mx-auto justify-center items-center mt-20 '>
                <button onClick={() => { router.push('/pages/shops') }} className='bg-green-600 mx-4 p-2 rounded-2xl text-white playfair-font px-4'>Visit Shops</button>
                <button onClick={() => { router.push('/pages/ShoppingCenter') }} className='bg-green-600 mx-4 p-2 rounded-2xl playfair-font text-white px-4'>Shopping Center</button>
            </div> : ""}

            <Footer />
        </>
    )
}

export default UserProfile