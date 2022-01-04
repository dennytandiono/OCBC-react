import './App.css';

function Header(){
  return (
    <header className="header">
      <h1 >My First Header </h1>
    </header>
  )
}

function Content(){
  return (
    <div className="content">
      <p>
      yang penting ada isi
      </p>
    </div>
  )
}

function Footer(){
  return (
    <div className="footer">
      <p>
        &copy; My Self -2022
      </p>
    </div>
  )
}


function App(){
  return(
    <div className="App">
      <Header />
      <hr />
      <Content />
      <hr />
      <Footer/>
    </div>
  );
}

export default App;