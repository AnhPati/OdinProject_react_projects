export const ExpResume = ({ container, name, title, date, responsabilities, location, id }) => {
    return (
        <>
            {container === 'formations-exp' ? (
                <div id={id} className="row">
                    coucou
                    <h3>{name}</h3>
                    <h4>{title}</h4>
                    <sub>{date}</sub>
                    <p>{location}</p>
                </div>
            ) : (
                <div id={id} className="row">
                    <h3>{name}</h3>
                    <h4>{title}</h4>
                    <sub>{date}</sub>
                    <p>{location}</p>
                    <p>{responsabilities}</p>
                </div>
            )}
        </>

    )
}