const Contact = () => {
    return (
        <div className="cuerpoFooter">
            
            <h2>Escribime!</h2>
        
<form className="formCreate" >
    <label className="labelForm" >Nombre
        <input className="textCreate"   />
    </label>
    <label className="labelForm" >Apellido
        <input className="textCreate"   />
    </label>
    <label className="labelForm" >Correo electrónico
        <input className="textCreate" />
    </label>
    <label className="labelForm" >Mensaje
        <textarea className="textCreate" />
    </label>
    
    
    <button className="button" type="submit">Enviar</button>
</form>
        </div>
    )
}
export default Contact;