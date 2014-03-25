JournalCrop-n-Print
===================

Recently I've found myself fiddling around with measurements trying to crop PDFs to read away from the computer, as you can get larger more readable font sizes and less clutter on the page by cutting the edges off. Given that these things are standardised amongst various publishers I thought it could be a time saver in the long run to add a little button to automate the job, and after working it out I thought I'd share since so many other people are likely in the same boat, and it might be a useful resource for any other academics with less than 20/20 vision.

These are a few Javascript files to add "crop &amp; print" options to the Acrobat Help menu for various academic journals.

![](https://github.com/lmmx/JournalCrop-n-Print/raw/master/crop.png)

Add them to <code>root\Users\<User>\AppData\Roaming\Adobe\Acrobat\Privileged\11.0\Javascripts</code> and they'll run at Acrobat start-up (adding options into the File menu). Clicking the appropriate one will crop the file and bring up the print dialogue.

The above file path may differ if you're using an earlier version or Mac/Linux though I'm sure they'll be similar.

![](https://github.com/lmmx/JournalCrop-n-Print/raw/master/journal%20list.png)

The journals included are just those I read most of - I'll be looking to update with more soon, and feel free to fork this project and improve it if you're a javascript whiz. If there are any you don't want, just take out the corresponding files.

Any questions / recommendations / comments, my email is naivelocus@gmail.com :~)

Louis <br/><a href="http://twitter.com/biochemistries">![](https://31.media.tumblr.com/3aa8b186c7d752bb14d53154abbd9e34/tumblr_inline_n2x06bbkQd1s16nrs.png) <sup>@biochemistries</a></sup>
