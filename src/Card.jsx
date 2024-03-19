import "bootstrap/dist/css/bootstrap.css"
//This is the card for all courses.
function Card({ content }) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mt-4 mb-4">
      <div className="card" style={{height:280}}>
        <div style={{height:200}}>
        <img src={`${content.imgsource}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <p className="card-text" style={{fontSize:16,fontFamily:"monospace"}}>{content.title}</p>
        </div>
      </div>
    </div>

  )
}

export default Card