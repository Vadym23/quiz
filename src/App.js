import React, {Component} from 'react';
import Layout from '../src/hoc/layout/layout'

function App() {
  return (
    <Layout>

        <div style = {{width: 400, border: '1px solid black'}}>
          <h1>Layout</h1>
        </div>
    </Layout>
  );
}

export default App;
