CropScience
===================

![](https://github.com/lmmx/JournalCrop-n-Print/raw/master/crop.png)

Recently I've found myself fiddling around with measurements trying to crop PDFs to print out and take away, as you can get larger, more readable font sizes and less clutter on the page by trimming the edges — but there are a few inconsistencies, with odd/even and title pages.

Given that the layout tends to be standardised per publisher/publication I thought it could be a time saver in the long run to add a little button to automate the job. After figuring out how to do so I thought I'd share, since so many other academics are likely in the same boat.

This project contains a few Javascript files to add a "Crop and Print" option to the Acrobat menu for various academic journals.

Add them to <code>root\Users\<User>\AppData\Roaming\Adobe\Acrobat\Privileged\11.0\Javascripts</code> and they'll run at Acrobat start-up (adding options into the File menu). Clicking the appropriate one will crop the file and bring up the print dialogue.

The above file path may differ if you're using an earlier version or Mac/Linux though I'm sure they'll be similar.

![](https://raw.githubusercontent.com/lmmx/CropScience/master/journal%20list.png)

The journals included are just those I read most of and by no means an exhaustive list. If there are any you don't read, just leave out the corresponding files.

Do feel free to add your own (I've written [this short guide](https://github.com/lmmx/CropScience/wiki/User-guide) for instructions on how to do so), and please send me the results to include! If you use GitHub, you can merge them yourself, or even fork this project and improve it. Those from outside the biosciences are also more than welcome to add relevant titles.

Any further questions / recommendations / comments, my email is naivelocus@gmail.com :~)

Louis <br/><a href="http://twitter.com/biochemistries">![](https://31.media.tumblr.com/3aa8b186c7d752bb14d53154abbd9e34/tumblr_inline_n2x06bbkQd1s16nrs.png) <sup>@biochemistries</a></sup>
