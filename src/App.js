import "./App.css";
import Footer from "./components/footer";
import styled from "styled-components";
import Logo from "./images/logo.svg";
import Graph from "./components/Graph";
import "charts.css";

const ComponentWrapper = styled.div`
  padding: 40px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-height: 500px;
  flex-direction: column;
`;

const RedContainer = styled.div`
  background-color: hsl(10, 79%, 65%);
  color: white;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 360px;
`;

const WhiteContainer = styled.div`
  background-color: white;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
  margin-top: 5px;
  width: 400px;
`;
const FlexContainer = styled.div`
  display: flex;
`;
function App() {
  return (
    <>
      <ComponentWrapper>
        <>
          <RedContainer>
            <div>
              <p>My balance</p>
              $921.48
            </div>{" "}
            <img src={Logo} alt="logo" />
          </RedContainer>

          <WhiteContainer>
            <Graph />

            <FlexContainer
              style={{
                width: "360px",
                margin: " 5px 20px",
                paddingTop: "30px",
                borderTop: "2px solid black",
                justifyContent: "space-between",
                color: "hsl(28, 10%, 53%)",
              }}
            >
              <div>
                Total this month
                <section style={{ color: "hsl(25, 47%, 15%)" }}>
                  $478.33
                </section>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flexStart: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                <section style={{ color: "hsl(25, 47%, 15%)" }}>+2.4%</section>
                from last month
              </div>
            </FlexContainer>
          </WhiteContainer>
        </>
      </ComponentWrapper>
      <Footer></Footer>
    </>
  );
}

export default App;
