import { useEffect, useState } from 'react';
import notFound from '../assets/img/missing-poke.png'


const MiApi = ({setPoke, search, setSearch}) => {
    const limite = 1500
    
      const url=`https://pokeapi.co/api/v2/pokemon?limit=${limite}`
    
    useEffect(()=>{
        const getPokes= async ()=>{
        const response= await fetch(url)
        const dataPokes= await response.json()
        const {results} =dataPokes

             const pokesPush =results.map(async(pokemon)=>{
          const response = await fetch(pokemon.url)
          const poke= await response.json()    
          const types= poke.types.map(type=>type.type.name).join(', ') 
          const pS=poke.sprites.versions
            return{
                id: poke.id,
                name:poke.name,
                imgG1: pS["generation-i"]["red-blue"].front_default|| notFound,
                imgG2: pS["generation-ii"].gold.front_default|| notFound,
                imgG3: pS["generation-iii"].emerald.front_default||pS["generation-iii"]['firered-leafgreen'].front_default|| notFound,
                imgG4: pS["generation-iv"].platinum.front_default|| notFound,
                imgG5: pS["generation-v"]["black-white"].animated.front_default||pS["generation-v"]["black-white"].front_default|| notFound,
                imgG6: pS["generation-vi"]["omegaruby-alphasapphire"].front_default|| notFound,
                imgG7: pS["generation-vii"]["ultra-sun-ultra-moon"].front_default||pS["generation-vii"].icons.front_default|| notFound,
                imgG8: pS["generation-viii"].icons.front_default||poke.sprites.front_default|| notFound,
                type: types,       
            }
        })
        
        setPoke(await Promise.all(pokesPush))
        setSearch(await Promise.all(pokesPush))
        }
        getPokes()
    },[])
    
    
  return (
    <>
        <tbody>
            {search.map((poke) =>(
                <tr className="aligne-middle" key={poke.id}>
                    <td>{poke.id}</td>
                    <td>{poke.name}</td>
                    <td>{poke.type}</td>
                    <td><img src={poke.imgG1}></img></td>
                    <td><img src={poke.imgG2}></img></td>
                    <td><img src={poke.imgG3}></img></td>
                    <td><img src={poke.imgG4}></img></td>
                    <td><img src={poke.imgG5}></img></td>
                    <td><img src={poke.imgG6}></img></td>
                    <td><img src={poke.imgG7}></img></td>
                    <td><img src={poke.imgG8}></img></td>
                    
                </tr>
            ))}
        </tbody>    
       
    </>
  )
  }

export default MiApi