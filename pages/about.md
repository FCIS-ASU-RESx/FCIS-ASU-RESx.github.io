---
layout: document
permalink: /about
---

# About RESx

RESx is an unofficial collaborating community for updating and organizing learning resources of Faculty of Computer and Information Sciences at Ain Shams University, founded in December 2018. All the courses here are open-source and open for contributions and improvements.<br>
The name was inspired from [.resx file extension][resx-file-extension], which is a resource file used by programs developed with Microsoft's .NET Framework; stores objects and strings for a program in an XML format; may contain both plain text information as well as binary data, which is encoded as text within the XML tags.
The casing of the name was inspired from [TEDx][tedx]'s casing.

[resx-file-extension]: http://docs.translatehouse.org/projects/translate-toolkit/en/latest/formats/resx.html
[tedx]: https://www.ted.com/about/programs-initiatives/tedx-program


#### People Who Made RESx Possible

Thanks to all the great [Humans][contributors] who contributed to this project.

[contributors]: {{ site.repo_url }}graphs/contributors


#### Core Team

These are the humans that form RESx core team, which runs the project.
{% for member in site.team %} {{ member }} {% endfor %}