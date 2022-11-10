import styled from "styled-components";
import InCall from "./components/InCall";
import PreJoinRoom from "./components/PreJoinRoom";
import theme from "./theme";
import { SmallText } from "./components/shared/SmallText";
import { CallProvider, INCALL, PREJOIN, useCallState } from "./CallProvider";

export const MOD = "MOD";
export const SPEAKER = "SPK";
export const LISTENER = "LST";

const AppContent = () => {
  const { view } = useCallState();
  return (
    <AppContainer>
      <Wrapper>
        <Header>
          <HeaderTop>
            <Title>Ahmed Podcast</Title>
            <Logo src={'https://www.ahmedtawfik.ml//assets/logo.5d59d1b0.svg'} className="App-logo" alt="logo" />
          </HeaderTop>
          {/* <SmallText>An audio API demo from Daily</SmallText> */}
        </Header>
         {view===PREJOIN &&<PreJoinRoom />}
       {view ===INCALL && <InCall />}
        {/* <Link
          center={view === INCALL}
          href="https://docs.daily.co/guides/demos#party-line-a-multiplatform-audio-only-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about this demo
        </Link> */}
      </Wrapper>
    </AppContainer>
  );
};

function App() {
  return (
    <CallProvider>
      <AppContent />
    </CallProvider>
  );
}

const AppContainer = styled.div`
  background-color: ${theme.colors.blueDark};
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
`;
const Wrapper = styled.div`
  max-width: 700px;
  padding: 32px 24px 0;
  min-height: 100%;
  margin: 0 auto;
  display:flex;
  flex-direction:column;
  align-items:center;
`;
const Logo = styled.img`
  height: 36px;
  display:inline-block;
`;

const Header = styled.header`
  width:80vw;
  display: flex;
  flex-direction: column;
`;
const HeaderTop = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.h1`
  font-size: ${theme.fontSize.xxlarge};
  color: ${theme.colors.grey};
  margin: 4px 0;
  font-weight: 600;
`;
const Link = styled.a`
  font-weight: 400;
  font-size: ${theme.fontSize.base};
  color: ${theme.colors.greyDark};
  display: flex;
  justify-content: center;
  max-width: 400px;

  @media only screen and (min-width: 768px) {
    justify-content: ${(props) => (props.center ? "center" : "flex-start")};
    max-width: ${(props) => (props.center ? "100%" : "400px")};
  }
`;

export default App;
