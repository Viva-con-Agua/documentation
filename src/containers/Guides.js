
import React from 'react'
import { withRouteData, Link } from 'react-static'
//

export default withRouteData(({ guides }) => (
  <div>
    <h1>Guides</h1>
    <br />
    Enabling you to add and edit microservices by yourself will be very simple, if you have examples. Thus, take a look
    at the following guides that describe implementations of the <Link to="/concepts" className="text">Concepts</Link>:
    <ul>
      {guides.map(guide => (
        <li key={guide.slug}>
          <Link to={`/guides/${guide.slug}/`}>{guide.title}</Link>
        </li>
      ))}
    </ul>
  </div>
))
