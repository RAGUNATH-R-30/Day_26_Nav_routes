import Card from "./Card"
import "bootstrap/dist/css/bootstrap.css"
//This is where the Cybersecurity courses only gets filtered
function Cybersecurity({content}) {
    let cybersecurity = content.filter((item)=>item.type=="cybersecurity")
    return (
        <div className="container">
            <div className="row">
                {
                    cybersecurity.map((item, index) => {
                        return <Card content={item} key={index} />
                    })
                }
            </div>

        </div>
    )
}

export default Cybersecurity