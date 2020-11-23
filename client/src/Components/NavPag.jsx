import React from 'react'
import '../ButtonPag.css'

export default function NavPag(props) {
    const { prodsPerPage, totalProds, paginate, nextPage, prevPage } = props

    const pageNumber = []

    for (let i = 1; i <= Math.ceil(totalProds / prodsPerPage); i++) {
        pageNumber.push(i)
    }


    return (
        <div style={{display: "flex", justifyContent:"center"}}>
            <div>
                <ul className="pagination">
                    <li>
                        <button type="submit" className="btn active black" onClick={() => prevPage()}>
                            <i className="material-icons">arrow_back</i>
                        </button>

                    </li>
                    {pageNumber ? pageNumber.map((num) =>
                        <li key={num}>
                            <button type="submit" className="btn waves-effect yellow" onClick={() => paginate(num)}>
                                {num}
                            </button>
                        </li>
                    ) : false}
                    <li>
                        <button type="submit" className="btn active black" onClick={() => nextPage()}>
                            <i className="material-icons">arrow_forward</i>
                        </button>

                    </li>
                </ul>
            </div>
        </div>
    )
}
