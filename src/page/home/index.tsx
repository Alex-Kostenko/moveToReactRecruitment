import React from 'react';

import { Link } from 'react-router-dom';

import { Pages } from '@/util/page';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to={Pages.POST}>
        <button data-testid='incident-details-button'>Go to Post</button>
      </Link>
    </div>
  );
};

export default Home;
