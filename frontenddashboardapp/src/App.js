// import Navbar from './components/Navbar';
// import WeatherWidget from './components/WeatherWidget';
// import DateWidget from './components/DateWidget';


// export default function App() {
//     return (
//       <h1 className="text-3xl font-bold underline ">
//             <Navbar/>
//             <WeatherWidget/>
//             <DateWidget/>
            
//       </h1>
//     )
//   }
// import Registerform from './components/Registerform';
// import Taux_Conversion from './Services/Exchanges/Taux_Conversion'


//  const App = () => {
//    return (
//      <div className="container mx-auto p-4">
//        <h1 className="text-2xl font-bold mb-4 text-center text-gray-950">Inscription</h1>
//        <Registerform />
//      </div>
//    );
//  };

//  export default App;


//import ExchangeRateWidget from './components/ExchangeRateWidget';
// import NasaNeoWidget from "./Services/Astronomie/Asteroides";
//import SpaceXLaunches from "./Services/Astronomie/Spacex";
//import CurrencyWidget from "./Services/Exchanges/MoneyCode";
//import IntradayStockWidget from "./Services/Exchanges/BourseMarket";
//import FavoriteTeamWidget from "./components/FavoriteTamWidget";

// const App = () => {
//   return (
//     <div className="App min-h-screen bg-gray-100 p-6 flex items-center justify-center">
//       {/* <ExchangeRateWidget />  */}
//         {/* <NasaNeoWidget/>   */}
//       {/* <SpaceXLaunches/> */}
//        {/* <CurrencyWidget/>  */}
//        {/* <FavoriteTeamWidget/> */}
//        {/* <IntradayStockWidget/>  */}
//     </div>
//   );
// };

// export default App;

import ExchangeRateWidget from './components/ExchangeRateWidget';
import NasaNeoWidget from "./Services/Astronomie/Asteroides";
import SpaceXLaunches from "./Services/Astronomie/Spacex";
import CurrencyWidget from "./Services/Exchanges/MoneyCode";
import FavoriteTeamsWidget from './components/FavoriteTamWidget';
import IntradayStockWidget from "./Services/Exchanges/BourseMarket";
import WeatherWidget from './components/WeatherWidget';
import DateComponent from './components/DateWidget';

const App = () => {
  return (
    <div className="container mx-auto p-6 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-600 transition-transform transform hover:scale-105"> {/* Effet de survol */}
        Widgets
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="col-span-1 transition-transform transform hover:scale-105 hover:shadow-lg rounded-lg p-4 bg-white shadow-md hover:bg-blue-50"> {/* Effet de survol */}
          <ExchangeRateWidget />
        </div>
        <div className="col-span-1 transition-transform transform hover:scale-105 hover:shadow-lg rounded-lg p-4 bg-white shadow-md hover:bg-blue-50">
          <NasaNeoWidget />
        </div>
        <div className="col-span-1 transition-transform transform hover:scale-105 hover:shadow-lg rounded-lg p-4 bg-white shadow-md hover:bg-blue-50">
          <SpaceXLaunches />
        </div>
        <div className="col-span-1 transition-transform transform hover:scale-105 hover:shadow-lg rounded-lg p-4 bg-white shadow-md hover:bg-blue-50">
          <CurrencyWidget />
        </div>
        <div className="col-span-1 transition-transform transform hover:scale-105 hover:shadow-lg rounded-lg p-4 bg-white shadow-md hover:bg-blue-50">
          <FavoriteTeamsWidget/>
        </div>
        <div className="col-span-1 transition-transform transform hover:scale-105 hover:shadow-lg rounded-lg p-4 bg-white shadow-md hover:bg-blue-50">
          <IntradayStockWidget />
        </div>
        <div>
          <WeatherWidget/>
        </div>
        <div>
          <DateComponent/>
        </div>
      </div>
    </div>
  );
};

export default App;

