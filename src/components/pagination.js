import React from 'react'

export default function Pagination({postsPerPage,TotalPosts, paginate}) {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(TotalPosts/postsPerPage); i++) {

        pageNumbers.push(i)

    }

    return (
        <div>
            <nav className="nav d-flex justify-content-center">
            <ul className="pagination pagination-sm flex-sm-wrap">
                
                {pageNumbers.map((number,index)=>{
                    return(
                    <>

                    <li key={number} className="page-item">
                        <a href="#" className="page-link" onClick={()=> paginate(number)}>{number}</a>
                    </li>
                    </>)
                })}
            </ul>
            </nav>
        </div>
    )
}
