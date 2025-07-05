import React from 'react'
import Portfolio from './Portfolio';

const Portfolios = () => {

  const [Products] = React.useState([
    {title: "Title1", url: "/src/assets/img/deliure-1.jpg", l_title:"Torem ipsum lorem ipsum", desc:"Torem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, reiciendis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, reiciendis!", },
    {title: "Title2", url: "/src/assets/img/deliure-1.jpg", l_title:"Morem ipsum lorem ipsum", desc:"Morem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, reiciendis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, reiciendis!", },
    {title: "Title3", url: "/src/assets/img/deliure-1.jpg", l_title:"Lorem ipsum lorem ipsum", desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, reiciendis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, reiciendis!", },
    {title: "Title4", url: "/src/assets/img/deliure-1.jpg", l_title:"Sorem ipsum lorem ipsum", desc:"Sorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, reiciendis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, reiciendis!", },
    {title: "Title5", url: "/src/assets/img/deliure-1.jpg", l_title:"Sorem ipsum lorem ipsum", desc:"Sorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, reiciendis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, reiciendis!", },
    {title: "Title6", url: "/src/assets/img/deliure-1.jpg", l_title:"Norem ipsum lorem ipsum", desc:"Norem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, reiciendis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, reiciendis!", }
  ]);

  
  return (
    <div className='bg-white w-full px-3 relative z'>
        <div className="lg:max-w-screen-2xl md:max-w-screen-md md:flex mx-auto">
            <div className=" mt-0 w-full relative overflow-hidden">
            <h2 className='text-2xl mb-5 ms-2'>Featured Projects and Case Studies</h2>
              {Products.map((elem, index) =>  <Portfolio val={elem} />)}
          </div>
        </div>
    </div>
  )
}


export default Portfolios