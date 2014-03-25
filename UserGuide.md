Cropping PDFs in Javascript
===================

This project is written in Javascript (aka ECMAScript) for the Adobe Acrobat SDK as described in the [Adobe API reference](http://www.adobe.com/content/dam/Adobe/en/devnet/acrobat/pdfs/js_api_reference.pdf).

Each script uses <code>app.addMenuItem</code> to add buttons to the File menu beneath a submenu (declared with "cParent") labelled "Crop and Print" (its "cName" and thus default "cLabel").

There are two types of boxes used to obtain a reference frame for cropping.
* 'BBox' - Fits to the content, and isn't always implemented, particularly on older papers which have been scanned in rather than made through desktop publishing software.
* 'Crop' - Generally just the borders of the page, and equal to the other boxes (Trim, Art, and Bleed) which aren't relevant other than for making sure the print settings match up with what's displayed (i.e. in Crop).

BBox gives the best results for most, and can avoid hassle with setting odd and even pages differently, which is done by checking the page number's remainder.

<code>if (p%2==1) {<change the border, usually just the left and right>}

Since in Acrobat pages start with "page 0", those with a remainder 1 are actually the "even" pages as we see them (i.e. starting from page 1).

Acrobat truncates strings such as the <code>cExec</code> string at 256 characters, so there's a need to be concise. For this reason, where possible the variables have shorter (single letter) representations - which might make it a bit confusing. These are all declared in a single file, which actually saves time and leads to a speedier experience (keeping the javascripts nice and tiny).

For obvious reasons, this menu file has to load first, so it must have a space after the CropPrint in the title — <code>CropPrint Menu</code>. Likewise, this file creates the submenu the rest go into, so if you change the <code>cName</code> here you'll have to change the <code>cParent</code> for the scripts that follow or they won't be able to find it.

The single letter 'shortcuts' (variables and functions) for the sake of being concise later on are:

<code>var d = ['Art','Bleed','Trim','Crop'];</code>

<code>var o;</code>

<code>function n() { return this.numPages; }</code>

<code>function a() { return this; }</code>

To take an example — CropPrintNature.js — and look at the <code>cExec</code> (what happens when the button is clicked),

<blockquote><i>...cExec:"for(var p=0;p&lt;n();p++){o=a().getPageBox('BBox',p);o[0]+=34;o[1]-=37;o[2]-=33;o[3]+=22;if(p==0){o[1]-=38}for(b=0;b&lt;4;b++){a().setPageBoxes(d[b],p,p,o)}};this.print();"...</i></blockquote>

looks a bit complicated, but less so if written out properly

<code>for (var p=0; p&lt;n(); p++) {<br />
o = a().getPageBox('BBox',p);<br />
o[0]+=34;<br />
o[1]-=37;<br />
o[2]-=33;<br />
o[3]+=22;<br /><br />
   if (p==0) {<br />
   o[1]-=38<br />
   }<br />
   for (b=0; b&lt;4; b++) {<br />
   a().setPageBoxes(d[b], p, p, o)<br />
   }<br />
};<br /><br />
this.print();</code>

The <code>getPageBox</code> function provides an array of coordinates [Left, Top, Right, Bottom] for a given box and page, and in the first instance this is set as either <code>BBox</code> or <code>Crop</code> (aka <code>d[3]</code> in reference to the 'Crop' string in the <code>d</code> array declared above).

This array is stored in o, (<code>a()</code> makes sure it's on the right page by returning the word <code>this</code>) and title pages are treated differently through use of an if loop such that <code>if (p==0) {<change coordinates again>}</code>.

Similarly, even numbered pages (with odd values of p since counting starts at 0!) are treated differently by checking <code>if p%2 == 1</code>, that is, whether the page number has a remainder 1, but this is probably stating the obvious if you can read Javascript already. To spell the above example out in full for reference,

<code>for (var p=0; p&lt;n(); p++) {<br />
Boundaries = this.getPageBox('BBox',p);<br />
Left boundary + 34;<br />
Top boundary - 37;<br />
Right boundary - 33;<br />
Bottom boundary + 22;<br /><br />
   if (this is the first page) {<br />
   Top boundary - 38<br />
   }<br />
   for (every box - Art, Bleed, Trim, and Crop) {<br />
   this.setPageBoxes(to the new boundaries)<br />
   }<br />
};<br /><br />
this.print(open the print dialogue once this is done);</code>

All measurements are in pt (there're 72 points to an inch) and you can measure these on your document by going to <code>View > Show/Hide > Cursor Coordinates</code> after having set the measurement units to pt in the Page Display preferences.

Debugging (checking it works)
===================

A neat feature of Acrobat is that you don't need to reload the program each time you want to check your measurements have been written in the code correctly — instead press Ctrl + J (or ⌘ + J on Mac) to open a console window, and take the for loop from the <code>cExec</code> part of your code as shown above. This can be run all bunched up, or line by line again as detailed in the example above. (Ctrl + enter // ⌘ + enter runs the line selected).

Common error messages are “Internal error” which probably means the variable isn't right, so perhaps a name has changed somewhere and the loop didn't work. The value of o gives an indication of how far through the loop your code got, but for simple cropping errors it's more likely that a <code>+</code> was swapped for a <code>-</code> somewhere.
