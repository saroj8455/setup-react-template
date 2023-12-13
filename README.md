# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Install and configure bootstrap and bootstrap icons

`npm i bootstrap` <br>
`npm i bootstrap-icons` <br>
`https://icons.getbootstrap.com/#install` <br>

```javascript
// In src/index.js file import Bootstrap CSS and Icons

// Generate by BlackboxAI
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
```

## Configure React router correct way

```javascript
// index.js,index.tsx,main.jsx
// ... code
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

```javascript
// App.js
import { Routes, Route } from 'react-router-dom';
<Routes>
  <Route path='/' element={<Welcome />} />
  <Route path='/home' element={<Home />} />
  <Route path='/about' element={<About />} />
</Routes>;
```

```javascript
// Navbar.js
// ....code
import { Link } from 'react-router-dom';
<Link to='/' className='navbar-brand'>
  Navbar
</Link>;
```
