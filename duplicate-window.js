$(document).ready(function(){
	var is_parent=localStorage.getItem('get-parent');
	if(is_parent == 1){
		window.open('close.php','_self');
	}else{
		localStorage.setItem('get-parent','1');
		$(window).bind('beforeunload', function() {
			localStorage.setItem('get-parent','');
			//return 'are you sure?';
		});
	}
})