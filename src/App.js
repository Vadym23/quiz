import React, {Component} from 'react';
import Layout from './hoc/layout/Layout'
import Quiz from './conteiners/Quiz/Quiz'

function App() {
  return (
    <Layout>
        <Quiz/>
        {/* <div style = {{width: 400, border: '1px solid black'}}>
          <h1>Layout works</h1>
        </div> */}
    </Layout>
  );
}

export default App;
