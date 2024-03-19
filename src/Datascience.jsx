import Card from "./Card"
import "bootstrap/dist/css/bootstrap.css"
//This is where the Datascience courses only gets filtered
function Datascience({ content }) {
    let datascience = content.filter((item) => item.type == "datascience")
    return (
        <div className="container mt-4">
            <div className="row">
                {
                    datascience.map((item, index) => {
                        return <Card content={item} key={index} />
                    })
                }
            </div>

        </div>
    )
}
export default Datascience