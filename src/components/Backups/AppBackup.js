// // This is App.js with loader backup

// import { useState } from 'react';
// import styled from 'styled-components';
// import Loading from './components/Loading';


// function App() {
//   const [ spinnerState, setSpinnerState] = useState(true);

//   const renderSpinner = () => {
//     setSpinnerState(!spinnerState);
//   }

//   if ( spinnerState ) {
//     return (
//       <div style={{ padding:'2rem' }}>
//         <h2>animation example</h2>
//         <p>Spinner Stopped</p>
//         <button className="btn" onClick={renderSpinner}>Stop Spinner</button>
//       </div>
//     );
//   }
  
//   return (
//       <div style={{ padding:'2rem' }}>
//         <h2>animation example</h2>
//         <Loading />
//         <button className="btn" onClick={renderSpinner}>Stop Spinner</button>
//       </div>
//   );
// }

// export default App;
