import React from 'react';
import styled from "styled-components";
import Search from './components/Search';


const App = () => {

 
  return (
    <div>
      {/* <div id="map" style="width:500px;height:400px;"></div> */}
      <WrapInner>
        <Search />
      </WrapInner>
      
    </div>
  );
};

const WrapInner = styled.div`
  max-width: 640px;
  min-width: 320px;
  margin: 0 auto;
`;


export default App;