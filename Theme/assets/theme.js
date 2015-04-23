// for widget clone
var x = null;
var plugins = [];

// intialize selectable widget
var selected = $([]), offset = {top:0, left:0};

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
				plugins.push($(ui.draggable)[0].id);	// for delete
				x.addClass($(ui.draggable)[0].id);	// for delete
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
					maxWidth: $(".content").width,
					resize: function(event, ui) {
						ui.element.css("font-size", ui.size.height);
						ui.element.width($(this).find("span:first").width());
					}
				});

				x.addClass('delete');	// for delete
				x.appendTo(".content");
			}
        	}
	});
});

// delete element on backspace
// TODO crude code, fix later
$(document).on('keydown', function(e){
    if(e.keyCode === 8){
       $('div.' + plugins[plugins.length-1] +'.delete').remove();
    }
});
