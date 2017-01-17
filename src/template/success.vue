<template>
    <div>
        <div class="success">
            <div class="success-header clearfix">
                <img src="../assets/images/right.png" alt="" class="righti">
                <strong>提交成功！</strong>
                <p>申请已受理，预计3个工作日内完成审核。</p>
                <p>期间请保持电话畅通，以便拉卡拉工作人员核实信息。</p>
            </div>
        </div>
        <a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.lakala.android&amp;g_f=991653" class="lkl-app">
            <img src="../assets/images/lkl_app.jpg">
        </a>
        <a href="" class="complete next-step">完成</a>
    </div>
</template>
<script>
export default{
    data() {
        return {}
    },
    methods: {}    
}
</script>
<style>
.success {
	margin-bottom: 0.72rem;
	padding: 0.55rem 8%;
	border-bottom: 1px solid #e2e2e6;
	background-color: #fff;
}
.success-header em,
.success-tip em {
	float: left;
	width: 1rem;
	height: 1rem;
	background: url("../assets/images/right.png") no-repeat center center;
	-webkit-background-size: 100%;
	-moz-background-size: 100%;
	-ms-background-size: 100%;
	-o-background-size: 100%;
	background-size: 100%;
}
.success-header strong,
.success-tip strong {
	display:block;
	color: #3c3c3c;
	font: normal 0.65rem/1rem "Microsoft YaHei";
	margin-bottom:5px;
}
.success-header p{
	text-align:left;
	font:normal 0.55rem/.88rem "Microsoft YaHei";
}
.righti {
    width: 2.5rem;
    height: 2.5rem;
}
.success-header {
    text-align: center;
}
.complete {
    position: fixed;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 0.75rem;
    display: block;
    margin-bottom:0!important;
}
</style>