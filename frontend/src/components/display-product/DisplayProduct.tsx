import React from 'react'
import { useParams } from 'react-router-dom'

const DisplayProduct = () => {
    const params = useParams()
    const { id } = params
    return (
        <div>{ id }</div>
    )
}

export default DisplayProduct