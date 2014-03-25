Javascript guide for the CropScience scripts
===================

This project is written in Javascript (aka ECMAScript) for the Adobe Acrobat SDK as described in the [Adobe API reference](http://www.adobe.com/content/dam/Adobe/en/devnet/acrobat/pdfs/js_api_reference.pdf).

Each script uses <code>app.addMenuItem</code> to add buttons to the File menu beneath a submenu (declared with "cParent") labelled "Crop and Print" (its "cName" and thus default "cLabel").

There are two types of boxes used to obtain a reference frame for cropping.
<li>'BBox' - Fits to the content, and isn't always implemented, particularly on older papers which have been scanned in rather than made through desktop publishing software.</li>
<li>'Crop' - Generally just the borders of the page, and equal to the other boxes (Trim, Art, and Bleed) which aren't relevant other than for making sure the print settings match up with what's displayed (i.e. in Crop).</li>

