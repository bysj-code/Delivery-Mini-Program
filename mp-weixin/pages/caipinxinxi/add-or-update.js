(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/caipinxinxi/add-or-update"],{"0aca":function(e,n,i){"use strict";(function(e){i("3103"),i("921b");t(i("66fd"));var n=t(i("9545"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,i("543d")["createPage"])},"5eac":function(e,n,i){},"7fc1":function(e,n,i){"use strict";var t={"w-picker":function(){return Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(i.bind(null,"b1a6"))}},r=function(){var e=this,n=e.$createElement;e._self._c},a=[];i.d(n,"b",(function(){return r})),i.d(n,"c",(function(){return a})),i.d(n,"a",(function(){return t}))},9545:function(e,n,i){"use strict";i.r(n);var t=i("7fc1"),r=i("fd18");for(var a in r)"default"!==a&&function(e){i.d(n,e,(function(){return r[e]}))}(a);i("aac1");var u,c=i("f0c5"),s=Object(c["a"])(r["default"],t["b"],t["c"],!1,null,"69ffa626",null,!1,t["a"],u);n["default"]=s.exports},aac1:function(e,n,i){"use strict";var t=i("5eac"),r=i.n(t);r.a},ca09:function(e,n,i){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=r(i("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,n,i,t,r,a,u){try{var c=e[a](u),s=c.value}catch(o){return void i(o)}c.done?n(s):Promise.resolve(s).then(t,r)}function u(e){return function(){var n=this,i=arguments;return new Promise((function(t,r){var u=e.apply(n,i);function c(e){a(u,t,r,c,s,"next",e)}function s(e){a(u,t,r,c,s,"throw",e)}c(void 0)}))}}var c=function(){Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(function(){return resolve(i("b1a6"))}.bind(null,i)).catch(i.oe)},s={data:function(){return{ruleForm:{caipinmingcheng:"",caipinfenlei:"",tupian:"",caipinjieshao:"",shangjiazhanghao:"",shangjiamingcheng:"",dianpuming:"",thumbsupnum:"",crazilynum:"",clicktime:"",clicknum:"",price:""},caipinfenleiOptions:[],caipinfenleiIndex:0,user:{},ro:{caipinmingcheng:!1,caipinfenlei:!1,tupian:!1,caipinjieshao:!1,shangjiazhanghao:!1,shangjiamingcheng:!1,dianpuming:!1,thumbsupnum:!1,crazilynum:!1,clicktime:!1,clicknum:!1,price:!1}}},components:{wPicker:c},computed:{},onLoad:function(){var n=u(t.default.mark((function n(i){var r,a,u,c;return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.getStorageSync("nowTable"),n.next=3,this.$api.session(r);case 3:return a=n.sent,this.user=a.data,this.ruleForm.shangjiazhanghao=this.user.shangjiazhanghao,this.ruleForm.shangjiamingcheng=this.user.shangjiamingcheng,this.ruleForm.dianpuming=this.user.dianpuming,n.next=10,this.$api.option("caipinfenlei","caipinfenlei",{});case 10:if(a=n.sent,this.caipinfenleiOptions=a.data,this.ruleForm.userid=e.getStorageSync("userid"),i.refid&&(this.ruleForm.refid=i.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!i.id){n.next=20;break}return this.ruleForm.id=i.id,n.next=18,this.$api.info("caipinxinxi",this.ruleForm.id);case 18:a=n.sent,this.ruleForm=a.data;case 20:if(!i.cross){n.next=75;break}u=e.getStorageSync("crossObj"),n.t0=t.default.keys(u);case 23:if((n.t1=n.t0()).done){n.next=75;break}if(c=n.t1.value,"caipinmingcheng"!=c){n.next=29;break}return this.ruleForm.caipinmingcheng=u[c],this.ro.caipinmingcheng=!0,n.abrupt("continue",23);case 29:if("caipinfenlei"!=c){n.next=33;break}return this.ruleForm.caipinfenlei=u[c],this.ro.caipinfenlei=!0,n.abrupt("continue",23);case 33:if("tupian"!=c){n.next=37;break}return this.ruleForm.tupian=u[c],this.ro.tupian=!0,n.abrupt("continue",23);case 37:if("caipinjieshao"!=c){n.next=41;break}return this.ruleForm.caipinjieshao=u[c],this.ro.caipinjieshao=!0,n.abrupt("continue",23);case 41:if("shangjiazhanghao"!=c){n.next=45;break}return this.ruleForm.shangjiazhanghao=u[c],this.ro.shangjiazhanghao=!0,n.abrupt("continue",23);case 45:if("shangjiamingcheng"!=c){n.next=49;break}return this.ruleForm.shangjiamingcheng=u[c],this.ro.shangjiamingcheng=!0,n.abrupt("continue",23);case 49:if("dianpuming"!=c){n.next=53;break}return this.ruleForm.dianpuming=u[c],this.ro.dianpuming=!0,n.abrupt("continue",23);case 53:if("thumbsupnum"!=c){n.next=57;break}return this.ruleForm.thumbsupnum=u[c],this.ro.thumbsupnum=!0,n.abrupt("continue",23);case 57:if("crazilynum"!=c){n.next=61;break}return this.ruleForm.crazilynum=u[c],this.ro.crazilynum=!0,n.abrupt("continue",23);case 61:if("clicktime"!=c){n.next=65;break}return this.ruleForm.clicktime=u[c],this.ro.clicktime=!0,n.abrupt("continue",23);case 65:if("clicknum"!=c){n.next=69;break}return this.ruleForm.clicknum=u[c],this.ro.clicknum=!0,n.abrupt("continue",23);case 69:if("price"!=c){n.next=73;break}return this.ruleForm.price=u[c],this.ro.price=!0,n.abrupt("continue",23);case 73:n.next=23;break;case 75:this.styleChange();case 76:case"end":return n.stop()}}),n,this)})));function i(e){return n.apply(this,arguments)}return i}(),methods:{styleChange:function(){this.$nextTick((function(){}))},clicktimeConfirm:function(e){console.log(e),this.ruleForm.clicktime=e.result,this.$forceUpdate()},caipinfenleiChange:function(e){this.caipinfenleiIndex=e.target.value,this.ruleForm.caipinfenlei=this.caipinfenleiOptions[this.caipinfenleiIndex]},tupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.tupian=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=u(t.default.mark((function e(){return t.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.caipinmingcheng){e.next=3;break}return this.$utils.msg("菜品名称不能为空"),e.abrupt("return");case 3:if(this.ruleForm.caipinfenlei){e.next=6;break}return this.$utils.msg("菜品分类不能为空"),e.abrupt("return");case 6:if(!this.ruleForm.thumbsupnum||this.$validate.isIntNumer(this.ruleForm.thumbsupnum)){e.next=9;break}return this.$utils.msg("赞应输入整数"),e.abrupt("return");case 9:if(!this.ruleForm.crazilynum||this.$validate.isIntNumer(this.ruleForm.crazilynum)){e.next=12;break}return this.$utils.msg("踩应输入整数"),e.abrupt("return");case 12:if(!this.ruleForm.clicknum||this.$validate.isIntNumer(this.ruleForm.clicknum)){e.next=15;break}return this.$utils.msg("点击次数应输入整数"),e.abrupt("return");case 15:if(this.ruleForm.price){e.next=18;break}return this.$utils.msg("价格不能为空"),e.abrupt("return");case 18:if(!this.ruleForm.price||this.$validate.isNumber(this.ruleForm.price)){e.next=21;break}return this.$utils.msg("价格应输入数字"),e.abrupt("return");case 21:if(!this.ruleForm.id){e.next=26;break}return e.next=24,this.$api.update("caipinxinxi",this.ruleForm);case 24:e.next=28;break;case 26:return e.next=28,this.$api.add("caipinxinxi",this.ruleForm);case 28:this.$utils.msgBack("提交成功");case 29:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,i=n.getFullYear(),t=n.getMonth()+1,r=n.getDate();return"start"===e?i-=60:"end"===e&&(i+=2),t=t>9?t:"0"+t,r=r>9?r:"0"+r,"".concat(i,"-").concat(t,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,i("543d")["default"])},fd18:function(e,n,i){"use strict";i.r(n);var t=i("ca09"),r=i.n(t);for(var a in t)"default"!==a&&function(e){i.d(n,e,(function(){return t[e]}))}(a);n["default"]=r.a}},[["0aca","common/runtime","common/vendor"]]]);