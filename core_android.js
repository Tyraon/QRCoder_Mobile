var idx = 0;
var played = [];
var max = 19;
var min = 0;

var current = 0;
var duration = 15;
var rounds = 10;
max = playlist.length-1;
//console.log(max);
var maxsel = (max+1) < 50 ? ((parseInt((max+1).toString().substr(0,1))-1)*50)+6 : 200;

$(document).ready(function(){

	$('#answers').css({"visibility":"hidden"});

	$('#rounds').mousemove(function(){
		$('#rounds_out').html($('#rounds').val());
		rounds = $('#rounds').val();
	});

	$('#duration').mousemove(function(){
		$('#duration_out').html($('#duration').val());
		duration = $('#duration').val();
	});

	$('#current').mousemove(function(){
		$('#current_out').html($('#current').val());
		current = $('#current').val();
	});

	$('#defaults').mousemove(function(){
		switch($('#defaults').val()){
			case '0':
			var def_out = 'Kind';
			$('#duration').val('30');
			$('#duration_out').html($('#duration').val());
			$('#d_p').css({"left":(200/6)*5 + "px"});
			$('#d_t').css({"width":((200/6)*5)+6 + "px"});
			$('#current').val('0');
			$('#current_out').html($('#current').val());
			$('#c_p').css({"left":(200/6)*0 + "px"});
			$('#c_t').css({"width":((200/6)*0)+6 + "px"});
			break;
			case '1':
			var def_out = 'Leicht';
			$('#duration').val('20');
			$('#duration_out').html($('#duration').val());
			$('#d_p').css({"left":(200/6)*3 + "px"});
			$('#d_t').css({"width":((200/6)*3)+6 + "px"});
			$('#current').val('0');
			$('#current_out').html($('#current').val());
			$('#c_p').css({"left":(200/6)*0 + "px"});
			$('#c_t').css({"width":((200/6)*0)+6 + "px"});
			break;
			case '2':
			var def_out = 'Mittel';
			$('#duration').val('15');
			$('#duration_out').html($('#duration').val());
			$('#d_p').css({"left":(200/6)*2 + "px"});
			$('#d_t').css({"width":((200/6)*2)+6 + "px"});
			$('#current').val('0');
			$('#current_out').html($('#current').val());
			$('#c_p').css({"left":(200/6)*0 + "px"});
			$('#c_t').css({"width":((200/6)*0)+6 + "px"});
			break;
			case '3':
			var def_out = 'Schwer';
			$('#duration').val('10');
			$('#duration_out').html($('#duration').val());
			$('#d_p').css({"left":(200/6)*1 + "px"});
			$('#d_t').css({"width":((200/6)*1)+6 + "px"});
			$('#current').val('10');
			$('#current_out').html($('#current').val());
			$('#c_p').css({"left":(200/6)*1 + "px"});
			$('#c_t').css({"width":((200/6)*1)+6 + "px"});
			break;
			case '4':
			var def_out = 'Extrem';
			$('#duration').val('5');
			$('#duration_out').html($('#duration').val());
			$('#d_p').css({"left":(200/6)*0 + "px"});
			$('#d_t').css({"width":((200/6)*0)+6 + "px"});
			$('#current').val('40');
			$('#current_out').html($('#current').val());
			$('#c_p').css({"left":(200/6)*4 + "px"});
			$('#c_t').css({"width":((200/6)*4)+6 + "px"});
			break;
		}
		$('#def_out').html(def_out);
	});

	$('#start').click(function(){
		$('#setup').remove();
		$('body').append('<div id="button"><button id="next">Play</button></div><script>$("#next").click(function(){loadNext();$("#button").remove();});</script>');
	});

	/*$("#r_p").mousedown(function(e){
		var evt = e;
		$("r_r").mousemove(function(e){
			var left = evt.pageX-$("#r_r").offset().left;
			console.log(left);
			$("#r_p").css({"left":left + "px"});
		});
	});*/

	$("#r_r").mousemove(function(e){
		var evt = e;
		var left = evt.pageX-$("#r_r").offset().left;
		//console.log(maxsel);
		if(left < maxsel && left >= 0) {
		//$("#r_p").mousedown(function(e){
			//console.log(left);
			$("#r_p").css({"left":(left-5) + "px"});
			$("#r_t").css({"width":(left) + "px"});
			$("#rounds").val(Math.round((left/4)+5));
			$('#rounds_out').html($('#rounds').val());
			rounds = $('#rounds').val();
		//});
		}
		var sel = window.getSelection ? window.getSelection() : document.selection;
		if(sel){
			if(sel.removeAllRanges){
				sel.removeAllRanges();
			}else{
				sel.empty();
			}
		}
		$("#r_p").blur();
	}).mouseout(function(e){
		var evt = e;
		e.which = 0;
		$("#r_p").blur();
	});

	$("#d_r").mousemove(function(e){
		var evt = e;
		var left = evt.pageX-$("#d_r").offset().left;
		if(left < 196 && left >= 0) {
		//$("#d_p").mousedown(function(e){
			//console.log(left);
			$("#d_p").css({"left":(left-5) + "px"});
			$("#d_t").css({"width":(left) + "px"});
			$("#duration").val(Math.round((left/7)+5));
			$('#duration_out').html($('#duration').val());
			duration = $('#duration').val();
		//});
		}
		var sel = window.getSelection ? window.getSelection() : document.selection;
		if(sel){
			if(sel.removeAllRanges){
				sel.removeAllRanges();
			}else{
				sel.empty();
			}
		}
		$("#d_p").blur();
	}).mouseout(function(e){
		var evt = e;
		e.which = 0;
		$("#d_p").blur();
	});

	$("#c_r").mousemove(function(e){
		var evt = e;
		var left = evt.pageX-$("#c_r").offset().left;
		if(left < 196 && left >= 0) {
		//$("#c_p").mousedown(function(e){
			//console.log(left);
			$("#c_p").css({"left":(left-5) + "px"});
			$("#c_t").css({"width":(left) + "px"});
			$("#current").val(Math.round((left/3)-5));
			$('#current_out').html($('#current').val());
			current = $('#current').val();
		//});
		}
		var sel = window.getSelection ? window.getSelection() : document.selection;
		if(sel){
			if(sel.removeAllRanges){
				sel.removeAllRanges();
			}else{
				sel.empty();
			}
		}
		$("#c_p").blur();
	}).mouseout(function(e){
		var evt = e;
		e.which = 0;
		$("#c_p").blur();
	});
	
	$("#def_r").mousemove(function(e){
		var evt = e;
		var left = evt.pageX-$("#def_r").offset().left;
		if(left < 196 && left >= 0) {
			$("#def_p").css({"left":(left-5) + "px"});
			$("#def_t").css({"width":(left) + "px"});
			$("#defaults").val(Math.round(left/50));
			console.log(Math.round(left/50));
			defaults();
		}
	});

	$("#setup").mousemove(function(e){
		var sel = window.getSelection ? window.getSelection() : document.selection;
		if(sel){
			if(sel.removeAllRanges){
				sel.removeAllRanges();
			}else{
				sel.empty();
			}
		}
	});
	
	$("#logo").click(function(){
		location.reload();
	});

	$(".block").css({"width":(200-maxsel) + "px","left":maxsel + "px"});

	clog.forEach(function(cl){
		//console.log(cl);
		$('#clog').append('<b>' + cl[1] + ' <big>' + cl[0] + '</big></b><br>' + cl[2] + '<br><br><br>');
	});

	var relpos = [];

	$('#head').mousedown(function(e){
		relpos[0] = e.clientX-$('#head').offset().left;
		relpos[1] = e.clientY-$('#head').offset().top;
		console.log(relpos);
		$('#head').css({"cursor":"move"});
	}).mouseup(function(){
		$('#head').css({"cursor":"default"});
	});

	$('#head').mousemove(function(e){
		if(e.which == 1){
			console.log((relpos[0]));
			window.moveTo((e.screenX-relpos[0])-90,(e.screenY-relpos[1])-10);
		}
	});

	$('#close').click(function(){
		window.close();
	});

	//$('#wait').click(playing);


});

