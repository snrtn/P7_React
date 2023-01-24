import * as React from 'react'
import { Outlet } from "react-router-dom";
import "./app.css"
import Layout from './components/routers/layout';

const App = () => {
  return (
    <React.Suspense fallback={<>...</>}>
      <div className='appContainer'>
        <div className='appWrapper'>
          <Layout>
            <Outlet/>
          </Layout>
        </div>
      </div>
    </React.Suspense>
  )
}

export default App
