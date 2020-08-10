<template>
	<view class="qiun-columns">
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
			<view class="qiun-title-dot-light">基本柱状图</view>
		</view>
		<view class="qiun-charts" >
			<canvas canvas-id="canvasColumn" id="canvasColumn" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio" :style="{'width':cWidth+'px','height':cHeight+'px'}" class="charts" @touchstart="touchColumn"></canvas>
		</view>
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
			<view class="qiun-title-dot-light">标准数据格式</view>
		</view>
		<view class="qiun-bg-white qiun-padding">
		    <textarea class="qiun-textarea" auto-height="true" :maxlength="-1" v-model="textarea"/>
		</view>
		<view class="qiun-text-tips">Tips：修改后点击更新图表</view>
		<button class="qiun-button" @tap="changeData()">更新图表</button>
	</view>
</template>

<script>
	import uCharts from '../../common/js/u-charts.js';
	import uchartData from '../../common/js/uchart-data.js';
	import  { isJSON } from '../../common/js/checker.js';
	var _self;
	var canvaColumn=null;
	export default {
		config: {
			navigationBarTitleText: "图标 UCharts"
		},
		data() {
			return {
				cWidth:300,
				cHeight:250,
				pixelRatio:1,
				textarea:''
			}
		},
		onReady() {
			_self = this;
			this.getServerData();
		},
		methods: {
			getServerData(){
				let Column={
					categories:[],
					series:[]
				};
				Column.categories=uchartData.ColumnB.categories;
				Column.series=uchartData.ColumnB.series;
				_self.textarea = JSON.stringify(uchartData.ColumnB);
				_self.showColumn("canvasColumn",Column);
			},
			showColumn(canvasId,chartData){
				canvaColumn=new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'column',
					padding:[15,5,0,15],
					legend:{
						show:true,
						padding:5,
						lineHeight:11,
						margin:0,
					},
					fontSize:11,
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					animation: true,
					categories: chartData.categories,
					series: chartData.series,
					xAxis: {
						disableGrid:true,
					},
					yAxis: {
						data:[{
							position:'right',
							axisLine: false,
							format:(val) =>{
								return val.toFixed(0) + '元';
							}
						}]
					},
					dataLabel: true,
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					extra: {
						column: {
							type:'group',
							width: _self.cWidth*_self.pixelRatio*0.45/chartData.categories.length
						}
					}
				});
				
			},
			touchColumn(e){
				canvaColumn.showToolTip(e, {
					format: function (item, category) {
						if(typeof item.data === 'object'){
							return category + ' ' + item.name + ':' + item.data.value 
						}else{
							return category + ' ' + item.name + ':' + item.data 
						}
					}
				});
        		canvaColumn.touchLegend(e,{animation:true});
			},
			changeData(){
				if(isJSON(_self.textarea)){
					let newdata=JSON.parse(_self.textarea);
					canvaColumn.updateData({
						series: newdata.series,
						categories: newdata.categories,
						animation:true
					});
				}else{
					uni.showToast({
						title:'数据格式错误',
						image:'../../../static/images/alert-warning.png'
					})
				}
			}
		}
	}
</script>

<style>
	/*样式的width和height一定要与定义的cWidth和cHeight相对应*/
	.qiun-charts {
		width: 100%;
		height: 500px;
		background-color: #FFFFFF;
	}
	
	.charts {
		width: 100%;
		height: 500px;
		background-color: #FFFFFF;
	}
</style>
