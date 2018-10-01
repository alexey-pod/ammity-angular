<section class="content-main">
	<div class="page_header margin_bottom">
		<h1>{{page.page_item.name}}</h1>
	</div>
	
	<div class="become-box">
		
		<div class="presentation_page">
			<div class="pr_item hide_">
				
				<div ng-bind-html="page.page_item.text|html"></div>
				<!--
				-->
				
				
				
				
				<div style="background-color:#999999; color:white; font-family:Arial; font-size:12px; margin:25px -15px 0 -15px; padding-left:20px; padding-top:19px; padding-bottom:8px">
					<b>СПИСОК ОБОРУДОВАНИЯ, ПОДДЕРЖИВАЮЩЕГО ФУНКЦИЮ APP:</b>
				</div>
				
				<center class="dba_container">
					<div
						ng-repeat="app_cat_item in page.app_cat_array"
						id="dba{{app_cat_item.id}}" class="dba">
						<div class="name">{{app_cat_item.name}}</div>
					</div>
				</center>
				
				
				<div class="DBLs">
					{section name=i loop=$app_cat_array}
					<div 
						ng-repeat="app_cat_item in page.app_cat_array"
						id="DBL{{app_cat_item.id}}" 
						class="DBLsN" 
						style="display:none;">
						{assign var="ann_array" value=$app_cat_array[i].ann_array}
						{section name=j loop=$ann_array}
							<div
								ng-repeat="ann_item in app_cat_item.ann_array"
							>
								<a href="{{ann_item.url}}">
									{{ann_item.series_mnemonic}} {{ann_item.name}}
								</a>
							</div>
						{/section}
					</div>
					{/section}
				</div>
			
			</div>
		</div>

	</div>
		
</section>

<script type="text/javascript-lazy" >
	function pageClass(){
		{// Инициализация
			var self = this;
			//this.script_url = m_obj.script_url;	// урл респондента

		}//END Инициализация
		this.init = function(){
			this.initImage();
			//return;
			this._dbas_mouse()

			jQuery.each($$('.pr_item .image_list'), function() {
				$$(this).find('A').lightBox();	// подключаем lightbox для картинок
			});
		}//END init
		
		{//поведение кнопок DBA
		
			this._dbas_mouse = function(){
				jQuery.each($$('.dba'), function() {
					$$(this).click(function () {
						var id=$$(this).attr('id').substr(3);
						//console.log('id='+id)
						self.dbaClick(id);
					});
				});
				
				return;
			}//END 
			this.dbaClick = function(id){
				$$(".dba").removeClass('selected'); 
				$$("#dba"+id).addClass('selected'); 
				$$(".DBLsN").hide(); 
				$$("#DBL"+id).show(); 
				return;
			}//END
		}//END 

		{// картинки
				this.image_block={};
				//this.image_panel=1;
				//this.image_panel_max=0;// всего картинок в сете
				this.initImage = function(){
					jQuery.each($$('.image_list'), function() {
						
						//console.log(this)
						var img_total=$$(this).find('A').length;
						//console.log('img_total='+img_total)
						if(img_total>5){
							$$(this).find('.panel .text').html('Всего '+img_total+' изображений');
							$$(this).find('.panel').show();


						}
						else{
							$$(this).find('.panel').hide();
							return;
						}

						var id=$$(this).attr('id').substr(11);
						self.image_block[id]={};
						
						var p_nomber=1;
						var total=0;
						$$(this).find('A').each(function(){
							//console.log(this)
							if(total==5){
								total=0;
								p_nomber++;
								//self.image_panel_max=p_nomber;
								self.image_block[id].max=p_nomber;

							}
							total++;
							//console.log(this);
							
							$$(this).attr('panel_nomber',p_nomber);


						});
						
						if(img_total>5){
							self.image_block[id].panel=1;
							self.clickAction(id);
						}
					});
					return;
				}//END 
				this.clickNext = function(id){
					//console.log('next')
					//this.image_panel++;
					this.image_block[id].panel++
					//if(this.image_panel>this.image_panel_max){
					//if(this.image_block[id].panel>this.image_panel_max){
					if(this.image_block[id].panel>self.image_block[id].max){
						//this.image_panel=1;
						this.image_block[id].panel=1;
					}
					this.clickAction(id);
				}
				this.clickPrev = function(id){
					//console.log('next')
					//this.image_panel--;
					this.image_panel--;
					this.image_block[id].panel--;
					//if(this.image_panel<=0){
					if(this.image_block[id].panel<=0){
						//this.image_panel=this.image_panel_max;
						//this.image_block[id].panel=this.image_panel_max;
						this.image_block[id].panel=self.image_block[id].max;
					}
					this.clickAction(id);
				}
				this.clickAction = function(id){
					//console.log('id='+id);
					
					$$('#image_list_'+id+' A').removeClass('current');
					$$('#image_list_'+id+' A').hide();
					$$('#image_list_'+id+' A[panel_nomber='+this.image_block[id].panel+']').show();
					
					// отключено т.к. вызывает открытие lightbox
					//$$('#image_list_'+id+' A[panel_nomber='+this.image_panel+']:eq(0)').trigger('click');
					$$('#image_list_'+id+' A[panel_nomber='+this.image_block[id].panel+']:eq(0)').addClass('current');
					
					
					
					//$$('#container .right-box .tabs LI').removeClass('current');
					//$$('#container .right-box .tabs LI').hide();
					//$$('#container .right-box .tabs LI[panel_nomber='+this.image_panel+']').show();
					//$$('#container .right-box .tabs LI[panel_nomber='+this.image_panel+']:eq(0)').trigger('click');
					//$$('#container .right-box .tabs LI[panel_nomber='+this.image_panel+']:eq(0)').addClass('current');
				}
				
			}// картинки
		
	}//END pageClass p_obj
	$$(function(){
		p_obj = new pageClass();
		setTimeout(function(){
				p_obj.init();
			}, 1000
		);
	});
</script>