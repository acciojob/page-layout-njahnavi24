
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
    <PageLayout header = {<h1>My Header</h1>} footer = {<p>My footer</p>}>
    <p>My Children Content</p>
    </PageLayout>
    </div>
  )
}

export default App
