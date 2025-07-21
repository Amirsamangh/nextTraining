'use client' // Error boundaries must be Client Components

import { useEffect } from 'react'
import { BiError } from "react-icons/bi";

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className='container d-flex flex-column justify-content-center align-items-center vh-100 '>
            <h2 className='text_3xl dir_rtl text-danger'>
                مشکلی پیش آمده ...
                <span className='text_3xl'><BiError /></span>
            </h2>

            <p className='text_md'>بعد از چند دقیقه دوباره تلاش کنید</p>
            <hr />
            <p className='text-danger text_md'>
                {error.message}
            </p>
            <hr />
            <button
                className='btn custom-btn'
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again
            </button>
        </div>
    )
}