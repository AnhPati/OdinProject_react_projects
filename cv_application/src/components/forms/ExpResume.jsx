import datas from "../datas/userDatas"

export const ExpResume = ({ id, name, title, date, experiences, location }) => {
    return (
        <>
            {id === 'exp-formation' ? (
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
                    <p>{experiences}</p>
                </div>
            )}
        </>

    )
}