import React from 'react'

const Portfolio = ({val}) => {
    
  return (

    
                  <div className='title p-2 pb-10 md:w-1/2 float-left'>
                    <div className='prdct-img'>
                      <img src={val.url} alt="Product Image" />
                    </div>
                    <div className='flex justify-between items-center pt-2'>
                      <h3 className='text-xl font-medium'>{val.title}</h3>
                      <a href='' className=''>{val.l_title}</a>
                    </div>
                  </div>
            
    // <div className=' border-y-[1px] border-zinc-500'>
    //     <div className='w-1/2 py-12 flex justify-between max-w-screen-xl mx-auto '>
    //         <div className='title flex flex-col justify-between'>
    //             <h1 className='text-4xl font-medium'>{val.title}</h1>
    //             <a href='' className=' '>{val.l_title}</a>
    //         </div>
    //         <div className='prdct-img'><img src={val.url} alt="Product Image" /></div>

    //         <div className='desc w-1/3'>
    //             <p className='pb-10'>{val.desc}</p>
    //             <div className='flex gap-3'>
    //             {val.b_val && <Button /> }
    //             {val.b2_val && <Button title='Case Study'/> }
    //             </div>
    //         </div>
    //     </div>
    // </div>
  )
}

export default Portfolio