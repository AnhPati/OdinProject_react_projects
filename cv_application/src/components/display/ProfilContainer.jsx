import '../../styles/styles.css'

const ProfilContainer = ({ datas }) => {
    const profilDatas = datas.infos
    console.log(datas)

    return (
        <div className="info-container row">
            <h2>Profil</h2>
            <div className="row d-flex flex-end">
                <div className="col s4">
                    <h4>{profilDatas.lastName}</h4>
                </div>
                <div className="col s4">
                    <h4>{profilDatas.firstName}</h4>
                </div>
                <div className="col s4">
                    <div className="phot-img">
                        <img src={profilDatas.photo} alt="" className="circle responsive-img" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s4">
                    <h4>{profilDatas.email}</h4>
                </div>
                <div className="col s4">
                    <h4>{profilDatas.phone}</h4>
                </div>
            </div>
        </div>
    )
}

export default ProfilContainer