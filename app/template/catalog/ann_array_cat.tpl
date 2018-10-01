<section class="content-main" style="">
	<div class="page_header margin_bottom">
		<h1>{{page.cat_item.name}}</h1>
	</div>
	<div class="main-box">
		<img 
			ng-if="page.cat_item.name=='Беговые дорожки'" 
			class="cat_img" src="/img/cat_ban_beg.jpg" alt="Беговые дорожки" style="margin-top:0;" />
		<img 
			ng-if="page.cat_item.name!='Беговые дорожки'" 
			class="cat_img" src="/img/pix_2.jpg" alt="" style="margin-top:0;" />
		<p 
			ng-if="page.cat_item.text" 
			style="text-align:justify;" 
			ng-bind-html="page.cat_item.text | html" ></p>	
	</div>
	
	<div class="catalog-widgets clearfix" 
		ann_list 
		ann_array="page.ann_array"
		>
	</div>
	
</section>