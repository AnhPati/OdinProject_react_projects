import { ExpResume } from "./ExpResume";
import datas from "../datas/userDatas";

const ExpContainer = ({ id }) => {
    const dataExp = id === 'formations' ? datas.formations : datas.pro

    return (
        <div id={id} className="col s12">
            {dataExp.map((data) => {
                let date
                if (id === 'formations') {
                    date = data.year
                } else {
                    date = [data.startDate, data.endDate]
                }

                return (
                    <ExpResume
                        key={data.id}
                        name={data.name}
                        title={data.title}
                        location={data.location}
                        experiences={data.experiences}
                        date={date}
                    />
                )
            })}
        </div>
    );
}

export default ExpContainer;