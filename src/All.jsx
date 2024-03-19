import Card from "./Card";
import "bootstrap/dist/css/bootstrap.css"
//this is where all the courses are displayed
function All({ content }) {
    return (
        <div className="container mt-4">
            <div className="row">
                {
                    content.map((item, index) => {
                        return <Card content={item} key={index} />
                    })
                }
            </div>

        </div>
    )
}

export default All

