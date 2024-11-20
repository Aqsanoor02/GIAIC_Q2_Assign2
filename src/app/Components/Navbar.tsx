import React from 'react'
import Button from './Button'

function Navbar() {
  return (
    <div className='text-white font-[Montserrat] justify-around space-y-5 w-[1322px] h-[91px]  left-[59px] flex '>
        <div className=' text-white w-[152px] h-[32px] font-[Montserrat]   '><h3 className='pt-6 ml-20 text-[26px] tracking-[0.1px] size-6 font-[700px]'>BrandName</h3></div>
        <div className=' flex justify-between w-[815px] h-[58px] top-[16px] left-[364px]'>
            <div className='pt-4'>
            <li className='justify-between flex top-[17px] gap-[21px] w-[275px] h-[24px] '>
                <ul>Home</ul>
                <ul>Product</ul>
                <ul>Pricing</ul>
                <ul>Contact</ul>
            </li>
            </div>
            <div className='space-x-10'>
                <Button label='Login' className='text-white w-[41] h-[22px]'/>
                <Button label='Join Us' className='bg-[#23A6F0] w-[110px] h-[52px] pt-[15px] pb-[15px] pr-[25px] pl-[25px] gap-[15px] rounded-[5px]'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar