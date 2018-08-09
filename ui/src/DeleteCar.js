import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

export default class extends Component {
    deleteCarMutation = gql`
      mutation deleteCar($id: ID!) {
          deleteCar (where: {id: $id}) {
              id
              model
          }
      }
    `
    render () {
        const id = this.props.id
       // console.log(id)
        return (
          <Mutation mutation={this.deleteCarMutation}>
            {(deleteC2, {data}) => (
              <form onSubmit={event => {
                  event.preventDefault()
                  deleteC2({
                      variables: {
                          id: id,
                      }
                  })
                  window.location.reload(true)
              }}><input type="submit" value="Delete"/></form>
             )}
           </Mutation>
        )
    }
}
