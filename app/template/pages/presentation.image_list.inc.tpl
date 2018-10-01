<div
	ng-if="image_array"
	class="image_list" id="image_list_{{pr_item_id}}"
>
	<div class="inner">
		<a	
			ng-repeat="image_item in image_array" 
			href="{{image_item.image}}"
			ng-style="image_item.panel_nomber!=selected_panel ?{'display':'none'}:{}"
			>
			<img src="/img/iResize.php?size=125&bg=ffffff&img={{image_item.image}}" />
		</a>
	</div>
	<div class="panel" ng-if="image_array.length>5">
		<div class="p_inner">
			<div class="text">Всего {{image_array.length}} изображений</div>
			<div class="prev" ng-click="clickPrev();"></div>
			<div class="next" ng-click="clickNext();"></div>
		</div>
	</div>
</div>