import './CampoTexto.css'

const CampoTexto = (props) => {

    
    return(
        <section>
            <div className="campo-texto">
                <label>
                    {props.label + ' *'} 
                </label>
                <input value ={props.valor} placeholder={props.placeholder}></input>
                
            </div>
        </section>
    )
}

export default CampoTexto