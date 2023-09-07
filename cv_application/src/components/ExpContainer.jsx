export const ExpContainer = ({ type, name, title, date, experiences }) => {
    return (
        <>
            {type === 'formation' ? (
                <div className="row">
                    <h3>{name}</h3>
                    <h4>{title}</h4>
                    <sub>{date}</sub>
                </div>
            ) : (
                <div className="row">
                    <h3>{name}</h3>
                    <h4>{title}</h4>
                    <sub>{date}</sub>
                    <p>{experiences}</p>
                </div>
            )}
        </>

    )
}