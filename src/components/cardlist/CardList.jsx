import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card } from '../card/Card'

export const CardList = () => {

    const [movies, setMovies] = useState([])

    const getMoviews = async () => {
        try {
            const config = {
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer SEU_TOKEN_AQUI'
                }
            }

            const response = await axios.get(
                'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
                config
            )

            setMovies(response.data.results)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getMoviews()
    }, [])

    return (
        <section className="container mt-5 pt-5">
            <h2 className="section-title">Filmes Populares</h2>

            <div className="row">
                {movies.map((movie) => (
                    <Card
                        key={movie.id}
                        title={movie.title}
                        date={movie.release_date}
                        image={movie.poster_path}
                    />
                ))}
            </div>
        </section>
    )
}
