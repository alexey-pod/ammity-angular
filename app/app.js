// оптимизация:
// для стрниц типа http://loc_ammity3.ru/catalog/begovye-dorozhki/atm87989851/
// сделать 404 страницу, по анологии с http://loc_ammity_backbone.ru/

(function($$) {// расширения jQuery
	$$.fn.isEqual = function($otherSet) 
	{
		/*
			сравнить одинаковость элементов
			http://obstart.ru/jquery-sravnit-elementy.html
			пример:
			var a=$$('#start > div:last-child');
			var b=$$('#start > div.live')[0];
			console.log($$(b).isEqual(a));
		*/
		if (this === $otherSet) return true;
		if (this.length != $otherSet.length) return false;
		var ret = true;
		this.each(function(idx) { 
			if (this !== $otherSet[idx]) {
				ret = false; return false;
			}
		});
		return ret;
	};
})(jQuery);

function numeric_format(val, thSep, dcSep) {
 
    // Проверка указания разделителя разрядов
    if (!thSep) thSep = ' ';
 
    // Проверка указания десятичного разделителя
    if (!dcSep) dcSep = ',';
 
    var res = val.toString();
    var lZero = (val < 0); // Признак отрицательного числа
 
    // Определение длины форматируемой части
    var fLen = res.lastIndexOf('.'); // До десятичной точки
    fLen = (fLen > -1) ? fLen : res.length;
 
    // Выделение временного буфера
    var tmpRes = res.substring(fLen);
    var cnt = -1;
    for (var ind = fLen; ind > 0; ind--) {
        // Формируем временный буфер
        cnt++;
        if (((cnt % 3) === 0) && (ind !== fLen) && (!lZero || (ind > 1))) {
            tmpRes = thSep + tmpRes;
        }
        tmpRes = res.charAt(ind - 1) + tmpRes;
    }
 
    return tmpRes.replace('.', dcSep);
 
}
function inputPlaceholder(config){var id=config.id;var text=config.text;var color=config.color;var input=document.getElementById(id);$$('#'+id).attr({'placeholder':text});if (!input) return null;if (input.placeholder && 'placeholder' in document.createElement(input.tagName)) return input;color = color || '#888888';var default_color = input.style.color;var placeholder = input.getAttribute('placeholder');if (input.value === '' || input.value == placeholder) {input.value = placeholder;input.style.color = color;input.setAttribute('data-placeholder-visible', 'true');}if(input.value==placeholder && document.activeElement.id==id){input.value='';}var add_event = /*@cc_on'attachEvent'||@*/'addEventListener';input[add_event](/*@cc_on'on'+@*/'focus', function(){input.style.color = default_color;if (input.getAttribute('data-placeholder-visible')) {input.setAttribute('data-placeholder-visible', '');input.value = '';}}, false);input[add_event](/*@cc_on'on'+@*/'blur', function(){if (input.value === '') {input.setAttribute('data-placeholder-visible', 'true');input.value = placeholder;input.style.color = color;} else {input.style.color = default_color;input.setAttribute('data-placeholder-visible', '');}}, false);input.form && input.form[add_event](/*@cc_on'on'+@*/'submit', function(){if (input.getAttribute('data-placeholder-visible')) {input.value = '';}}, false);return input;}
function packDataAjax(arr1){// упаковать одномерный массив JS в строку
		var sep1 = "<[>";	//разделитель ключ - значение
		var sep2 = "<[[>";	//разделитель значений массива
		var sep3 = "<[[[>";	//разделитель для массивов
		var arr=arr1;
		var str='';
		/*
		for (var key1 in arr) {
			var val1 = arr[key1];
		}// END foreach1
		*/
		for(var i=0;i<arr.length;i++){
			str+=sep3;
			for (var key1 in arr[i]) {
				var val1 = arr[i][key1];
				str+=sep2;
				str+=key1+sep1+val1;
			}// END foreach1
		}// END for
		
		return str;
	}//END packDataAjax
function showPagePreloader(){
	//return;
	$$('#overlay').show();
	$$('#page_form_preloader').show();
	$$('#global-wrapper').addClass('blurred');
}
function hidePagePreloader(){
	var $body = angular.element(document.body);            // 1
	var $rootScope = $body.injector().get('$rootScope');   // 2b
	if($rootScope.init_load==0 || $rootScope.page_load==0){
		return;
	}
	$$('#overlay').hide();
	$$('#page_form_preloader').hide();
	$$('#global-wrapper').removeClass('blurred');
	$$('#preloader_image').empty().remove();
}
function uAlert(text){
	var self=this;
	this.text=text;
	
	
	this.init = function(){
		
		/*
		if( $$('#alert_form').data('is_init')==1 ){
			return;
		}
		*/
		if( $$('#alert_form').length!=0 ){
			return;
		}
		
		var html='<div class="alert_form" id="alert_form"><div class="header"><span>Внимание</span><div class="close"></div></div><div class="content"><div class="text"></div><div class="btn_block"><INPUT type="button" class="btn send" value="Ок"></div></div></div>';
		$$('body').append(html);
		
		
		$$("#alert_form").draggable(
			{
				cursor: "move",
				handle: ".header"
			}
		);
		$$('#alert_form').data('is_init', 1);
		$$('#alert_form').data('is_open', 0);
		
		{//	обработка кнопки Esc
			$$(document).keydown(function(e){
				if ($$('#alert_form').data('is_open')) {
					if (e.which==27) {// кнопка Esc
						self.hide();
					}
				}
			});
		}//END обработка кнопки Esc
			
		$$('#alert_form .header .close').click(function(e){
			self.hide();
		});
			
		$$('#alert_form .btn_block .btn.send').click(function(e){
			self.hide();
		});
			
		return;
	}//END 
	this.show = function(){
		
		$$('#alert_form').data('is_open', 1);
		this.centeredForm();
		$$('#alert_form .content .text').html(this.text);
		$$('#overlay').show();
		$$('#alert_form').show();
		
		$$('#alert_form .btn_block .btn').focus();
		
	}//END
	this.centeredForm = function(){// центрировать
		var id='alert_form';
		if($$('#'+id).data('is_open')!=1){
			return;
		}
	
		var form_width=$$('#'+id).width();
		var form_height=$$('#'+id).height();
		
		
		var body_width=$$('html').width();
		//var body_height=$$('html').height();
		var body_height=window.innerHeight;
		
		//console.log('scrollY ='+window.scrollY)
		
		
		
		var left=(body_width-form_width)/2;
		var top=(body_height-form_height)/2 + window.scrollY;
				
		$$('#'+id).css({'left':left, 'top':top});
		
		
	}//END 	
	this.hide = function(){
		$$('#overlay').hide();
		$$('#alert_form').hide();
		$$('#alert_form').data('is_open', 0);
	}
	this.init();
	this.show();
	
}
function isEmail(value){// проверка на email

		//if(!inp || !inp.value) return false;
		//var reg = /^[\w-](\.?[\w-])*@([A-Za-z]{2,}|[\w-](\.?[\w-])*\.[A-Za-z]{2,})$/i;
		var reg = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i;// взято из избы
		
		return reg.test(value) ? true : false;
	}//END isEmail
function showProcess(title){
	
	var self=this;
	this.title=title;
	this.init = function(){
		if( $$('#window_progressbar').length!=0 ){
			return;
		}
		
		var html='<div id="window_progressbar"><div style="margin-top:20px;" id="progressbar"></div></div>';
		$$('body').append(html);
		$$("#window_progressbar").hide();
		$$("#window_progressbar").dialog({
			//show: "drop",
			//hide: "puff",
			autoOpen: false,
			modal: true,
			draggable: false,
			resizable: false,
			closeOnEscape: false
		})
		$$("#window_progressbar").hide().prev().find("a").hide();
		$$("#progressbar").progressbar({value:100}).css({border:"none", height:"20px"});
		return;
	}//END 
	this.show = function(){
		$$('#window_progressbar').dialog("open").dialog('option', 'title', this.title).css({"min-height":"none"});
	}
	this.init();
	this.show();
}// END showProcess
function hideProcess(){$$("#window_progressbar").dialog("close")}
function completeProcess(title, text){
	var self=this;
	this.title=title;
	this.text=text;
	this.init = function(){
		if( $$('#form_send_complete').length!=0 ){
			return;
		}
		
		var html=[
			'<div id="form_send_complete" title="Запрос отправлен" style="display:none;">',
				'<div id="form_send_complete_text" style="font-weight:bold;color:green;"></div>',
			'</div>',
			].join('');
		$$('body').append(html);
		$$('#form_send_complete').dialog({
				autoOpen: false,
				modal: true,
				//position:['center', 'top'],
				draggable: true,
				resizable: false,
				width: 350,
				buttons: {	
					"Ок": function() { 
						$$(this).dialog("close"); 
					} 
				}
			});
		
		return;
	}//END 
	this.show = function(){
		//console.log('completeProcess:show()');
		//$$('#window_progressbar').dialog("open").dialog('option', 'title', this.title).css({"min-height":"none"});
		$$('#form_send_complete').dialog("open").dialog('option', 'title', this.title);
		var text=this.text||'';
		$$('#form_send_complete_text').html(text);
	}
	this.init();
	this.show();
	
}// END showProcess

