import { useNavigate } from 'react-router-dom'
import { formatDate } from '../../util/DateUtil.js'

export const Card = ({ id, title, date, image, vote }) => {
    console.log(vote);
    
    const navigate = useNavigate()

    return (
        <div
            className="col-6 col-sm-4 col-md-3 mb-4"
            onClick={() => navigate(`/filme/${id}`)}
            style={{ cursor: 'pointer' }}
        >
            <div className="movie-card">
                <div class="vote-circle">{ vote.toFixed(1).replace('.', ',')}</div>
                <img
                    src={`https://image.tmdb.org/t/p/w500${image}`}
                    className="card-img-top"
                    alt={title}
                />
                <div className="card-body movie-info">
                    <div className="movie-title">{title}</div>
                    <div className="movie-date">{date && formatDate(date)}</div>
                </div>
            </div>
        </div>
    )
}