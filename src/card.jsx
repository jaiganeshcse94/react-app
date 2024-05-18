function Cards(props){
  return <div className="col-lg-4" >
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center" >{props.data.subcription}</h5>
          <h6 className="card-price text-center">${props.data.month}/month</h6>
          <hr/>
          <ul className="fa-ul">
            {
              props.data.service.map((e,i)=>{
                let length=props.data.service.length;
                if(props.data1==0){
                  if(i<(length-4)){
                    return <li key={i}><span className="fa-li"><i className="fas fa-check"></i></span>{e}</li>
                  }
                  else
                  {
                    return <li key={i} className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{e}</li>
                  }
                }
                if(props.data1==1){
                  if(i<(length-1)){
                    return <li key={i}><span className="fa-li"><i className="fas fa-check"></i></span>{e}</li>
                }
                  else
                  {
                    return <li key={i} className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{e}</li>
                  }
                }
                if(props.data1==2){
                  if(i<=(length-1)){return <li key={i}><span className="fa-li"><i className="fas fa-check"></i></span>{e}</li>
                }
                }
              })
            }
          </ul>
          <div className="d-grid">
            <a href="#" className="btn btn-primary text-uppercase">Button</a>
          </div>
        </div>
      </div>
    </div>
}

export default Cards //default meaning