# Pool² - Support volunteer collaboration
Pool² is the second version of the system introduced by [Viva con Agua de St. Pauli e.V. (VcA)](https://www.vivaconagua.org/home) supporting the 
volunteers during their daily work. This tool is explicitly developed to support a socio-technical self-development.

VcA is a decentralized social system of volunteers raising awareness and collecting donations for 
WASH (``Water, Sanitation and Hygiene'') projects. Such projects address the establishment of 
access to clean drinking water and basic sanitation for all humans worldwide. 
The volunteers pursue their aims through creative and joyful activities, as defined by the self-description of VcA. 
As the volunteers get together and organize themselves in separated regional groups, those _local crews_ 
are loosely coupled [(Weick, 1976)][weick1976educational]. 
Furthermore, there is a small administration, called _Brunnenbüro_. This team has three purposes: 
1. Tie together all results from work done by the several _local crews_ 
2. Controlling compliance with legal conditions
3. Offering counsel for _local crews_ if needed

The principle of _open participation_ is of paramount importance for VcA. It describes the possibility to 
"decide to get oneself involved in some activity this day and to veer away from it the next day" 
[(Sell and Pinkwart, 2016, p. 82)][sell2016rambla]. Consequently, _open participation_ forbids barriers for integration 
of new volunteers. Additionally, the success of the organization is mainly achieved by focusing on small projects, 
decentralized and independent teams and the engagement of a mass of volunteers.

Since the founding of VcA in 2006, the organization kept growing steadily, reaching a number of about 12,000 volunteers 
at the moment. The rapid growth of the social system was accompanied by development of decentralized social structures 
inside the organization, like the already mentioned _local crews_. Based on such new structures and the organizations 
rapid spread, the integration of technical tools was initiated and reached a peak with the development of the 
[Pool](https://pool.vivaconagua.org/). It coordinates activities, handles finances, supports communication via mails and 
represents volunteers. These functions became an integral part of VcAs work processes. 
Hence the tool became part of the social systems self description and both join into a socio-technical organization 
[(Kunau, 2006)][kunau2006facilitating].

Even though VcA always tries to align the supported functions of the [Pool](https://pool.vivaconagua.org/) to the needs 
of the social system, they are not able to perform _joint optimization_ all the time. 
For example, several _crews_ developed their own work processes to handle finances. These various procedures exist next to 
each other and focus the same goal. In the end, all existing financial procedures have to be considered for an 
organizational accounting. 
Since the current implementation of the [Pool](https://pool.vivaconagua.org/) does not allow to extend the work processes 
by alternatives, most concerned _local crews_ tried to workaround and extend their offline working procedures instead of 
adopting the procedure, defined by the [Pool](https://pool.vivaconagua.org/). This example shows that even though the 
[Pool](https://pool.vivaconagua.org/) allows to apply _organizational choice_ in some degree, it is used to compensate 
for missing possibilities to apply _joint optimization_.
However, the implementation of email based newsletter introduced new work processes of formal communication with 
implications for the social system, like the establishment of new roles to create and send new mails periodically. 
It becomes clear that while _joint optimization_ is not implemented yet, the social system respects and adopts new 
functions of the technical system.

Additionally, even more possible support functions had been identified during a socio-technical walkthrough 
[(Herrmann, 2004)][herrmann2004stwt]. However, implemented as a plugin for [WordPress][wp] and after five years of further 
development, the [Pool](https://pool.vivaconagua.org/) is neither expandable nor maintainable. The project is missing men 
power and technological flexibility in order to address and overcome the new challenges resulting from ongoing change of 
the social system. Therefore, the organization can not apply _joint optimization_ with the purpose to change the 
technical system.

Obviously, _joint optimization_ and _organizational choice_ had been applied, but since the number of crews scale up, 
considering both principles becomes more difficult. 
During the last years the _crews_ of VcA developed more and more disjoint requirements. The maintainers of the 
[Pool](https://pool.vivaconagua.org/) were not able to integrate so many new needs. Simply strengthening the team of 
maintainers becomes too expensive, since the social system is still expanding and each new crew will extend the set of 
requirements. Furthermore, social systems are constantly undergoing a process of change. Thus, teams and _crews_ will 
permanently develop new requirements. Only few of these new requirements can be adopted by the whole organization.

Additionally, the success of VcA is based on voluntary mass collaboration that has been made possible by _open participation_. 
We aim to consider the ongoing change of the social system and will also use mass collaboration and _open participation_ 
to implement _joint optimization_ and _organizational choice_.

In the end, a decentralized, loosely coupled social system of software developer evolves, focusing small parts of the 
technical system.  

## IT Projektkultur
We establish VcA culture for an IT project. Thus, we hope to adopt the success of the volunteering network. Such an approach
implies intrinsic motivation, fun and joy for all participants during the implementation of the project. Furthermore, we
develop the Pool² as a composition of small, decentral organized and independent projects. 

Focusing such a project culture, we have to tackle several challenges: We have to find participants for the continuous 
further development of VcAs technical parts. Those participants have to consider the socio-technical symbiosis of VcA.
Such an approach potentially produces project structures similar to open source communities. But also student degree theses
or all-profit based engagement of companies will result in important contributions.
It requires independence of all participants by technology and implies only few necessary training. Also project management
should be unrelated.

## Architecture
These challenges have concrete implications for the systems architecture. We will consider functional requirements and 
separation of project teams by technology and management. Thus, next to monolithic architectures, we consider sharp 
component based systems and the architectures implications for the projects culture.

We implement a microservice-architecture, because it best matches the requirements 
[(Sell and Pinkwart, 2018)][sell2018microservice]. An application that is running in its own process and is in _high cohesion_
to a _Bounded Context_, is called a microservice. Such a service uses a lightweight communication with other services, 
like _RESTful webservices_. A set of connected microservices is called a microservice architecture 
([Newman, 2015][newman2015building]; [Dragoni, 2017][dragoni2017microservices]).

Developer have a free choice of technology, since microservices are independent standalone applications (with small 
restrictions, see [concepts](/concepts)). The initial training is limited to the given interfaces, that have to be well
documented. Developers have few coordinative relations, thus a project culture similar to the social systems culture is 
possible to implement.

![Pool² architecture](/Pool2_architektur-small.png "Figure 1: Functional requirements resulting from Pool as microservices of
Pool². Drops: User management; Stream: Finances; Bloob: Communication; Waves: Events;")

The functional requirements for the new Pool² are defined by the existing functions of the [Pool](https://pool.vivaconagua.org/).
Figure 1 shows the projection of Pool functions onto microservices of the Pool². Drops implements a user management, 
Stream allows to handle finances, Bloob supports communication and Waves coordinates volunteers during events. While these
services implement obvious functional requirements, the section [concepts](/concepts) contains additional non-functional
requirements. Furthermore, you can find descriptions of addtional microservices implementing the non-functional requirements.  

The Pool² project is developed in collaboration with the research group  
[Computer Science Education | Computer Science and Society of the Humboldt-Universität zu Berlin](https://cses.informatik.hu-berlin.de/). 
It aims the preparation of the architecture and concepts as well as the initial implementation of the functional requirements.
Several questions are addressed, like: How to prevent users from entering their credentials for each microservice? 
How to implement RESTful communication between services? How to secure it?
How to ensure complience of _corporate design (CD)_ and basic usability guidelines, without code duplication and hampered
maintainance? 
All these questions will be discussed and solved in [concepts](/concepts).

## How to read this documentation?
There is a short [introduction written as a guide](/guides/edit-docu/).

**Author:** [Johann Sell](https://cses.informatik.hu-berlin.de/members/johann.sell/) -- 
**Created:** 2018-05-18 --
**Updated:** 2018-05-29

[wp]: https://wordpress.org/ "Version 4.9.2; https://wordpress.org/, visited 2018-02-01"
[weick1976educational]: http://www.jstor.org/stable/2391875?origin=crossref "K. E. Weick, “Educational Organizations as Loosely Coupled Systems,” Adm. Sci. Q., vol. 21, no. 1, pp. 1–19, Mar. 1976."
[sell2016rambla]: https://cses.informatik.hu-berlin.de/pubs/2016/criwg/Rambla_Supporting_Collaborative_Group_Creativity_For_the_Purpose_of_Concept_Generation.pdf "J. Sell and N. Pinkwart, “Rambla: Supporting collaborative group creativity for the purpose of concept generation,” in Proceedings of the 22th International Conference on Collaboration and Technology (CRIWG), 2016, vol. 9848 LNCS, pp. 81–97"
[kunau2006facilitating]: http://hdl.handle.net/2003/22226 "G. Kunau, “Facilitating computer supported cooperative work with socio-technical self-descriptions,” Technische Universität Dortmund, 2006."
[herrmann2004stwt]: http://portal.acm.org/citation.cfm?doid=1011870.1011886 "T. Herrmann, G. Kunau, K.-U. Loser, and N. Menold, “Socio-technical walkthrough: designing technology along work processes,” in Proceedings of the eighth conference on Participatory design Artful integration: Interweaving Media, Materials and Practices - PDC 04, 2004, vol. 1, pp. 132–141."
[sell2018microservice]: https://cses.informatik.hu-berlin.de/de/research/details/vcv/ "J. Sell and N. Pinkwart, “Socio-technical Self-Development Using A Microservice Architecture” Unpublished Work"
[newman2015building]: http://shop.oreilly.com/product/0636920033158.do "S. Newman, Building Microservices, 1st ed. O’Reilly Media, 2015."
[dragoni2017microservices]: https://arxiv.org/abs/1606.04036 "[1] N. Dragoni et al., “Microservices: yesterday, today, and tomorrow.” Cornell University, 2017."