import React, { useState } from 'react'
import { movies } from '../data'

export const Movies = () => {
    const [movieList, setMovieList] = useState(movies)
    return (
        <>
            <div className='my-3' style={{ width: '1000px', margin: 'auto' }}>

                <div className='mx-auto text-center'>
                    <button type="button" className="btn btn-outline-primary mx-3">All</button>
                    <button type="button" className="btn btn-outline-secondary mx-3">Thriller</button>
                    <button type="button" className="btn btn-outline-success mx-3">Action</button>
                    <button type="button" className="btn btn-outline-danger mx-3">Horror</button>
                    <button type="button" className="btn btn-outline-warning mx-3">Animation</button>
                    <button type="button" className="btn btn-outline-info mx-3">Sci-Fi</button>
                    <button type="button" className="btn btn-outline-light mx-3">Drama</button>
                </div>
            </div>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    // gap:'2rem',
                    textAlign: 'center',
                    width: '1300px',
                    margin: 'auto',
                    marginTop: '1.5rem'
                }}>
                {movieList.map(data => (
                    <div key={data.id}
                        style={{
                            maxWidth: '300px',
                            textAlign: 'center'
                        }}
                    >
                        <div
                            style={{ padding: '10px' }}
                            className='hover_effect'
                        >
                            <img src={data.poster_path} alt=""
                                style={{
                                    width: '250px',
                                    height: '280px',
                                    borderRadius: '10px',
                                    border: '1px solid yellow'
                                }}></img>
                        </div>
                        <h4>{data.title}</h4>
                        <p>{data.release_date}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
