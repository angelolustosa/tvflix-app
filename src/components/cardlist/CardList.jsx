import axios from 'axios'
import React, { useEffect } from 'react'

export const CardList = () => {

    const getMoviews = async () => {
        try {
            const config = {
                //method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGU3MDFkYjNmNTUyZTBhNTFjMDlkNDMxMzdiZDI3MCIsIm5iZiI6MTY4ODczMDA1NC44NzgsInN1YiI6IjY0YTdmOWM2OTY1MjIwMDExZGYwOGU3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YhX8YDb0OF8ovacEzdWjUTSWr0xZLaZOItyxsnzgVMI'
                }
            }

            const response = await axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', config)

            console.log(response.data.results)

            // a partir do component card , inteirar na lista da api com os dados, utilizando props.

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getMoviews()

    }, [])



    return (
        <section class="container mt-5 pt-5" id="carouselSection">
            <h2 class="section-title">Filmes Populares</h2>
            <div class="row" id="featuredMovies">
                <div class="col-6 col-sm-4 col-md-3">
                    <div class="movie-card">
                        <img src="https://media.themoviedb.org/t/p/w440_and_h660_face//pyok1kZJCfyuFapYXzHcy7BLlQa.jpg"
                            class="card-img-top" alt="Mercy" />
                        <div class="card-body movie-info">
                            <div class="movie-title">Mercy</div>
                            <div class="movie-date">2026-01-20</div>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-sm-4 col-md-3">
                    <div class="movie-card">
                        <img src="https://media.themoviedb.org/t/p/w440_and_h660_face//buPFnHZ3xQy6vZEHxbHgL1Pc6CR.jpg"
                            class="card-img-top" alt="Shelter" />
                        <div class="card-body movie-info">
                            <div class="movie-title">Shelter</div>
                            <div class="movie-date">2026-01-28</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
