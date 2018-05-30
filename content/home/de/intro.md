# Pool² - Unterstützung ehrenamtlicher Zusammenarbeit
Jeder Supporter findet heute seinen Weg zu VcA über den Pool. Daher ist das Tool zu einem zentralen Bestandteil unseres 
Netzwerks geworden. Ob nun das nächste Festival mit sinnstiftender Aktivität füllen, die gesammelten Spenden dokumentieren 
oder einfach informiert bleiben - all dies läuft mittlerweile über den Pool und so erlaubt das System das dezentrale 
Wachstum von VcA. Während die neuen Funktionen, wie etwa Email-Newsletter der Crews, unser Zusammenwirken vereinfacht und 
teilweise sogar erst ermöglicht haben, versuchten wir den Pool so zu gestalten, dass dieser unseren Bedürfnissen entspricht. 
Soziales und technisches System haben sich also gegenseitig beeinflusst und sind mittlerweile stark miteinander verwoben.

Viva con Agua ist erfolgreich, weil sehr viele Menschen mit Spaß und Kreativität aktiv werden können. Wir erhalten unsere 
Motivation, indem wir immer wieder Neues zu probieren, aber uns dabei nicht selbst übernehmen. Denn das Wachstum von VcA 
basiert nicht auf der Vergrößerung einzelner Aktionen, sondern auf der Vermehrung unterschiedlicher Aktionen. Die dezentrale 
Organisation, welche der Pool erlaubt, ist somit auch Garant für den Erfolg von VcA.

Gleichzeitig ist die dezentrale Struktur auch die größte Hürde für die Weiterentwicklung des Pools (also die Anpassung 
des Pools an unser soziales System). Denn wie sollen die vielen verschiedenen Entwicklungen in den Crews, die teilweise 
auch im Konflikt miteinander stehen, in einem technischen Tool zusammenfließen? Eine Crew braucht dringend einen Chat, 
um schnell Informationen weiterzugeben, die nächste Crew hätte gerne Abstimmungshilfen, um wirklich faire Entscheidungen 
zu treffen, verzichtet aber explizit auf Chats, damit das Persönliche zwischen den Supportern nicht zu kurz kommt. Die 
Umsetzung solcher verschiedenen Anforderungen ist nicht alleine komplex, sondern erfordert auch ein gut koordiniertes, 
größeres Team an Entwicklern. Für eine gemeinnützige Organisation ist der damit verbundene finanzielle Aufwand nicht zu 
bewältigen.

## IT Projektkultur
Wir haben uns vorgenommen VcA Kultur im IT-Umfeld umzusetzen und so an den Erfolg des ehrenamtlichen Netzwerks anzuknüpfen. 
Dies bedeutet, alle Beteiligten sollten intrinsisch motiviert sein, sowie Spaß und Freude an der Realisierung des Projekts 
haben. Außerdem ist der Pool² eine Komposition kleiner, dezentral organisierter und möglichst unabhängiger Projekte.

Zur Realisierung der angestrebten Kultur sehen wir uns mit diversen Herausforderungen konfrontiert: Zunächst müssen 
Menschen gefunden werden, die an einer kontinuierlichen technischen Weiterentwicklung in Symbiose mit dem sozialen System 
interessiert sind. Dabei können ähnlichen Strukturen wie in Open Source Communities entstehen, studentische Arbeiten 
integriert werden oder Organisationen im Sinne des All-Profit Gedanken einen Beitrag leisten. Zudem muss die Unabhängigkeit 
der Beteiligten ermöglicht werden. Es gilt also die notwendige Einarbeitung gering zu halten und die Unabhängigkeit von 
Technologien weitestgehend zu gewährleisten. Auch die Schnittstellen zur Koordination zwischen den Teams sollten frei 
gestaltet werden können, so dass verschiedene Projektmanagement-Stile unterstützt werden.

## Architektur
Die zuvor beschriebene Herausforderungen möchten wir ganzheitlich und in Zusammenhang betrachten. Daher sollte die 
Entscheidung über eine Architektur nicht alleine die funktionalen Anforderungen an den Pool² beachten, sondern eben 
auch Trennung der Projektteams hinsichtlich Technologie und Koordination gewährleisten. Neben klassischen monolithischen 
Architekturen, betrachten wir daher auch stark in Komponenten separierte Varianten und die Auswirkungen der jeweiligen 
Architekturen auf die Projektkultur. 

