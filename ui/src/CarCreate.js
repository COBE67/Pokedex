import React, { Component } from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

export default class extends Component {
  state = {
    make: "",
    model: "",
    year: null,
    hp: null,
    pass: null,
    vin: ""
}
//
// Defining carCreate mutation
//
  carCreateMutation = gql`
      mutation createCar($make: String!, $model: String!, $year: Int!, $hp: Int!, $pass: Int!, $vin: String!) {
          createCar(data: {make: $make, model: $model, year: $year, hp: $hp, pass: $pass, vin: $vin}) {
              make
              model
              year
              hp
              pass
              vin
          }
      }
  `;
//
// Mutation
//
  render () {
    return (
      <Mutation mutation={this.carCreateMutation}>
        {(createC2, {data}) => (
          <div>
            <form onSubmit={event => {
              event.preventDefault()
              createC2({variables: {
                    make: this.state.make,
                    model: this.state.model,
                    year: this.state.year,
                    hp: this.state.hp,
                    pass: this.state.pass,
                    vin: this.state.vin
                    }})
                window.location.reload(true)
            }}>
{/**/}
{/* createCar Input fields eventHandler */}
{/**/}
                <input type="number" placeholder="Year" onChange={event => this.setState({year : parseInt(event.target.value,10)})}/>
                <input type="text" placeholder="Make" onChange={event => this.setState({make : event.target.value})}/>
                <input type="text" placeholder="Model" onChange={event => this.setState({model : event.target.value})}/>
                <br/>
                <input type="number" placeholder="HP" onChange={event => this.setState({hp : parseInt(event.target.value,10)})}/>
                <input type="number" placeholder="Pass" onChange={event => this.setState({pass : parseInt(event.target.value,10)})}/>
                <input type="text" placeholder="VIN" onChange={event => this.setState({vin : event.target.value})}/>
                <input type="submit"/>
            </form>
          </div>
        )}
      </Mutation>
    )
  }
}
