import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <Link className="Home-link" to="/"> <span>404 - Go home</span> </Link>
  </div>
);

export default NotFoundPage;
