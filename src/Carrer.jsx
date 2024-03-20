import "bootstrap/dist/css/bootstrap.css"
import Card from "./Card"
//This is where the Career development courses only gets filtered
function Carrer({ content }) {
    let career = content.filter((item) => item.type == "career")
    return (
        <div className="container">
            <div className="row">
                {
                    career.map((item, index) => {
                        return <Card content={item} key={index} />
                    })
                }
            </div>

        </div>
    )
}

export default Carrer