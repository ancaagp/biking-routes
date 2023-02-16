import '../style/CardPage.css';
import RouteCard from './RouteCard';
import data from '../data';

function CardPage() {

    const renderedCards = data.map((item)=>{
        return (
            <RouteCard 
                key= {item.id}
                {...item}
            />
        )

    })

    return (<div className='card-page'>
        {renderedCards}
    </div>)
}

export default CardPage;