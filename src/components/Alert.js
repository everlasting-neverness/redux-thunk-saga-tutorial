import React from 'react';

export default function Alert({ message }) {
    return (
        <div className='alert alert-warning' role='alert'>
            {message}
        </div>
    );
}
