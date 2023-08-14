function Genre(props){
  return(
    <>
    <div className="card-body">
      <h5 className="card-title">{ props.name }</h5>
      <p className="gdescription">{ props.description }</p>
      <h5 className="firsttitle">{ props.mtitle1 }</h5>
      <h5 className="secondttitle">{ props.mtitle2 }</h5>
    </div>
    </>
  )
}

export default Genre;