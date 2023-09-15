export const ExpResume = ({ container, name, title, date, responsabilities, location, id, margin }) => {
    return (
        <>
            {container === 'formations-exp' ? (
                <div id={id} className={`row ${margin}`}>
                    <div className="col s4 side-container pb-20">
                        <h6>Année {date}</h6>
                        <h6>{location}</h6>
                    </div>
                    <div className="col s8">
                        <h6><b>{title}</b> chez <i>{name}</i></h6>
                        <div className="d-flex">
                        </div>
                    </div>
                </div>
            ) : (
                <div id={id} className={`row ${margin}`}>
                    <div className="col s4 side-container pb-20">
                        <h6>{title}</h6>
                        <h6>{name} - {location}</h6>
                        <h6>{date}</h6>
                    </div>
                    <div className="col s8">
                        <h6>{responsabilities}</h6>
                    </div>
                </div>
            )}
        </>
    )
}