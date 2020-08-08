<template>
    <view>
        <view class="example-title">基本用法</view>
        <aemp-result-page></aemp-result-page>
        <view class="example-title">页面丢失</view>
        <aemp-result-page type="lost"></aemp-result-page>
        <view class="example-title">网络异常</view>
        <aemp-result-page type="network"></aemp-result-page>
        <view class="example-title">按钮列表</view>
        <aemp-result-page def-btn="再试一次" @defBtn="fnClick"></aemp-result-page>
        <aemp-result-page warn-btn="重启" @warnBtn="fnClick" ></aemp-result-page>
        <aemp-result-page pri-btn="确认成功" @priBtn="fnClick"></aemp-result-page>
        <aemp-result-page def-btn="返回" @defBtn="fnClick" pri-btn="再来一次" @priBtn="fnClick" warn-btn="终止" @warnBtn="fnClick"></aemp-result-page>
        <view class="example-title">自定义图案</view>
        <aemp-result-page src="https://gw.alipayobjects.com/zos/rmsportal/HWuSTipkjJRfTWekgTUG.svg" text="等待处理" subtext="已提交申请，等待银行处理"></aemp-result-page>
    </view>
</template>
<script>
    import aempResultPage from "../../components/aemp-result-page/aemp-result-page"
    export default {
        config: {
            navigationBarTitleText: "结果页 ResultPage"
        },
        components: {
            aempResultPage
        },
        methods:{
            fnClick(){
                this.$api.showToast({
                            title:"点击"
                        });
            }
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