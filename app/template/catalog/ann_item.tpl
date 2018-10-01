<section class="content-main">
	
	<div class="page_header">
		<h1>{{page.ann_item.name_full}}</h1>
	</div>
	
	<div class="menu_nav_bar" id="tab_control" style="overflow:hidden_;">
		<a 
			class="tab tab_control_item" style="margin-left:-7px; z-index:50;"
			ng-click="setTab('descr')"
			ng-class="{'active': selected_tab=='descr'}"
			href="{{page.ann_item.url}}#descr"
			>
			<div class="gl l"></div>
			<div class="gc c" style="width:98px; padding-left:0px; padding-right:0px;text-align:center">ОПИСАНИЕ</div>
			<div class="gr r"></div>
		</a>
		<a 	
			ng-click="setTab('feature')"
			ng-if="page.ann_item.features" 
			ng-class="{'active': selected_tab=='feature'}"
			href="{{page.ann_item.url}}#feature"
			class="tab tab_control_item" 
			style="z-index:140;">
			<div class="gl l"></div>
			<div class="gc c" style="width:121px; padding-left:0px; padding-right:0px;text-align:center">ОСОБЕННОСТИ</div>
			<div class="gr r"></div>
		</a>
		<a 
			ng-click="setTab('ttx')"
			ng-class="{'active': selected_tab=='ttx'}"
			href="{{page.ann_item.url}}#ttx"
			class="tab tab_control_item" style="z-index:30;"
			>
			<div class="gl l"></div>
			<div class="gc c" style="width:141px; padding-left:0px; padding-right:0px;text-align:center">ХАРАКТЕРИСТИКИ</div>
			<div class="gr r"></div>
		</a>
		<!--compare-->
		<a 
			ng-if="page.ann_item.compare_total==0"
			ng-class="{'disabled': page.ann_item.compare_total==0}"
			style="z-index:20;" class="tab tab_control_item"
			>
			<div class="gl l"></div><div style="width:85px; padding-left:0px; padding-right:0px;text-align:center" class="gc c"><span>Сравнить</span><span ng-if="page.ann_item.compare_total"> {{page.ann_item.compare_total}}</span></div><div class="gr r"></div>
		</a>
		<a 
			ng-if="page.ann_item.compare_total!=0"
			ng-class="{'disabled': page.ann_item.compare_total==0}"
			href="{{page.ann_item.compare_url}}" 
			style="z-index:20;" class="tab tab_control_item"
			>
			<div class="gl l"></div><div style="width:85px; padding-left:0px; padding-right:0px;text-align:center" class="gc c"><span>Сравнить</span><span ng-if="page.ann_item.compare_total"> {{page.ann_item.compare_total}}</span></div><div class="gr r"></div>
		</a>
		<!--compare END-->
		<a 	ng-if="page.ann_item.cat_extended_warranty" 
			class="tab tab_control_item" style="z-index:10;" href="/pages/product_registration/" 
			>
			<div class="gl l"></div>
			<div class="gc c" style="width:189px; padding-left:0;padding-right:0;text-align:center;">РАСШИРЕННАЯ ГАРАНТИЯ</div>
			<div class="grlast rlast"></div>
		</a>
		
	</div>
	
	<div class="tab_item" ng-style="selected_tab=='descr'?{}:{'display':'none'}">
		<div class="tovar-box clearfix">
			<a href="{{page.ann_item.seria_url}}" class="red_label">{{page.ann_item.series_mnemonic}}</a>
			<div class="right-box">
				<el ng-if="page.ann_item.price!=0">
					<div class="price">{{page.ann_item.price_str}} р.</div>
				</el>
				
				<div class="price_btn_panel">
					<a 
						ng-if="page.ann_item.in_basket==1" 
						class="price_btn_text" href="/basket/"
					>В Корзине <span>{{page.ann_item.in_basket_amount}}</span> шт.</a>
					<div 
						ng-if="page.ann_item.in_basket==0 && page.ann_item.price!=0" 
						class="price_btn"
						>
						<div class="qty">
							<span>{{qty}}</span>
						</div>
						<div class="control">
							<div class="up" ng-click="changeBasketAmount('+')"></div>
							<div class="down" ng-click="changeBasketAmount('-')"></div>
						</div>
						<div ng-click="addToBasket(page.ann_item);" class="text">
							<span>в корзину</span>
						</div>
					</div>
				</div>
				
				<ul class="tabs"><!--первью справа страницы-->
					<li 
						ng-repeat='image_item in page.ann_item.image_array'
						ng-style="image_item.panel_nomber==selected_panel?{}:{'display':'none'}"
						ng-class="{'current': $index+1==selected_image}"
						ng-click="selectImage($index+1)"
						>
						<img src="/img/iResize.php?w=90&h=90&bg=ffffff&img={{image_item.image}}" />
					</li>
				</ul>
				<div class="panel"><!--панель вперёд назад-->
					<div class="text">Всего {{page.ann_item.image_array.length}} изображений </div>
					<div ng-click="clickPrev();" class="prev"></div>
					<div ng-click="clickNext();" class="next"></div>
				</div>
				
				<div class="compare_btn_panel">
					<a 
						ng-if="page.ann_item.in_compare==0"
						ng-click="setCompare(page.ann_item, 1);" 
						class="btn-tovar"
					>Добавить к сравнению</a>
					<a 
						ng-if="page.ann_item.in_compare!=0"
						ng-click="setCompare(page.ann_item, 0);" 
						class="btn-tovar disable"
					>Удалить из сравнения</a>
				</div>
				
				<div class="ware_icons">
					<a href="/pages/presentation/#pr_8" style="border:none">
						<img class="ware_icon" src="/img/client/ware_icon/ware_icon_rus.png" style="margin-left:0px" />
					</a>
					<a href="/pages/app/" style="border:none">
						<img class="ware_icon" src="/img/client/ware_icon/ware_icon_app.png" />
					</a>
					<a href="/pages/app/" style="border:none">
						<img class="ware_icon" src="/img/client/ware_icon/ware_icon_apple.png" />
					</a>
					<a href="/pages/app/" style="border:none">
						<img class="ware_icon" src="/img/client/ware_icon/ware_icon_android.png" />
					</a>
					<a href="/pages/product_registration/" style="border:none">
						<img class="ware_icon" src="/img/client/ware_icon/ware_icon_warranty.png" style="margin-right:0px" />
					</a>
				</div>
			</div>
			<div class="panes"><!--основные фото-->
				<div 
					ng-repeat='image_item in page.ann_item.image_array' 
					ng-style="$index+1==selected_image?{}:{'display':'none'}"
					href="{{image_item.image}}"
					>
					<img src="{{image_item.image}}" alt="" />
				</div>
			</div>
			
			
		</div>
		<div class="block-content">
			<h3>Описание модели</h3>
			<div id="more_content" ng-bind-html="page.ann_item.text | html"></div>
			<div class="more" id="more_btn" style="">
				<div class="icon"></div>
				<div class="text">ещё</div>
			</div>
			<div class="more up" id="more_btn_hide" style="">
				<div class="icon"></div>
				<div class="text">скрыть</div>
			</div>
		</div>
		<div class="tovar-widgets clearfix" style="margin-right:-6px;"><!--нет-->
			<article class="widget" ng-repeat='feature_item in page.ann_item.feature_array'>
				<img src="{{feature_item.image}}" alt="{{feature_item.name}}" />
				<div class="desc">
					<h3>{{feature_item.name}}</h3>
					<p ng-bind-html="feature_item.text|html"></p>
				</div>
			</article>
		</div>
		
	</div>
	
	<div class="tab_item" ng-style="selected_tab=='feature'?{}:{'display':'none'}">
		<div class="block-content" ng-bind-html="page.ann_item.features | html"></div>
	</div>	
	
	<div class="tab_item" ng-style="selected_tab=='ttx'?{}:{'display':'none'}">
		<div class="table-box clearfix">
			<!--
			{assign var="ch_array" value=$ann_item.ch_array}
			{{ch_array = page.ann_item.ch_array}}
			<div ng-init="ch_array = "></div>
			*************************
			--> 
			
			<div ng-repeat='ch_item in page.ann_item.ch_array'>
			
				<h2>{{ch_item.name}}</h2>
				<table class="table-tovar-desc">
					<!--
					{assign var="param_array" value=$ch_array[i].param}
					{section name=j loop=$param_array}
					-->
					{{ch_item.param_array}}
					<tr ng-repeat='param_item in ch_item.param'>
						<td width="400"><strong>{{param_item.name}}</strong></td>
						<td>{{param_item.value}}</td>
					</tr>
					<!--
					{/section}
					-->
				</table>
			
			</div><!-- END ng-repeat --> 
		</div>
	</div>
	
	<!--this_ann_item-->
	<!--
	{*используется для сравнения - не удалять*}
	-->
	
