export const ExpResume = ({ container, name, title, date, responsabilities, location, id }) => {
    return (
        <>
            {container === 'formations-exp' ? (
                <div id={id} className="row">
                    <div>
                        <h4><b>{title}</b> chez <i>{name}</i></h4>
                        <div className="d-flex">
                            <h6>{location} {date}</h6>
                        </div>
                    </div>
                </div>
            ) : (
                <div id={id} className="row">
                    <h3>{title}</h3>
                    <h4>{name}</h4>
                    <sub>{date}</sub>
                    <p>{location}</p>
                    <p>{responsabilities}</p>
                </div>
            )}
        </>

    )
}