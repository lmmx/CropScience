app.addMenuItem({cName:"Crop for Phys. Rev. Lett. (APS)",cParent:"Crop and Print", cExec:"for(var p=0;p<n();p++){o=a().getPageBox('BBox',p);o[1]-=24.5;o[3]+=27.5;if(p==0){o[1]-=11};for(b=0;b<4;b++){a().setPageBoxes(d[b],p,p,o)}};this.print();"});