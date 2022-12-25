import './App.css';

function App() {
  return (
    <div className="App">
       
  <header id="header" class="header fixed-top" data-scrollto-offset="0">
    <div class="container-fluid d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center scrollto me-auto me-lg-0">
        <h1>MyReact<span>.</span></h1>
      </a>
      <nav id="navbar" class="navbar">
        
          <li><a class="nav-link scrollto" href="index.html">Home</a></li>
          <li><a class="nav-link scrollto" href="index.html#about">About</a></li>
          <li><a class="nav-link scrollto" href="index.html#services">Services</a></li>
          <li><a class="nav-link scrollto" href="index.html#portfolio">Portfolio</a></li>
          <li><a class="nav-link scrollto" href="index.html#team">Team</a></li>
          <li><a href="blog.html">Blog</a></li>
        <i class="bi bi-list mobile-nav-toggle d-none"></i>
      </nav>

      <a class="btn-getstarted scrollto" href="index.html#about">Get Started</a>

    </div>
  </header>
    </div>
  );
}

export default App;
