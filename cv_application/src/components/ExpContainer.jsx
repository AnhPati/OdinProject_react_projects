import { ExpResume } from "./ExpResume";
import { Button } from "./ui/Button";

const ExpContainer = ({ id, datas, removeExp, editionMode }) => {
    const hasContent = datas.length > 0 ? '' : 'd-none'
    return (
        <div id={id} className={`${hasContent} col s12`}>
            {datas.length > 0 && datas.map((data) => {
                const date = id === 'formations-exp' ? data.year : `Du ${data.startDate} ${data.endDate ? `au ${data.endDate}` : `à aujourd'hui`}`
                const lastExp = datas.indexOf(data) === datas.length - 1 ? true : false
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
                            margin="mb-0"
                            last={lastExp}
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