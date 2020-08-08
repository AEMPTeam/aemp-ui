<template>
    <view>
        <view class="example-title">基本用法</view>
        <view class="example-body">
            <aemp-rate :value="2" class="rate"></aemp-rate>
        </view>
        <view class="example-title">更改星星大小、数量</view>
        <view class="example-body">
            <aemp-rate :max="7" :value="2" class="rate" :size="30" color="yellow" active-color="green"></aemp-rate>
        </view>
        <view class="example-title">可小数评分</view>
        <view class="example-body">
            <aemp-rate :value="2.6" class="rate" :size="30" :disabled="true"></aemp-rate>
        </view>
    </view>
</template>
<script>
    import aempRate from "../../components/aemp-rate/aemp-rate"
    export default {
        config: {
            navigationBarTitleText: "评分 Rate"
        },
        components: {
            aempRate
        }
    }
</script>
<style scoped>
    .example-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 32px;
        color: #464e52;
        padding: 10px 10px 10px 40px;
        position: relative;
        background-color: #fdfdfd;
        border-bottom: 2px #c8c7cc solid;
    }

    .example-title__after {
        position: relative;
        color: #031e3c
    }

    .example-title:after {
        content: '';
        position: absolute;
        left: 20px;
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

</style>