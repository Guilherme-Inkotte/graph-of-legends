export const getStaticPaths = async () => {
    const res = await fetch('http://ddragon.leagueoflegends.com/cdn/11.14.1/data/pt_BR/champion.json');
    const data = await res.json();

    let paths = []
    for (var key in data.data) {
        if (data.data.hasOwnProperty(key)) {
            paths.push({ params: {id: data.data[key].id} })
        }
    }

    return { 
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const res = await fetch(`http://ddragon.leagueoflegends.com/cdn/11.14.1/data/pt_BR/champion/${context.params.id}.json`)
    const data = await res.json();

    return { 
        props: { champion: data.data[context.params.id] } 
    }
}

const ChampionDetails = ({champion}) => {
    return (
        <div>
            <h1>Campeão: {champion.name}</h1>
            <p>{champion.lore}</p>
        </div>
    );
}
 
export default ChampionDetails;