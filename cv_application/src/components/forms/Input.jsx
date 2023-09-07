import '../styles/styles.css'

export const Input = ({ htmlFor, type, name, id, text, required = false, classDiv, classLabel, classInput }) => {
    return (
        <>
            {name === 'photo' ? (
                <div className={`col ${classDiv}`}>
                    <div className="row valign-wrapper">
                        <div className="photo-img">
                            <img src="http://via.placeholder.com/120x120" alt="" className="circle responsive-img" />
                        </div>
                        <div className={`file-field input-field`}>

                            <div className="btn">
                                <span>{text}</span>
                                <input type={type} name={name} id={id} required={required} />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={`input-field col ${classDiv}`}>
                    {type === 'textarea' ? (
                        <textarea name={name} id={id} required={required} className="validate materialize-textarea"></textarea>
                    ) : (
                        <input type={type} name={name} id={id} required={required} className="validate" />
                    )
                    }
                    <label htmlFor={htmlFor}>{text}</label>
                </div>
            )
            }
        </>
    )
}