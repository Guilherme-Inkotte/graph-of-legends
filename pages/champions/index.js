export const getStaticProps = async () => {
    const res = await fetch('http://ddragon.leagueoflegends.com/cdn/11.14.1/data/pt_BR/champion.json');
    console.log(res)
    const data = await res.json();

    let championList = []
    for (var key in data.data) {
        if (data.data.hasOwnProperty(key)) {
            championList.push(data.data[key])
        }
    }

    return { 
        props: { champions: championList } 
    }
}

const ChampionsList = ({champions}) => {
    console.log(champions)
    return ( <main>
        <h1>Lista de campeões</h1>
        {
            champions.map(champion => {
                return <p style={{fontSize: '1.5rem'}}>{champion.name} - {champion.title}</p>
            })
        }
    </main> );
}
 
export default ChampionsList;