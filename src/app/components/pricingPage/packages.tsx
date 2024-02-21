import React from 'react'
import classes from './packages.module.css'
import useAxiosAuth from '@/app/lib/hooks/useAxiosAuth';

interface PackagesProp {
  id: number;
  name: string;
  price: number;
  value: number;
  image: string;
}

// const packageItem: PackagesProp[] = [
//   { id: 1, name: 'Fistful of Gems', price: 25000, value: 200, image: "https://i.pinimg.com/736x/ec/86/7e/ec867e39d00db2f2010c592206b2a336.jpg" },
//   { id: 2, name: 'Pile of Gems', price: 129000, value: 1050, image: "https://i.pinimg.com/564x/62/15/a4/6215a416e48be0cce40477ba19058897.jpg" },
//   { id: 3, name: 'Pouch of Gems', price: 249000, value: 2200, image: "https://i.pinimg.com/564x/98/c9/ef/98c9efd8fd220f835d25a6601c6e2adf.jpg" },
//   { id: 4, name: 'Bucket of Gems', price: 499000, value: 4600, image: "https://i.pinimg.com/564x/36/c0/80/36c08030d78c232a55d64d4db8f2a621.jpg" },
//   { id: 5, name: 'Barrel of Gems', price: 1299000, value: 1200, image: "https://i.pinimg.com/564x/fb/e2/ed/fbe2ed91a4fa79a1d2e7754cb0f4a63b.jpg" },
//   { id: 6, name: 'Wagon of Gems', price: 2499000, value: 25000, image: "https://i.pinimg.com/564x/2f/96/2b/2f962b3260fa149bb004cca3e197d266.jpg" },

// ]
const packageItem: PackagesProp[] = [
  { id: 1, name: 'Fistful of Gems', price: 25000, value: 200, image: "https://i.pinimg.com/564x/a4/d4/57/a4d457d3dff578f6468e1f19ed7b5afd.jpg" },
  { id: 2, name: 'Pile of Gems', price: 129000, value: 1050, image: "https://i.pinimg.com/564x/36/49/da/3649da20302508b6239e00299d189b50.jpg" },
  { id: 3, name: 'Pouch of Gems', price: 249000, value: 2200, image: "https://i.pinimg.com/564x/c0/3a/81/c03a81dc201f5ab1796a450f2b89cc04.jpg" },
  { id: 4, name: 'Bucket of Gems', price: 499000, value: 4600, image: "https://i.pinimg.com/564x/a7/a4/dc/a7a4dc284644cc2d4d939376500d895e.jpg" },
  { id: 5, name: 'Barrel of Gems', price: 1299000, value: 1200, image: "https://i.pinimg.com/564x/0a/a0/12/0aa012157ce9fdeb7f1e368f3e02ff28.jpg" },
  { id: 6, name: 'Wagon of Gems', price: 2499000, value: 25000, image: "https://i.pinimg.com/236x/85/03/d3/8503d3104aaacd1e5f6162ac377951be.jpg" },

]
export default function Packages() {
  const axiosAuth = useAxiosAuth()

  const handlePayment = async (value: any) => {
    console.log(process.env.PORT);
    const payment = await axiosAuth.post('/TransactionWallet/deposit/vnpay', {
      amount: value,
      redirectUrl: `${process.env.PORT + '/profile'}`
    })
    console.log(payment.data.paymentUrl);

    window.location.href = payment.data.paymentUrl
  }
  return (
    <div>
      <section className="text-gray-600 body-font bg-white h-screen flex justify-center items-center">
        <div className="container px-5 py-10 mb-10 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            {packageItem.map((item) => (
              <div
                onClick={() => handlePayment(item.price)}
                key={item.id} className="p-6 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-100 cursor-pointer">
                <div className="flex items-center p-6 rounded-lg bg-white shadow-indigo-20 shadow-md border border-gray-200">
                  <div className="flex flex-col">
                    <h2 className={`${classes.name} font-bold`}>{item.name}</h2>
                    <h3 className={`${classes.price} mt-2 text-xl font-bold text-left`}>
                      {item.price.toLocaleString()} VND
                    </h3>
                  </div>
                  <div className="w-32 h-32 rounded-full flex justify-center items-center ml-auto">
                    <div>
                      <img className='pl-4' alt='image' src={item.image} />
                    </div>
                  </div>
                </div>
              </div>

            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
