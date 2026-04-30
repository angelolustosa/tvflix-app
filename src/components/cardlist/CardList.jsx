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
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGU3MDFkYjNmNTUyZTBhNTFjMDlkNDMxMzdiZDI3MCIsIm5iZiI6MTY4ODczMDA1NC44NzgsInN1YiI6IjY0YTdmOWM2OTY1MjIwMDExZGYwOGU3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YhX8YDb0OF8ovacEzdWjUTSWr0xZLaZOItyxsnzgVMI'
                }
            }

            const response = await axios.get(
                'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
                config
            )
            console.log('filmes:', response.data.results)
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
                        title={movie.original_title}
                        date={movie.release_date}
                        image={movie.poster_path}
                    />
                ))}
            </div>
        </section>
    )
}
