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
		<picker :slots="slots" @change="onValuesChange"></picker>
	</div>
</template>
<script>
import Navpage from '../components/nav.vue'
import { Picker } from 'mint-ui'
export default{
    name: 'info',
    data() {
        return {
			shen: {"status":"success","errcode":"0000","errmsg":"成功","data":{"provinces":[{"provincecn":"黑龙江省","provinceid":"230000"},{"provincecn":"湖南省","provinceid":"430000"},{"provincecn":"四川省","provinceid":"510000"},{"provincecn":"辽宁省","provinceid":"210000"},{"provincecn":"安徽省","provinceid":"340000"},{"provincecn":"福建省","provinceid":"350000"},{"provincecn":"天津市","provinceid":"120000"},{"provincecn":"宁夏回族自治区","provinceid":"640000"},{"provincecn":"重庆市","provinceid":"500000"},{"provincecn":"河南省","provinceid":"410000"},{"provincecn":"江西省","provinceid":"360000"},{"provincecn":"吉林省","provinceid":"220000"},{"provincecn":"内蒙古自治区","provinceid":"150000"},{"provincecn":"江苏省","provinceid":"320000"},{"provincecn":"山西省","provinceid":"140000"},{"provincecn":"云南省","provinceid":"530000"},{"provincecn":"海南省","provinceid":"460000"},{"provincecn":"西藏自治区","provinceid":"540000"},{"provincecn":"上海市","provinceid":"310000"},{"provincecn":"青海省","provinceid":"630000"},{"provincecn":"广西壮族自治区","provinceid":"450000"},{"provincecn":"湖北省","provinceid":"420000"},{"provincecn":"新疆维吾尔自治区","provinceid":"650000"},{"provincecn":"北京市","provinceid":"110000"},{"provincecn":"广东省","provinceid":"440000"},{"provincecn":"浙江省","provinceid":"330000"},{"provincecn":"陕西省","provinceid":"610000"},{"provincecn":"河北省","provinceid":"130000"},{"provincecn":"甘肃省","provinceid":"620000"},{"provincecn":"贵州省","provinceid":"520000"},{"provincecn":"山东省","provinceid":"370000"}]}},
    		qu: {"status":"success","errcode":"0000","errmsg":"成功","data":{"areas":[{"areacn":"长安区","areaid":"130102"},{"areacn":"桥东区","areaid":"130103"},{"areacn":"桥西区","areaid":"130104"},{"areacn":"新华区","areaid":"130105"},{"areacn":"井陉矿区","areaid":"130107"},{"areacn":"裕华区","areaid":"130108"},{"areacn":"井陉县","areaid":"130121"},{"areacn":"正定县","areaid":"130123"},{"areacn":"栾城县","areaid":"130124"},{"areacn":"行唐县","areaid":"130125"},{"areacn":"灵寿县","areaid":"130126"},{"areacn":"高邑县","areaid":"130127"},{"areacn":"深泽县","areaid":"130128"},{"areacn":"赞皇县","areaid":"130129"},{"areacn":"无极县","areaid":"130130"},{"areacn":"平山县","areaid":"130131"},{"areacn":"元氏县","areaid":"130132"},{"areacn":"赵　县","areaid":"130133"},{"areacn":"辛集市","areaid":"130181"},{"areacn":"藁城市","areaid":"130182"},{"areacn":"晋州市","areaid":"130183"},{"areacn":"新乐市","areaid":"130184"},{"areacn":"鹿泉市","areaid":"130185"}]}},
    		shi: {"status":"success","errcode":"0000","errmsg":"成功","data":{"citys":[{"citycn":"秦皇岛市","cityid":"130300"},{"citycn":"张家口市","cityid":"130700"},{"citycn":"承德市","cityid":"130800"},{"citycn":"邢台市","cityid":"130500"},{"citycn":"廊坊市","cityid":"131000"},{"citycn":"保定市","cityid":"130600"},{"citycn":"石家庄市","cityid":"130100"},{"citycn":"邯郸市","cityid":"130400"},{"citycn":"沧州市","cityid":"130900"},{"citycn":"唐山市","cityid":"130200"},{"citycn":"衡水市","cityid":"131100"}]}},
			slots: [
				{
				flex: 1,
				values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
				className: 'slot1',
				textAlign: 'center'
				}, {
				divider: true,
				content: '-',
				className: 'slot2'
				}, {
				flex: 1,
				values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
				className: 'slot3',
				textAlign: 'center'
				}, {
				divider: true,
				content: '-',
				className: 'slot2'
				},{
				flex: 1,
				values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
				className: 'slot3',
				textAlign: 'center'
				}
			],
		}
    },
	mounted: {
		// for(var i = 0; i < this.data.shen.data.provinces.length; i ++) {
		// 	plist[i] = this.data.shen.data.provinces[i].provincecn;
		// 	plistid[i] = this.data.shen.data.provinces[i].provinceid;
		// }
	},
    methods: {
		onValuesChange(picker, values) {
			if (values[0] > values[1]) {
				picker.setSlotValue(1, values[0]);
			}
		},
        submitClick: function(){
            this.$router.push("/bankCard");
        }
    },
	components: {
		navpage : Navpage,
		picker : Picker

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