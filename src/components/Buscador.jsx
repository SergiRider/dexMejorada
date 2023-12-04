import Form from 'react-bootstrap/Form';

const Buscador = ({poke, setSearch, setError}) => {  

  const searching=(e)=>{
    const Text_Search=e.target.value.toLowerCase()
    const result=poke.filter(
        (pok) => 
        pok.name.toLowerCase().includes(Text_Search) || 
        pok.type.toLowerCase().includes(Text_Search)
        );
        e.preventDefault()
        setSearch(result)

        if(result==''){
          setError({
            error: true,
            msg: "No se encontró nada, intenta de nuevo",
            color: "warning"
          });
        
        }else {
          setError({
            error: false,
            msg: `Se han encontrado ${result.filter((item)=>item.name).length} Pokemon en tu busqueda.`,
            color: "success"           
          })
        } 
}
  return (
    <>
    <Form inline>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>
          <h3 className='busqueda'>Sprites todas las generaciones</h3>
          </Form.Label>
        <Form.Control type="text" placeholder="Nombre de pokemon o tipo" onChange={searching} />
      </Form.Group>
      </Form>    
</>
    )
}

export default Buscador