var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider, $sceProvider, $sceDelegateProvider) {
	
	//$sceProvider.enabled(false);
	
	{// routeProvider config
		$locationProvider.html5Mode(true).hashPrefix('!');
		$routeProvider
		.when('/', {
			templateUrl: '/app/template/index.tpl',
			controller: 'index_ctrl'
		})
		// catalog
		.when('/catalog/', {
			templateUrl: '/app/template/catalog/ann_array_cat.tpl',
			//template: '*******',
			//controller: 'catalog_main_ctrl'
			controller: 'cat_ann_array_ctrl',
			// title: 'Welcome to Home Page'
		})
		.when('/catalog/:cat_mnemonic/', {
			templateUrl: '/app/template/catalog/ann_array_cat.tpl',
			controller: 'cat_ann_array_ctrl',
			controllerAs: 'cat_ann_array_ctrl',
		})
		.when('/seria/:seria_mnemonic/', {
			templateUrl: '/app/template/catalog/ann_array_seria.tpl',
			controller: 'seria_ann_array_ctrl'
		})
		.when('/catalog/:cat_mnemonic/:ann_mnemonic/', {
			templateUrl: '/app/template/catalog/ann_item.tpl',
			//template: '<template><div>строка 1</div><script>alert(1)</script><div>строка 2</div></template>',
			//template: '<div>строка 1</div><script>alert(1)</script><div>строка 2</div>',
			//template: '<div html="<script>function print_data(){console.log(1)}</script>"></div>****'
			//template: '<script type="text/javascript-lazy" >alert("lazy loaded");  </script>'
			controller: 'ann_item_ctrl',
			reloadOnSearch: false// для правильной обработки #
		})
		.when('/compare/:compare_list/', {
			templateUrl: '/app/template/catalog/compare.tpl',
			controller: 'compare_ctrl'
		})
		.when('/basket/', {
			templateUrl: '/app/template/pages/basket.tpl',
			controller: 'pages_basket_ctrl'
		})
		
		
		// pages
		.when('/pages/cooperation/', {
			templateUrl: '/app/template/pages/cooperation.tpl',
			//template: 'app text',
			controller: 'pages_cooperation_ctrl',
		})
		.when('/pages/product_registration/', {
			templateUrl: '/app/template/pages/product_registration.tpl',
			//template: 'app text',
			controller: 'pages_product_registration_ctrl',
		})
		.when('/pages/search_dealer/', {
			templateUrl: '/app/template/pages/search_dealer.tpl',
			//template: 'app text',
			controller: 'pages_search_dealer_ctrl',
		})
		.when('/pages/contact/', {
			templateUrl: '/app/template/pages/contact.tpl',
			//template: 'app text',
			controller: 'pages_contact_ctrl'
			// title: 'Welcome to Home Page'
		})
		.when('/pages/app/', {
			templateUrl: '/app/template/pages/app.tpl',
			//template: 'app text',
			controller: 'pages_app_ctrl'
			// title: 'Welcome to Home Page'
		})
		.when('/pages/action/', {
			templateUrl: '/app/template/pages/action.tpl',
			//template: 'app text',
			controller: 'pages_action_ctrl'
			// title: 'Welcome to Home Page'
		})
		.when('/pages/presentation/', {
			templateUrl: '/app/template/pages/presentation.tpl',
			//template: 'app text',
			controller: 'pages_presentation_ctrl'
			// title: 'Welcome to Home Page'
		})
		.when('/pages/:mnemonic/', {
			templateUrl: '/app/template/pages/pages.tpl',
			//template: 'простой обработчик',
			controller: 'pages_ctrl',
		})
		.otherwise({
			//redirectTo: '/'
			controller: '404_ctrl',
			templateUrl: '/app/template/404.tpl',
		});
	}//END routeProvider config
	
	//$rootScope.page={};
 
	//$rootScope.test_data='fdfsdfsdf';
	
	

	
	
});


app.run(function ($rootScope, $http, compareFactory, basketFactory) {
  /*
  $rootScope.page={};// копия страницы
  $rootScope.config={};
  $rootScope.init={};// общие данные для всех страниц
  $rootScope.checkPage=function(){};
  */
	
	//console.log('app.run');
	$rootScope.init_load=0;			// данные инита загружены или нет
	$rootScope.page_load=0;			// загружена страница или нет
	$rootScope.global_cat_mnemonic='';		
	$rootScope.global_ann_mnemonic='';		

	function init(){
		$http.post('/app/respondents/init.php', {})
		.success(function (result) {
			compareFactory.init(result.compare);
			delete result.compare;
			
			basketFactory.init(result.basket);
			delete result.basket;
			
			
			$rootScope.init=result;
			$rootScope.init_load=1;
			
			
			hidePagePreloader();
		});
	}
	init();
	
  
  
  //console.log('app.run');
  $rootScope.$on('$routeChangeStart', function (event, current, previous, reject) {
	//console.log('routeChangeStart');
	//$rootScope.init_load=0;
	showPagePreloader();
  });

  /*
  */
  $rootScope.$on('$routeChangeSuccess', function (event, current, previous, reject) {
	//console.log('routeChangeSuccess');
	$rootScope.global_cat_mnemonic='';
	$rootScope.global_ann_mnemonic='';
	//showPagePreloader();
  });
});


app.controller('index_ctrl', function ($scope, $routeParams, $http, $rootScope, DataCache) {
	
	$scope.getPage=function(){
		
		var mnemonic = 'index';
		var page = DataCache.get(mnemonic);
		if (page) {
			$scope.bildPage(page);
		}
		else{
			$http.post('/app/respondents/index.php', {mnemonic:mnemonic})
			.success(function (result) {
				DataCache.put(mnemonic, result);
				$scope.bildPage(result);
			});
		}
	}
	$scope.bildPage=function(page){
		$scope.page=page;
		$rootScope.page=page;
		$rootScope.page_load=1;
		hidePagePreloader();
	}
	$scope.getPage();
		
});
app.controller('404_ctrl', function ($scope, $routeParams, $http, $rootScope, DataCache) {
	
	$scope.getPage=function(){
		
		var mnemonic = '404';
		var page = DataCache.get(mnemonic);
		if (page) {
			$scope.bildPage(page);
		}
		else{
			$http.post('/app/respondents/pages.php', {'mnemonic': mnemonic})
			.success(function (result) {
				DataCache.put(mnemonic, result);
				$scope.bildPage(result);
			})
		}
	}
	$scope.bildPage=function(page){
		$scope.page=page;
		$rootScope.page=page;
		$rootScope.page_load=1;
		hidePagePreloader();
	}
	$scope.getPage();
	
});

