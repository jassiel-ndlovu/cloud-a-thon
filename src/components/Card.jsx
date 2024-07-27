import './Card.css'

function Card(props) {
    const { imageURL, name, rating } = props;


    return (
        <div className="card">
            <img src={imageURL} alt="tutor-image" className="profile-image" />
            
            <h3>{name}</h3>

            <div className="rating">
                {Array.from({ length: 5 }, (_, index) => (
                    <span key={index} className={index < rating ? 'star filled' : 'star'}>★</span>
                ))}
            </div>
        </div>
    )
}

export default Card;