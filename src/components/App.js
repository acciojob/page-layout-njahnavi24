
import React from "react";
import './../styles/App.css';

function PageLayout({header,footer,children}){
  return (
    <>
    <header>{header}</header>
    {children}
    <footer>{footer}</footer>
    </>
  )
}
const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
