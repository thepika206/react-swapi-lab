import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { getStarships } from "../../services/api-calls"


const StarshipList = () => {
    const [pageNumber, setPageNumber] = useState(1)
    const [starships, setStarships] = useState({})

    useEffect(() => {
        const fetchStarshipData = async () => {
            const starshipData = await getStarships(pageNumber)
            setStarships(starshipData)
        }
        fetchStarshipData()
    }, [pageNumber])

    const handlePrevButton = () => {
        if (pageNumber > 1)
            setPageNumber(pageNumber - 1)
    }
    const handleNextButton = () => {
        if (pageNumber < Math.ceil(starships.count / 10))
            setPageNumber(pageNumber + 1)
    }


    return (
        <>
            {
                (!starships.results)
                    ? <div className="container-centered">
                        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                    </div>
                    : <>
                        <div className="nav-buttons">
                            <button id='prev-btn' onClick={handlePrevButton} >Prev</button>
                            <button id='next-btn' onClick={handleNextButton} >Next</button>
                        </div>
                        <div className="nav-buttons">
                            <p id='page-counter-p'>Page: {pageNumber} of {Math.ceil(starships.count / 10)}</p>
                        </div>
                        <div className="container">
                            {
                                starships.results.map(starship =>
                                    <Link
                                        //starship.url eg: https://swapi.py4e.com/api/starships/2/
                                        to={`/starships/${starship.url.slice(37)}`}
                                        state={{ starship }}
                                        key={starship.name}
                                    >
                                        <div className="card">
                                            <h3>{starship.name}</h3>
                                        </div>
                                    </Link>
                                )
                            }
                        </div>
                    </>
            }
        </>
    )
}

export default StarshipList
