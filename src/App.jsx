import { Suspense } from 'react';
import './App.css'
import Countries from './Component/Countries';

// const fetchCountriesData=()=>{
//   const res=fetch('https://openapi.programming-hero.com/api/all')
//   return res.json();
// }
const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json())

function App() {
  // const countriesData=fetchCountriesData();
  // console.log(countriesData);

  return (
    <>
      <Suspense fallback={<h1>Data Loading..</h1>}>
        <Countries countriesPromise={countriesPromise} ></Countries>
      </Suspense>
    </>
  )
}

export default App