function Container(props){
  return(
    <>
     <div className="card-body">
      <h5 className="cheader">{ props.header }</h5>
      <h5 className="ctypes">{ props.mtypes }</h5>
    </div>
    </>
  )
}

export default Container;