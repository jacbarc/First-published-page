Wyzwania jakie napotkałem ( i co się z nich nauczyłem):
1. Umieszczenie loga w jedenj linii z menu, umiejscowienie go po prawej stronie tak, aby wyraźnie odcinało się od reszty menu.
2. Budowa main nav, position:sticky nie działało, przyczyną było to, że w html'u umiejscowiłem nav wewnątrz headera. Usunąłem header,
a zamiast niego dodałem div header. 
3. Main nav znikało w dolej części strony - elementy, jak np. body, mają określony rozmiar w przeglądarce. (trzeba ustawiać fit-content)  
4.style float right w html dla img w mainnav i footernav
5. Stworzenie kolumn na stronie index.html 

DO ZROBIENIA/PRZEMYŚLENIA:
1.organizacja textu na index.html - mozna zamiast kolumn dac 1 article, zdjecie faceta po lewej/prawej i tekst obok, a dwa kolejne p (ktore sa w div class column) ustawic jeden jako:
width 70% z fotka z boku float right, a drugi dac jako aside width 30%.