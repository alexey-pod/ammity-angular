<section class="content-main">
	<div class="page_header margin_bottom">
		<h1>{{page.page_item.name}}</h1>
	</div>
	<div class="become-box">
		<div class="presentation_page">
			<div
				ng-repeat="pr_item in page.pr_array"
				data-pr_item_id="{{pr_item.id}}"
				class="pr_item hide_"
			>
				<div class="content">
					<a name="pr_{{pr_item.id}}"></a>
					<div class="header">
						<img class="icon"  src="{{pr_item.icon_black}}"/>
						<div class="title">{{pr_item.name}}</div>
					</div>
					<scrol_text text="pr_item.text"></scrol_text>
				</div>
				<pr_image_list image_array="pr_item.image_array" pr_item_id="pr_item.id"></pr_image_list>
			</div>
		</div>
	</div>
</section>