// pages_ctrl
/*done*/app.controller('pages_ctrl', function ($scope, $routeParams, $http, $rootScope, DataCache) {
	
	$scope.getPage=function(){
		
		var mnemonic = $routeParams.mnemonic;
		var page = DataCache.get(mnemonic);
		if (page) {
			$scope.bildPage(page);
		}
		else{
			$http.post('/app/respondents/pages.php', {'mnemonic': mnemonic})
			.success(function (result) {
				DataCache.put(mnemonic, result);
				$scope.bildPage(result);
			})
		}
	}
	$scope.bildPage=function(page){
		$scope.page=page;
		$rootScope.page=page;
		$rootScope.page_load=1;
		hidePagePreloader();
	}
	$scope.getPage();

});
/*done*/app.controller('pages_app_ctrl', function ($scope, $routeParams, $http, $rootScope, DataCache, $timeout) {
	
	
	$scope.getPage=function(){
		
		var mnemonic = 'app';
		var page = DataCache.get(mnemonic);
		if (page) {
			$scope.bildPage(page);
		}
		else{
			$http.post('/app/respondents/pages.php', {'mnemonic': mnemonic})
			.success(function (result) {
				DataCache.put(mnemonic, result);
				$scope.bildPage(result);
			})
		}
	}
	$scope.bildPage=function(page){
		$scope.page=page;
		$rootScope.page=page;
		$rootScope.page_load=1;
		hidePagePreloader();
	}
	$scope.getPage();
	
	
	
});
/*done*/app.controller('pages_action_ctrl', function ($scope, $routeParams, $http, $rootScope, DataCache) {
	
	
	$scope.getPage=function(){
		
		var mnemonic = 'action';
		var page = DataCache.get(mnemonic);
		if (page) {
			$scope.bildPage(page);
		}
		else{
			$http.post('/app/respondents/pages.php', {'mnemonic': mnemonic})
			.success(function (result) {
				DataCache.put(mnemonic, result);
				$scope.bildPage(result);
			})
		}
	}
	$scope.bildPage=function(page){
		$scope.page=page;
		$rootScope.page=page;
		$rootScope.page_load=1;
		hidePagePreloader();
	}
	$scope.getPage();
	
	
	
	
});
/*done*/app.controller('pages_contact_ctrl', function ($scope, $routeParams, $http, $rootScope, DataCache) {
	
	$scope.getPage=function(){
		
		var mnemonic = 'contact';
		var page = DataCache.get(mnemonic);
		if (page) {
			$scope.bildPage(page);
		}
		else{
			$http.post('/app/respondents/pages.php', {'mnemonic': mnemonic})
			.success(function (result) {
				DataCache.put(mnemonic, result);
				$scope.bildPage(result);
			})
		}
	}
	$scope.bildPage=function(page){
		$scope.page=page;
		$rootScope.page=page;
		$rootScope.page_load=1;
		hidePagePreloader();
	}
	$scope.getPage();
	
	$scope.selected_tab='';
	$scope.setTab=function(val){
		$scope.selected_tab=val;
	}
	
});
/*done*/app.controller('pages_contact_ctrl_question', function ($scope, $routeParams, $http, $rootScope, DataCache) {
	
	$scope.form={};
	
	$scope.sendForm=function(){
		$scope.form.mode='addQuestionItem';
		//console.log('pages_contact_ctrl_question:sendForm');
		
		var form=$scope.form;
		{// проверка полей на заполнение
			if(
				form.fio=='' || form.email=='' || form.phone=='' || form.text==''
				|| 
				form.fio==undefined || form.email==undefined || form.phone==undefined || form.text==undefined
			){
				uAlert('Все поля формы обязательны для заполнения!');
				return;
			}
		
		}// END
		
		showProcess('Отправка запроса');

		$http.post('/respondents/script_client.php', form)
		.success(function (result) {
			
			hideProcess();
			completeProcess('Сообщение', 'Спасибо за обращение');
			$scope.form={};
		});
		
		
	}//END
	
});
/*done*/app.controller('pages_contact_ctrl_comment', function ($scope, $routeParams, $http, $rootScope, DataCache) {
	
	$scope.resetForm=function(){
		$scope.form={};
		$scope.form.mode='addCommentItem';
		$scope.form.cat_id=0;
		$scope.form.seria_id=0;
		$scope.form.model_id=0;
		$scope.seria_array=[];
		$scope.ann_array=[];
		
		$scope.form.safety=0;
		$scope.form.design=0;
		$scope.form.functionality=0;
		$scope.form.comfort=0;
	}
	
	$scope.sendForm=function(){
		
		var form=$scope.form;
		{// проверка полей на заполнение
			if(
				form.model_id==0 || form.fio=='' || form.email=='' || form.text==''
				|| 
				form.model_id==undefined || form.fio==undefined || form.email==undefined || form.text==undefined
			){
				uAlert('Все поля формы обязательны для заполнения!');
				return;
			}
			form.ann_id=form.model_id;
		}// END
		
		showProcess('Отправка запроса');

		$http.post('/respondents/script_client.php', form)
		.success(function (result) {
			hideProcess();
			completeProcess('Сообщение', 'Спасибо за обращение');
			$scope.resetForm();
		});
		
		
	}//END
	
	$scope.resetForm();
});
/*done*/app.controller('pages_contact_ctrl_service', function ($scope, $routeParams, $http, $rootScope, DataCache) {
	
	$scope.resetForm=function(){
		$scope.form={};
		$scope.form.mode='addServiceItem';
		$scope.form.cat_id=0;
		$scope.form.seria_id=0;
		$scope.form.model_id=0;
		$scope.seria_array=[];
		$scope.ann_array=[];
	}
	
	$scope.sendForm=function(){
		
		var form=$scope.form;
		{// проверка полей на заполнение
			if(
				form.fio=='' || form.email=='' || form.phone=='' || form.shop=='' || form.model_id==0 || form.text=='' || form.serial_number==''
				||
				form.fio==undefined || form.email==undefined || form.phone==undefined || form.shop==undefined || form.model_id==undefined || form.text==undefined || form.serial_number==undefined
			){
				uAlert('Все поля формы обязательны для заполнения!');
				return;
			}
			form.ann_id=form.model_id;
		}// END
		
		showProcess('Отправка запроса');

		$http.post('/respondents/script_client.php', form)
		.success(function (result) {
			hideProcess();
			completeProcess('Сообщение', 'Спасибо за обращение');
			$scope.resetForm();
		});
		
		
	}//END
	
	$scope.resetForm();
});
/*done*/app.controller('pages_cooperation_ctrl', function ($scope, $routeParams, $http, $rootScope, DataCache) {
	
	$scope.getPage=function(){
		
		var mnemonic = 'cooperation';
		var page = DataCache.get(mnemonic);
		if (page) {
			$scope.bildPage(page);
		}
		else{
			$http.post('/app/respondents/pages.php', {mnemonic: mnemonic})
			.success(function (result) {
				DataCache.put(mnemonic, result);
				$scope.bildPage(result);
			})
		}
	}
	$scope.bildPage=function(page){
		$scope.page=page;
		$rootScope.page=page;
		$rootScope.page_load=1;
		hidePagePreloader();
	}
	$scope.getPage();
	
	$scope.form={};
	$scope.form.mode='addDealerRequestItem';
	
	
	
	$scope.sendForm=function(){
		
		var form=$scope.form;
		form.service_center=(form.service_center)?(1):(0);
		form.customer_base=(form.customer_base)?(1):(0);
		
		{// проверка полей на заполнение
			if(form.name=='' || form.name==undefined){
				uAlert('НАЗВАНИЕ ОРГАНИЗАЦИИ - не заполнено');
				$$('#sd_name').focus();
				return;
			}
			if(form.fio=='' || form.fio==undefined){
				uAlert('КОНТАКТНОЕ ЛИЦО - не заполнено');
				$$("#sd_fio").focus();
				return;
			}
			if(form.city=='' || form.city==undefined){
				uAlert('ГОРОД - не заполнено');
				$$("#sd_city").focus();
				return;
			}
			if(form.phone=='' || form.phone==undefined){
				uAlert('ТЕЛЕФОН - не заполнено');
				$$("#sd_phone").focus();
				return;
			}
			if(form.email=='' || form.email==undefined){
				uAlert('E-MAIL - не заполнено');
				$$("#sd_email").focus();
				return;
			}
			if(isEmail(form.email)==false){
				uAlert('E-MAIL - заполнено неверно');
				$$("#sd_email").focus();
				return;
			}
		}// END
		
		showProcess('Отправка запроса');

		$http.post('/respondents/script_client.php', form)
		.success(function (result) {
			
			hideProcess();
			completeProcess('Сообщение', 'Спасибо ваше письмо принято.</br>Вскоре с Вами свяжется наш представитель.');
			$scope.form={};
		});
		
	}//END
	
	
});
/*done*/app.controller('pages_presentation_ctrl', function ($scope, $routeParams, $http, $rootScope, DataCache) {
	
	$scope.getPage=function(){
		
		var mnemonic = 'presentation';
		var page = DataCache.get(mnemonic);
		if (page) {
			$scope.bildPage(page);
		}
		else{
			$http.post('/app/respondents/pages.php', {'mnemonic': mnemonic})
			.success(function (result) {
				DataCache.put(mnemonic, result);
				$scope.bildPage(result);
			})
		}
	}
	$scope.bildPage=function(page){
		$scope.page=page;
		$rootScope.page=page;
		$rootScope.page_load=1;
		hidePagePreloader();
	}
	$scope.getPage();
	
});
/*done*/app.controller('pages_search_dealer_ctrl', function ($scope, $routeParams, $http, $rootScope, DataCache, $timeout) {
	
	$scope.getPage=function(){
		
		var mnemonic = 'search_dealer';
		var page = DataCache.get(mnemonic);
		if (page) {
			$scope.bildPage(page);
		}
		else{
			$http.post('/app/respondents/pages.php', {mnemonic: mnemonic})
			.success(function (result) {
				DataCache.put(mnemonic, result);
				$scope.bildPage(result);
			})
		}
	}
	$scope.bildPage=function(page){
		$scope.page=page;
		$rootScope.page=page;
		$rootScope.page_load=1;
		hidePagePreloader();
		$timeout( function(){ $$('table tr:nth-child(2n)').addClass('bg'); }, 10);
	}
	$scope.getPage();
	
	$scope.alphabet_array=['А','Б','В','Г','Д','Е','Ж','З','И','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Э','Ю','Я'];
	$scope.letter='';
	
	$scope.setLetter=function(letter){
		//console.log('letter='+letter)
		if(!$scope.page.diler_array[letter] && letter!=''){
			return;
		}
		$scope.letter=letter;
	}
	
});
/*done*/app.controller('pages_product_registration_ctrl', function ($scope, $routeParams, $http, $rootScope, DataCache) {
		
	$scope.getPage=function(){
		
		var mnemonic = 'product_registration';
		var page = DataCache.get(mnemonic);
		if (page) {
			$scope.bildPage(page);
		}
		else{
			$http.post('/app/respondents/pages.php', {mnemonic: mnemonic})
			.success(function (result) {
				DataCache.put(mnemonic, result);
				$scope.bildPage(result);
			})
		}
	}
	$scope.bildPage=function(page){
		$scope.page=page;
		$rootScope.page=page;
		$rootScope.page_load=1;
		hidePagePreloader();
	}
		
	$scope.sendForm=function(){
		var form=$scope.form;
		
		{// проверка полей на заполнение
			
			if(form.fio=='' || form.fio==undefined){
				uAlert('ВАШЕ ФИО - не заполнено');
				$$("#fio").focus();
				return;
			}
			if(form.email=='' || form.email==undefined){
				uAlert('EMAIL - не заполнено');
				$$("#email").focus();
				return;
			}
			if(isEmail(form.email)==false){
				uAlert('EMAIL - заполнено неверно');
				$$("#email").focus();
				return;
			}
			if(form.phone=='' || form.phone==undefined){
				uAlert('ТЕЛЕФОН С КОДОМ ГОРОДА - не заполнено');
				$$("#phone").focus();
				return;
			}
			if(form.city=='' || form.city==undefined){
				uAlert('ГОРОД - не заполнено');
				$$("#city").focus();
				return;
			}
			if(form.shop=='' || form.shop==undefined){
				uAlert('МАГАЗИН, ГДЕ БЫЛ ПРИОБРЕТЕН ТОВАР - не заполнено');
				$$("#shop").focus();
				return;
			}
			if(form.sale_date=='' || form.sale_date==undefined){
				uAlert('ДАТА ПРОДАЖИ (ПО ЧЕКУ) - не заполнено');
				$$("#sale_date").focus();
				return;
			}
			if(form.model_id==0 || form.model_id==undefined){
				uAlert('МОДЕЛЬ - не заполнено');
				return;
			}
			if(form.serial_number=='' || form.serial_number==undefined){
				uAlert('ВВЕДИТЕ СЕРИЙНЫЙ НОМЕР ПРОДУКТА - не заполнено');
				$$("#serial_number").focus();
				return;
			}
			if(form.attach_str=='' || form.attach_str==undefined){
				uAlert('СКАН-КОПИЯ - не загружена');
				return;
			}
			
		}// END
		
		showProcess('Отправка запроса');
		
		$http.post('/respondents/script_client.php', form)
		.success(function (result) {
			
			hideProcess();
			completeProcess('Сообщение', 'Спасибо ваш продукт зарегестрирован.');
			$scope.resetForm();
		});
		
	}//END
	$scope.resetForm=function(){
		$scope.form={};
		$scope.form.mode='addPrItem';
		$scope.form.cat_id=0;
		$scope.form.seria_id=0;
		$scope.form.model_id=0;
		$scope.form.attach_str='';// скан копия
		$scope.seria_array=[];
		$scope.ann_array=[];
		$rootScope.$broadcast("resetFiles", {});
	}//END
	
	$scope.getPage();
	$scope.resetForm();
	
	//$scope.reset=function(){}//END
	
});

/*done*/app.controller('pages_basket_ctrl', function ($scope, $rootScope, $http, DataCache, basketFactory) {

	$scope.getPage=function(){
		
		var mnemonic = 'basket';
		var page = DataCache.get(mnemonic);
		if (page) {
			$scope.bildPage(page);
		}
		else{
			$http.post('/app/respondents/pages.php', {'mnemonic': mnemonic})
			.success(function (result) {
				DataCache.put(mnemonic, result);
				$scope.bildPage(result);
			})
		}
	}
	$scope.bildPage=function(page){
		$scope.page=page;
		$rootScope.page=page;
		$rootScope.page_load=1;
		hidePagePreloader();
	}
	$scope.getPage();
	
	$rootScope.$watch('init_load', function (newValue) {
		if($rootScope.init_load==1){
			$scope.basket=basketFactory.getBasket();
		}
	});
	$scope.order_send=0;
	$scope.deleteFromBasket=function(item){
		//console.log('top_basket_ctrl:deleteFromBasket()')
		basketFactory.deleteFromBasket(item.id);
	}
	
	$scope.form={};
	$scope.order={};
	
	$scope.sendForm=function(){
		$scope.form.mode='addOrderItem';
		
		//console.log('pages_contact_ctrl_question:sendForm');
		
		var form=$scope.form;
		{// проверка полей на заполнение
			if(form.fio=='' || form.fio==undefined){
				uAlert('Ваше ФИО - не заполнено');
				$$("#b_fio").focus();
				return;
			}
			if(form.phone=='' || form.phone==undefined){
				uAlert('Телефон - не заполнено');
				$$("#b_phone").focus();
				return;
			}
			if(isEmail(form.email)==false){
				uAlert('E-mail - заполнено неверно');
				$$("#b_email").focus();
				return;
			}
			if(form.city=='' || form.city==undefined){
				uAlert('Город - не заполнено');
				$$("#b_city").focus();
				return;
			}
			if(form.address=='' || form.address==undefined){
				uAlert('Адрес - не заполнено');
				$$("#b_address").focus();
				return;
			}
		
		}// END
		
		showProcess('Отправка заказа');

		$http.post('/respondents/script_client.php', form)
		.success(function (result) {
			$scope.order.send=1;
			$scope.order.nomber=result;
			hideProcess();
			basketFactory.clearBasket();
			$scope.form={};
		});
		
		
	}//END

});




