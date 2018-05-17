import { reloadRoutes } from 'react-static/node'
import jdown from 'jdown'
import chokidar from 'chokidar'

chokidar.watch('content').on('all', () => reloadRoutes())

const getRoutes  = async () => {
    const {guides, concepts, home, about, rest} = await jdown('content')
    return {
        "guides" : guides,
        "concepts" : concepts,
        "home" : home,
        "about" : about,
        "rest" : rest,
    }
}

process.env.mkRoutes = getRoutes()

export default {
  getSiteData: async () => ({
    title: 'Pool² Documentation'
  }),
  getRoutes: async () => {
    const { guides, concepts, home, about, rest } = await jdown('content')
    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: () => ({
          ...home,
        }),
      },
      {
        path: '/about',
        component: 'src/containers/About',
        getData: () => ({
          about,
        }),
      },
      {
        path: '/rest',
        component: 'src/containers/Rest',
        getData: () => ({
          rest,
        }),
      },
      {
        path: '/concepts',
        component: 'src/containers/Concepts',
        getData: () => ({
          concepts,
        }),
        children: concepts.map(concept => ({
          path: `/${concept.slug}`,
          component: 'src/containers/Concept',
          getData: () => ({
            concept,
          }),
        })),
      },
      {
        path: '/guides',
        component: 'src/containers/Guides',
        getData: () => ({
            guides,
        }),
        children: guides.map(guide => ({
          path: `/${guide.slug}`,
          component: 'src/containers/Guide',
          getData: () => ({
            guide,
          }),
        })),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ] 
  },
}
