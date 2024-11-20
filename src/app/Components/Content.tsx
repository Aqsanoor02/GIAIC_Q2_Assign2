import React from 'react'
import Card from './Card'
import Button from './Button'

function Content() {
  return (
    <div>
        <div className='font-[Montserrat] pt-[40px] pb-[90px] gap-10 w-[Fixed(701px)] h-[Hug(496px)] text-center flex justify-around flex-col '>
            <h6 className='text-[16px] leading-6 font-[700px]  text-[#23A6F0] '>Welcome</h6>
            <h1 className='text-[58px] w-[542px] h-[160px] font-[700px] self-center leading-[80px] text-white'>Selling on the internet like a pro</h1>
            <h4 className='w-[536px] h-[60px] text-[20px] leading-[30px] self-center font-[400px] text-white'>We know how large objects will act, but things on a 
            small scale just do not act that way.</h4>
        <div className='h-[Hug(365px)] w-[Hug(52px)] space-x-[10px] pb-6'>
            <Button label='Get Offer Now' className='w-[Hug(193px)] h-[Hug(52px)] rounded-[5px] bg-[#23A6F0] pt-[15px] pb-[15px] pr-[40px] pl-[40px] gap-[10px]'/>
            <Button label='Learn More' className='w-[Hug(162px)] h-[Hug(52px)] rounded-[5px] border-[1px] pt-[15px] pb-[15px] pr-[40px] pl-[40px]  border-[#23A6F0] text-[#23A6F0]'/>
        </div>
        
        </div>
            <div>
                <Card />
            </div>
            

       

    </div>
  )
}

export default Content