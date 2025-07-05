import React from 'react'

const Disciplines = () => {
  return (
    <div className='lg:max-w-screen-2xl md:max-w-screen-md mx-auto'>
       
        <div className='flex items-end'>
            <div className='md:w-1/2'>
            <h2 className='text-2xl mb-5'>Disciplines</h2>
            <div className='md:w-1/2 float-left'>
            
                <h3 className='text-xl mb-5'>Growth Step 1:</h3>
                <ul className='home-didciplines-list'>
                    <li><a href='#'>Nomenclature (Brand Name)</a></li>
                    <li><a href='#'>Brand Identity (Logo Design and Story)</a></li>
                    <li><a href='#'>Brand Stationery</a></li>
                    <li><a href='#'>Company Profile / Brochure Design</a></li>
                    <li><a href='#'>Website Design</a></li>
                    <li><a href='#'>Menu Design</a></li>
                    <li><a href='#'>Packaging Design</a></li>
                    <li><a href='#'>Presentation / Pitch Deck Designs</a></li>
                    <li><a href='#'>Annual Report Designs</a></li>
                    <li><a href='#'>Photoshoots and Videography</a></li>
                </ul>
            </div>
            <div className='md:w-1/2 float-left'>
                <h3 className='text-xl mb-5'>Growth Step 1:</h3>
                <ul className='home-didciplines-list'>
                    <li><a href='#'>Campaign + Strategy</a></li>
                    <li><a href='#'>Social Media Optimization</a></li>
                    <li><a href='#'>SEO</a></li>
                    <li><a href='#'>Performance Marketing</a></li>
                    <li><a href='#'>Google Ads and Listing</a></li>
                    <li><a href='#'>Blogs</a></li>
                    <li><a href='#'>ORM</a></li>
                </ul>
            </div>
            </div>
            <div className='md:w-1/2'>
            <img src="src/assets/img/bonito.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Disciplines