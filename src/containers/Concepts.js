
import React from 'react'
import { withRouteData, Link } from 'react-static'
//

export default withRouteData(({ concepts }) => (
  <div>
    <h1>Concepts</h1>
    <br />
    Implementing a microservice seems to be a fine solution to spread responsibility among several contributers.
    Nevertheless, there are some challenges to consider. The Pool² address such challenges by the following concepts.
    Each concept explains the addressed challenge and a possible solution.
    <ul>
      {concepts.map(concept => (
        <li key={concept.slug}>
          <Link to={`/concepts/${concept.slug}/`}>{concept.title}</Link>
        </li>
      ))}
    </ul>
  </div>
))