function playing(){
	//return document.querySelector('#player').play();
	$('#player').trigger('play');
}

function defaults(){
switch($('#defaults').val()){
			case '0':
			var def_out = 'Kind';
			$('#duration').val('30');
			$('#duration_out').html($('#duration').val());
			$('#d_p').css({"left":(200/6)*5 + "px"});
			$('#d_t').css({"width":((200/6)*5)+6 + "px"});
			$('#current').val('0');
			$('#current_out').html($('#current').val());
			$('#c_p').css({"left":(200/6)*0 + "px"});
			$('#c_t').css({"width":((200/6)*0)+6 + "px"});
			break;
			case '1':
			var def_out = 'Leicht';
			$('#duration').val('20');
			$('#duration_out').html($('#duration').val());
			$('#d_p').css({"left":(200/6)*3 + "px"});
			$('#d_t').css({"width":((200/6)*3)+6 + "px"});
			$('#current').val('0');
			$('#current_out').html($('#current').val());
			$('#c_p').css({"left":(200/6)*0 + "px"});
			$('#c_t').css({"width":((200/6)*0)+6 + "px"});
			break;
			case '2':
			var def_out = 'Mittel';
			$('#duration').val('15');
			$('#duration_out').html($('#duration').val());
			$('#d_p').css({"left":(200/6)*2 + "px"});
			$('#d_t').css({"width":((200/6)*2)+6 + "px"});
			$('#current').val('0');
			$('#current_out').html($('#current').val());
			$('#c_p').css({"left":(200/6)*0 + "px"});
			$('#c_t').css({"width":((200/6)*0)+6 + "px"});
			break;
			case '3':
			var def_out = 'Schwer';
			$('#duration').val('10');
			$('#duration_out').html($('#duration').val());
			$('#d_p').css({"left":(200/6)*1 + "px"});
			$('#d_t').css({"width":((200/6)*1)+6 + "px"});
			$('#current').val('10');
			$('#current_out').html($('#current').val());
			$('#c_p').css({"left":(200/6)*1 + "px"});
			$('#c_t').css({"width":((200/6)*1)+6 + "px"});
			break;
			case '4':
			var def_out = 'Extrem';
			$('#duration').val('5');
			$('#duration_out').html($('#duration').val());
			$('#d_p').css({"left":(200/6)*0 + "px"});
			$('#d_t').css({"width":((200/6)*0)+6 + "px"});
			$('#current').val('40');
			$('#current_out').html($('#current').val());
			$('#c_p').css({"left":(200/6)*4 + "px"});
			$('#c_t').css({"width":((200/6)*4)+6 + "px"});
			break;
		}
		duration = $('#duration').val();
		current = $('#current').val();
		$('#def_out').html(def_out);
}

