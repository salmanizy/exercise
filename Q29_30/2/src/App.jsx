import React from 'react';

const Header = (props) => {
  const list = props.list;
  const listItems = list.map((items) =>
    <li key={items.code}>
      <a href={`#${items.code}`} style={{fontSize: '1.5rem', fontWeight: '600', color: '#ffffff', textDecoration: 'none'}}>
        {items.name}
      </a>
    </li>
  );
  return (
    <ul style={{ display: 'flex', listStyle: 'none', padding: 0, margin: 0, gap: '1.5rem' }}>
      {listItems}
    </ul>
  );
};

const navs = [
  { code: 'home', name: 'Home' },
  { code: 'about', name: 'About' },
  { code: 'contact', name: 'Contact' }
];

function App() {
  return (
    <>
      <header style={{ backgroundColor: '#3b3b3b', padding: '1rem'}}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <nav style={{display:'flex', justifyContent:'center'}}>
            <Header list={navs} />
          </nav>
        </div>
      </header>
      <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', justifyContent:'center', display: 'flex', alignItems: 'center' }}>
          <h1 style={{fontSize: '2.25rem',fontWeight: 'bold', marginTop: '1rem'}}>
            Selamat datang!
          </h1>
      </div>
    </>
  );
}

export default App;
