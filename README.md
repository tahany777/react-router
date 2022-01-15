# React Router

* ``npm i react-router-dom -S``
* ``import ReactDOM from 'react-dom'``
* ``import { BrowserRouter as Router, Route } from 'react-router-dom'``

``` javascript
<React.StrictMode>
    <Router>
      <Route path="*" component={App} />
    </Router>
  </React.StrictMode>
```

* Routes rather than Switch.
* useHistory() is replaced by useNavigate()
* useHistory with push but useNavigate without push
* ``npm i date-fns -S`` => date package
* ``npx json-server -p 3500 -w data/db.json``
