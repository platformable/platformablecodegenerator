import React from 'react'

export default function blogComponentsErrorMessage({message}) {
    return (
        <div class="alert alert-danger" role="alert">
              {message}
        </div>
    )
}
