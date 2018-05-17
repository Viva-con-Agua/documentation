
import React from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'
//

export default withRouteData(({ rest }) => (
  <div>
    {convert(rest.contents)}
  </div>
))
