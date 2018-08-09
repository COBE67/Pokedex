import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import {ApolloProvider } from 'react-apollo';


import CarCreate from './CarCreate'
import Car from './Car'
import PersistantDrawer from './PersistantDrawer'
import SimpleMenu from './SimpleMenu';
import SimpleModal from './SimpleModal'


const client = new ApolloClient({
   uri: `https://us1.prisma.sh/corey-bernsdorff/api-practice/dev`
});

const App = () => (
   <ApolloProvider client={client}>
      <div>
         <PersistantDrawer/>
         <hr/>
         <SimpleMenu/>
         <hr/>
         <SimpleModal/>
         <hr/>
         Create a new car
         <CarCreate/>
         <hr/>
         <Car/>
      </div>
   </ApolloProvider>
);

ReactDOM.render(<App/>, document.getElementById('root'));