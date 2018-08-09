import React, { Component, Fragment } from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

export default class extends Component {
   state = {
      id: this.props.id,
      year: this.props.year,
      make: this.props.make,
      model: this.props.model,
      hp: this.props.hp,
      pass: this.props.pass,
      vin: this.props.vin,
      isUpdating: false,
      buttonText: "Update"
   }
   updateCarMutation = gql`
       mutation updateCar($id: ID!, $year: Int!, $make: String!, $model: String!, $hp: Int!, $pass: Int!, $vin: String!) {
           updateCar(
               where: {id: $id},
               data: {year: $year, make: $make, model: $model, hp: $hp, pass: $pass, vin: $vin}
           ) {
               id
               year
               make
               model
               hp
               pass
               vin
           }
       }
   `
   updateComp = () => {
      return (
         <Fragment>
            <input type="number" placeholder="Year" value={this.state.year} onChange={event => this.setState({year : parseInt(event.target.value,10)})}/>
            <input type="text" placeholder="Make" value={this.state.make} onChange={event => this.setState({make : event.target.value})}/>
            <input type="text" placeholder="Model" value={this.state.model} onChange={event => this.setState({model : event.target.value})}/>
            <input type="number" placeholder="HP" value={this.state.hp} onChange={event => this.setState({hp : parseInt(event.target.value,10)})}/>
            <input type="number" placeholder="Pass" value={this.state.pass} onChange={event => this.setState({pass : parseInt(event.target.value,10)})}/>
            <input type="text" placeholder="VIN#" value={this.state.vin} onChange={event => this.setState({vin : event.target.value})}/>
         </Fragment>
      )
   }
   render () {
      const update = this.updateComp()
      return (
         <Mutation mutation={this.updateCarMutation}>
            {(updateCar2, {data}) => (
               <form onSubmit={event => {
                  event.preventDefault()
                  if(this.state.isUpdating){
                     updateCar2({
                        variables: {
                           id: this.state.id,
                           year: this.state.year,
                           make: this.state.make,
                           model: this.state.model,
                           hp: this.state.hp,
                           pass: this.state.pass,
                           vin: this.state.vin
                        }
                     })
                     this.setState({buttonText: "Update"})
                     window.location.reload(true)
                     
                  }else
                     {this.setState({buttonText: "Submit"})}
                  this.setState({isUpdating: !this.state.isUpdating })
               }}>
                  {this.state.isUpdating ? update : null }
                  <input type="submit" value={this.state.buttonText}/>
               </form>
            )}
         </Mutation>
      )
   }
}