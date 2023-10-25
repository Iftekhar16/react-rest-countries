import './App.css';
import LoadCountries from './components/Countries/LoadCountries';

// function App() {
//   return (
//     <div className="App">
//       <LoadCountries></LoadCountries>
//     </div>
//   );
// }

// function LoadCountries(){
//   const [countries, setCountries] = useState([]);
//   //the array insiide useState is because we are getting an array in return
//   //the countries is the name, and the setCountries is a function


//   useEffect(()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data));
//   },[])
//   //useEffect has 2 parameters. 2nd one is an empty array. the 1st one is an annonymous function

//   return(
//     <div>
//       <h1>Loading Countries</h1>
//       <h3>Available Countries {countries.length}</h3>
//     </div>
//   );
// }

// export default App;

//sazzad bhaiya kre diyechen :3

// function App() {
//   const [countries, setCountries] = useState([]);
//   //the array inside useState is because we are getting an array in return
//   //the countries is the name, and the setCountries is a function


//   useEffect(()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data));
//   },[])
//   //useEffect has 2 parameters. 2nd one is an empty array. the 1st one is an annonymous function
//   return (
//     <div className="App">
//       <LoadCountries countries={countries}/>
//       {countries.map((value)=>
//         <Country name={value.name.common}/>
//       )}
//     </div>
//   );
// }

// function LoadCountries({countries}){
//   return(
//     <div>
//       <h1>Loading Countries</h1>
//       <h3>Available Countries {countries.length}</h3>
//     </div>
//   );
// }



function App(){
  return(
    <LoadCountries/>
  );
}



// function Country(props){
//   return (
    
//   );
// }

export default App;
