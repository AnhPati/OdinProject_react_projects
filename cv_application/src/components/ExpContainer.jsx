import { ExpResume } from "./ExpResume";

const ExpContainer = ({ id, datas }) => {

    return (
        <div id={id} className="col s12">
            {datas.map((data) => {
                const date = id === 'formations-exp' ? data.year : [data.startDate, data.endDate]

                return (
                    <ExpResume
                        container={id}
                        key={data.id}
                        name={data.name}
                        title={data.title}
                        location={data.location}
                        responsabilities={data.responsabilities}
                        date={date}
                    />
                )
            })}
        </div>
    );
}

export default ExpContainer;