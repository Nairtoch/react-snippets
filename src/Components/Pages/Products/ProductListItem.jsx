import { Link } from 'react-router-dom';
import { Comments } from '../Comments/Comments';

export const ProductListItem = props => {
    console.log(props);
    return (
        <div className='Product'>
            <div>
                <figure>
                    <img src={props.data.image} alt="Image of a Home for sale." />
                </figure>
            </div>
            <span>
                <h3>{props.data.name}</h3>
                <p>{props.data.description_short}</p>
                <p>{props.data.price} DKK</p>
                <Link to={`/products/${props.data.id}`}>Læs Mere</Link>
            </span>
        </div>
    )
}