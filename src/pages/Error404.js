import React from 'react'
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className="container text-center mt-5">
        <h1 className="display-4 text-danger">404</h1>
            <h2 className="text-muted">Page Not Found</h2>
              <p className="mt-3">
                Oops! The page you're looking for doesn't exist.
              </p>
            <Link to="/" className="btn btn-primary mt-3">
            Go Back Home
            </Link>
    </div>
  )
}

export default Error404