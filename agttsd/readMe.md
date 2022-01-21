###Files in this project:

*chapterList.txt* is a list of filenames (sans extensions) and respective chapter titles. For each filename there is .txt and .html file, plus there is the full.txt which contains all text in one file.

Html files try to reproduce style of the printed book, main .css file is a copy of css on vedabase.io and additional css rules are included in the head of each html file.

About 90% of the text is plain paragraphs, with one paragraph being one line in .txt files. Remaining 10% are marked in txt files with the following at the begining of each line:

*chapter=* and *title=* - these two are self-explanatory.

*sub=* - in each chapter there are several subheadings, preceded by horizontal rule in html files

*subsub=* - in chapter 11 there are additional subheadings with no horizontal rule before them

*footnote=* - chapters 3 and 6 have footnotes, in the text they are marked wtih * and footnotes then appended at the end of the chapter. In html files they are linked and clickable so one can go back and forth

*letter=* - these are usual paragraphs, except without indent in css. In the book they are opening lines quoted from letters

*quote=* - quoted verses that appear as separate paragraphs and they include &lt;br /&gt; html tags separating quote lines

*sign=* - sing off paragraphs, also with &lt;br /&gt; tags between lines

Italicized text is marked with &lt;em&gt; html tags except in subheadings and quotes which are italicized via css

Conversations are marked in html only, but in txt files these paragraphs begin with &lt;strong&gt; html tags.

There are also &emsp; emspace entities included in the text itself where special indent is intended, like "every second line of a quoted verse" etc. 

There is also localDict.txt file which was used for adding possible wordbreaks to html files. It contains mostly Sanskrit terms but also "misspelled" words picked by Aspell dictionary. Entries in this file are in:

bahūnāṁ : ba-hū-nāṁ

format where hyphens indicate where the word can be broken if it comes at the end of a browser line. These suggestions are arbitrary, some of them are dictated by English usage, others follow Sanskrit syllables. In html files these hypens are replaced with html "&shy;" soft hyphens. They are not present in txt files.
