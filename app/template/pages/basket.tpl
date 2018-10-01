<section class="content-main">
	
	<div class="page_header margin_bottom">
		<h1>{{page.page_item.name}}</h1>
	</div>
	
	<div
			class="become-box"
			ng-if="page.page_item.text"
			ng-bind-html="page.page_item.text|html"
		>
	</div>
	
	<div class="basket_page" ng-if="basket.summa!=0">
		<div class="page_form " >
			<table class="order_spec">
				<tr class="header">
					<td class="delete"></td>
					<td class="name">Наименование</td>
					<td class="price">Цена</td>
					<td class="qty">Кол-во</td>
					<td class="sum">Сумма</td>
				</tr>
				<tbody id="order_spec_tbody">
					<tr class="item" ng-repeat="item in basket.ann_array" >
						<td class="delete" title="удалить" ng-click="deleteFromBasket(item);"></td>
						<td class="name">
							<a href="{{item.url}}">{{item.name_full}}</a>
						</td>
						<td class="price">{{item.price_str}} руб.</td>
						<td class="qty">
							<input_amount amount="{{item.amount}}" ann_id="{{item.id}}"></input_amount>  шт
							<!--
							<input type="text" value="1" maxlength="2" 
								ng-model="item.amount" 
								/> шт
							-->
						</td>
						<td class="sum">{{item.summa_str}} руб.</td>
					</tr>
					<!--
					<tr class="item">
						<td class="delete" title="удалить"></td>
						<td class="name"><a href="#">Виброплатформа — Clear Fit CF-PLATE Force 501</a></td>
						<td class="price">120 000 руб.</td>
						<td class="qty">
							<input type="text" value="1" maxlength="2" /> шт
						</td>
						<td class="sum">120 000 руб.</td>
					</tr>
					<tr class="item">
						<td class="delete" title="удалить"></td>
						<td class="name"><a href="#">Виброплатформа — Clear Fit CF-PLATE Force 501</a></td>
						<td class="price">120 000 руб.</td>
						<td class="qty">
							<input type="text" value="1" maxlength="2" /> шт
						</td>
						<td class="sum">120 000 руб.</td>
					</tr>
					<tr class="item">
						<td class="delete" title="удалить"></td>
						<td class="name"><a href="#">Виброплатформа — Clear Fit CF-PLATE Force 501</a></td>
						<td class="price">120 000 руб.</td>
						<td class="qty">
							<input type="text" value="1" maxlength="2" /> шт
						</td>
						<td class="sum">120 000 руб.</td>
					</tr>
					
					-->
				</tbody>
				<tr class="total">
					<td class="delete"></td>
					<td colspan="2" class="name">Итого</td>
					<td colspan="2" class="sum"><span id="basket_total_summa">{{basket.summa_str}}</span> руб.</td>
				</tr>
			</table>
		</div>
		<div class="page_rasp bold">ЗАПОЛНИТЕ ФОРМУ И ЗАКАЗ БУДЕТ ПЕРЕДАН БЛИЖАЙШЕНМУ ДИЛЕРУ В ВАШЕМ РЕГИОНЕ:</div>
		<div class="page_form " >
			<table class="form_table">
				<tr><!--ФИО--> 
					<td class="name">Ваше ФИО:</td>
					<td class="value">
						<input id="b_fio" ng-model="form.fio" type="text" size="30" value=""/>
					</td>
				</tr>
				<tr><!--Телефон-->
					<td class="name">Телефон:</td>
					<td class="value">
						<input placeholder="8 (000) 000-00-00" id="b_phone" ng-model="form.phone" type="text" size="30" value=""/>
					</td>
				</tr>
				<tr><!--email-->
					<td class="name">E-mail:</td>
					<td class="value">
						<input placeholder="адрес электронной почты" id="b_email" ng-model="form.email" type="text" size="30" value=""/>
					</td>
				</tr>
				<tr><!--Город-->
					<td class="name">Город:</td>
					<td class="value">
						<input placeholder="город доставки" id="b_city" ng-model="form.city" type="text" size="30" value=""/>
					</td>
				</tr>
				<tr><!--Адрес-->
					<td class="name">Адрес:</td>
					<td class="value">
						<input placeholder="адрес доставки" id="b_address" ng-model="form.address" type="text" size="30" value=""/>
					</td>
				</tr>
				<tr><!--вопрос:-->
					<td class="name">Примечание:</td>
					<td class="value">
						<textarea id="b_text" ng-model="form.text"></textarea>
					</td>
				</tr>
				<tr ><!--Отправить-->
					<td class="name"></td>
					<td class="value">
						<div class="btn_send transition" ng-click="sendForm();">Отправить заказ</div>
					</td>
				</tr>
			</table>
		</div>	
		
	
	</div>
		
	<div class="basket_page_confirm become-box" ng-if="order.send==1">
		<div class="text">
			<p>Благодарим за заказ.</p>
			<p>Ожидайте звонка ближайшего торгового представителя.</p>
		</div>
		
		<div class="order">Ваш заказ <span>{{order.nomber}}</span></div>
		
		<div class="return">
			<a href="/catalog/">вернуться в каталог</a>
		</div>
	</div>
	
	<div class="basket_page_empty" ng-if="basket.summa==0 && order.send!=1">
		<div class="become-box" style="text-align:center;">
			<br>
			<img src="/img/client/basket/basket_empty.png"
				alt="Для оформления заказа - добавьте товары в корзину" 
				title="Для оформления заказа - добавьте товары в корзину"
				/>
		</div>
	</div>
	
</section>