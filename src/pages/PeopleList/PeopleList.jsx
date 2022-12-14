import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getPeople } from "../../services/api-calls";

const PeopleList = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const [people, setPeople] = useState({})

  useEffect(() => {
    const fetchPeopleData = async() => {
      const peopleData = await getPeople(pageNumber)
      setPeople(peopleData)
    }
    fetchPeopleData()
  }, [pageNumber])

  const handlePrevButton = () => {
    if(pageNumber > 1)
    setPageNumber(pageNumber - 1)
  }
  const handleNextButton = () => {
    if(pageNumber < Math.ceil(people.count/10))
    setPageNumber(pageNumber + 1)
  }

  return (  
    <>
      {
        (!people.results) 
        ? <div className="container-centered">
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
          </div>
        :<>
          <div className="nav-buttons">
            <button onClick={handlePrevButton} >Prev</button>
            <button onClick={handleNextButton} >Next</button>
          </div>
          <div className="nav-buttons">
            <p>Page: {pageNumber} of {Math.ceil(people.count/10)}</p>
          </div>
          <div className="container">
            {
              people.results.map(person => 
                <Link
                  to={`${person.url.slice(34)}`}
                  state={{person: person}}
                  key={person.name}
                >
                  <div className="card">
                    <h3>{person.name}</h3>
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

export default PeopleList;