</section>


<script type="text/javascript-lazy" >
	
		function pageClass(){
			
			this.init = function(){
				
				{// клик с левым контролом
					// превью
					$$('#container .right-box .tabs LI').each(function(){
						$$(this).click(function (e) {
							if (e.ctrlKey) {
								var src=$$(this).find('IMG').attr('src').substr(41);
								var url="http://ammity.ru"+src
								var newWin = window.open(url)
								newWin.focus()
							}
						});
					});
					
					// основное фото
					$$('#container .panes DIV').each(function(){
						$$(this).click(function (e) {
							//console.log(this)
							if (e.ctrlKey) {
								var src=$$(this).find('IMG').attr('src').substr(43);
								//console.log(src);return;
								var url="http://ammity.ru"+src
								var newWin = window.open(url)
								newWin.focus()
								$$('#lightbox-secNav-btnClose').trigger('click');
							}
						});
					});
						
				}//END клик с левым контролом
				
				{//Обрезаем большое текстовое описание и делаем его разворачиваемым
					
					var more_total=$$('#more_content p, #more_content div, #more_content ul, #more_content ol').length;
					if(more_total>3){
						$$('#more_btn').show();
					}
					
					if(more_total>3){
						var i=0;
						// считаем позицию начала сворачивания
						$$('#more_content p, #more_content div, #more_content ul, #more_content ol').each(function(){
							i++;
							if(i>3){
								$$(this).addClass('mainTextBlock_hiddenSubBlock').hide();
							}
							
						});// END each
						$$('#more_btn').click(function(){
							$$('.mainTextBlock_hiddenSubBlock').show('slow')
							$$(this).hide('slow');
							
							$$('#more_btn_hide').show('slow')
						})
						$$('#more_btn_hide').click(function(){
							$$('.mainTextBlock_hiddenSubBlock').hide('slow')
							$$('#more_btn').show('slow');
							$$(this).hide('slow');
						})
					}//
					/*
					*/
				}// END
				
				
				{// смена иконок при наведении
					$$('.ware_icons IMG').each(function(){
						var src_orig=$$(this).attr('src');
						$$(this).hover(
							function () {// навести
								var src=$$(this).attr('src').substr(22);
								src=src.substr(-src.length, src.length-4);
								src='/img/client/ware_icon/'+src+'_active.png';
								$$(this).attr('src', src);
							},
							function () {// увести
								$$(this).attr('src', src_orig);
							}
						);//END hover
					});//END each
						
				}
				
				return;
				
			}//END init
			
			
			this.initCompare = function(){
				
				$$('#ann_compare_'+this.id).click(function(e){
					var mode=$$(this).attr('mode');
					//console.log('mode='+mode)
					
					if(mode=='compare' && self.compare_total==1){
						return false
					}
					if(mode=='compare'){
						return;
					}
					self.setCompare(self.id, mode);
				});
				
				$$('.tab_control_item[tab_control_id="compare"]').click(function () {
					if(self.compare_total<2)
					return false;
				});
				
				$$('.tab_control_item[tab_control_id="compare"]').hover(
					function () {// навести
						if(self.compare_total==0){
							$$(this).parent().find('.hint_form.f1').show('fast');
						}
						if(self.compare_total==1){
							$$(this).parent().find('.hint_form.f2').show('fast');
						}
					},
					function () {// увести
						$$(this).parent().find('.hint_form.f1, .hint_form.f2').hide();
					}
				);
				
				
				
				$$('.compare_btn_panel .btn-tovar').hover(
					function () {// навести
						if(self.compare_total==0){
							$$(this).parent().find('.hint_form.f1').show('fast');
						}
						if(self.compare_total==1 && self.in_compare==1){
							$$(this).parent().find('.hint_form.f2').show('fast');
						}
					},
					function () {// увести
						$$(this).parent().find('.hint_form.f1, .hint_form.f2').hide();
					}
				);
				
				
			
			}//END 
			this.setCompare = function(id, mode){
				$$.ajax({
					type: "POST",
					url: this.script_url,
					data: "mode=setCompare"
							+"&id="+escape2(id)
							+"&compare_mode="+escape2(mode),
					success: function(a){
						var data=jsonParse(a);
						var total=data.total;
						var list=data.list;
						var url=data.url;
						self.compare_total=total;
						
						if(mode=='add'){
							$$('#ann_compare_'+id).html('сравнить');
							if(total>1){
								$$('#ann_compare_'+id).attr('href',url+'?from='+document.location.href);
							}
							$$('#delete_compare_btn').show();
							$$('#ann_compare_'+id).attr('mode','compare');
							self.in_compare=1;
						}
						if(mode=='delete'){
							$$('#delete_compare_btn').hide();
							$$('#ann_compare_'+id).html('добавить к сравнению');
							$$('#ann_compare_'+id).removeAttr('href');
							$$('#ann_compare_'+id).attr('mode','add');
							self.in_compare=0;
						}
						
						
						if(total==0){
							$$('.tab_control_item[tab_control_id="compare"]').addClass('disabled');
							$$('.tab_control_item[tab_control_id="compare"] SPAN').html('Сравнить');
							//$$('#show_compare_btn').hide();
							$$('.tab_control_item[tab_control_id="compare"]').attr('href','#');
							$$('#ann_compare_'+id).removeClass('disable');
						}
						else if(total==1){
							$$('.tab_control_item[tab_control_id="compare"]').addClass('disabled');
							$$('.tab_control_item[tab_control_id="compare"] SPAN').html('Сравнить: 1');
							//$$('#show_compare_btn').hide();
							$$('.tab_control_item[tab_control_id="compare"]').attr('href','#');
							
							if($$('#ann_compare_'+id).attr('mode')=='compare'){
								$$('#ann_compare_'+id).addClass('disable');
							}
							
						}
						else{
							$$('.tab_control_item[tab_control_id="compare"]').removeClass('disabled');
							$$('.tab_control_item[tab_control_id="compare"] SPAN').html('Сравнить: '+total);
							//$$('#show_compare_btn').show();
							//$$('#show_compare_btn A').attr('href',url);
							$$('.tab_control_item[tab_control_id="compare"]').attr('href',url+'?from='+document.location.href);
							$$('#ann_compare_'+id).removeClass('disable');
						}
						/**/
						
						
						
					}// END success
				});// END ajax
				return;
			}//END
		
			
			{// картинки
				
				this.image_panel=1;
				this.image_panel_max=0;
				this.initImage = function(){
					
					
					
					var img_total=$$('#container .right-box .tabs LI').length;
					if(img_total>4){
						$$('#container .right-box .panel .text').html('Всего '+img_total+' изображений');
						$$('#container .right-box .panel').show();
						
					}
					else{
						$$('#container .right-box .panel').hide();
					}
					
					var p_nomber=1;
					var total=0;
					$$('#container .right-box .tabs LI').each(function(){
						if(total==4){
							total=0;
							p_nomber++;
							self.image_panel_max=p_nomber;
						}
						total++;
						//console.log(this);
						
						$$(this).attr('panel_nomber',p_nomber);
						
						
					});
					
					if(img_total>4){
						this.clickAction();
					}
				
				}
				this.clickNext = function(){
					//console.log('next')
					this.image_panel++;
					if(this.image_panel>this.image_panel_max){
						this.image_panel=1;
					}
					this.clickAction();
				}
				this.clickPrev = function(){
					//console.log('next')
					this.image_panel--;
					if(this.image_panel<=0){
						this.image_panel=this.image_panel_max;
					}
					this.clickAction();
				}
				this.clickAction = function(){
					$$('#container .right-box .tabs LI').removeClass('current');
					$$('#container .right-box .tabs LI').hide();
					$$('#container .right-box .tabs LI[panel_nomber='+this.image_panel+']').show();
					$$('#container .right-box .tabs LI[panel_nomber='+this.image_panel+']:eq(0)').trigger('click');
					$$('#container .right-box .tabs LI[panel_nomber='+this.image_panel+']:eq(0)').addClass('current');
				}
				
			}// картинки
			{// корзина
				this.initBasket = function(){
				
				}//END 
				this.addToBasket = function(id){
					//console.log('addToBasket()')
					var amount=$$('.price_btn .qty SPAN').html();
					m_obj.addToBasket(id, amount);
				}//END 
				this.changeBasketAmount = function(mode){
					var amount=$$('.price_btn .qty SPAN').html();
					amount=parseInt(amount);
					if(mode=='+'){
						amount=amount+1;
					}
					if(mode=='-'){
						amount=amount-1;
					}
					if(amount==100){
						amount=99;
					}
					if(amount==0){
						amount=1;
					}
					$$('.price_btn .qty SPAN').html(amount);
				}//END
			}//END 
			
		}//END pageClass p_obj
	
	
</script>
