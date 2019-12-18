import React from 'react';
import Button from "./Components/Button";
import {noop} from "./utils/noop";

const App = () => {

    return <Button onClick={noop}>Your Workplaces</Button>
}

export default App;
