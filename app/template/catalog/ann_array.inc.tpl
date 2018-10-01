<article ng-repeat='ann_item in ann_array' class="ann_item" id="ann_{{ann_item.id}}">
	
	<a class="red_label" href="{{ann_item.seria_url}}" >{{ann_item.series_mnemonic}}</a>
	<a href="{{ann_item.url}}">
		<div class="pix-box">
			<img src="/img/iResize.php?w=210&h=215&bg=ffffff&img={{ann_item.image}}"/>
		</div>
	</a>
	<h2><a href="{{ann_item.url}}">{{ann_item.name}}</a></h2>
	<ul>
		<li ng-repeat='param_item in ann_item.param_array'>
			{{param_item.name}} {{param_item.value}}
		</li>
	</ul>
	<div class="price" ng-if="ann_item.price!=0">{{ann_item.price_str}} р.</div>
	
	<div ng-if="ann_item.root_cat_id!=20" class="compare_panel">
		<a class="compare" 
			ng-click="addCompare(ann_item)"
			ng-if="ann_item.in_compare==0"
		>добавить к сравнению</a>
		
		<!--сравнить-->
		<a class="compare" 
			ng-if="ann_item.in_compare==1"
			href="{{ann_item.compare_url}}"
		>сравнить {{ann_item.compare_total}}</a>
		
		<!--удалить-->
		<div class="delete" title="удалить из сравнения"
			ng-if="ann_item.in_compare==1"
			ng-click="deleteCompare(ann_item)"
		></div>
	</div>
	
</article>
<img style="display:none;" src="/img/client/ann_item/delete_compare_hover.png"/>