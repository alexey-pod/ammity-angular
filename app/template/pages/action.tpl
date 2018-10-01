<section class="content-main">
	<div class="page_header margin_bottom">
		<h1>{{page.page_item.name}}</h1>
	</div>
	<div class="become-box">
		<div 
			ng-if="page.page_item.text!=''"
			ng-bind-html="page.page_item.text|html"
			>
		
		</div>
		<div 
			ng-if="page.page_item.text==''"
			class="action_page">
			<div class="tv_box">
				<div class="text">В настоящий момент акции не проводятся</div>
			</div>
		</div>
	</div>
</section>