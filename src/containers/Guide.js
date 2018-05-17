import React from 'react'
import { withRouteData, Link } from 'react-static'
import convert from 'htmr'
//

export default withRouteData(({ guide }) => (
  <div>
    <Link to="/guides/">{'<'} Back</Link>
    <br />
    <h3>{guide.title}</h3>
    {convert(guide.contents)}
  </div>
))
