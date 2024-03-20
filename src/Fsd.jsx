import Card from "./Card"
import "bootstrap/dist/css/bootstrap.css"
//This is where the fullstack development courses only gets filtered
function Fsd({ content }) {
    let fsd = content.filter((item) => item.type == "fsd")
    return (
        <div className="container">
            <div className="row">
                {
                    fsd.map((item, index) => {
                        return <Card content={item} key={index} />
                    })
                }
            </div>

        </div>
    )
}

export default Fsd