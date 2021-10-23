import React from 'react'

const Newsitem = (props)=> {
   

    let { title, description ,imageurl,newsurl,author,date,source} = props;
    return (
        <div>
            <div className="card">
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{zIndex:'1',left:'90%'}}>
    {source}</span>
  
                <img src={imageurl} class="card-img-top" alt="..."/>
                <div className ="card-body">
                <h5 className ="card-title">{title}...</h5>
                <p className ="card-text">{description}</p>
                <div class="card-footer">
      <small className="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small>
    </div>
                <a rel="noreferrer" href={newsurl} target="_blank" className ="btn btn-dark btn-sm">Read More</a>
                </div>
            </div>
        </div>
    )

}

export default Newsitem