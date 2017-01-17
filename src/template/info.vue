<template>
    <div class="sub-inf">
		<navpage :step="2" />
		<div class="part-con">
			<!-- 真实姓名 -->
			<div class="input-con">
				<label for="relname">真实姓名 </label>
				<input id="relname" type="text" placeholder="您的姓名" maxlength="16" value="123" disabled="true"/>
			</div>
			<!-- 身份证号 -->
			<div class="input-con">
				<label for="idcard">身份证号</label>
				<input id="idcard" type="text" placeholder="18位号码" maxlength="18" disabled="true">
			</div>
		</div>
		<div class="part-con">
			<!-- 电子邮箱 -->
			<div class="input-con">
				<label for="mail">电子邮箱</label>	
				<input id="mail" name="email" type="email" placeholder="填写电子邮箱" maxlength="64">
			</div>
			<!-- 居住城市 -->
			<div class="input-con">
				<label for="address">居住地址</label>
				<input type="hidden" name="apcrnames">
				<input class="chose-input" id="address" type="hidden" name="apcrcodes">
				<div class="arrow"></div>
				<span class="cover-input">选择您居住城市</span>
			</div>
			<!-- 详细地址 -->
			<div class="input-con">
				<label for="detaddr">住宅地址</label>
				<input id="detaddr" name="address" type="text" placeholder="填写格式如XX街道xx号xx楼xx室" maxlength="64">
			</div>
		</div>
		<h2 class="h2">请填写您的工作单位信息</h2>
		<div class="part-con">
			<!-- 单位全称 -->
			<div class="input-con">
				<label for="company">单位全称</label>
				<input id="company" type="text" placeholder="填写就职公司在工商执照上的全称" maxlength="64">
			</div>
			<!-- 单位城市 -->
			<div class="input-con">
				<label for="companycity">单位城市</label>
				<input type="hidden" name="cpcrnames">
				<input class="chose-input" id="companycity" type="hidden" name="cpcrcodes">
				<div class="arrow"></div>
				<span class="cover-input">选择您就职单位所在的城市</span>
			</div>
			<!-- 单位地址 -->
			<div class="input-con">
				<label for="companyaddr">单位地址</label>
				<input id="companyaddr" type="text" placeholder="填写格式如XX街道xx号xx楼xx室" maxlength="64">
			</div>
			<!-- 单位电话 -->
			<div class="input-con companytel-con">
				<label>单位电话</label>
				<div class="companytel clearfix">
					<div class="phone-area">
						<input type="tel" placeholder="区号" maxlength="4">
					</div>
					<div class="phone-main">
						<input type="tel" placeholder="固定电话" maxlength="8">
					</div>
					<div class="phone-ext">
						<input type="tel" placeholder="分机号" maxlength="6">
					</div>
				</div>
				<input id="companynum" type="hidden" maxlength="20">
				<div class="companytel-tips">
					<img src="../assets/images/tel_tip.png">
				</div>
			</div>
		</div>
		<h2 class="h2">请填写您的联系人信息</h2>
		<div class="part-con part-bottom">
			<!-- 亲属关系 -->
			<div class="input-con">
				<label for="contactrelation">亲属关系</label>
				<input class="chose-input single-list" id="contactrelation" name="contactrelation" type="hidden" data-aj="">
				<!-- 回显新增亲属关系 -->
				<input type="hidden" name="contactrelationName" value="${sLoaner.contactrelationName}">
				<div class="arrow"></div>
				<span class="cover-input">选择亲属联系人</span>
			</div>
			<!-- 姓名 -->
			<div class="input-con">
				<label for="relationshipname">姓名</label>
				<input id="relationshipname" name="contactname" type="text" placeholder="填写联系人姓名" maxlength="32">
			</div>
			<!-- 手机号 -->
			<div class="input-con">
				<label for="relationshiptel">手机号码</label>
				<input id="relationshiptel" name="contactmobile" type="tel" placeholder="填写联系人手机号码" maxlength="11">
			</div>
			<!-- 紧急联系人关系 -->
			<div class="input-con">
				<label for="emergencyrelation">紧急联系</label>
				<input class="chose-input single-list" id="emergencyrelation" name="emergencyrelation" data-aj="" type="hidden">
				<!-- 回显新增紧急联系人 -->
				<input type="hidden" name="emergencyrelationName" value="${sLoaner.emergencyrelationName}">
				<div class="arrow"></div>
				<span class="cover-input">选择紧急联系人</span>
			</div>
			<!-- 紧急联系人姓名 -->
			<div class="input-con">
				<label for="contactsname">姓名</label>
				<input id="contactsname" name="emergencyname" type="text" placeholder="填写联系人姓名" maxlength="16">
			</div>
			<!-- 紧急联系人电话 -->
			<div class="input-con">
				<label for="contactstel">手机号码</label>
				<input id="contactstel" name="emergencymobile" type="tel" placeholder="填写联系人的手机号码" maxlength="11">
			</div>
		</div>
		<h2 class="h2">推荐人信息</h2>
		<div class="part-con recommend">
			<input type="tel" name="usermobile" placeholder="填写联系人的手机号码" maxlength="11">
		</div>
		<!-- 确认信息是否真实 -->
		<div class="confirm clearfix">
			<i></i>
			<span>我确认信息真实有效。</span>
		</div>
		<div class="next-step" @click="submitClick">下一步</div>
	</div>
