import '../style/RouteCard.css';
import { IoLocationSharp } from 'react-icons/io5';

function RouteCard(props) {
    return(
        <div className='card'>
            {props.strava !== "" && <div className='card-badge'>View on Strava</div>}
            <img alt='bike route' src='https://picsum.photos/id/62/200/300' />
            <div className='description'>
                <div className='city'>
                    <IoLocationSharp color={'#F55A5A'}/>
                    <div className='city-name'>{props.location}</div>
                </div>
                <div className='name'>{props.name}</div>
                <div className='specs'>
                    <div className='distance'>Distance: {props.distance} miles </div>
                    <div className='elevation'>Elevation: {props.elevation} feet</div>
                </div>
                <div>{props.description}</div>
            </div>
        </div>
    )
}

export default RouteCard;