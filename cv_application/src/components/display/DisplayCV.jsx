import { Button } from "../Button";
import ProfilContainer from "./ProfilContainer";

const DisplayCV = ({ userDatas }) => {

    return (
        <>
            <h2>DisplayCV</h2>
            <div className="col s12">
                <ProfilContainer datas={userDatas} />
                {/* <FormationContainer datas={userDatas} />
                <ProfessionnalContainer datas={userDatas} /> */}
                <Button type="button" text="Editer" />
            </div>
        </>
    );
}

export default DisplayCV;