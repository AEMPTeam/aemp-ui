<template>
    <view>
        <view class="example-info">标签栏组件，主要用于底部导航，方便用户在不同功能模块之间进行快速切换。</view>
        <aemp-tabbar :list="list" class="tabbar" @tabChange="tabChange"></aemp-tabbar>
    </view>
</template>
<script>
    import aempTabbar from "../../components/aemp-tabbar/aemp-tabbar"
    export default {
        config: {
            navigationBarTitleText: "标签栏 Tabbar"
        },
        data(){
            return {
                list: [{
                        "text": "组件",
                        "iconPath": process.env.AEMP_ENV === "h5"?require('../../common/images/tabbar/component.png'):'../../common/images/tabbar/component.png' ,
                        "selectedIconPath":process.env.AEMP_ENV === "h5"?require('../../common/images/tabbar/component_selected.png'):'../../common/images/tabbar/component_selected.png'
                       },
                       {
                        "text": "接口",
                        "iconPath": process.env.AEMP_ENV === "h5"?require('../../common/images/tabbar/api.png'):'../../common/images/tabbar/api.png',
                        "selectedIconPath":process.env.AEMP_ENV === "h5"?require('../../common/images/tabbar/api_selected.png'):'../../common/images/tabbar/api_selected.png'
                       },
                       {
                        "text": "模板",
                        "iconPath": process.env.AEMP_ENV === "h5"?require('../../common/images/tabbar/template.png'):'../../common/images/tabbar/template.png',
                        "selectedIconPath": process.env.AEMP_ENV === "h5"?require('../../common/images/tabbar/template_selected.png'):'../../common/images/tabbar/template_selected.png'
                       }]
            }
        },
        mounted(){
            if(process.env.AEMP_ENV === "my"){
                this.list = [{
                        "text": "组件",
                        "iconPath": '../../common/images/tabbar/component.png' ,
                        "selectedIconPath":'../../common/images/tabbar/component_selected.png'
                       },
                       {
                        "text": "接口",
                        "iconPath": '../../common/images/tabbar/api.png',
                        "selectedIconPath":'../../../common/images/tabbar/api_selected.png'
                       },
                       {
                        "text": "模板",
                        "iconPath": '../../common/images/tabbar/template.png',
                        "selectedIconPath": '../../common/images/tabbar/template_selected.png'
                       }];
            }
        },
        components: {
            aempTabbar
        },
        methods: {
            tabChange(index) {
                console.log(index)
            }
        },
    }
</script>
<style scoped>
    .example-info {
		padding: 30px;
		color: #3b4144;
		background: #fff
	}
    .tabbar{
        position:fixed;
        bottom:0;
        width:100%;
        left:0;
        right:0;
    }
</style>