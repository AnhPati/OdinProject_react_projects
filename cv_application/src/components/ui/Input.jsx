/* eslint-disable react/prop-types */
import '../../styles/styles.css'

export const Input = ({ htmlFor, type, name, id, text, required = false, classDiv, onChange, value, src }) => {
    return (
        <>
            {name === 'photo' ? (
                <div className={`col ${classDiv}`}>
                    <div className="row valign-wrapper">
                        <div className="photo-img">
                            <img src={src} alt="" className="circle responsive-img" />
                        </div>
                        <div className={`file-field input-field`}>

                            <div className="btn">
                                <span>{text}</span>
                                <input type={type} name={name} id={id} required={required} onChange={onChange} />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={`input-field col ${classDiv}`}>
                    {type === 'textarea' ? (
                        <textarea name={name} id={id} required={required} className="validate materialize-textarea" value={value} onChange={onChange}></textarea>
                    ) : (
                        <input type={type} name={name} id={id} required={required} className="validate" value={value} onChange={onChange} />
                    )
                    }
                    <label className={value === '' ? '' : 'active'} htmlFor={htmlFor}>{text}</label>
                </div>
            )
            }
        </>
    )
}