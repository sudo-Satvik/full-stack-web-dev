import React from 'react'

// const Greeting = (props) => {
//   return (
//     <div>
//       <h1>Hello {props.name}, I am React. I can guess your age!</h1>
//       <h1>And your age is...</h1>
//       <h1>21</h1>
//     </div>
//   )
// }

// or

const Greeting = ({ name, age }) => {
  return (
    <div>
      <h1>Hello { name }, I am React. I can guess your age!</h1>
      <h1>And your age is...</h1>
      <h1>{ age }</h1>
    </div>
  )
}

export default Greeting