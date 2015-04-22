//this is just an example how to add JavaScript to your theme
/*interact('.widget')
   .draggable({
 //       intertia: true,
	onmove: dragMoveListener
    })
    .resizable({
	edges: {left: true, right: true, bottom: true, top: true}
     })
    .on('resizemove', function(event) {
	var target = event.target,
        x = (parseFloat(target.getAttribute('data-x')) || 0),
        y = (parseFloat(target.getAttribute('data-y')) || 0);

        // update the element's style
        target.style.width  = event.rect.width + 'px';
        target.style.height = event.rect.height + 'px';
    
        // translate when resizing from top or left edges
        x += event.deltaRect.left;
        y += event.deltaRect.top;

       target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px,' + y + 'px)';
 
       target.setAttribute('data-x', x);
       target.setAttribute('data-y', y);
//       target.textContent = event.rect.width + '×' + event.rect.height;
})
;


functioghtn dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
           x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
           y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
 
       // translate the element
           target.style.webkitTransform =
           target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

       // update the posiion attributes
            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
}

*/

var x = null;

$(function() {

	// draggable widget from widget bar
	$('.widget')
	.draggable({
		helper: "clone",
		cursor: "move",
		tolerance: "fit",
	})


	// drop widgets into content space
	$('.content').droppable({
		accept: '.widget',
		drop: function (event, ui) {
		
			if ($(ui.draggable)[0].id != "") {
	
				x = $(ui.helper).clone();
				$(ui.helper).remove();

				x.draggable({
					helper: "original",
					cursor: "move",
					containment: ".content",
					tolerance: "fit",
				
					drop: function(event, ui) {
						$(ui.draggable).remove();
					}
				})
				.resizable({
					maxHeight: $(".content").height,
					maxWidth: $(".content").width
				});

			x.appendTo(".content");
			//$(this).append(x);
			
			}
        	}
	});
});
