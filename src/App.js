import "./App.css";
import Footer from "./components/footer";
import styled from "styled-components";
import Logo from "./images/logo.svg";

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
  padding: 30px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function App() {
  return (
    <>
      <ComponentWrapper>
        <div>
          <RedContainer>
            <div>
              <p>My balance</p>
              $921.48
            </div>{" "}
            <img src={Logo} alt="logo" />
          </RedContainer>
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
