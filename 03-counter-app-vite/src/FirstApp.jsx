import PropTypes from 'prop-types'; // se instalo con yarn add prop-types

// import { Fragment } from 'react'

// const getResult = (a, b) => {
//   return a + b;
// }

// const newMessage = {
//   message: 'Hola Mundo',
//   title: 'Hugo',
// };

// rafc
export const FirstApp = ({ 
  title, 
  subTitle = 'No hay subtítulo', 
  name = 'Hugo Martinez' }) => {

  // console.log(props);
  // if (!title) {
  //   throw new Error('El title no existe');
  // }

  return (
    <>
      {/* <code>{ JSON.stringify(newMessage) }</code> */}
      {/* <h1>{ getResult(1, 6) }</h1> */}
      <h1 data-testid="test-title">{ title }</h1>
      <p>{subTitle}</p>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
}

// FirstApp.defaultProps = {
//   name: 'Hugo Martínez',
//   subTitle: 'No hay subtítulo',
//   // title: 'No hay titulo',
// }