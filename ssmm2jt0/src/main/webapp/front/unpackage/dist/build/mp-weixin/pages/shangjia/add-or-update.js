(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shangjia/add-or-update"],{"1c54":function(n,e,a){"use strict";(function(n){a("718a");i(a("66fd"));var e=i(a("593e"));function i(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,a("543d")["createPage"])},"1da9":function(n,e,a){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(a("a34a"));function r(n){return n&&n.__esModule?n:{default:n}}function t(n,e,a,i,r,t,u){try{var o=n[t](u),s=o.value}catch(c){return void a(c)}o.done?e(s):Promise.resolve(s).then(i,r)}function u(n){return function(){var e=this,a=arguments;return new Promise((function(i,r){var u=n.apply(e,a);function o(n){t(u,i,r,o,s,"next",n)}function s(n){t(u,i,r,o,s,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(function(){return resolve(a("6bf2"))}.bind(null,a)).catch(a.oe)},s={data:function(){return{ruleForm:{shangjiazhanghao:"",mima:"",shangjiamingcheng:"",dianpuming:"",dianpudizhi:"",lianxiren:"",lianxifangshi:"",shangjiatupian:"",xiuxishijian:"",shangjiajieshao:"",money:""},user:{},ro:{shangjiazhanghao:!1,mima:!1,shangjiamingcheng:!1,dianpuming:!1,dianpudizhi:!1,lianxiren:!1,lianxifangshi:!1,shangjiatupian:!1,xiuxishijian:!1,shangjiajieshao:!1,money:!1}}},components:{wPicker:o},computed:{},onLoad:function(e){var a=this;return u(i.default.mark((function r(){var t,u,o,s;return i.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t=n.getStorageSync("nowTable"),r.next=3,a.$api.session(t);case 3:if(u=r.sent,a.user=u.data,a.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(a.ruleForm.refid=e.refid,a.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){r.next=13;break}return a.ruleForm.id=e.id,r.next=11,a.$api.info("shangjia",a.ruleForm.id);case 11:u=r.sent,a.ruleForm=u.data;case 13:if(!e.cross){r.next=64;break}o=n.getStorageSync("crossObj"),r.t0=i.default.keys(o);case 16:if((r.t1=r.t0()).done){r.next=64;break}if(s=r.t1.value,"shangjiazhanghao"!=s){r.next=22;break}return a.ruleForm.shangjiazhanghao=o[s],a.ro.shangjiazhanghao=!0,r.abrupt("continue",16);case 22:if("mima"!=s){r.next=26;break}return a.ruleForm.mima=o[s],a.ro.mima=!0,r.abrupt("continue",16);case 26:if("shangjiamingcheng"!=s){r.next=30;break}return a.ruleForm.shangjiamingcheng=o[s],a.ro.shangjiamingcheng=!0,r.abrupt("continue",16);case 30:if("dianpuming"!=s){r.next=34;break}return a.ruleForm.dianpuming=o[s],a.ro.dianpuming=!0,r.abrupt("continue",16);case 34:if("dianpudizhi"!=s){r.next=38;break}return a.ruleForm.dianpudizhi=o[s],a.ro.dianpudizhi=!0,r.abrupt("continue",16);case 38:if("lianxiren"!=s){r.next=42;break}return a.ruleForm.lianxiren=o[s],a.ro.lianxiren=!0,r.abrupt("continue",16);case 42:if("lianxifangshi"!=s){r.next=46;break}return a.ruleForm.lianxifangshi=o[s],a.ro.lianxifangshi=!0,r.abrupt("continue",16);case 46:if("shangjiatupian"!=s){r.next=50;break}return a.ruleForm.shangjiatupian=o[s],a.ro.shangjiatupian=!0,r.abrupt("continue",16);case 50:if("xiuxishijian"!=s){r.next=54;break}return a.ruleForm.xiuxishijian=o[s],a.ro.xiuxishijian=!0,r.abrupt("continue",16);case 54:if("shangjiajieshao"!=s){r.next=58;break}return a.ruleForm.shangjiajieshao=o[s],a.ro.shangjiajieshao=!0,r.abrupt("continue",16);case 58:if("money"!=s){r.next=62;break}return a.ruleForm.money=o[s],a.ro.money=!0,r.abrupt("continue",16);case 62:r.next=16;break;case 64:a.styleChange();case 65:case"end":return r.stop()}}),r)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},shangjiatupianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.shangjiatupian=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(i.default.mark((function e(){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n.ruleForm.shangjiazhanghao){e.next=3;break}return n.$utils.msg("商家账号不能为空"),e.abrupt("return");case 3:if(n.ruleForm.mima){e.next=6;break}return n.$utils.msg("密码不能为空"),e.abrupt("return");case 6:if(!n.ruleForm.money||n.$validate.isNumber(n.ruleForm.money)){e.next=9;break}return n.$utils.msg("余额应输入数字"),e.abrupt("return");case 9:if(!n.ruleForm.id){e.next=14;break}return e.next=12,n.$api.update("shangjia",n.ruleForm);case 12:e.next=16;break;case 14:return e.next=16,n.$api.add("shangjia",n.ruleForm);case 16:n.$utils.msgBack("提交成功");case 17:case"end":return e.stop()}}),e)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,a=e.getFullYear(),i=e.getMonth()+1,r=e.getDate();return"start"===n?a-=60:"end"===n&&(a+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(a,"-").concat(i,"-").concat(r)},toggleTab:function(n){this.$refs[n].show()}}};e.default=s}).call(this,a("543d")["default"])},2954:function(n,e,a){"use strict";var i=a("af4e"),r=a.n(i);r.a},"593e":function(n,e,a){"use strict";a.r(e);var i=a("5c10"),r=a("eae2");for(var t in r)"default"!==t&&function(n){a.d(e,n,(function(){return r[n]}))}(t);a("2954");var u,o=a("f0c5"),s=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"115bcc26",null,!1,i["a"],u);e["default"]=s.exports},"5c10":function(n,e,a){"use strict";var i;a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return t})),a.d(e,"a",(function(){return i}));var r=function(){var n=this,e=n.$createElement;n._self._c},t=[]},af4e:function(n,e,a){},eae2:function(n,e,a){"use strict";a.r(e);var i=a("1da9"),r=a.n(i);for(var t in i)"default"!==t&&function(n){a.d(e,n,(function(){return i[n]}))}(t);e["default"]=r.a}},[["1c54","common/runtime","common/vendor"]]]);