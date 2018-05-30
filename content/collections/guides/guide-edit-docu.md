---
title: Edit the documentation
slug: edit-docu
---

# Edit the documentation
This page is hosted using [GitHub Pages](https://pages.github.com/). The project for deployment can be pulled here: 
[Viva-con-Agua.github.io](https://github.com/Viva-con-Agua/Viva-con-Agua.github.io). Additionally, there is a second 
project [documentation](https://github.com/Viva-con-Agua/documentation) that is used to generate the content for github 
pages.

The [documentation](https://github.com/Viva-con-Agua/documentation) is implemented using 
[react-static](https://github.com/nozzle/react-static) and the 
[markdown template](https://github.com/nozzle/react-static/tree/master/examples/markdown).
Thus we can use [markdown](https://www.markdownguide.org/) to write the documentation and [React](https://reactjs.org/) 
to present it.

## Getting started
Please install all requirements considering [react-static quick start](https://github.com/nozzle/react-static#quick-start)
and follow these steps:
1. Clone or pull the [documentation](https://github.com/Viva-con-Agua/documentation) repository.
2. Clone or pull the [https://viva-con-agua.github.io/](https://github.com/Viva-con-Agua/Viva-con-Agua.github.io) repository. 
3. Add or edit a markdown file in `content`.
4. Execute `yarn start` for testing purpose. 
5. Execute `yarn build` to generate the deployable content. 
6. Commit your changes (except the `dist` folder) using `git add`, `git commit -m "added guide for xy"` and 
`git push origin master` 
7. Copy the content of your dist folder to the root directory of your [https://viva-con-agua.github.io/](https://viva-con-agua.github.io/)
clone. 
8. Commit and push your changes and give a short description of your changes in your commit message.

Et voilà, the changes are deployed on [https://viva-con-agua.github.io/](https://viva-con-agua.github.io/).

## Style Guide
Please enter an author and a creation or update date at the bottom of every page.

## Structure of the documentation
There are different types of documentation we want to provide. We describe our high level problems and conceptual 
solutions in the section [concepts](/concepts). The section 
[guides](/guides) contains concrete implementations of the solutions from 
[concepts](/concepts). Here you can find how to implement solutions in specific 
technologies and Getting Started guides for plugins.

In [rest interfaces](/rest) you can find a documentation of all RESTful interfaces 
provided by any microservice. So you know how to get the information required to implement your use case.

Best place to start is our [introduction](/) and the 
[concepts](/concepts) page. Happy coding!


**Author:** [Johann Sell](https://cses.informatik.hu-berlin.de/members/johann.sell/) -- 
**Created:** 2018-05-18 --
**Updated:** 2018-05-29
