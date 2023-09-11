export const ExpResume = ({ container, name, title, date, responsabilities, location, id }) => {
    return (
        <>
            {container === 'formations-exp' ? (
                <div id={id} className="row">
                    <div>
                        <h3>{title}</h3><sub>{date}</sub>
                    </div>
                    <div className="d-flex">
                        <h4>{name}</h4><sub>{location}</sub>
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