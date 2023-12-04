import { useEffect, useState } from 'react';


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

            return{
                id: poke.id,
                name:poke.name,
                imgG1: poke.sprites.versions["generation-i"]["red-blue"].front_default,
                imgG2: poke.sprites.versions["generation-ii"].gold.front_default,
                imgG3: poke.sprites.versions["generation-iii"].emerald.front_default||poke.sprites.versions["generation-iii"]['firered-leafgreen'].front_default,
                imgG4: poke.sprites.versions["generation-iv"].platinum.front_default,
                imgG5: poke.sprites.versions["generation-v"]["black-white"].animated.front_default||poke.sprites.versions["generation-v"]["black-white"].front_default,
                imgG6: poke.sprites.versions["generation-vi"]["omegaruby-alphasapphire"].front_default,
                imgG7: poke.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].front_default||poke.sprites.versions["generation-vii"].icons.front_default,
                imgG8: poke.sprites.versions["generation-viii"].icons.front_default||poke.sprites.front_default,
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