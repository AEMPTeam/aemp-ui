<template>
	<view class="example">
		<view class="example-title">基本用法</view>
		<view class="example-body example-body-first">
			<aemp-fav :checked="check1" class="favBtn" @click="favClick1" />
			<aemp-fav :checked="check2" :star="false" class="favBtn" @click="favClick2" />
			<aemp-fav :checked="check3" class="favBtn" :circle="true" bg-color="#dd524d" bg-color-checked="#007aff"
			 fg-color="#ffffff" fg-color-checked="#ffffff" @click="favClick3" />
			<aemp-fav :checked="check4" class="favBtn" bg-color="#f8f8f8" bg-color-checked="#eeeeee" fg-color="#333333"
			 fg-color-checked="#333333" @click="favClick4" />
		</view>
		<view class="example-title">自定义文字</view>
		<view class="example-body">
			<aemp-fav :checked="check5" :content-text="contentText" class="favBtn" @click="favClick5" />
		</view>
	</view>
</template>

<script>
  import aempFav from '../../components/aemp-fav/aemp-fav'
  export default {
    config: {
      navigationBarTitleText: "收藏 Fav"
    },
    components: {
      aempFav
    },
	data() {
		return {
			check1:false,
			check2:false,
			check3:false,
			check4:false,
			check5:false,
			contentText: {
				contentDefault: '追番',
				contentFav: '已追番'
			}
		}
	},
	methods: {
		favClick1() {
			this.check1 = !this.check1;
		},
		favClick2() {
			this.check2 = !this.check2;
		},
		favClick3() {
			this.check3 = !this.check3;
		},
		favClick4() {
			this.check4 = !this.check4;
		},
		favClick5() {
			this.check5 = !this.check5;
		}
	}
}
</script>

<style lang="scss">

	.favBtn {
		margin-left: 20px;
	}

	.example {
		padding: 0 15px 15px;
	}

	.example-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 32px;
		color: #464e52;
		padding: 30px 30px 30px 50px;
		margin: 40px 0;
		position: relative;
		background-color: #fdfdfd;
		border-bottom: 1px #f5f5f5 solid
	}

	.example-title__after {
		position: relative;
		color: #031e3c
	}

	.example-title:after {
		content: '';
		position: absolute;
		left: 30px;
		margin: auto;
		top: 0;
		bottom: 0;
		width: 6px;
		height: 32px;
		background-color: #ccc
	}


	.example-body {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0;
		font-size: 14px;
		background-color: #ffffff;
	}

	.example-body-first {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}

</style>