</template>
<script>
import Navpage from '../components/nav.vue'
export default{
    name: 'info',
    data() {
        return {}
    },
    methods: {
        submitClick: function(){
            this.$router.push("/bankCard");
        }
    },
	components: {
		navpage : Navpage
	}
}
</script>
<style>
.h2 {
    color: #333;
    font-size: 0.6rem;
    line-height: 1.3rem;
    padding: 0.2rem 0.42rem 0;
}
.part-con{
	margin-top: 0.25rem;
}
.companytel {
	padding-left: 6em;
	font-size: 0.6rem;
	line-height: 2rem;
	height: 100%;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	-ms-box-sizing: border-box;
	-o-box-sizing: border-box;
	box-sizing: border-box;
}
.companytel input {
	padding: 0;
}
.companytel-con .phone-area {
	float: left;
	width: 25%;
	height: 100%;
}
.companytel-con .phone-main {
	float: left;
	width: 50%;
	height: 100%;
}
.companytel-con .phone-ext {
	float: left;
	width: 25%;
	height: 100%;
}
.companytel-tips {
	position: absolute;
	left: 0;
	bottom: 0.15rem;
	height: 0.3rem;
}
.companytel-tips img {
	display: block;
	height: 100%;
}
.recommend {
	margin-bottom: 0.85rem;
}
.recommend input {
	display: block;
	width: 100%;
	height: 2rem;
	font-size: 0.6rem;
}
/*确认信息正确性*/
.confirm {
	width: 92.66%;
	margin: 0 auto 1rem;
}
.confirm i {
	float: left;
	width: 0.7rem;
	height: 0.7rem;
	margin-right: 0.35rem;
	background: url('../assets/images/agree.png') no-repeat 0 0;
	-webkit-background-size: 100% 100%;
	-moz-background-size: 100% 100%;
	-ms-background-size: 100% 100%;
	-o-background-size: 100% 100%;
	background-size: 100% 100%;
}
.confirm span {
	float: left;
	color: #666;
	font: normal 0.50rem/0.7rem 'Microsoft YaHei';
}
.confirm .disagree {
	background: url('../assets/images/disagree.png') no-repeat 0 0;
	-webkit-background-size: 100% 100%;
	-moz-background-size: 100% 100%;
	-ms-background-size: 100% 100%;
	-o-background-size: 100% 100%;
	background-size: 100% 100%;
}
.cover-input, .bankusernme {
    position: absolute;
    left: 0;
    top: 0;
    color: #999;
    font-size: 0.6rem;
    line-height: 2rem;
}
.arrow {
    position: absolute;
    right: 0.6rem;
    top: 0.72rem;
    width: 0.28rem;
    height: 0.45rem;
    background: url(../assets/images/arrow.png) no-repeat 0 0;
    -webkit-background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    -ms-background-size: 100% 100%;
    -o-background-size: 100% 100%;
    background-size: 100% 100%;
}
</style>