// catalog_ctrl
/*done*/app.controller('cat_ann_array_ctrl', function ($scope, $routeParams, $http, $sce, $rootScope, DataCache) {
	
	$scope.getPage=function(){
		var cat_mnemonic = $routeParams.cat_mnemonic || 'begovye-dorozhki';
		var mnemonic = 'catalog';
		var page = DataCache.get(mnemonic+'_'+cat_mnemonic);
		
		$rootScope.global_cat_mnemonic=cat_mnemonic;
		
		//console.log(mnemonic+'_'+cat_mnemonic)
		
		if (page) {
			$scope.bildPage(page);
		}
		else{
			$http.post('/app/respondents/catalog.php', {mode: 'ann_array_cat', cat_mnemonic: cat_mnemonic})
			.success(function (result) {
				DataCache.put(mnemonic+'_'+cat_mnemonic, result);
				$scope.bildPage(result);
			})
		}
	}
	$scope.bildPage=function(page){
		$scope.page=page;
		$rootScope.page=page;
		$rootScope.page_load=1;
		hidePagePreloader();
	}
	$scope.getPage();

});
/*done*/app.controller('seria_ann_array_ctrl', function ($scope, $routeParams, $http, $sce, $rootScope, DataCache) {
	
	$scope.getPage=function(){
		var seria_mnemonic = $routeParams.seria_mnemonic;
		var mnemonic = 'catalog';
		var page = DataCache.get(mnemonic+'_'+seria_mnemonic);
		if (page) {
			$scope.bildPage(page);
		}
		else{
			$http.post('/app/respondents/catalog.php', {mode: 'ann_array_seria', seria_mnemonic: seria_mnemonic})
			.success(function (result) {
				DataCache.put(mnemonic+'_'+seria_mnemonic, result);
				$scope.bildPage(result);
			})
		}
	}
	$scope.bildPage=function(page){
		$scope.page=page;
		$rootScope.page=page;
		$rootScope.page_load=1;
		hidePagePreloader();
	}
	$scope.getPage();
	
});
/*done*/app.controller('ann_item_ctrl', function ($scope, $routeParams, $http, $sce, $rootScope, DataCache, $timeout, $location, annFactory, compareFactory, basketFactory) {
	
	$scope.getPage=function(){
		var cat_mnemonic = $routeParams.cat_mnemonic;
		var ann_mnemonic = $routeParams.ann_mnemonic;
		
		
		var mnemonic = 'catalog';
		var page = DataCache.get(mnemonic+'_'+cat_mnemonic+'_'+ann_mnemonic);
		
		$rootScope.global_ann_mnemonic=ann_mnemonic;
		$rootScope.global_cat_mnemonic=cat_mnemonic;
		
		
		if (page) {
			$scope.bildPage(page);
		}
		else{
			$http.post('/app/respondents/catalog.php', {mode: 'ann_item', cat_mnemonic: cat_mnemonic, ann_mnemonic:ann_mnemonic})
			.success(function (result) {
				annFactory.add(result.ann_item);
				DataCache.put(mnemonic+'_'+cat_mnemonic+'_'+ann_mnemonic, result);
				$scope.bildPage(result);
				// здесь помечаем список загруженных ann
			})
		}
	}
	$scope.bildPage=function(page){
		$scope.page=page;
		$rootScope.page=page;
		$rootScope.page_load=1;
		hidePagePreloader();
	}
	$scope.getPage();
	
	
	$scope.$watch("page", function (newValue) {
		if($scope.page!=undefined && $scope.page.ann_item!=undefined){
			$timeout( function(){ 
				init();
			}, 0);
		}
	});
	function init(){
		//console.log('ann_item_ctrl:init()');
		{// боковая панель
			var pp=$scope.pp;
			var total=$scope.page.ann_item.image_array.length;
			$scope.panel_total=(total%pp==0)?(total/pp):(1+((total-(total%pp))/pp));	
			//console.log('total='+total);
			//console.log('panel_total='+$scope.panel_total);
			var arr=$scope.page.ann_item.image_array;
			var panel_nomber=1;
			var total=0;
			for(var i=0;i<arr.length;i++){
				if(total==pp){
					total=0;
					panel_nomber++;
				}
				arr[i].panel_nomber=panel_nomber;
				total++;	
			}
		}
		//console.log($scope.page.ann_item);
		
		$$('.panes DIV').lightBox();	// подключаем lightbox для картинок
		
		$$('table tr:nth-child(2n+1)').addClass('bg-td');
		
	}//END
	
	
	// фото
	$scope.selected_panel=1;
	$scope.selected_image=1;
	$scope.pp=4;
	$scope.clickPrev=function(){
		//console.log('clickPrev');
		if($scope.selected_panel==1){
			$scope.selected_panel=$scope.panel_total;
		}
		else{
			$scope.selected_panel--;
		}
		$scope.selected_image=1+($scope.selected_panel-1)*$scope.pp;
	}
	$scope.clickNext=function(){
		//console.log('clickNext');
		if($scope.selected_panel==$scope.panel_total){
			$scope.selected_panel=1;
		}
		else{
			$scope.selected_panel++;
		}
		$scope.selected_image=1+($scope.selected_panel-1)*$scope.pp;
	}
	$scope.selectImage=function(val){
		$scope.selected_image=val;
	}
	
	
	// табы
	$scope.selected_tab=$location.hash() || 'descr';
	$scope.setTab=function(val){
		$scope.selected_tab=val;
	}
	
	
	// compare
	$scope.setCompare=function(item, in_compare){
		//console.log('ann_item_ctrl:addCompare');
		//console.log(item);
		//return;
		if(in_compare==1){
			compareFactory.add(
				{
					ann_id:item.id, 
					ann_mnemonic: item.mnemonic, 
					root_cat_id: item.root_cat_id,
					cat_mnemonic: item.cat_mnemonic,
					seria_mnemonic: item.seria_mnemonic
				}
			);
		}
		else{
			compareFactory.delete(
				{
					ann_id:item.id, 
					ann_mnemonic: item.mnemonic, 
					root_cat_id: item.root_cat_id,
					cat_mnemonic: item.cat_mnemonic,
					seria_mnemonic: item.seria_mnemonic
				}
			);
		}
	}//END
	
	
	// basket
	$scope.qty=1;
	$scope.addToBasket=function(item){
		//console.log('ann_item_ctrl:addToBasket()');
		//console.log(item);
		basketFactory.addToBasket({id:item.id, amount:$scope.qty});
	}//END
	$scope.changeBasketAmount=function(mode){
		if(mode=='+'){
			$scope.qty++;
		}
		if(mode=='-'){
			$scope.qty--;
		}
		if($scope.qty==100){
			$scope.qty=99;
		}
		if($scope.qty==0){
			$scope.qty=1;
		}
	}//END

	
	
	
	//console.log($routeParams)
	//console.log('hash='+$location.hash())
	
});
/*done*/app.controller('compare_ctrl', function ($scope, $routeParams, $http, $sce, $rootScope, DataCache, $timeout, compareFactory, $location) {
	
	var compare_list = $routeParams.compare_list;
	var diff = $routeParams.diff||0;
	var get={compare_list:compare_list, diff:diff};
	
	$scope.getPage=function(){
		var mnemonic = 'compare';
		
		var page = DataCache.get(mnemonic+'_'+compare_list+'_'+diff);
		if (page) {
			$scope.bildPage(page);
		}
		else{
			$http.post('/app/respondents/catalog.php', {mode: 'compare', compare_list: compare_list, diff:diff})
			.success(function (result) {
				DataCache.put(mnemonic+'_'+compare_list+'_'+diff, result);
				$scope.bildPage(result);
			})
		}
	}
	$scope.bildPage=function(page){
		page.get=get;
		$scope.page=page;
		$rootScope.page=page;
		$rootScope.page_load=1;
		
		$timeout( function(){ 
			$$('table tr:nth-child(2n+1)').addClass('bg-td'); 
			hidePagePreloader();
		}, 10);
		
	}
	$scope.getPage();
	
	$scope.delete=function(item){

		compareFactory.delete(
			{
				ann_id:item.id, 
				ann_mnemonic: item.mnemonic, 
				root_cat_id: item.root_cat_id,
				cat_mnemonic: item.cat_mnemonic,
				seria_mnemonic: item.seria_mnemonic
			}
		);
		var url=compareFactory.getCompareUrl(item.root_cat_id);
		if(url==''){
			url='/catalog/';
		}
		else{
			var diff_str=(diff)?('?diff=1'):('');
			url+=diff_str;
		}
		
		//console.log(url);
		$location.url(url);
	}//END
	
});
/*done*/app.controller('top_basket_ctrl', function ($scope, basketFactory, $rootScope) {
	
	//$scope.basket=basketFactory.getBasket();
	$rootScope.$watch('init_load', function (newValue) {
		if($rootScope.init_load==1){
			$scope.basket=basketFactory.getBasket();
			//console.log($scope.basket);
			//console.log('done');
		}
	});
	
	$scope.deleteFromBasket=function(item){
		//console.log('top_basket_ctrl:deleteFromBasket()')
		basketFactory.deleteFromBasket(item.id);
	}
	
});




/**********************ФИЛЬТРА******************************/
/*************************************************************/
/*вывод html*/
app.filter('html', ['$sce', function ($sce) { 
    return function (text) {
        return $sce.trustAsHtml(text);
    };    
}]);



/**********************DIRECTIVE******************************/
/*************************************************************/
app.directive('annList', function(compareFactory) {
	return {
        templateUrl: '/app/template/catalog/ann_array.inc.tpl',
		scope: {
			ann_array:'=annArray',
		},
		template_: [
			'<div>',
				'<p>========start=========</p>',
				//'<p>dir: uname=<b>{{ uname }}</b> </p>',
				//'<p>{{ann_array}}</p>',
				'<p>{{annArray}}</p>',
				'<div ng-repeat="ann_item in annArray">{{ann_item.id}}: {{ann_item.name}}</div>',
			'</div>',
		].join(''),
        //replace: true,
		controller: function($scope, $element){
			
			$scope.addCompare=function(item){
				//console.log('annList:addCompare()');
				//console.log(item);
				//item.in_compare=1;
				compareFactory.add(
					{
						ann_id:item.id, 
						ann_mnemonic: item.mnemonic, 
						root_cat_id: item.root_cat_id,
						cat_mnemonic: item.cat_mnemonic,
						seria_mnemonic: item.seria_mnemonic
					}
				);
			}
			
			$scope.deleteCompare=function(item){
				//console.log('annList:deleteCompare()');
				//item.in_compare=0;
				compareFactory.delete(
					{
						ann_id:item.id, 
						ann_mnemonic: item.mnemonic, 
						root_cat_id: item.root_cat_id,
						cat_mnemonic: item.cat_mnemonic,
						seria_mnemonic: item.seria_mnemonic
					}
				);
			}
			
			
		},
        link: function($scope, element, attr) {}//END link
		
    }
});
/*
app.directive('compareBtn', function() {
	return {
        templateUrl: '/app/template/catalog/compare_btn.inc.tpl',
		scope: {
			ann_array:'=annArray',
		},
        //replace: true,
		controller: function($scope, $element){
			
		},
        link: function($scope, element, attr) {}//END link
		
    }
});

*/


/* для обработки скриптов */
app.directive('script', function() {
    return {
      restrict: 'E',
      scope: false,
      link: function(scope, elem, attr) {
        if (attr.type=='text/javascript-lazy') {
          var code = elem.text();
          var f = new Function(code);
          f();
        }
      }
    };
});


