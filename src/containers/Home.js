import React from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'
//

export default withRouteData(({ intro, jdown, reactStatic }) => (
  <div>
    <section>
      {convert(intro.contents)}
    </section>
  </div>
))
