import Head from 'next/Head'
import Layout from '../components/Layout'
import Link from 'next/Link'

export default function Home({pokemon}) {
  

  return (
    <Layout title="Pokedex">
     

      
      <h1 className="text-4xl mb-8 	"><img className="object-fill h-48 w-50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/800px-International_Pok%C3%A9mon_logo.svg.png"></img></h1>
      <ul>
        {pokemon.map((pokeman, index) =>(
          <li className='mb-12	' key={index}>
            <Link href={`/pokemon?id=${index +1}`}>
              <a className='object-center'> 
                <img className="		w-45 h-45 border-8 border-orange-600 rounded-lg	" src={pokeman.image} alt={pokeman.name}/>
                <span  className="font-bold text-red-400 ">{index + 1}.</span>
                {pokeman.name}
                
              </a>
            </Link>
          </li>
        ))}
      </ul>

      
    </Layout>
  )
}
export async function getStaticProps(context){
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
    const {results} = await res.json();
    const pokemon = results.map((result, index) => {
    const paddedIndex = ("00"+ (index + 1)).slice(-3);
    const image=`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`
       return {
        ...result,
        image,
      };
    })
  return{
      props:{pokemon},
    };
  }catch (err){
    console.error(err);
  }

}