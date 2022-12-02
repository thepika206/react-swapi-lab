const FilmList = (props) => {
  return (  
    <>
      <h3>Film List</h3>
      {
        (props.films.length===0) 
          ? <div className="lds-ripple"><div></div><div></div></div>
          :props.films.map(film => 
            <p
              key = {film.title}
            >{film.title}</p>)
      }
    </>
  )
}

export default FilmList;