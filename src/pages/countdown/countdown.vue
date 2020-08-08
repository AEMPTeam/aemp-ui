<template>
    <view>
        <view class="wrapper">
		    <text class="example-info">倒计时组件主要用于促销商品剩余时间，发送短信验证等待时间等场景</text>
        </view>       
        <view class="example-title">基本用法</view>

        <view class="countdown">
            <aemp-countdown :day="1" :hour="1" :minute="12" :second="40" :reset="false">
            </aemp-countdown>
        </view>
        <view class="example-title">不显示天数</view>
        <view class="countdown">
            <aemp-countdown :show-day="false" :hour="12" :minute="12" :second="12" :reset="false">
            </aemp-countdown>
        </view>
        <view class="example-title">修改颜色</view>
        <view class="example-title-small">分隔符颜色也可设置；不以冒号分隔</view>
        <view class="countdown">
            <aemp-countdown color="#FFFFFF" splitor-color="yellow" :show-colon="flag" background-color="#00B26A"
                border-color="#00B26A" :day="1" :hour="2" :minute="30" :second="0" :reset="false">
            </aemp-countdown>
        </view>

    </view>
</template>
<script>
    import aempCountdown from "../../components/aemp-countdown/aemp-countdown"
    export default {
        config: {
            navigationBarTitleText: "倒计时 Countdown"
        },
        components: {
            aempCountdown
        },
        data() {
            return {
                flag: false
            }
        },
    }
</script>
<style scoped>
    .wrapper{
		padding:15px 30px;
	}
    .example-info {
		color: #3b4144;
		background: #fff
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

    .example-title-small {
        padding: 0 50px;
        color: #999;
    }

    .countdown {
        margin-top: 30px;
        margin-left: 60px;
    }
</style>