app.directive('selectCatId', function($http) {
	return {
		scope: {
			cat_id:'=catId',
			cat_array:'=catArray',
			seria_array:'=seriaArray',
			seria_id:'=seriaId',
			model_id:'=modelId',
		},
		template: [
			'<select ng-model="cat_id" id="cat_id" ng-change="catChange()">',
				'<option value="0">выбор...</option>',
				'<option',
					'	ng-repeat="item in cat_array"',
					'	value="{{item.id}}" ',
					'	data-root_cat_id="{{item.root_cat_id}}">{{item.name}}</option>',
			'</select>',
		].join(''),
        replace: true,
		controller: function($scope, $element){
			
			$scope.catChange = function(){
				$scope.seria_id=0;
				$scope.model_id=0;
				$http.post('/respondents/script_client.php', {mode: 'getSeriaArrayByAnnCat', root_cat_id:$scope.cat_id, cache: true})
				.success(function (result) {
					$scope.seria_array=result;
				});
			}//END
			
		}
        //,link: function($scope, element, attr) {}//END link
		
    }
});
app.directive('selectSeriaId', function($http) {
	return {
		scope: {
			cat_id:'=catId',
			cat_array:'=catArray',
			seria_array:'=seriaArray',
			seria_id:'=seriaId',
			model_id:'=modelId',
			ann_array:'=annArray',
		},
		template: [
			'<select ',
				'ng-model="seria_id" ',
				'ng-disabled="seria_array.length == 0 || cat_id==0"',
				'ng-change="seriaChange();">',
				'<option value="0">выбор...</option>',
				'<option ',
					'ng-repeat="item in seria_array"',
					'value="{{item.id}}" ',
					'>{{item.name}}</option>',
			'</select>',
		].join(''),
        replace: true,
		controller: function($scope, $element){
			
			$scope.seriaChange = function(){
				$scope.model_id=0;
				var seria_id=$scope.seria_id;
				var root_cat_id=$$("#cat_id :selected").data('root_cat_id');
				$http.post('/respondents/script_client.php', {mode: 'getAnnArrayForRegister', seria_id:seria_id, root_cat_id:root_cat_id})
				.success(function (result) {
					$scope.ann_array=result;
				});
			}//END
			
		}
        //,link: function($scope, element, attr) {}//END link
		
    }
});
app.directive('selectModelId', function($http) {
	return {
		scope: {
			cat_id:'=catId',
			seria_id:'=seriaId',
			ann_array:'=annArray',
			model_id:'=modelId',
		},
		template: [
			'<select ',
				'ng-model="model_id"',
				'ng-disabled="ann_array.length == 0 || seria_id==0 || cat_id==0"',
			'>',
				'<option value="0">выбор...</option>',
				'<option ',
					'ng-repeat="item in ann_array"',
					'value="{{item.id}}" ',
					'>{{item.name}}</option>',
			'</select>',
		].join(''),
        replace: true,
		controller: function($scope, $element){}
        //,link: function($scope, element, attr) {}//END link
		
    }
});
app.directive('saleDate', function() {
	return {
		scope: {
			/*
			cat_id:'=catId',
			cat_array:'=catArray',
			seria_array:'=seriaArray',
			seria_id:'=seriaId',
			*/
			sale_date:'=saleDate',
		},
		template: [
			'<div class="sale_date_container">',
				'<input type="text" value="" id="sale_date" ng-model="sale_date" />',
				'<div class="icon"></div>',
			'</div>',
		].join(''),
        replace: true,
		controller: function($scope, $element){
			//$scope.data_init=0;
			$scope.init=function(){
				/*
				if($scope.data_init){
					return;
				}
				*/
				$scope.data_init=1;
				{// datepicker
					$$( "#sale_date" ).datepicker({
						buttonImageOnly: true,
						dateFormat: 'dd-mm-yy',
						onSelect: function(dateText, inst) {
							var scope = angular.element(sale_date).scope();
							scope.$apply(function () {
								scope.sale_date = dateText;
							});
						}// END 
					});// END datepicker
					$$('.sale_date_container .icon').click(function(e){
						$$( "#saledate" ).datepicker( "show" );
					});
				}//END datepicker
			}// END init
			$scope.init();
		}
        ,link: function($scope, element, attr) {}//END link
    }
});
app.directive('fileUploader', function($http) {
	return {
		scope: {
			attach_str:'=attachStr',
		},
		template: [
			'<div class="image_list" id="image_list"></div>',
			'<div class="load_image transition" id="load_image">Загрузить...</div>',
			'<input type="hidden" value="" id="attach_str" ng-model="attach_str" />',
		].join(''),
        //replace: true,
		//controllerAs: 'fup',
		controller: function($scope, $element){
			//console.log('fileUploader::controller');
			
			$scope.putAsafeApply = function(fn) {
				var status = this.$root.$$phase;
				if(status == '$apply' || status == '$digest') {
					if(fn && (typeof(fn) === 'function')) {
						fn();
					}
				} else {
					this.$apply(fn);
				}
			};
			
			function pageClass(){
				
				var self = this;
				this.script_url = '/respondents/script_client.php';	// урл респондента
				
				this.initImage = function(){// инит картинок
					this.item_image_field_id=0;	// счётчик полей
					this.item_image_max=4;
					
					this.image_uploader=new qq.FileUploader({
						element: document.getElementById('load_image'),
						action: this.script_url,
						multiple: false, // множественная загрузка
						allowedExtensions:['gif', 'jpg', 'png','pdf', 'zip', 'rar', '7z'], 
						params: {
							mode: 'uploadFile',
							type: 'product_registration'
							//file: $$('#image_input_file_'+field_id).val() // файл который удаляется при загрузке нового
						},
						//debug: true,
						onSubmit: function(id, fileName){
							//p_obj.deleteImage($$('#image_input_file_'+field_id).val());
							//console.log('загрузка')
							//console.log('id='+id)
							//console.log('fileName='+fileName)
							
							// прячем кнопку загрузить 
							$$('#load_image .qq-upload-button').hide();
							/*
							
							// прячем кнопку удалить 
							$$('#image_item_'+field_id+' .delete').hide();
							*/
						},
						onCancel: function(id, fileName){
							// показываем кнопку загрузить 
							$$('#load_image .qq-upload-button').show();
							// чистим информацию о загрузке
							$$('#load_image .qq-upload-list').html('');	
						},
						onComplete: function(id, fileName, responseJSON){
							//console.log( responseJSON )
							
							self.item_image_field_id++;
							var i=self.item_image_field_id;
							var json=responseJSON;
							
							
							{// html
								var str='';
								str+='<a ondragstart="return false" href="'+json.file+'" id="item_image_'+i+'" class="item" title="'+json.filename+'.'+json.ext+'" target="_blank">';
								str+='<div class="icon"></div>';
								//str+='<div class="icon"> <img src="/img/iResize.php?size=78&amp;bg=ffffff&amp;img='+json.file+'" /> </div>';
								str+='<div class="close" title="удалить"></div>';
								str+='<div class="text">'+json.filename+'.'+json.ext+'</div>';
								str+='<input id="item_image_input_'+i+'" value="'+json.file_id+'" type="hidden"/>';
								str+='</a>';
								$$('#image_list').append(str);
							}//END html
							
							{// удаление
								$$('#item_image_'+i+' .close').click(function( e ) {
									e.stopPropagation();
									e.stopImmediatePropagation();
									e.preventDefault();
									if( confirm('Действительно удалить?')==false ){
										return;
									}
									$$('#item_image_'+i).empty().remove();
									self.setUploaderText();
								});
							}
								
							// показываем кнопку загрузить 
							$$('#load_image .qq-upload-button').show();
							// чистим информацию о загрузке
							$$('#load_image .qq-upload-list').html('');	
							
							self.setUploaderText();
							
							//$$('.qq-upload-drop-area').show();
							
						}
					});// END FileUploader
					
				}//END
				this.packImage = function(){
					var arr = [];
					var sort=0;
					jQuery.each($$("#image_list .item"), function() {
						var field_id=this.id.substr(11);
						if(parseInt(field_id)!=0){
							var file_id=$$('#item_image_input_'+field_id).val();
							if(file_id!=''){
								sort+=10;
								arr.push({'file_id':file_id, 'sort':sort});
							}
						}
					});// END jQuery.each
					//return arr;
					//var str=packDataAjax(this.getImageArray());
					var str=packDataAjax(arr);
					return str;
				}//END
				
				this.setUploaderText = function()
				// установить текст на кнопке
				// спрятать|показать кнопку загрузки
				{
					
					{// установить текст на кнопке
					
						var total=$$("#image_list .item").length;
						if(total==0){
							$$('#load_image .qq-upload-button SPAN').html('загрузить');
						}
						else{
							$$('#load_image .qq-upload-button SPAN').html('загрузить ещё...');
						}
						
					}
					
					{// спрятать|показать кнопку загрузки
						if(total>=this.item_image_max){
							$$('#load_image').hide();
						}
						else{
							$$('#load_image').show();
						}
					}
					
					
					var attach_str=this.packImage();
					var scope = angular.element(image_list).scope();
					/*
					scope.$apply(function () {
						scope.attach_str = attach_str;
					});
					*/
					scope.putAsafeApply(function() {
						//$scope.foo = 'bar';
						scope.attach_str = attach_str;
					});

				}//END
				this.reset = function(){
					$$("#image_list .item").empty().remove();
					this.setUploaderText();
				}//END
				
			}//END pageClass p_obj
			
			var p_obj= new pageClass();
			p_obj.initImage();
			
			$scope.$on("resetFiles", function (event, args) {
				p_obj.reset();
            })
			
		}//END controler
        ,link: function($scope, element, attr) {}//END link
    }
});
app.directive('dilerMap', function() {
	return {
		scope: {
			diler_map_array:'=dilerMapArray',
		},
		template: '<div class="map-widget" id="diler_map" style="width:720px; height:388px;"></div>',
        replace: true,
		controller: function($scope, $element){
			
			function pageClass(){
				var self = this;
				{// map
					this.initMap = function(){
						
						var myLatlng = new google.maps.LatLng(57.971605, 73.384121);
						var myOptions = {
							zoom: 3,
							center: myLatlng,
							mapTypeId: google.maps.MapTypeId.ROADMAP
						}
						this.map = new google.maps.Map(document.getElementById("diler_map"), myOptions); 
						this.bildPlace();
						
						return;
					}//END
					this.bildPlace = function(){
						
						this.marker=[];
						this.infowindow=[];
						//var arr=this.place_array;
						var arr=this.diler_map_array;
						
						//console.log(arr)
						//for(var i in arr) {
						//if (!arr.hasOwnProperty(i)) continue;
						for(var i=0;i<arr.length;i++){
							//if(arr[i].name=='Strongpeople'){
							/*
							if(arr[i].name=='Фитнесстехнологии'){
								console.log(arr[i])
							}
							*/
							//console.log('i='+i)
							//создание метки
							//var myLatlng = new google.maps.LatLng(arr[i].lon, arr[i].lat);
							var myLatlng = new google.maps.LatLng(arr[i].lat, arr[i].lon);
							//console.log(arr[i]);
							//console.log(arr[i].id);
							//console.log('lon='+arr[i].lon+' lat='+arr[i].lat);
							//var contentString = '<div class="" id="content_'+i+'">'+arr[i][2]+'</div>';
							var str = '';
							str=''
							+'<div class="map_tooltip_2" id="content_'+i+'">'
							+'<div class="inner">'
							+'<div class="content">'
							+'<div class="name">'+arr[i].name+'</div>'
							+'<div class="city">г. '+arr[i].city+'</div>'
							+'<div class="phone">'+arr[i].tel1+'</div>'
							+'<a target="_blank" href="http://'+arr[i].website1+'" class="site">'+arr[i].website1+'</a>'
							+'<div class="close"></div>'
							+'</div>'
							+'<div class="arrow v"></div>'
							+'</div>'
							+'</div>';
							
							//console.log(contentString)
							//console.log(str)
							//var infowindow = new google.maps.InfoWindow({
							this.infowindow[i] = new google.maps.InfoWindow({
								content: str
							});
							
							{// добавление на карту
								
								//var marker = new google.maps.Marker({
								this.marker[i] = new google.maps.Marker({
									position: myLatlng,
									map: this.map,
									title:arr[i].name,
									icon:'/img/client/map/ammiti_map_icon.png'
								});
							}//END
							this.marker[i].m_id=i;// идентификатор метки
							
							google.maps.event.addListener(this.marker[i], 'click', function() {
								//console.log(this);
								//console.log('m_id='+this.m_id);
								self.closeInfowindowAll();
								self.infowindow[this.m_id].open(self.map, self.marker[this.m_id]);
								self.fixStyle();
							});
							
						}//END for
						
						return;
					}//END
					this.closeInfowindowAll = function(){
						var arr=this.diler_map_array;
						for(var i=0;i<arr.length;i++){
							self.infowindow[i].close(self.map, self.marker[i]);
						}
						return;
					}//END
					this.fixStyle = function(){
						var gm_style_iw=$$('.map_tooltip_2').parent().parent().parent();
						
						$$(gm_style_iw).prev().children().eq(3).css({'background':'#B21C2E'});
						$$(gm_style_iw).prev().children().eq(2).children().children().css({'background':'#B21C2E'});
						// кнопка закрыть
						
						$$(gm_style_iw).next( ).children().hide();
						$$(gm_style_iw).next( ).css(
							{
								'background-image':'url(/img/client/map/bclose.png)',
								'background-repeat': 'no-repeat',
								'background-position': 'center center'
							}
						);
						$$(gm_style_iw).css({'background':'#B21C2E'});
						return;
					}//END
				}//END map
			}//END Class
			
			$scope.$watch("diler_map_array", function (newValue) {
				if($scope.diler_map_array!=undefined){
					p_obj = new pageClass();
					p_obj.diler_map_array=$scope.diler_map_array;
					p_obj.initMap();
				}
			});
			
		}//END controler
        ,link: function($scope, element, attr) {}//END link
		
    }
});

