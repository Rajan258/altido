import React from 'react'

const Blog = ({val}) => {
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
  )
}

export default Blog