const FilmList = (props) => {
  return (  
    <>
      <h3>Film List</h3>
      {
        
        (props.films.length===0) 
        ? <p>loading films data</p> 
        : 
        props.films.map(film => 
          <p
            key = {film.title}
          >{film.title}</p>)
        
        
      }
    </>
  )
}
 
export default FilmList;