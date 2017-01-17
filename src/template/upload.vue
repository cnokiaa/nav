<template>
    <div class="main-con1">
		<navpage :step="1"></navpage>
		<div class="tips">
			<p>请上传本人身份证照片，确保周围环境光线充足，拍照不要晃动，以便快速审批</p>
		</div>
		<div class="tipupload">
			<p>请按图示要求上传您的身份证照片</p>
			<strong>错误示例</strong>
		</div>
		<div class="upload">
			<div class="upload-con clearfix">
				<div class="pic-part clearfix">
					<div class="example-pic">
						<img big-src="../images/bigcard_1.jpg" src="../assets/images/facecard.jpg" alt="反面照">
					</div>
					<div class="take-photo idcard-back-bg">
						<img src="" alt="">
					</div>
				</div>
				<div class="pic-part clearfix">
					<div class="example-pic">
						<img big-src="../images/bigcard_2.jpg" src="../assets/images/backcard.jpg" alt="正面国徽面照">
					</div>
					<div class="take-photo idcard-bg">
						<img src="" alt="">
					</div>
				</div>
				<form action="">
					<input id="certfirstimgMediaId" type="hidden" name="certfirstimgMediaId" value="">
					<input id="certsecondimgMediaId" type="hidden" name="certsecondimgMediaId" value="">
					<input id="usernameShow" type="hidden" name="usernameShow" value="上课了">
					<input id="idcardShow" type="hidden" name="idcardShow" value="43423432423432417">
					<div class="stips">请确认身份证信息</div>
					<div class="part-con">
						<div class="input-con">
							<label for="user-name">真实姓名</label>
                            <span id="user-name">{{$route.params.id}}</span>
						</div>
						<div class="input-con">
							<label for="idcard-num">身份证号</label>
							<span id="idcard-num"></span>
						</div>
					</div>
					<!-- 错误信息提示 -->
					<input type="hidden" class="errmsgShow" value="${errmsg}">
				</form>
			</div>
		</div>
		<div class="next-step" @click="submitClick">下一步</div>
		
	</div>
</template>

<script>
import Navpage from '../components/nav.vue'

export default{
    name: 'upload',
    data() {
        return {}
    },
    methods:{
		submitClick: function() {
			this.$router.push("/info");
		}
	},
	components:{
		'navpage' : Navpage,
	}
}
</script>

<style>
.stips{
	padding:0 3.13%;
	line-height:1.5rem;
	background:#eceff6;
}
.tips {
	padding: 0.38rem 3.13%;
    border-bottom:none;
}
.tips p {
	color: #4c4c4c;
	font: normal 0.5rem/0.6rem "Microsoft YaHei";
}
.tipupload {
	display: -webkit-box;
	display: -moz-box;
	display: -ms-box;
	display: -o-box;
	display: box;
	padding: 0.38rem 3.13%;
	background:#fff;
}
.tipupload p {
	padding-top: 0.25rem;
}
.tipupload strong {
	display: block;
	height: 0.9rem;
	padding-left: 1rem;
	color: #0d7aff;
	font-size: 0.45rem;
	line-height: 0.9rem;
	text-align: center;
	text-decoration: underline;
	padding-top: 0.1rem;
}
.tipupload p {
	-webkit-box-flex: 1;
	-moz-box-flex: 1;
	-ms-box-flex: 1;
}
/*上传图片部分*/
/*提示信息，错误示例*/
.upload {
	margin-bottom: 0.85rem;
	background-color: #fff;
}
/*照片部分*/
.pic-part {
	padding: 0.25rem 4.84%;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	-ms-box-sizing: border-box;
	-o-box-sizing: border-box;
	box-sizing: border-box;
}
.pic-part:last-child {
	border: 0;
}
/*示例照片*/
.example-pic {
	float: left;
}
.take-photo {
	float: right;
	background-color: #3db3f9;
}
.idcard-back-bg {
	background: url('../assets/images/idcard_back_bg.jpg') no-repeat 0 0;
	-webkit-background-size: 100% 100%;
	-moz-background-size: 100% 100%;
	-ms-background-size: 100% 100%;
	-o-background-size: 100% 100%;
	background-size: 100% 100%;
}
.idcard-bg {
	background: url('../assets/images/idcard_bg.jpg') no-repeat 0 0;
	-webkit-background-size: 100% 100%;
	-moz-background-size: 100% 100%;
	-ms-background-size: 100% 100%;
	-o-background-size: 100% 100%;
	background-size: 100% 100%;
}
.idcard-now{
	background: url('../assets/images/idcard-now.jpg') no-repeat 0 0;
	-webkit-background-size: 100% 100%;
	-moz-background-size: 100% 100%;
	-ms-background-size: 100% 100%;
	-o-background-size: 100% 100%;
	background-size: 100% 100%;
}
.example-pic,
.take-photo {
	position: relative;
	width: 48.85%;
	padding-top: 28.89%;
}
.example-pic img {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
}
.example-pic p {
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	background-color: rgba(0,0,0,0.5);
	color: #fefefe;
	font: normal 0.5rem/1rem "Microsoft YaHei";
	text-align: center;
}
.take-photo p {
	position: absolute;
	left: 0;
	top: 50%;
	width: 100%;
	margin-top: -1rem;
	color: #fff;
	font: normal 0.65rem/1rem "Microsoft YaHei";
	text-align: center;
}
.take-photo img {
	position: absolute;
	left: 0;
	top: 0;
	display: none;
	width: 100%;
	height: 100%;
}

.part-con {
	width: 96.88%;
	padding-left: 3.12%;
	background-color: #fff;
}
.input-con {
	position: relative;
	margin-top: -1px;
	padding: 0 3.12% 0 0;
	width: 96.88%;
	height: 1.9rem;
	border-top: 1px solid #e2e2e6;
	color: #3c3c3c;
	font: normal 0.65rem/1.9rem "Microsoft YaHei";
}
.input-con input,.input-con span{
	width: 100%;
	height: 100%;
	padding-left: 5em;
	padding-right: 1rem;
	border: 0;
	outline: none;
	line-height: normal;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	-ms-box-sizing: border-box;
	-o-box-sizing: border-box;
	box-sizing: border-box;
	display:block;
	line-height:1.9rem;
}
.input-con label {
	position: absolute;
	left: 0;
	top: 0;
	width: 5em;
	height: 100%;
	color: #333;
	font: normal 0.65rem/1.9rem "Microsoft YaHei";
}
</style>