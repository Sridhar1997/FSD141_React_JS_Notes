import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './U1Component/FunctionalComponent';
import ArrowFunctions from './U1Component/ArrowFunctions';
import ClassComponent from './U1Component/ClassComponent';
import PropsFunctionalComponent from './U2Props/PropsFunctionalComponent';
import PropsArrowFunctions from './U2Props/PropsArrowFnctions';
import PropsClassComponent from './U2Props/PropsClassComponent';
import StateClassComponent from './U3State/StateClassComponent';
import P1CounterApp from './U3State/P1CounterApp';
import StateFunctionalComponent from './U3State/StateFunctionalComponent';
import P2CounterApp from './U3State/P2CounterApp';
import ToggleText from './U3State/ToggleText';
import InputBox from './U3State/InputBox';
import ShowCurrentTime from './U3State/ShowCurrentTime';
import ToggleLikeButton from './U3State/ToggleLikeButton';
import ArrayValue from './U4List&Key/ArrayValue';
import ArrayValueDeleteFilter from './U4List&Key/ArrayValueDeleteFilter';
import ArrayValueDeleteSplice from './U4List&Key/ArrayValueDeleteSplice';
import ObjectValue from './U4List&Key/ObjectValue';
import ArrayofObjectValue from './U4List&Key/ArrayofObjectValue';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <h1>Welcome to Credo Systemz </h1> */}
       
        {/* <FunctionalComponent/>
        <ArrowFunctions/>
        <ClassComponent/> */}


        {/* <PropsFunctionalComponent name="Sridhar" skills="React JS , Data Science, React Native, Spring Boot"/>
        <PropsArrowFunctions name="Sridhar" salary="60000"/> 
        <PropsClassComponent name="Sridhar"   role="IT Developer and Trainer"/> */}

        {/* <StateClassComponent/>    */}
        {/* <P1CounterApp/>     */}

        {/* <StateFunctionalComponent/> */}
        {/* <P2CounterApp/> */}

        {/* <ToggleText/> */}
        {/* <InputBox/> */}
        {/* <ShowCurrentTime/> */}
        {/* <ToggleLikeButton/> */}

        {/* <ArrayValue/> */}
        {/* <ArrayValueDeleteFilter/> */}
        {/* <ArrayValueDeleteSplice/> */}

        {/* <ObjectValue/> */}

        <ArrayofObjectValue/>
       
      </header>
       
    </div>
  );
}


export default App;
