import React from 'react';
import "./Stack.css";
import {ReactComponent as MongoLogo} from '../images/logos/mongodb.svg';
import {ReactComponent as ExpressLogo} from '../images/logos/express.svg';
import {ReactComponent as ReactLogo} from '../images/logos/react.svg';
import {ReactComponent as NodejsLogo} from '../images/logos/nodejs.svg';
import {ReactComponent as JSLogo} from '../images/logos/js.svg';
import {ReactComponent as PythonLogo} from '../images/logos/python.svg';

const Stack = () => {
  return (
    <div className="stack-container">
      <div className="stack-row">
        <div className="stack-column">
          <div className="column-1">
            <MongoLogo className="mongo-logo" />
            <ReactLogo className="react-logo" />
            <JSLogo className="js-logo" />
          </div>
        </div>
        <div className="stack-column">
          <div className="column-2">
            <ExpressLogo className="express-logo" />
            <NodejsLogo className="node-logo" />
            <PythonLogo className="python-logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stack;