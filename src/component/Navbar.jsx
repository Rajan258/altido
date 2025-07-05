import React from 'react'

const Navbar = () => {
  return (
    <div className='flex gap-5'>
        {[
          {
            name: 'About',
            dropdown: ['Our Story', 'Team', 'Mission & Vision']
          },
          'Portfolio',
          'Disciplines',
          'Clients',
          'Blog',
          'Contact'
        ].map((item, index) => (
          <div key={index} className="relative group">
            {typeof item === 'string' ? (
              <a className='text-white py-3' href={item}>{item}</a>
            ) : (
              <>
                <a className='text-white flex items-center gap-1 ' href={item.name}>
                  {item.name}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2">
                  {item.dropdown.map((subItem, subIndex) => (
                    <a 
                      key={subIndex}
                      href={`about/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-52"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
    </div>
  )
}

export default Navbar