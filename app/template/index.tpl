<section class="home-main-widgets clearfix">
	<article ng-repeat="item in page.cat_array | limitTo: 4">
		<a ng-if="item.link_disable==0" href='{{item.url}}'>
			<img src="{{item.image}}" />
			<h2>{{item.name}}</h2>
		</a>
		<a ng-if="item.link_disable==1">
			<img src="{{item.image}}" />
			<h2>{{item.name}}</h2>
		</a>
	</article>
</section>

<article class="line-news">
	<strong>Новость:</strong>
	<a>новое поступление эллиптических и велотренажеров</a>
</article>

<section class="bottom-widgets clearfix">
	<a 
	ng-repeat="item in page.pr_mane | limitTo: 3"
	class="widget" href="{{item.url}}">
		<h3 ng-bind-html="item.name | html"></h3>
		<div class="url_name">{{item.url_name}}</div>
		<img src="{{item.icon_white}}"/>
	</a>
</section>