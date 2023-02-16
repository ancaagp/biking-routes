import '../style/Header.css';
import { MdDirectionsBike } from 'react-icons/md';

function Header() {
    return(
        <div className='header-box'>
            <div className='header'>
                <MdDirectionsBike size={30} style={{ marginRight: '10px', marginLeft:'10px' }} />
                <div className='header-text'>Best road biking routes in and around San Francisco</div>
            </div>
        </div>
    )
}


export default Header;

