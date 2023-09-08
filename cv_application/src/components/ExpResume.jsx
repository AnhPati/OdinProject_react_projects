export const ExpResume = ({ container, name, title, date, responsabilities, location }) => {
    return (
        <>
            {container === 'formations-exp' ? (
                <div className="row">
                    <h3>{name}</h3>
                    <h4>{title}</h4>
                    <sub>{date}</sub>
                    <p>{location}</p>
                </div>
            ) : (
                <div className="row">
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