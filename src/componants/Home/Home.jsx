import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

     const tshartData = useLoaderData();
     console.log(tshartData)

     return (
          <div>
               <h1>This is Home Homme ! </h1>
          </div>
     );
};

export default Home;