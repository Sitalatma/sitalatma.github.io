### Files in digital *"All Glories to the Saṅkīrtana Devotees!"* project:

*chapterList.txt* is a list of filenames (sans extensions) and respective chapter titles. For each filename there is *.txt* and *.html* file.

*full.txt* which contains all text in one file.

*\*.html* files try to reproduce style of the printed book, main css file is a copy of css on [vedabase.io](https://vedabase.io/en/) and additional css rules are included in the head of each html file.


*localDict.txt* file was used for adding possible wordbreaks to *\*.html* files. It contains mostly Sanskrit terms but also "misspelled" words picked by Aspell dictionary. Entries in this file are in:

*bahūnāṁ : ba-hū-nāṁ*

format where hyphens indicate where the word can be broken if it comes at the end of a browser line. These suggestions are arbitrary, some of them are dictated by English usage, others follow Sanskrit syllables. In html files these hypens are replaced with html "&amp;shy;" soft hyphens. They are not present in text files.

About 90% of the text is plain paragraphs, with one paragraph being one line in *\*.txt* files. Remaining 10% are indicated with the following markup at the begining of each line:

*chapter=* &emsp; - filename sans extension

*title=* &emsp; - chapter title.

*sub=* &emsp; - in each chapter there are several subheadings, preceded by horizontal rule in html files

*subsub=* &emsp; - in chapter 11 there are additional subheadings with no horizontal rule before them

*footnote=* &emsp; - chapters 3 and 6 have footnotes, in the text they are marked wtih \* and footnotes then appended at the end of the chapter. In html files they are linked and clickable so one can go back and forth

*letter=* &emsp; - these are usual paragraphs, except without indent in css. In the book they are opening lines quoted from letters

*quote=* &emsp; - quoted verses that appear as separate paragraphs and they include &lt;br /&gt; html tags separating quote lines

*sign=* &emsp; - sing off paragraphs, also with &lt;br /&gt; tags between lines

Italicized text is marked with &lt;em&gt; html tags except in subheadings and quotes which are italicized via css

Conversations are marked in html only, in *\*.txt* files these paragraphs begin with &lt;strong&gt; html tags.

There are also "&amp;emsp;" emspace entities included in the text itself where special indent is intended, like "every second line of a quoted verse" etc. 

