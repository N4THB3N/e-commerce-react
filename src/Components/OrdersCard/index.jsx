import { ChevronRightIcon } from "@heroicons/react/24/solid"

const OrdersCard = props => {
    const {totalPrice, totalProducts} = props

    return (
        <div className='flex justify-between items-center mb-3 border border-black rounded-lg p-4 w-80'>
            <div className='flex justify-between w-full'>
                <p className='flex flex-col'>
                    <span className='font-light'>01.02.2023</span>
                    <span className='font-light'>{totalProducts} article(s)</span>
                </p>
                <p className='flex'>
                    <span className='font-medium text-2xl'>Q.{totalPrice}</span>
                    <ChevronRightIcon 
                        className='h-6 w-6 text-black-500 cursor-pointer'></ChevronRightIcon>
                </p>
            </div>
        </div>
    )
}

export default OrdersCard