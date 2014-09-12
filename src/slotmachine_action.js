$(document).ready(function(){
		$attempts = 3;
		$('#attempts').text($attempts);
		$('#slotMachineButtonStop').hide();
		$('#slotMachineButtonWaiting').hide();
		$('#slotMachineButtonAgain').hide();
		var machine1 = $("#machine1").slotMachine({
			active	: 0,
			delay	: 500
		});
		
		var machine2 = $("#machine2").slotMachine({
			active	: 1,
			delay	: 500
		});
		
		window.machine3 = $("#machine3").slotMachine({
			active	: 2,
			delay	: 500
		});
		$("#slotMachineButtonShuffle").click(function(){
			$(this).hide();
			$('#slotMachineButtonStop').show();
			$('.title').empty();
			$('.title').text('SHUFFLING...');
			machine1.shuffle();
			machine2.shuffle();
			machine3.shuffle();
		});
		$("#slotMachineButtonStop").click(function(){
			if( machine1.isRunning()){
				$(this).hide();
				$('.title').text('TAN TANANAN!!');
				$("#slotMachineButtonWaiting").show();
				machine1.stop(1);
				setTimeout(function(){
					machine2.stop(1);
				}, 500);
				setTimeout(function(){
					machine3.stop(1);
				}, 1000);
				setTimeout(function(){
				$count = 0;
				$('.check').trigger('click');
				$count = 1;
				setTimeout(function(){
						$count = 2;
						$('.check').trigger('click');
					},1400);
				},1200);
			}
			
		});
		$('.check').click(function(){
			if($count == 2){
				getIndexes();
			}
		});
		$("#slotMachineButtonAgain").click(function(){
			$('.title').empty();
			$('.title').text('WELCOME!');
			$(this).hide();
			$("#slotMachineButtonShuffle").show();
			$attempts = 3;
			$('#attempts').text($attempts);
		});
		function getIndexes(){
			index1 = machine1.active().index;
			index2 = machine2.active().index;
			index3 = machine3.active().index;

			if((index1 == index2) && (index2 == index3)){
				if(index1 == 0){
					$('.title').empty();
					$('.title').text('YOU WIN!');
					$("#slotMachineButtonAgain").show();
					$("#slotMachineButtonWaiting").hide();
				}else{
					$('.title').empty();
					$('.title').text('+1 SPIN!');
					$attempts = $attempts+1;
					$('#attempts').text($attempts);
					$("#slotMachineButtonShuffle").show();
					$("#slotMachineButtonWaiting").hide();
				}
			}else{
				if(((index1 == index2) && index1 == 0) || ((index2 == index3) && index2 == 0) || ((index1 == index3) && index1 == 0)){
					$attempts = $attempts-1;
					$('.title').empty();
					if($attempts > 0){
						$('.title').text('ALMOST HAD IT!');
						$("#slotMachineButtonShuffle").show();
						$("#slotMachineButtonWaiting").hide();
					}else{
						$('.title').text('GAME OVER!');
						$("#slotMachineButtonAgain").show();
						$("#slotMachineButtonWaiting").hide();
					}
					$('#attempts').text($attempts);

				}else{
					$attempts = $attempts-1;
					$('.title').empty();
					if($attempts > 0){
						$('.title').text('TRY AGAIN!');
						$("#slotMachineButtonShuffle").show();
						$("#slotMachineButtonWaiting").hide();
					}else{
						$('.title').text('GAME OVER!');
						$("#slotMachineButtonAgain").show();
						$("#slotMachineButtonWaiting").hide();
					}
					$('#attempts').text($attempts);
				}
			}
		}
	});