function newtrack(){
	var rand = rando();
	//console.log(rand);
	if(played.indexOf(playlist[rand]) >= 0){
		return newtrack();
	}else{
		return playlist[rand];
	}
}

function rando(){
	var rand = Math.floor(Math.random()*(max-min+1)+min);
	return rand;
}

function loadNext(){
	var newTrack = newtrack();
	played.push(newTrack);
	newTrack = newTrack.replace(/.mp3/g, '.ogg');
	newTrack = 'http://ovnetwork.de/filmeraten/ogg/' + newTrack;
	newTrack = encodeURI(newTrack);
	//console.log(newTrack);
	$('#player').attr('src',newTrack).ready(function(){
		//console.log('loaded');
		$('#player').prop('currentTime',current).ready(function(){
			$('#player')[0].play();
			//$('#wait').click();
			//console.log('play');
			setTimeout(function(){
				$('#player')[0].pause();
				if(idx < (rounds-1)){
					idx++;
					$('body').append('<div id="button"><button id="next">Play</button></div><script>$("#next").click(function(){loadNext();$("#button").remove();$("body script").remove();});</script>');
				}else{
					$('body').append('<div id="button"><button id="ans">Lösungen</button></div><script>$("#ans").click(function(){answers();$("#button").remove();});</script>');
				}
			},(duration*1000));
		})
	});
}

function answers(){
	$('#answers').css({"visibility":"visible"});
	$('#answers').append('&#8226; ' + played.reduce(setList));
}

function setList(e1,e2){
	return e1.replace(/.mp3/g,"") + '<br>&#8226; ' + e2.replace(/.mp3/g,"");
}