import "./App.css";
import Footer from "./components/footer";
import styled from "styled-components";

const ComponentWrapper = styled.div`
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
  flex-direction: column;
`;

const RedContainer = styled.div`
  background-color: hsl(10, 79%, 65%);
  color: white;
`;

function App() {
  return (
    <>
      <ComponentWrapper>
        <div>
          <RedContainer>My balance $921.48</RedContainer>
          <div>
            <h2>Spending - Last 7 days</h2>
            mon tue wed thu fri sat sun
            <div>Total this month $478.33 +2.4% from last month</div>
          </div>
        </div>
      </ComponentWrapper>
      <Footer></Footer>
    </>
  );
}

export default App;