Wir haben uns entschieden eine Microservice-Architektur zu implementieren, da dies den Anforderungen von VcA am ehesten
gerecht wird [(Sell and Pinkwart, 2018)][sell2018microservice]. Ein Microservice ist dabei eine eigenständige 
Anwendung, welche in einem eigenen Prozess läuft und eine starke Kohäsion bzgl. eines _Bounded Context_ aufweist. Zudem 
steht ein solcher Service dauerhaft in Verbindung mit anderen Microservices und verwendet dabei eine leichtgewichtige 
Kommunikation, wie etwa _RESTful webservices_. Eine Menge solcher Microservices wird Microservice Architektur genannt
([Newman, 2015][newman2015building]; [Dragoni, 2017][dragoni2017microservices]).

Da Microservices weitgehend unabhängig voneinander agieren, ist eine freie Wahl der Technologie für jeden einzelnen 
Service gegeben (mit geringen Einschränkungen, die nachfolgend im Bereich [Konzepte](/concepts) aufgeführt werden). Auch 
beschränkt sich der Einarbeitungsaufwand auf die Schnittstellen, welche gezwungenermaßen gut dokumentiert sind. 
Auch koordinative Abhängigkeiten sind stark eingeschränkt und so bietet eine derartige Architektur die Möglichkeit die 
zuvor beschriebene Projektkultur zu etablieren.

![Pool² Architektur](/Pool2_architektur-small.png "Abbildung 1: Funktionen des Pool in Microservices des Pool². Drops: 
Nutzerverwaltung; Stream: Finanzen; Bloob: Kommunikation; Waves: Aktionen;")

Die funktionalen Anforderungen an den Pool² werden im ersten Schritt durch den Funktionsumfang des ersten Pool definiert. 
Abbildung 1 zeigt die Projektion der Funktionen des Pool auf Microservices des Pool². Drops ist für die Nutzerverwaltung 
verantwortlich, während Stream die Finanzen und Waves die Aktionen hält. Bloob dient der Kommunikation. Diese Services 
bilden die offensichtlichen funktionalen Anforderungen ab. [Konzepte](/concepts) führt weitere, zumeist nicht-funktionale 
Anforderungen sowie die weiteren Microservices ein, die diese Anforderungen realisieren. 

Eine Microservice Architektur impliziert diverse Herausforderungen, die in monolithischen Architekturen nicht auftreten 
würden. Das Pool² Projekt in Zusammenarbeit mit dem Lehrstuhl 
[Didaktik der Informatik | Informatik und Gesellschaft der Humboldt-Universität zu Berlin](https://cses.informatik.hu-berlin.de/) 
dient der Vorbereitung einer Microservice Architektur und von Konzepten, mit deren Hilfe die Herausforderungen angegangen 
werden können. Wie etwa kann eine _Shared Session_ zwischen den Microservices hergestellt werden, so dass die Supporter 
sich nicht in jedem Microservice einzeln authentifizieren müssen? Wie genau sieht die Kommunikation der Microservices aus? 
Wie lässt sich diese absichern? Wie kann sichergestellt werden, dass die verschiedenen Services, die auch von 
verschiedenen Kooperationspartnern erstellt werden einem einheitlichen _Corporate Design (CD)_ folgen, ohne das dabei 
doppelter Code entsteht und die Wartbarkeit des System behindert wird? Diese und weitere Fragen sollen im Abschnitt 
[Konzepte](/concepts) diskutiert werden. Die entstehenden Diskurse sollen dabei stets auch eine Lösung aufzeigen.

[sell2018microservice]: https://cses.informatik.hu-berlin.de/de/research/details/vcv/ "J. Sell and N. Pinkwart, “Socio-technical Self-Development Using A Microservice Architecture” Unpublished Work"
[newman2015building]: http://shop.oreilly.com/product/0636920033158.do "S. Newman, Building Microservices, 1st ed. O’Reilly Media, 2015."
[dragoni2017microservices]: https://arxiv.org/abs/1606.04036 "[1] N. Dragoni et al., “Microservices: yesterday, today, and tomorrow.” Cornell University, 2017."