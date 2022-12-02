import React from 'react'

function Pagination({ postsPerPage, totalPosts, paginate }) {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <ul className='flex  w-full justify-around absolute bottom-[10%]'>
            {
                pageNumbers.map((number, index) => (
                    <li key={index} className='w-full '>
                        <a className='w-full h-full border bg-slate-500 border-white flex justify-center items-center rounded-sm hover:bg-slate-300 cursor-pointer' href="!#" onClick={() => paginate(number)}>
                            {number}
                        </a>
                    </li>
                ))
            }
        </ul>
    )
}

export default Pagination