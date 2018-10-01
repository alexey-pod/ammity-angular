<section class="content-main full-content" >
	<div class="page_header">
		<h1>Сравнение товаров</h1>
	</div>
	<div class="menu_nav_bar">
		
		<a 
			class="tab tab_control_item" 
			ng-class="{active: page.get.diff==0}"
			style="margin-left:-7px; z-index:50;" 
			href="/compare/{{page.get.compare_list}}/"
		>
			<div class="gl l"></div>
			<div class="gc c" style="">все характеристики</div>
			<div class="gr r"></div>
		</a>
		
		<a 
			class="tab tab_control_item" 
			ng-class="{active: page.get.diff==1}"
			style="z-index:40;" href="/compare/{{page.get.compare_list}}/?diff=1">
			<div class="gl l"></div>
			<div class="gc c" style="">только отличающиеся характеристики</div>
			<div class="gr r"></div>
		</a>
			
	</div>
	<div class="table-box clearfix">
		
		<table class="table-tovar">
			<tr>
				<td>
				</td>
				<td ng-repeat="model_item in page.compare_array.model_array">
					<div class="relative">
						<a 
							ng-click="delete(model_item);"
							class="close" 
							item_id="{{model_item.id}}"
						></a>
						<div ng-if="model_item.is_disable==1" class="disable">отключено</div>
						<a href="{{model_item.url}}">
							<img src="/img/iResize.php?w=100&h=100&bg=ffffff&img={{model_item.image}}"/>
						</a>
						<h3><a href="{{model_item.url}}">{{model_item.name}}</a></h3>
					</div>
				</td>
			</tr>
		</table>
		
		<div ng-repeat="(key_1, val_1) in page.compare_array.param_array">
			<h2>{{key_1}}</h2>
			<table class="table-tovar-desc">
				<tr ng-repeat="(key_2, val_2) in val_1">
					<td width="400"><strong>{{key_2}}</strong></td>
					<td ng-repeat="el in val_2 track by $index">{{el}}</td>
				</tr>
			</table>
		</div>
		
	</div>
</section>