app.directive('scrolText', function($timeout) {//	/pages/presentation/
	return {
		scope: {
			text:'=',
		},
		template: '<div class="text" ng-bind-html="text|html"></div>',
        replace: true,
		controller: function($scope, $element){
			$scope.$watch("text", function (newValue) {
				if($scope.text!=undefined && $scope.text!=''){
					$timeout( function(){ initScroll(); }, 10);
				}
			});
			function initScroll(){
				var height=$$($element).height();
				if(height<160){
					$$($element).height(height);
					$$($element).css({'padding-right':10});
				}
				else{
					$$($element).height(160);
					$$($element).scrollbars();
					$$($element).find('.scrollblock').after('<div class="scrollblock_bg"></div>');
				}
			}//END
		}//END controler
    }
});
app.directive('prImageList', function($timeout) {//	/pages/presentation/
	return {
		scope: {
			image_array:'=imageArray',
			pr_item_id:'=prItemId',
		},
		templateUrl: '/app/template/pages/presentation.image_list.inc.tpl',
        //replace: true,
		controller: function($scope, $element){
			var total=$scope.image_array.length;
			$scope.panel_total=(total%5==0)?(total/5):(1+((total-(total%5))/5));	
			$scope.selected_panel=1;
			$scope.clickPrev=function(){
				//console.log('clickPrev');
				if($scope.selected_panel==1){
					$scope.selected_panel=$scope.panel_total;
				}
				else{
					$scope.selected_panel--;
				}
			}
			$scope.clickNext=function(){
				//console.log('clickNext');
				if($scope.selected_panel==$scope.panel_total){
					$scope.selected_panel=1;
				}
				else{
					$scope.selected_panel++;
				}
			}
			function init(){
				var arr=$scope.image_array;
				var panel_nomber=1;
				var total=0;
				for(var i=0;i<arr.length;i++){
					if(total==5){
						total=0;
						panel_nomber++;
					}
					arr[i].panel_nomber=panel_nomber;
					total++;	
				}
				$scope.image_array=arr;
				
				$$($element).find('A').lightBox();	// подключаем lightbox для картинок
			}//END
			
			$scope.$watch("pr_item_id", function (newValue) {
				if($scope.pr_item_id!=undefined){
					$timeout( function(){ init(); }, 10);
				}
			});
			//init();
			
		}//END controler
    }
});

app.directive('rating', function($timeout) {//	
	return {
		scope: {
			field_id:'@fieldId',
			value:'=value',
		},
		template: [
			'<ul class="rating_box">',
				'<li class="">1</li>',
				'<li class="">2</li>',
				'<li class="">3</li>',
				'<li class="">4</li>',
				'<li class="">5</li>',
				'<input type="text" ng-model="value" id="{{field_id}}" style="display:none;"/>',
			'</ul>',
		].join(''),
        //replace: true,
		controller: function($scope, $element){
			//console.log('$scope.field_id='+$scope.field_id);
			//console.log('$scope.value='+$scope.value);
			//console.log($element);
			
			$scope.putAsafeApply = function(fn) {
				var status = this.$root.$$phase;
				if(status == '$apply' || status == '$digest') {
					if(fn && (typeof(fn) === 'function')) {
						fn();
					}
				} else {
					this.$apply(fn);
				}
			};
			
			function initRating(ann_id){
				
				// начальный инит
				jQuery.each($$($element).find('LI'), function() {
					var index=$$($element).find('INPUT').val();
					$$.each($$($element).find('LI'), function() {
						var index_inner=$$(this).html();
						if(index_inner<=index){
							$$(this).addClass('selected');
						}
						else{
							$$(this).removeClass('selected');
						}
					});//END each
				});
				
				// наведение мыши на li
				jQuery.each($$($element).find('LI'), function() {
					$$(this).mouseenter(function(){
						var index=$$(this).html();
						$$.each($$($element).find('LI'), function() {
							var index_inner=$$(this).html();
							if(index_inner<=index){
								$$(this).addClass('selected');
							}
							else{
								$$(this).removeClass('selected');
							}
						});//END each
					});//END mouseenter
				});
				
				// уведение мыши от всего UL
				$$($element).mouseleave(function(){
					var index=$$($element).find('INPUT').val();
					if(index==undefined){
						$$($element).find('LI').removeClass('selected');
						return;
					}
					$$.each($$($element).find('LI'), function() {
						var index_inner=$$(this).html();
						if(index_inner>index){
							$$(this).removeClass('selected');
						}
						else{
							$$(this).addClass('selected');
						}
					});
				});
				
				// установить rate
				$$($element).find('LI').click(function(){// установить rate
					var index=$$(this).html();
					$scope.putAsafeApply(function() {
						$scope.value = index;
					});
				});
				
			}//END
			initRating();
			
			$scope.$watch("value", function (newValue) {
				if($scope.value!=undefined){
					$timeout( function(){ initRating(); }, 0);
				}
			});
			
		}//END controler
    }
});

