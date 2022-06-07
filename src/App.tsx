import PropTypes from 'prop-types';
import { useState } from 'react';
import tw from 'twin.macro';

const CenterOnScreen = tw.div`flex justify-center items-center h-screen`;
const Container = tw.div`w-60`;
const Title = tw.h1`text-3xl text-blue-500 font-bold w-full text-center`;
const Button = tw.button`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full`;

const App = ({ name }) => {
  const [count, setCount] = useState(0);

  return (
    <CenterOnScreen>
      <Container className=" ">
        <Title>Hello {name}!</Title>
        <Button type="button" onClick={() => setCount((count) => count + 1)}>
          Click Count: {count}
        </Button>
      </Container>
    </CenterOnScreen>
  );
};

App.propTypes = {
  name: PropTypes.string
};

export default App;
