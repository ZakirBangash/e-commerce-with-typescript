import React from 'react'
import { title_types } from '../Types/product_types'

export const Title: React.FC<title_types> = ({name,title}) => {
    
    return (
        <div className="d-flex justify-content-center py-5">
            <h1>{name} {title}</h1>
        </div>
    )
}