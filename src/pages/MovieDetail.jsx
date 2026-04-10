import React from 'react'
import { useParams } from 'react-router-dom';
import { Navbar } from '../components/navbar/Navbar';
import { Footer } from '../components/footer/Footer';

export const MovieDetail = () => {
    const { id } = useParams();

    return (
        <div>
            MovieDetail: {id}
        </div>
    )
}
