app.addMenuItem({cName:"Crop for J. Biol. Chem.",cParent:"Crop and Print", cExec:"for(var p=0;p<n();p++){o=a().getPageBox('BBox',p);o[1]-=20;o[2]-=40;if(p==0){o[1]-=6;o[3]+=16;};for(b=0;b<4;b++){a().setPageBoxes(d[b],p,p,o)}};this.print();"});