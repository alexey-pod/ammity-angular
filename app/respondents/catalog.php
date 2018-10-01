<?php
include ($_SERVER['DOCUMENT_ROOT']."/inc/public.inc.php");




//loggerClass::writeLog($_GET);

$_GET = json_decode(file_get_contents('php://input'), true); 


$ann_ob=new annClassClient();
$cat_ob=new catClassClient();
$s_ob=new seriaClassClient();
//$cat_ob=new catClassClient();
if($_GET['mode']=='catalog_mane'){}

$result=array();

if($_GET['mode']=='ann_item'){// 404
	
	//loggerClass::writeLog($_SERVER);
	/*
	if($_GET['compare_delete']==1){
		$uri=substr($_SERVER['REQUEST_URI'], 0, -17);
		header("HTTP/1.1 301 Moved Permanently");
		header('Location: http://'.$_SERVER['SERVER_NAME'].$uri);
		exit();    
		//loggerClass::writeLog( $uri, '$uri' );
	}
	*/
	//loggerClass::writeLog($_GET);exit;
	
	$cat_item=$cat_ob->getCatItemByMnemonic(array('mnemonic'=>$_GET['cat_mnemonic']));
	if(!$cat_item){
		page404();
	}
	
	$ann_item=$ann_ob->getAnnItemByMnemonic(array('mnemonic'=>$_GET['ann_mnemonic'], 'bild_seria_url'=>true));
	if(!$ann_item){
		page404();
	}
	$tpl->assign('ann_item', $ann_item);
	//loggerClass::writeLog($ann_item);exit;
	
	
	$page_item['title']=$ann_item['name'];// заголовок идущий в тег <title> 
	
	$result['ann_item']=$ann_item;
	$result['cat_item']=$cat_item;
	
}

if($_GET['mode']=='ann_array_cat' || $_GET['mode']=='catalog_mane'){// 404
	
	if($_GET['mode']=='catalog_mane'){
		$_GET['cat_mnemonic']='begovye-dorozhki';
	}
	
	$cat_item=$cat_ob->getCatItemByMnemonic(array('mnemonic'=>$_GET['cat_mnemonic']));
	if(!$cat_item){
		page404();
	}
	//loggerClass::writeLog($cat_item);exit;
	$page_item['title']=$cat_item['name'];// заголовок идущий в тег <title> 
	
	$ann_array=$ann_ob->getAnnArray(
		array(
			'get_main_param'=>true, 
			'root_cat_id'=>$cat_item['root_cat_id'], 
			'count_compare'=>true, 
			'get_compare_url'=>true,
			'bild_seria_url'=>true,
			'no_text'=>true,
		)
	);
	//loggerClass::writeLog($ann_array);exit;
	/*
	$tpl->assign('ann_array', $ann_array);
	$tpl->assign('site_data', $site_data);
	$tpl->assign('cat_item', $cat_item);
	$tpl->display('client/catalog/tpl_ann_array_cat.tpl');
	*/
	
	//loggerClass::writeLog($cat_item);exit;
	//exit;
	
	$result['ann_array']=$ann_array;
	$result['cat_item']=$cat_item;
	
}

if($_GET['mode']=='ann_array_seria'){// 404
	
	$seria_item=$s_ob->getSeriaItemByMnemonic(array('mnemonic'=>$_GET['seria_mnemonic'] ));
	//loggerClass::writeLog($seria_item);
	//exit;
	if(!$seria_item){
		page404();
	}
	$tpl->assign('seria_item', $seria_item);
	$result['seria_item']=$seria_item;
	
	
	$page_item['title']='Серия '.$seria_item['name'];// заголовок идущий в тег <title> 
	
	
	/*
	
	
	
	
	$tpl->assign('ann_array', $ann_array);
	$ann_array=$ann_ob->getAnnArray(array('get_main_param'=>'true', 'root_cat_id'=>$cat_item['root_cat_id']));
	*/
	
	$seria_cat_array=$s_ob->getSeriaCatArray(
		array(
			'id'=>$seria_item['id'], 
			'get_ann'=>true, 
			'count_compare'=>true, 
			'get_compare_url'=>true,
			'bild_seria_url'=>true,
		)
	);
	$tpl->assign('seria_cat_array', $seria_cat_array);
	//loggerClass::writeLog($seria_cat_array);exit;
	$result['seria_cat_array']=$seria_cat_array;
	
	
	
	$tpl->assign('site_data', $site_data);
	//$tpl->display('client/catalog/tpl_ann_array_seria.tpl');
}
	
if($_GET['mode']=='compare'){
	//loggerClass::writeLog($_GET);
	if($_GET['from']!=''){
		$url_data=parse_url($_GET['from']);
		//loggerClass::writeLog($url_data);
		if($url_data['host']='loc_ammity.ru' || $url_data['host']='ammity.ru'){
			$html = file_get_contents($_GET['from']);
			{//	<!--this_ann_item-->
				$total=substr_count($html, '<!--this_ann_item-->');
				//loggerClass::writeLog($total, 'total');
				if($total){
					$tpl->assign('url_from', $_GET['from']);
					$tpl->assign('url_from_text', 'вернуться в карточку товара');
				}
			}//END
			{//	<!--this_ann_array-->
				$total=substr_count($html, '<!--this_ann_array-->');
				//loggerClass::writeLog($total, 'total');
				if($total){
					$tpl->assign('url_from', $_GET['from']);
					$tpl->assign('url_from_text', 'ВЕРНУТЬСЯ К СПИСКУ ТОВАРОВ');
				}
			}//END
			
			
		}
	}
	
	//loggerClass::writeLog($_SERVER);exit;
	//loggerClass::writeLog($_SESSION);exit;
	//$_GET['diff']=1;
	
	$compare_array=$ann_ob->getCompareItemArray(array('compare_list'=>$_GET['compare_list'], 'diff'=>$_GET['diff']));
	if(!$compare_array){
		page404();
	}
	
	$tpl->assign('compare_array', $compare_array);
	//loggerClass::writeLog($compare_array);exit;
	//loggerClass::writeLog($compare_array['param_array']);exit;
	
	
	$page_item['title']='Сравнение товаров';// заголовок идущий в тег <title> 
	$page_item['mnemonic']='compare';// заголовок идущий в тег <title> 
	
	$tpl->assign('site_data', $site_data);
	
	//$tpl->display('client/catalog/tpl_compare.tpl');
	
	
	$result['compare_array']=$compare_array;
}

//$tpl->assign('page_id', 1);

//$tpl->display('client/catalog/tpl_'.$_GET['mode'].'.tpl');
//loggerClass::writeLog($_GET);


//sleep(10);

$result['page_item']=$page_item;
echo json_encodeNew($result);
?>