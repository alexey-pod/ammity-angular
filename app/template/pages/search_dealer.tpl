<section class="content-main">
	
	<div class="page_header margin_bottom">
		<h1>{{page.page_item.name}}</h1>
	</div>
	
	<diler_map diler_map_array="page.diler_map_array"></diler_map>
	
	<div class="become-box" style="margin-bottom:0;padding-bottom:0;">
		<div 
			ng-if="page.page_item.text"
			ng-bind-html="page.page_item.text|html"
		></div>
		
		<div class="select_city">
			<div class="list">
				<div
					ng-repeat="item in alphabet_array"
					class="item" 
					ng-class="{'selected': letter==item, 'disabled': !page.diler_array[item]}"
					ng-click="setLetter(item);">{{item}}
				</div>
			</div>
			<div  
				ng-class="{'show_all show': letter!='', 'show_all': letter==''}"
				ng-click="setLetter('');">показать весь список</div>
		</div>
		
		<table class="diler_list" id="d_table">
			<tbody
				ng-repeat="diler_item_letter in page.diler_array"
			>
				<tr class="letter" ng-style="diler_item_letter[0].index_letter==letter || letter=='' ?{}:{'display':'none'}" >
					<td colspan="4">{{diler_item_letter[0].index_letter}}</td>
				</tr>
				<tr 
					ng-repeat="diler_item in diler_item_letter"
					class="diler" 
					ng-style="diler_item_letter[0].index_letter==letter || letter=='' ?{}:{'display':'none'}"
					
				>
					<td class="city">{{diler_item.city}}</td>
					<td class="name">{{diler_item.name}}</td>
					<td class="site">
						<a  ng-if="diler_item.website1" href="{{diler_item.website1_url}}" target="_blank">{{diler_item.website1}}</a>
						<span ng-if="diler_item.website2"><br><a href="{{diler_item[i].website2_url}}" target="_blank">{{diler_item[i].website2}}</a></span>
					</td>
					<td class="phone">
						<span ng-if="diler_item.tel1">{{diler_item.tel1}}</span>
						<span ng-if="diler_item.tel2"><br>{{diler_item.tel2}}</span>
					</td>
				</tr>
				<tr class="rasp" 
					ng-style="diler_item_letter[0].index_letter==letter || letter=='' ?{}:{'display':'none'}"
				>
					<td colspan="4"></td>
				</tr>
			</tbody>
		</table>
		<br><br><br>
	</div>
	
</section>
<div class="map_tooltip hide">
	<div class="inner">
		<div class="content">
			<div class="name">Армавир-Спорт</div>
			<div class="city">г.Армавир</div>
			<div class="phone">8 (928) 848-29-34</div>
			<a href="@" class="site">www.armavir-sport.ru</a>
			<div class="close"></div>
		</div>
		<div class="arrow h"></div>
		<div class="arrow v"></div>
	</div>
</div>

