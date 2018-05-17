import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag'
// import { Mutation } from 'react-apollo'
// Data Layer
import { graphql, compose } from 'react-apollo'


class TestMutComp extends Component {

  create = () => {
    const { mutate } = this.props
    mutate({
      variables: { name: 'test_name' }
    })
  }


  render = () => {

    return <Fragment>
      <button onClick={this.create} >create</button>
    </Fragment>
  }
}

// const AddPerson = () => {
//   let input
//
//   return (
//     <Mutation mutation={CREATE_PERSON}>
//       {(addTodo, { data }) => (
//         <div>
//           <form
//             onSubmit={e => {
//               e.preventDefault();
//               createPerson({ variables: { name: input.value } });
//               input.value = "";
//             }}
//           >
//             <input
//               ref={node => {
//                 input = node;
//               }}
//             />
//             <button type="submit">Create Person</button>
//           </form>
//         </div>
//       )}
//     </Mutation>
//   );
// };

const CREATE_PERSON = gql`
  mutation createPerson($name: String!) {
    createPerson(name: $name) {
      ok
    }
  }
`

const enhancedComponent = compose(
  graphql(CREATE_PERSON),
)(TestMutComp)

export {
  enhancedComponent as TestMutComp
}
