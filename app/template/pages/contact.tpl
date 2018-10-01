<section class="content-main">
	
	<div class="page_header margin_bottom">
		<h1>{{page.page_item.name}}</h1>
	</div>
	
	<div class="become-box" style="margin-bottom:0;padding-bottom:0;">
	
		<div
			ng-if="page.page_item.text"
			ng-bind-html="page.page_item.text|html"
		></div>
		
		<div class="contact_menu" id="contact_menu">
			<div class="item question"	ng-click="setTab('question');"
				ng-class="{'selected': selected_tab=='question'}"
			></div>
			<div class="item comment"	ng-click="setTab('comment');" 
				ng-class="{'selected': selected_tab=='comment'}"
			></div>
			<div class="item service"	ng-click="setTab('service');"
				ng-class="{'selected': selected_tab=='service'}"
			></div>
		</div>
	</div>
	
	<div 
		class="page_form" id="question_form" 
		ng-style="selected_tab!='question' ?{'display':'none'}:{}"
	><!--Вопрос в компанию-->
		<div class="header">Вопрос в компанию:</div>
		<table class="form_table" ng-controller="pages_contact_ctrl_question">
			<tr ><!--Ваше ФИО fio-->
				<td class="name">Ваше ФИО:</td>
				<td class="value">
					<input type="text" value="" id="q_fio" ng-model="form.fio" />
				</td>
			</tr>
			<tr ><!--Email email-->
				<td class="name">Email:</td>
				<td class="value">
					<input type="text" value="" id="q_email" ng-model="form.email" />
				</td>
			</tr>
			<tr ><!--Телефон с кодом города phone-->
				<td class="name">Телефон с кодом города:</td>
				<td class="value">
					<input type="text" value="" id="q_phone" placeholder="8 (000) 000-00-00" ng-model="form.phone" />
				</td>
			</tr>
			<tr ><!--вопрос:-->
				<td class="name">вопрос:</td>
				<td class="value">
					<textarea id="q_text" ng-model="form.text"></textarea>
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
				</td>
			</tr>
		</table>
	</div>
	
	<div class="page_form" id="comment_form"
		ng-style="selected_tab!='comment' ?{'display':'none'}:{}"
	><!--Отзыв о продукте-->
		<div class="header">Отзыв о продукТЕ:</div>
		<table class="form_table" ng-controller="pages_contact_ctrl_comment">
			<tr ><!--Выберите Ваш продукт cat_id-->
				<td class="name">Выберите продукт:</td>
				<td class="value">
					<!--
					<select id="c_cat_id" onchange="p_obj.catChangeComment();">
						<option value="0">выбор...</option>
						<option 
							ng-repeat="cat_item in page.cat_array"
							value="{{cat_item.id}}" 
							data-root_cat_id="{{cat_item.root_cat_id}}"
						>{{cat_item.name}}</option>
					</select>
					-->
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
			<tr ><!--Выберите серию seria_id-->
				<td class="name">Выберите серию:</td>
				<td class="value">
					<!--
					<select id="c_seria_id" onchange="p_obj.seriaChangeComment();">
						<option value="0">выбор...</option>
					</select>
					-->
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
					<!--
					<select id="c_model_id">
						<option value="0">выбор...</option>
					</select>
					-->
					<select_model_id 
						model_id="form.model_id"
						ann_array="ann_array"
						cat_id="form.cat_id" 
						seria_id="form.seria_id"
					>
					</select_model_id>
				</td>
			</tr>
			<tr class="hide_"><!-- design-->
				<td class="name">Дизайн:</td>
				<td class="value" id="rating_design">
					<rating value="form.design" field_id="design" ></rating>
				</td>
			</tr>
			<tr ><!-- safety-->
				<td class="name">Надежность:</td>
				<td class="value" id="rating_safety">
					<rating value="form.safety" field_id="safety" ></rating>
				</td>
			</tr>
			<tr class="hide_"><!-- functionality-->
				<td class="name">Функциональность:</td>
				<td class="value" id="rating_functionality">
					<rating value="form.functionality" field_id="functionality" ></rating>
				</td>
			</tr>
			<tr class="hide_"><!-- comfort-->
				<td class="name">Комфорт:</td>
				<td class="value" id="rating_comfort">
					<rating value="form.comfort" field_id="comfort" ></rating>
				</td>
			</tr>
			<tr ><!--отзыв:-->
				<td class="name">отзыв:</td>
				<td class="value">
					<textarea id="c_text" ng-model="form.text"></textarea>
				</td>
			</tr>
			<tr ><!--Ваше ФИО fio-->
				<td class="name">Ваше ФИО:</td>
				<td class="value">
					<input type="text" value="" id="c_fio" ng-model="form.fio" />
				</td>
			</tr>
			<tr ><!--Email email-->
				<td class="name">Email:</td>
				<td class="value">
					<input type="text" value="" id="c_email" ng-model="form.email" />
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
				</td>
			</tr>
		</table>
	</div>
	
	<div class="page_form" id="service_form"
		ng-style="selected_tab!='service' ?{'display':'none'}:{}"
	><!--Обращение в сервисную службу-->
		<div class="header">Обращение в сервисную службу:</div>
		<table class="form_table" ng-controller="pages_contact_ctrl_service">
			<tr ><!--Ваше ФИО fio-->
				<td class="name">Ваше ФИО:</td>
				<td class="value">
					<input type="text" value="" id="s_fio" ng-model="form.fio" />
				</td>
			</tr>
			<tr ><!--Email email-->
				<td class="name">Email:</td>
				<td class="value">
					<input type="text" value="" id="s_email" ng-model="form.email" />
				</td>
			</tr>
			<tr ><!--Телефон с кодом города phone-->
				<td class="name">Телефон с кодом города:</td>
				<td class="value">
					<input type="text" value="" id="s_phone" placeholder="8 (000) 000-00-00" ng-model="form.phone" />
				</td>
			</tr>
			<tr ><!--магазин-->
				<td class="name">магазин:</td>
				<td class="value">
					<input type="text" value="" id="s_shop" placeholder="магазин, где был приобретен товар" ng-model="form.shop" />
				</td>
			</tr>
			<tr ><!--Выберите Ваш продукт cat_id-->
				<td class="name">Выберите продукт:</td>
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
			<tr ><!--Выберите серию seria_id-->
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
			<tr ><!--serial_number-->
				<td class="name">Серийный номер:</td>
				<td class="value">
					<input type="text" value="" id="s_serial_number" ng-model="form.serial_number" />
				</td>
			</tr>
			<tr ><!--Причина обращения::-->
				<td class="name">Причина обращения:</td>
				<td class="value">
					<textarea id="s_text" ng-model="form.text"></textarea>
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
				</td>
			</tr>
		</table>
	</div>
	
</section>
<div class="hide">
	<img src="/img/client/bContact_comment_over.png"/>
	<img src="/img/client/bContact_comment_down.png"/>
	<img src="/img/client/bContact_service_over.png"/>
	<img src="/img/client/bContact_service_down.png"/>
	<img src="/img/client/icon/star_red.png"/>
</div>