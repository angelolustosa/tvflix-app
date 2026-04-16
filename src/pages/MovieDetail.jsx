import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './MovieDetail.css'

export const MovieDetail = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const [movie, setMovie] = useState(null)

    const formatDate = (date) => {
        if (!date) return ''
        return new Date(date).toLocaleDateString('pt-BR')
    }

    const renderStars = (vote) => {
        const rating = vote / 2
        const fullStars = Math.floor(rating)
        const hasHalf = rating % 1 >= 0.5

        let stars = ''
        for (let i = 0; i < fullStars; i++) stars += '⭐'
        if (hasHalf) stars += '✨'

        return stars
    }

    const getMovie = async () => {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${id}?language=pt-BR`,
                {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGU3MDFkYjNmNTUyZTBhNTFjMDlkNDMxMzdiZDI3MCIsIm5iZiI6MTY4ODczMDA1NC44NzgsInN1YiI6IjY0YTdmOWM2OTY1MjIwMDExZGYwOGU3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YhX8YDb0OF8ovacEzdWjUTSWr0xZLaZOItyxsnzgVMI'
                    }
                }
            )

            setMovie(response.data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getMovie()
    }, [id])

    if (!movie) return <div>Carregando...</div>

    return (
        <section
            className="movie-detail"
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
            }}
        >
            <div className="overlay">

                <div className="container">

                    {/* botão voltar */}
                    <button onClick={() => navigate(-1)}>
                        ← Voltar
                    </button>

                    <div className="movie-content">

                        <div className="movie-poster">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                        </div>

                        <div className="movie-info">

                            <h1 className="movie-title">
                                {movie.title}
                            </h1>

                            <div className="movie-meta">
                                <span>{formatDate(movie.release_date)}</span>
                                <span>{renderStars(movie.vote_average)}</span>
                            </div>

                            <div className="movie-genres">
                                {movie.genres?.map(g => g.name).join(', ')}
                            </div>

                            <p className="movie-overview">
                                {movie.overview}
                            </p>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}