# Pool² - Support volunteer collaboration
Pool² is the second version of the system introduced by [Viva con Agua de St. Pauli e.V. (VcA)](https://www.vivaconagua.org/home) supporting the 
volunteers during their daily work. This tool is explicitly developed to support a socio-technical self-development.

VcA is a decentralized social system of volunteers raising awareness and collecting donations for 
WASH (``Water, Sanitation and Hygiene'') projects. Such projects address the establishment of 
access to clean drinking water and basic sanitation for all humans worldwide. 
The volunteers pursue their aims through creative and joyful activities, as defined by the self-description of \vca . 
As the volunteers get together and organize themselves in separated regional groups, those \socialElement{local crews} 
are loosely coupled [(Weick, 1976)][weick1976educational]. 
Furthermore, there is a small administration, called _Brunnenbüro_. This team has three purposes: 
1. Tie together all results from work done by the several _local crews_, 
2. controlling compliance with legal conditions and 
3. offering counsel for _local crews_ if needed.

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

**Author:** [Johann Sell](https://cses.informatik.hu-berlin.de/members/johann.sell/) -- 
**Created:** 2018-05-18

[wp]: https://wordpress.org/ "Version 4.9.2; https://wordpress.org/, visited 2018-02-01"
[weick1976educational]: http://www.jstor.org/stable/2391875?origin=crossref "K. E. Weick, “Educational Organizations as Loosely Coupled Systems,” Adm. Sci. Q., vol. 21, no. 1, pp. 1–19, Mar. 1976."
[sell2016rambla]: https://cses.informatik.hu-berlin.de/pubs/2016/criwg/Rambla_Supporting_Collaborative_Group_Creativity_For_the_Purpose_of_Concept_Generation.pdf "J. Sell and N. Pinkwart, “Rambla: Supporting collaborative group creativity for the purpose of concept generation,” in Proceedings of the 22th International Conference on Collaboration and Technology (CRIWG), 2016, vol. 9848 LNCS, pp. 81–97"
[kunau2006facilitating]: http://hdl.handle.net/2003/22226 "G. Kunau, “Facilitating computer supported cooperative work with socio-technical self-descriptions,” Technische Universität Dortmund, 2006."
[herrmann2004stwt]: http://portal.acm.org/citation.cfm?doid=1011870.1011886 "T. Herrmann, G. Kunau, K.-U. Loser, and N. Menold, “Socio-technical walkthrough: designing technology along work processes,” in Proceedings of the eighth conference on Participatory design Artful integration: Interweaving Media, Materials and Practices - PDC 04, 2004, vol. 1, pp. 132–141."