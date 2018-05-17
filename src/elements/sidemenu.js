import React from 'react'
import { Link } from 'react-static'
import { hot } from 'react-hot-loader'

const SideMenu = () => (
    <ul className="sidemenu">
        <li><Link to="/concepts">Concepts</Link></li>
        <ul className="sub">
            {process.env.mkRoutes.concepts.map(concept => (
                <li key={concept.slug}>
                    <Link to={`/concepts/${concept.slug}/`}>{concept.title}</Link>
                </li>
            ))}
        </ul>
        <li><Link to="/guides">Guides</Link></li>
        <ul className="sub">
            {process.env.mkRoutes.guides.map(guide => (
                <li key={guide.slug}>
                    <Link to={`/guides/${guide.slug}/`}>{guide.title}</Link>
                </li>
            ))}
        </ul>
        <li><Link to="/rest" className="text">REST Interfaces</Link></li>
        <li><Link to="/about" className="text">About</Link></li>
    </ul>
);

export default hot(module)(SideMenu)