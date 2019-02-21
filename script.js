//функция по добавлению нового игрока в список
function addName(){
	var name = document.getElementById('name').value;
	var b = new Option();
	$(b).html(name);
	$("#players1").append(b);
	var b = new Option();
	$(b).html(name);
	$("#players2").append(b);
}

var fpart = 0;
var spart = 0;
var partyes = 0;
var score_value_f = 0;
var score_value_s = 0;
var length_value = 0;

//функция для подсчета побед и вывода победителя, для матча всех матчей
function total_for_1(){
	var wins = document.getElementById('wins');
	var valuewins = wins.value;
	
	var score_player1 = 0;
	var score_player2 = 0;

	var score_value_f_1 = document.getElementById('finput');
	var score_value_f = score_value_f_1.value;
	var score_value_s_2 = document.getElementById('sinput');
	var score_value_s = score_value_s_2.value;

//скрипт проверки заполнения полей очков
	var length_index = document.getElementById('length_value_1');
	var length_value = length_index.textContent;
	if((Number(length_value) < score_value_f)||(score_value_f == "")){
		var error_finput = document.getElementById('finput');
		error_finput.setAttribute('style','border:2px solid red')
		alert('недопустимое значение')
		return
	}
	var correct_finput = document.getElementById('finput');
	correct_finput.setAttribute('style','border:1px solid #CCCCCC;')

	if((Number(length_value) < score_value_s)||(score_value_s == "")){
		var error_sinput = document.getElementById('sinput');
		error_sinput.setAttribute('style','border:2px solid red')
		alert('недопустимое значение')
		return
	}
	var correct_finput = document.getElementById('sinput');
	correct_finput.setAttribute('style','border:1px solid #CCCCCC;')

//скрипт подсчета очков и вывода победителя
	var score_player1 = 0;
	var score_player2 = 0;

	if(parseInt(score_value_f) > parseInt(score_value_s)){
		score_player1 +=1;
	}
	else if(parseInt(score_value_f) < parseInt(score_value_s)){
		score_player2 +=1;
	}
	else if(parseInt(score_value_f) == parseInt(score_value_s)){
		score_player2 =0;
		score_player2 =0;
	}
	document.getElementById('fselect').value = score_player1;
	document.getElementById('sselect').value = score_player2;

//проверка всех полей кроме 1,добавление очков
	for(i = 2; i <= valuewins; i++){
		var score_value_f_1 = document.getElementById('finput'+i);
		var score_value_f = score_value_f_1.value;
		var score_value_s_2 = document.getElementById('sinput'+i);
		var score_value_s = score_value_s_2.value;

//проверка значений инпута,чтобы они не были больше 11 или 21, или пустыми
//если значение не удовлетворяет условию,инпут меняет цвет рамки
		var length_index = document.getElementById('length_value_1');
		var length_value = length_index.textContent;
		if((Number(length_value) < score_value_f)||(score_value_f == "")){
			var error_finput = document.getElementById('finput'+i);
			error_finput.setAttribute('style','border:2px solid red')
			alert('недопустимое значение')
			return
		}
		var correct_finput = document.getElementById('finput'+i);
		correct_finput.setAttribute('style','border:1px solid #CCCCCC;')

		if((Number(length_value) < score_value_s)||(score_value_s == "")){
			var error_sinput = document.getElementById('sinput'+i);
			error_sinput.setAttribute('style','border:2px solid red')
			alert('недопустимое значение')
			return
		}
		var correct_sinput = document.getElementById('sinput'+i);
		correct_sinput.setAttribute('style','border:1px solid #CCCCCC;')


		if(parseInt(score_value_f) > parseInt(score_value_s)){
			score_player1 +=1;
		}
		else if(parseInt(score_value_f) < parseInt(score_value_s)){
			score_player2 +=1;
		}
		else if(parseInt(score_value_f) == parseInt(score_value_s)){
			score_player2 +=0;
			score_player2 +=0;
		}
		document.getElementById('fselect').value = score_player1;
		document.getElementById('sselect').value = score_player2;
	}
//подсчет и вывод победителя
	var f_fpart = document.getElementById('fselect');
	var fpart = f_fpart.value;
	var f_spart = document.getElementById('sselect');
	var spart = f_spart.value;
	if(parseInt(fpart) > parseInt(spart)){
		alert("Победил игрок 1")
	}
	else if(parseInt(fpart) == parseInt(spart))
	{
		alert("Ничья")
	}
	else if (parseInt(fpart) < parseInt(spart)){
		alert("Победил игрок 2")
	} 
} 
//Функция создающая новую запись/матч в таблице
function addMatch(){
	var date = new Date($('#data').val());
	day = date.getDate();
	month = date.getMonth() + 1;
	year = date.getFullYear();
	hour = date.getHours();

	var length = document.getElementById('length').value;
	if(length == 0){
		alert("Выберите количество очков")
		return
	}
	var player1 = document.getElementById('players1');
	var valueplayer1 = player1.value;

	var player2 = document.getElementById('players2');
	var valueplayer2 = player2.value;

	var wins = document.getElementById('wins');
	var valuewins = wins.value;
//функция для создания 1-ой строки
	if(valuewins >= 0) {
		var tr = document.createElement('tr');
			var td1 = document.createElement('td');
			var td2 = document.createElement('td');
			var td3 = document.createElement('td');
			var td4 = document.createElement('td');
			var td5 = document.createElement('td');
			td5.setAttribute('style','width:170px;')
			var td6 = document.createElement('td');
			td6.setAttribute('id','length_value_1')
			var td7 = document.createElement('td');
			var td8 = document.createElement('td');
			td8.setAttribute('style','width:140px;')
			var td9 = document.createElement('td');
			td9.setAttribute('style','width:140px;')
			var td10 = document.createElement('td');

			var fplayer = document.createTextNode(valueplayer1);
			var vs = document.createTextNode("vs");
			var splayer = document.createTextNode(valueplayer2);
			var number_of = document.createTextNode("1");
			var date = document.createTextNode(date);
			var length = document.createTextNode(length);
			var part_quantity = document.createTextNode(valuewins);

			var finput = document.createElement("input");
			finput.id = 'finput';
			finput.setAttribute('maxlength','2')
			var mark = document.createTextNode(" : ");
			var sinput = document.createElement("input");
			sinput.id = 'sinput';
			sinput.setAttribute('maxlength','2')

			var fselect = document.createElement("select");
			fselect.id = 'fselect'
			for(a = 0; a<=valuewins;a++){
				var newOption = new Option(a);
				fselect.appendChild(newOption);
			}
			
			var mark_second = document.createTextNode(" : ");
			mark_second.id = 'smark'

			var sselect = document.createElement("select");
			sselect.id = 'sselect'
			for(a = 0; a<=valuewins;a++){
				var newOption = new Option(a);
				sselect.appendChild(newOption);
			}
			var btn_total = document.createElement("input");
			btn_total.id = 'btn_total'
			btn_total.type = 'button'
			btn_total.value = 'Итог игры'
			btn_total.name = 'submit'
			btn_total.setAttribute('onclick','total_for_1()')
			btn_total.setAttribute('class','btn btn-success')

			td1.appendChild(fplayer);
			td2.appendChild(vs);
			td3.appendChild(splayer);
			td4.appendChild(number_of);
			td5.appendChild(date);
			td6.appendChild(length);
			td7.appendChild(part_quantity);
			td8.appendChild(finput);
			td8.appendChild(mark);
			td8.appendChild(sinput);
			td9.appendChild(fselect);
			td9.appendChild(mark_second);
			td9.appendChild(sselect);
			td10.appendChild(btn_total);

			tr.appendChild(td1);
			tr.appendChild(td2);
			tr.appendChild(td3);
			tr.appendChild(td4);
			tr.appendChild(td5);
			tr.appendChild(td6);
			tr.appendChild(td7);
			tr.appendChild(td8);
			tr.appendChild(td9);
			tr.appendChild(td10);

			var table1 = document.getElementById('table_1');
			table1.appendChild(tr);
	}
//функция для создания всех строк кроме 1
	for(i = 2;i <= valuewins; i++){
		var tr = document.createElement('tr');
		var td1 = document.createElement('td');
		var td2 = document.createElement('td');
		var td3 = document.createElement('td');
		var td4 = document.createElement('td');
		var td5 = document.createElement('td');
		td5.setAttribute('style','width:200px;')
		var td6 = document.createElement('td');
		var td7 = document.createElement('td');
		var td8 = document.createElement('td');
		td8.setAttribute('style','width:140px;')
		var td9 = document.createElement('td');
		var td10 = document.createElement('td');

		var number_of = document.createTextNode(i);
		
		var finput = document.createElement("input");
		finput.id = 'finput'+ i;
		finput.setAttribute('maxlength','2')
		finput.setAttribute('type','text')

		var mark = document.createTextNode(" : ");

		var sinput = document.createElement("input");
		sinput.id = 'sinput'+ i;
		sinput.setAttribute('maxlength','2')
		sinput.setAttribute('type','text')

		td4.appendChild(number_of);
		td8.appendChild(finput);
		td8.appendChild(mark);
		td8.appendChild(sinput);

		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		tr.appendChild(td5);
		tr.appendChild(td6);
		tr.appendChild(td7);
		tr.appendChild(td8);
		tr.appendChild(td9);
		tr.appendChild(td10);

		var table1 = document.getElementById('table_1');
		table1.appendChild(tr);
		}
	}
