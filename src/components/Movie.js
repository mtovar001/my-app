function Movie(props){
  return(
    <>
     <div className="card-body">
      <h5 className="mtitle">{ props.title }</h5>
      <p className="ynote">{ props.yrnote }</p>
    </div>
    </>
  )
}

export default Movie;