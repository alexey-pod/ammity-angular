<!-- загрузка файлов -->
<!--
<script src="/js/fileuploader/fileuploader_2.js" type="text/javascript-lazy"></script>
<link href="/js/fileuploader/fileuploader.css" rel="stylesheet" type="text/css" />
-->


<!--ВЕРСИЯ ДЛЯ РАБОТЫ-->

<section class="content-main">
	
	<div class="page_header margin_bottom">
		<h1>{{page.page_item.name}}</h1>
	</div>
	
	<div class="become-box" style="margin-bottom:0;padding-bottom:0;">
		<div 
			ng-if="page.page_item.text"
			ng-bind-html="page.page_item.text|html"
			>
		</div>
	</div>
	
	<div class="page_rasp">все поля формы являются обязательными для заполнения</div>
	
	<div class="page_form product_registration">
		<table class="form_table">
			<tr ><!--Ваше ФИО fio-->
				<td class="name">Ваше ФИО:</td>
				<td class="value">
					<input type="text" value="" id="fio" ng-model="form.fio" />
				</td>
			</tr>
			<tr ><!--Email email-->
				<td class="name">Email:</td>
				<td class="value">
					<input type="text" value="" id="email" ng-model="form.email" />
				</td>
			</tr>
			<tr ><!--Телефон с кодом города phone-->
				<td class="name">Телефон с кодом города:</td>
				<td class="value">
					<input type="text" value="" id="phone" ng-model="form.phone" placeholder="8 (000) 000-00-00" />
				</td>
			</tr>
			<tr ><!--Город city-->
				<td class="name">Город:</td>
				<td class="value">
					<input type="text" value="" id="city" ng-model="form.city" />
				</td>
			</tr>
			<tr ><!--Магазин shop-->
				<td class="name">Магазин, где был приобретен товар:</td>
				<td class="value ">
					<input type="text" value="" id="shop" ng-model="form.shop" />
				</td>
			</tr>
			<tr ><!--Дата продажи sale_date-->
				<td class="name">Дата продажи (по чеку):</td>
				<td class="value">
					<datetime_sale_date sale_date="form.sale_date"></datetime_sale_date>
				</td>
			</tr>
			
			<tr ><!--Выберите Ваш продукт cat_id catChange()-->
				<td class="name">Выберите Ваш продукт:</td>
				<td class="value">
					<select_cat_id 
						cat_id="form.cat_id" 
						cat_array="page.cat_array"
						seria_array="seria_array"
						seria_id="form.seria_id"
						model_id="form.model_id"
						>
					</select_cat_id>
				</td>
			</tr>
			<tr ><!--Выберите серию seria_id seriaChange()-->
				<td class="name">Выберите серию:</td>
				<td class="value">
					<select_seria_id 
						cat_id="form.cat_id" 
						cat_array="page.cat_array"
						seria_array="seria_array"
						seria_id="form.seria_id"
						model_id="form.model_id"
						ann_array="ann_array"
						>
					</select_cat_id>
				</td>
			</tr>
			<tr ><!--Выбери модель model_id-->
				<td class="name">Выбери модель:</td>
				<td class="value">
					<select_model_id 
						model_id="form.model_id"
						ann_array="ann_array"
						cat_id="form.cat_id" 
						seria_id="form.seria_id"
					>
					</select_model_id>
				</td>
			</tr>
			
			<tr ><!--Введите серийный номер продукта serial_number-->
				<td class="name">Введите серийный номер продукта:</td>
				<td class="value">
					<input type="text" value="" id="serial_number" ng-model="form.serial_number" />
				</td>
			</tr>
			
			<tr ><!--Скан-копия гарантийного талона-->
				<td class="name">Скан-копия гарантийного талона:</td>
				<td class="value text">
					<file_uploader attach_str="form.attach_str"></file_uploader>
				</td>
			</tr>
			<tr ><!--обязательно к заполнению-->
				<td class="name"></td>
				<td class="value info">
					Все поля обязательны для заполнения. Пожалуйста, внимательно проверьте написание адреса вашей электронной почты, и при необходимости, укажите дополнительный способ связи. После отправки вашего обращения или вопроса, специалист ответит вам в кратчайшие сроки. Обращаем ваше внимание, что отдел поддержки работает с 10:00 до 18:00 часов по московскому времени, в будни. 
				</td>
			</tr>
			<tr ><!--Отправить-->
				<td class="name"></td>
				<td class="value">
					<div class="btn_send transition" ng-click="sendForm();">Отправить</div>
					<!--
					<div class="btn_send transition" ng-click="reset();">reset</div>
					-->
				</td>
			</tr>
		</table>
	
		<br>
	</div>
	
</section>