app.directive('quickSearch', function($http) {//	
	return {
		scope: {
		},
		template: [
			'<form>',
				'<input id="top_query" type="text" class="type-text" value="" placeholder="Найти на сайте..." />',
				'<input type="submit" value="" class="submit" />',
			'</form>',
		].join(''),
        replace: true,
		controller: function($scope, $element){
			function searchClass(){
				
				var self = this;
				this.script_url = '/respondents/script_client.php'; 
				
				this.init = function(){
					this.topQuickSearchInit();
				}//END init
				
				{// быстрый поиск
					this.search_array=[];
					this.inner_search_query_set='';
					this.quick_search_default_text = 'введите модель';
					
					this.topQuickSearchInit = function(){// init быстрого поиска
						var field_id='top_query';
									
						$$('#'+field_id).attr({'autocomplete':'off'});
						$$('#top_query_loading').hide();
						$$('#top_query_clear').hide();
						
						// обработка кнопок вверх, вниз, Enter
						$$('#top_query').keydown(function(eventObject){
							//console.log('кнопка - ' + eventObject.which );
							var total_search_item=$$('.top_search_form_container .item').length;
							if(total_search_item==0){
								return;
							} 
							if ((eventObject.which==40)||(eventObject.which==38)) {
								if (eventObject.which==40){//вниз
									//console.log('вниз');
									var select_item=$$('.top_search_form_container .item.selected');
									if(select_item.length>0){// уже создан выбранный элемент
										// смотрим чтобы элемент не был последним
										var last=$$('.top_search_form_container .item:last-child');
										if( $$(select_item).isEqual(last) ){
											return;
										}
										else{
											$$('.top_search_form_container .item').removeClass('selected');
											$$(select_item).next().addClass('selected');
											//$$(this).trigger('blur');
										}
									}
									else{
										$$('.top_search_form_container .item').removeClass('selected');
										$$('.top_search_form_container .item:first-child').addClass('selected');
										
									}
								}//END вниз
								if (eventObject.which==38){// вверх
									var select_item=$$('.top_search_form_container .item.selected');
									if(select_item.length>0){// уже создан выбранный элемент
										var first=$$('.top_search_form_container .item:first-child');
										if( $$(select_item).isEqual(first) ){
											$$('.top_search_form_container .item').removeClass('selected');
											$$(this).focus();
										}
										else{
											$$('.top_search_form_container .item').removeClass('selected');
											$$(select_item).prev().addClass('selected');
										}
									}
								}//END вверх
							}//END вверх-вниз
							if (eventObject.which==13) {// кнопка Enter
								var select_item=$$('.top_search_form_container .item.selected');
								if(select_item.length>0){
									//$$('.top_search_form_container .item.selected').children().focus();
									
									var href=$$('.top_search_form_container .item.selected').children().attr('href');
									//alert(href)
									document.location.replace(href);
									return false;
								}
							}
						
						});//END keydown
						
						//отслеживаение клика за пределами формы
						$$(document).click(function(e){
							if(
								($$(e.target).parents(' #top_search_form_container').length!=1)// клик по форме
								&&
								($$(e.target).attr('id')!=field_id)// клик по полю
							){
								$$('#top_search_form_container').hide();
							}
						});
						
						// клик по строке поиска
						$$('#'+field_id).click(function(eventObject){
							var query = $$.trim($$('#'+field_id).val());
							var total_search_item=$$('.top_search_form_container .item').length;
							if( query!=0 && total_search_item!=0){
								$$('#top_search_form_container').show();
							}
						});
						
						//обработка кнопки Esc
						$$('#'+field_id).keydown(function(eventObject){
							if (eventObject.which==27) {// кнопка Esc
								$$('#top_search_form_container').hide();
							}
						});
						
						// убрать всё лишнее если строка поиска пуста
						$$('#'+field_id).keyup(function(eventObject){
							if( $$('#'+field_id).val().length==0 ){
								self.clearQuickSearch();// очистить поиск
							}
						});
						
						// клик на кнопку очистить поиск
						$$('#top_query_clear').click(function(){
							self.clearQuickSearch();// очистить поиск
						});
						
						/*
						$$( '#'+field_id ).autocomplete({
							source: function( request, response  ) {
								self.searchAnn();
							},// end source:
							open : function(){},
							delay:500,
							minLength: 3,
							select: function( event, ui ) {	return false; },
							focus: function( event, ui ) { return false; }
							//change: function( event, ui ) { return false; }
						});// END autocomplete
						*/
						
						// подключаем поиск при наборе слова
						$$('#'+field_id).keyup(function(e) {
							// не реагируем на Enter
							var query=$$.trim( $$('#'+field_id).val() );
							//console.log(query)
							if (e.which!=13 && self.inner_search_query_set!=query) {
								self.inner_search_query_set=query;
								if(query.length<2){
									return;
								}
								self.searchAnn();
							}
						});
						
						// текст по умолчанию
						inputPlaceholder({'id':field_id, 'text':this.quick_search_default_text});
						
						
						$$('#'+field_id).val('');
						return;
					}//END topQuickSearchInit
					this.searchAnn = function(){
						$$( "#top_query" ).removeClass("ui-autocomplete-loading");// удаляем анимацию поиска в input
						$$('#top_query_loading').show();
						$$('#top_query_clear').show();
						var query=$$.trim( $$("#top_query").val() );
						$http.post(this.script_url, {mode:'searchAnn', query: query})
						.success(function (result) {
							
							$$('#top_query_loading').hide();
							self.search_array=result;
							self.bildSearchAnn();
						});
					}//END searchAnn
					this.bildSearchAnn = function(){// построить
						//console.log( 'bild' );
						var query=$$.trim( $$('#top_query').val() );
						var arr=this.search_array;
						var str='';
						if(arr.length==0){
							$$('#top_search_form_container').hide().html('');
							return;
						}
						
						str+='<div class="inner">';
						for(var i=0;i<arr.length;i++){
							//arr[i].name_h=this.highLightQuery(arr[i].name, query);
							/*
							{// подсветка "Продукт поставщика"
								var query_arr = query.split(' ');
								var name_h=arr[i].name;
								for(var j=0;j<query_arr.length;j++){
									var query_item=$$.trim(query_arr[j]);
									name_h=this.highLightQuery(name_h, query_item);
								}//EMD for
								arr[i].name_h=name_h;
							}
							*/
							
							str+=''
							+'<div class="item">'
								+'<a href="'+arr[i].url+'">'
									+'<div class="inner">'
										+'<div class="left">'
											+'<img src="/img/iResize.php?bg=E6E7EC&size=60&img='+arr[i].image+'"/>'
										+'</div>'
										+'<div class="center">'
											+'<div class="name">'+arr[i].name+'</div>'
											+'<div class="text">'+arr[i].cat_name_one+'</div>'
										+'</div>'
										+'<div class="right">'
											+'<div class="price">'+arr[i].price_str+' руб.</div>'
										+'</div>'
									+'</div>'
								+'</a>'
							+'</div>';
							
						}
						str+='</div>';
						
						
						$$('#top_search_form_container').show().html(str);;
						{//курсор мыши
							jQuery.each($$('.top_search_form_container .item'), function() {
								$$(this).mouseover(function() {// НАведение
									$$('.top_search_form_container .item').removeClass('selected');
									$$(this).addClass('selected');
								});
								$$(this).mouseleave(function() {// Уведение
									$$('.top_search_form_container .item').removeClass('selected');
								});
								$$(this).click(function (e) {
									//console.log('click')
									self.clearQuickSearch();
								});
							});//END jQuery.each
						}//END курсор мыши
						return;
					}//END bildSearchAnn
					this.clearQuickSearch = function(){// очистить поиск
						$$('#top_query').val('');
						$$('#top_search_form_container').hide().html('');
						$$('#top_query').focus();
						$$('#top_query_clear').hide();
						$$('#top_query_loading').hide();
					}//END clearQuickSearch
					this.highLightQuery = function(str, query){// подсветка фразы query в строке str
						if(query==''){
							return str;
						}
						//var query=$$.trim($$("#f_query").val());
						var regex = new RegExp (query, "igm");//для подстветки
						var p=str.match(regex);
						if(p){
							//var new_str=str.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $$.ui.autocomplete.escapeRegex(query) +")(?![^<>]*>)(?![^&;]+;)", "gi"), "<b style='color:red; background-color:#FFFF55;'>$1</b>" );
							//var new_str=str.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $$.ui.autocomplete.escapeRegex(query) +")(?![^<>]*>)(?![^&;]+;)", "gi"), "<b style='color:#e66017;'>$1</b>" );
							var new_str=str.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $$.ui.autocomplete.escapeRegex(query) +")(?![^<>]*>)(?![^&;]+;)", "gi"), "<b style='background:#794A11;'>$1</b>" );
							return new_str;
						}
						else{
							return str;
						}
						//return str;
			}//END highLightQuery
				}//END быстрый поиск
				
				
			}//END
			var s_obj=new searchClass();
			s_obj.init();
		}//END controler
    }
});

app.directive('inputAmount', function($timeout, basketFactory) {//	
	return {
		scope: {
			ann_id:'@annId',
			amount:'@amount',
		},
		template: '<input type="text" value="1" maxlength="2" ng-model="amount" />',
        replace: true,
		controller: function($scope, $element){
			/*
			console.log($scope.ann_id);
			$scope.$watch("value", function (newValue) {
				if($scope.value!=undefined){
					$timeout( function(){ initRating(); }, 0);
				}
			});
			*/
			
			$scope.checkUpdateBasketItem=function(){
				//console.log('inputAmount:checkUpdateBasketItem');
				var item=basketFactory.getBasketItem($scope.ann_id);
				//console.log(item);
				//console.log('amount_new='+$scope.amount);
				if($scope.amount==''){
					$scope.amount=1;
				}
				if($scope.amount==0){
					$scope.amount=item.amount;
				}
				// проверяем может число не изменилось
				if($scope.amount==item.amount){
					return;
				}
				$scope.updateBasketItem();
			}//END
			$scope.updateBasketItem=function(){
				//console.log('inputAmount:updateBasketItem');
				basketFactory.updateBasketItem({id:$scope.ann_id, amount:$scope.amount});
			}//END
			
			function init(){
				{// запрет набора всего кроме цифр
					$$($element).keypress(function(event) {
						// проверка на event.charCode - чтобы пользователь мог нажать backspace, enter, стрелочку назад...
						if (event.charCode && (event.charCode < 48 || event.charCode > 57))
						{
							return false;
						}
					});
				}//END
					
				// уведенеим мышки
				jQuery($element).mouseout(function(){
					$scope.checkUpdateBasketItem();
				});//END jQuery
					
				// нажатие кнопок
				$$($element).keydown(function(event){
					/*
					//Esq
					if (event.which == 27 ) {
						//$$('#of_name').focus();
						//self.restoreBasketItem(id);
						var amount=parseInt($$('#basket_amount_span_'+id).html());
						$$('#basket_amount_input_'+id).val(amount);
						$$('#basket_amount_input_'+id).focus();
						//console.log( 'Esq' );
					}
					*/
					// Enter
					if (event.which == 13 ) {
						$scope.checkUpdateBasketItem();
					}
				});
				return;
			}//END
			init();
			
		}//END controler
    }
});


/**********************FACTORY******************************/
/*************************************************************/
app.factory('DataCache', function ($cacheFactory) {
	return $cacheFactory('dataCache', {});
});

app.factory('compareFactory', function($http, DataCache, annFactory){
     
    var fac = {};
    var list={};
    
	fac.add=function(config){
		//console.log('compareFactory:add');
		//console.log(config);
		if(list[config.root_cat_id]==undefined){
			list[config.root_cat_id]={};
		}
		list[config.root_cat_id][config.ann_id]=config;
		
		config.in_compare=1;
		setCompare(config);
	}
	fac.delete=function(config){
		//console.log('compareFactory:delete');
		//console.log(config);
		if(list[config.root_cat_id] && list[config.root_cat_id][config.ann_id]){
			delete list[config.root_cat_id][config.ann_id];
		}
		config.in_compare=0;
		setCompare(config);
	}
	fac.getAll=function(){
		return list;
	}
	fac.init=function(init_list){
		//console.log('compareFactory:init()');
		//console.log(init_list);
		if(init_list.length==0){
			return;
		}
		//console.log(init_list );
		//console.log(init_list.length );
		list=init_list;
	}
	fac.getCompareUrl=getCompareUrl;
	
	function setCompare(config){// сохранение на сервер
		var compare_mode=(config.in_compare==1)?('add'):('delete');
		//console.log(config);
		//return;
		$http.post('/respondents/script_client.php', {mode: 'setCompare', id: config.ann_id, compare_mode:compare_mode})
		.success(function (result) {
			updateCache(config);
		})
	}
	
	function updateCache(config){
		//console.log('compareFactory:updateCache')
		//console.log(config)
		var root_cat_id=config.root_cat_id;
		var cat_mnemonic=config.cat_mnemonic;
		var ann_mnemonic=config.ann_mnemonic;
		var ann_id=config.ann_id;
		var in_compare=config.in_compare;
		var seria_mnemonic=config.seria_mnemonic;
		var compare_total=countInCompare(root_cat_id);
		var compare_url=getCompareUrl(root_cat_id);
		//console.log('compare_total='+compare_total)
		
		{//синхронизация cat_ann_array_ctrl: mnemonic+'_'+cat_mnemonic
			var page = DataCache.get('catalog_'+cat_mnemonic);
			if(page!=undefined){
				for(var i=0;i<page.ann_array.length;i++){
					if(page.ann_array[i].id==ann_id){
						page.ann_array[i].in_compare=in_compare;
					}
					page.ann_array[i].compare_total=compare_total;
					page.ann_array[i].compare_url=compare_url;
				}
				DataCache.put('catalog_'+cat_mnemonic, page);
			}
		}//END
		
		{//синхронизация seria_ann_array_ctrl: mnemonic+'_'+seria_mnemonic
			var page = DataCache.get('catalog_'+seria_mnemonic);
			if(page!=undefined){
				for(var i=0;i<page.seria_cat_array.length;i++){
					if(page.seria_cat_array[i].root_cat_id==root_cat_id){
						//console.log(page.seria_cat_array[i])
						for(var j=0;j<page.seria_cat_array[i].ann_array.length;j++){
							if(page.seria_cat_array[i].ann_array[j].id==ann_id){
								page.seria_cat_array[i].ann_array[j].in_compare=in_compare;
							}
							page.seria_cat_array[i].ann_array[j].compare_total=compare_total;
							page.seria_cat_array[i].ann_array[j].compare_url=compare_url;
						}
					}
				}
				DataCache.put('catalog_'+seria_mnemonic, page);
			}
		}//END
		
		{//синхронизация ann_item_ctrl: mnemonic+'_'+cat_mnemonic+'_'+ann_mnemonic
			{// 1 обновляем in_compare у ann_item по которой кликнули
				var page = DataCache.get('catalog_'+cat_mnemonic+'_'+ann_mnemonic);
				if(page!=undefined){
					page.ann_item.in_compare=in_compare;	
					DataCache.put('catalog_'+cat_mnemonic+'_'+ann_mnemonic, page);
				}
			}//END
			{// 2 обновляем у массива ранее загруженный ann_item
				var ann_array=annFactory.getAll();
				for(var i in ann_array) {
					if (!ann_array.hasOwnProperty(i)) continue;
					//console.log(ann_array[i]);
					var page = DataCache.get('catalog_'+ann_array[i].cat_mnemonic+'_'+ann_array[i].mnemonic);
					if (page==undefined) continue;
					//console.log('page');
					//console.log('catalog_'+ann_array[i].cat_mnemonic+'_'+ann_array[i].mnemonic);
					//console.log(page);
					page.ann_item.compare_total=compare_total;
					page.ann_item.compare_url=compare_url;
					DataCache.put('catalog_'+ann_array[i].cat_mnemonic+'_'+ann_array[i].mnemonic, page);
				}//END for
			}
		}//END
		
	}//END
	function countInCompare(root_cat_id){
		//console.log('countInCompare root_cat_id='+root_cat_id);
		var total=0;
		for(var i in list[root_cat_id]) {
			if (!list[root_cat_id].hasOwnProperty(i)) continue;
			total++;
		}
		return total;
	}
	function getCompareUrl(root_cat_id){
		//console.log('getCompareUrl()');
		var str='';
		//var total=0;
		for(var i in list[root_cat_id]) {
			if (!list[root_cat_id].hasOwnProperty(i)) continue;
			
			str+=list[root_cat_id][i].ann_id+'~';
		}
		str=str.substr(0, str.length-1);
		if(str==''){
			return '';
		}
		str='/compare/'+str+'/';
		//console.log(str);
		return str;
	}
	
	
    return fac;
 
});

