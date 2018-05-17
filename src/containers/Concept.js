import React from 'react'
import { withRouteData, Link } from 'react-static'
import convert from 'htmr'
//

export default withRouteData(({ concept }) => (
  <div>
    <Link to="/concepts/">{'<'} Back</Link>
    <br />
    <h3>{concept.title}</h3>
    {convert(concept.contents)}
  </div>
))
