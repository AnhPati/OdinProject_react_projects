import { ExpResume } from "./ExpResume";
import { Button } from "./ui/Button";

const ExpContainer = ({ id, datas, removeExp, editionMode }) => {

    return (
        <div id={id} className="col s12">
            {datas.length > 0 && datas.map((data) => {
                const date = id === 'formations-exp' ? data.year : [data.startDate, data.endDate]

                return (
                    <>
                        <ExpResume
                            container={id}
                            key={data.id}
                            id={data.id}
                            name={data.name}
                            title={data.title}
                            location={data.location}
                            responsabilities={data.responsabilities}
                            date={date}
                        />
                        {editionMode && (
                            <Button key={`${data.id}-btn`} type="button" text="Supprimer" onClick={removeExp} />
                        )}
                    </>
                )
            })}
        </div>
    );
}

export default ExpContainer;