app.factory('annFactory', function(){
	
	var factory={};
	var ann_array={};
	
	factory.add=add;
	factory.get=get;
	factory.getAll=getAll;
	
	function add(item){
		//console.log('annFactory:add');
		ann_array[item.id]=item;
	}
	function getAll(){
		//console.log('annFactory:getAll');
		return ann_array;
	}
	function get(id){
		//console.log('annFactory:get');
		return ann_array[id];
	}
	
	return factory;
})

app.factory('basketFactory', function(annFactory, $http, DataCache){
	
	{// init
		var factory={};
		var basket={};
		basket.ann_array=[];
		basket.summa=0;
		basket.summa_str='';
		
		factory.addToBasket=addToBasket;
		factory.updateBasketItem=updateBasketItem;
		factory.deleteFromBasket=deleteFromBasket;
		factory.getBasket=getBasket;
		factory.getBasketItem=getBasketItem;
		factory.init=init;
		factory.clearBasket=clearBasket;
	}
	
	function addToBasket(config){
		//console.log('basketFactory:addToBasket()');
		//console.log('ann_item from annFactory');
		//console.log(ann_item);
		
		showProcess('Добавление в корзину');
		//return;
		$http.post('/respondents/script_client.php', {mode: 'addToBasket', id: config.id, amount:config.amount})
		.success(function (result) {
			//updateCache(config);
			// получаем ann_item 
			var ann_item=annFactory.get(config.id);
			//console.log('ann_item from annFactory');
			//console.log(ann_item);
			var item={};
			item.id=ann_item.id;
			item.name=ann_item.name;
			item.name_full=ann_item.name_full;
			item.cat_name_one=ann_item.cat_name_one;
			item.seria_name=ann_item.seria_name;
			item.image=ann_item.image_array[0].image;
			item.price=ann_item.price;
			item.price_str=ann_item.price_str;
			item.url=ann_item.url;
			item.amount=config.amount;
			//item.summa=ann_item.summa;
			///item.summa_str=ann_item.summa_str;
			//console.log('add item')
			//console.log(item)
			basket.ann_array.push(item);
			
			_updateDataCacheItem({mode:'add', amount:config.amount, id:config.id});
			_updateBasket();
			hideProcess();
		});
	}//END
	function updateBasketItem(config){
		//console.log('basketFactory:updateBasketItem()');
		
		$http.post('/respondents/script_client.php', {mode: 'updateBasketItem', id: config.id, amount:config.amount})
		.success(function (result) {
			
			// возможно перенести в отдельный метод
			var arr=basket.ann_array;
			for(var i=0;i<arr.length;i++){
				if(arr[i].id==config.id){
					arr[i].amount=config.amount;
				}
			}
			
			_updateDataCacheItem({mode:'update', amount:config.amount, id:config.id});
			_updateBasket();
			hideProcess();
		});
		
		return;
	}//END
	function deleteFromBasket(id){
		//console.log('basketFactory:deleteFromBasket()');
		//console.log('id='+id);
		
		$http.post('/respondents/script_client.php', {mode: 'deleteFromBasket', id: id})
		.success(function (result) {
			var arr=basket.ann_array;
			for (var i = arr.length; i >= 0; i--) {
				if(arr[i]!=undefined && arr[i].id==id){
					arr.splice(i,1);
				}
			} 
			basket.ann_array=arr;
			_updateDataCacheItem({mode:'delete', id:id});
			_updateBasket();
		});
		
	
	}//END
	function getBasket(){
		//console.log('basketFactory:getBasket()');
		return basket;
	}
	function getBasketItem(id){
		var arr=basket.ann_array;
		for(var i=0;i<arr.length;i++){
			if(arr[i].id==id){
				return arr[i];
			}
		}
		return false;
	}//END
	function init(init_list){
		if(init_list.length==0){
			return;
		}
		basket=init_list;
		
		if(basket.ann_array==null){
			basket.ann_array=[];
		}
		
	}
	function clearBasket(){
		basket.ann_array=[];
		basket.summa=0;
		basket.summa_str='';
		_updateDataCacheAll({mode:'delete_all'});
		
	}//
	
	// служебные
	/*
	*/
	function _updateDataCacheItem(config){// 
		//console.log('basketFactory:_updateDataCacheItem()');
		//console.log(config);
		var ann_item=annFactory.get(config.id);
		if(ann_item==undefined){
			return;
		}
		//console.log(ann_item);
		var page = DataCache.get('catalog_'+ann_item.cat_mnemonic+'_'+ann_item.mnemonic);
		if(page==undefined){
			return;
		}
		
		if(config.mode=='add'){
			page.ann_item.in_basket=1;
			page.ann_item.in_basket_amount=config.amount;
		}
		if(config.mode=='delete'){
			page.ann_item.in_basket=0;
			page.ann_item.in_basket_amount=0;
		}
		if(config.mode=='update'){
			page.ann_item.in_basket=1;
			page.ann_item.in_basket_amount=config.amount;
		}
		
		//console.log('page=')
		//console.log(page)

		
		DataCache.put('catalog_'+ann_item.cat_mnemonic+'_'+ann_item.mnemonic, page);
		return;
	}//END
	function _updateDataCacheAll(config){
		//console.log('_updateDataCacheAll()')
		var arr=annFactory.getAll();
		//console.log(arr)
		//for(var i=0;i<arr.length;i++){
		for(var i in arr) {
			if (!arr.hasOwnProperty(i)) continue;
			
			var page = DataCache.get('catalog_'+arr[i].cat_mnemonic+'_'+arr[i].mnemonic);
			//console.log('page from DataCache');
			//console.log(page);
			if (page==undefined) continue;
			
			if(config.mode=='delete_all'){
				page.ann_item.in_basket=0;
				page.ann_item.in_basket_amount=0;
			}
			
			DataCache.put('catalog_'+arr[i].cat_mnemonic+'_'+arr[i].mnemonic, page);
		}
		return;
	}//END
	function _updateBasket(){//
		//console.log('basketFactory:_updateBasket()');
		var total_summa=0;
		var arr=basket.ann_array;
		for(var i=0;i<arr.length;i++){
			arr[i].summa=arr[i].amount*arr[i].price;
			total_summa=total_summa+arr[i].summa;
			arr[i].summa_str=numeric_format(arr[i].summa, ' ');
		}
		//console.log(arr);
		basket.ann_array=arr;
		basket.summa=total_summa;
		basket.summa_str=numeric_format(total_summa, ' ');
		return;
	}//END
	
	return factory;
});

// https://habrahabr.ru/post/197762/
// не используется
/*
app.factory('StateManager', function StatemManager($rootScope, $log) {

	var stateContainer = [];
	
	return {
        add: function (service) {
            stateContainer.push(service);
            $rootScope.globalLoader = true;
			$log.log('Add service: ' + service);
        },

        remove: function (service) {
            stateContainer = _.without(stateContainer, service);
            $log.log('Remove service: ' + service);

            if (stateContainer.length === 0) {
                $rootScope.globalLoader = false;
                $log.log('StateContainer is empty.');
            }

        },

        getByName: function (service) {
            return _.include(stateContainer, service)
        },

        clear: function () {
            stateContainer.length = 0;
            $log.log('StateContainer clear.');
            return true; 
        }
	}

});
*/

/*для теста*/app.controller('data_ctrl', function ($scope, $routeParams, $http, $rootScope, DataCache, compareFactory, $timeout, $location, basketFactory) {
	
	$scope.getCacheData=function(){
		/*
		console.log('data_ctrl:getData()');
		console.log( DataCache );
		console.log( DataCache.get() );
		console.log( DataCache.info() );
		*/
		//DataCache.getData();
		
		
		/*
		var cat_mnemonic = $routeParams.cat_mnemonic || 'begovye-dorozhki';
		console.log( 'cat_mnemonic='+cat_mnemonic );
		var mnemonic='catalog';
		
		var page = DataCache.get(mnemonic+'_'+cat_mnemonic);
		console.log( page );
		
		page.ann_array[0].name='test';
		
		DataCache.put(mnemonic+'_'+cat_mnemonic, page);
		
		
		var page = DataCache.get(mnemonic+'_'+cat_mnemonic);
		console.log( page );
		*/
		
	}
	
	$scope.getCompareData=function(){
		
		
		
		//console.log( compareFactory.getAll() );
		console.log( 'data_ctrl:getCompareData' );
		//$location.url('/catalog/begovye-dorozhki/atm518tft/');
		//$location.url('/catalog/begovye-dorozhki/atm518tft/');
		$location.hash('')
	}
	
	$timeout( function(){
		$scope.compare_list=compareFactory.getAll();
		$scope.basket=basketFactory.getBasket();
		
	}, 1000);

});
