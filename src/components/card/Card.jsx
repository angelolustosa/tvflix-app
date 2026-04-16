import { useNavigate } from 'react-router-dom'

export const Card = ({ id, title, date, image, vote }) => {

    const navigate = useNavigate()

    return (
        <div
            className="col-6 col-sm-4 col-md-3"
            onClick={() => navigate(`/filme/${id}`)}
            style={{ cursor: 'pointer' }}
        >
            <div className="movie-card">
                <img
                    src={`https://image.tmdb.org/t/p/w500${image}`}
                    className="card-img-top"
                    alt={title}
                />
                <div className="card-body movie-info">
                    <div className="movie-title">{title}</div>
                </div>
            </div>
        </div>
    )
}