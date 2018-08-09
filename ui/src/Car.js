import React, {Component} from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

import DeleteCar from './DeleteCar'
import UpdateCar from './UpdateCar'

export default class extends Component {
   carQuery = gql`
       {
           cars {
               id
               model
               year
               make
               hp
               pass
               vin
           }
       }
   `
   
   render() {
      return (
         <Query query={this.carQuery}>
            {({loading, error, data}) => {
               if (loading) return <p>Loading...</p>;
               if (error) return <p>Error :(</p>;
               
               return data.cars.map(({id, model, year, make, hp, pass, vin}) => (
                  <div key={id}>
                     <p>{`${year} ${make} ${model}`}</p>
                     <p>{`${hp} HP`}</p>
                     <p>{`${pass}_Pass`}</p>
                     <p>{`VIN# "${vin}"`}</p>
                     <UpdateCar
                        id={id}
                        year={year}
                        make={make}
                        model={model}
                        hp={hp}
                        pass={pass}
                        vin={vin}
                     />
                     <DeleteCar id={id}/>
                  </div>
               ));
            }}
         </Query>
      )
   };
}