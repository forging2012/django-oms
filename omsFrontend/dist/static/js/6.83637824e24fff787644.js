webpackJsonp([6,43,45],{DQwc:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("Zk8K"),n=a("nSkA"),l=a("vMJZ"),o={data:function(){return{ruleForm:{platform:"",merchant:"",type:"",rate:"",keyinfo:"",level:1,m_forwardurl:"",m_submiturl:"",create_user:localStorage.getItem("username"),action_user:"itsupport"},rules:{platform:[{required:!0,message:"请输入正确的内容",trigger:"change"}],merchant:[{required:!0,message:"请输入正确的内容",trigger:"change"}],type:[{required:!0,message:"请输入正确的内容",trigger:"change"}],m_id:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],level:[{required:!0,type:"number",message:"请输入正确的内容",trigger:"blur"}],action_user:[{required:!0,message:"请输入正确的内容",trigger:"blur"}]},platforms:[],merchants:[],paychannelnames:[],users:[]}},created:function(){this.getPlatforms(),this.getPayChannelNames(),this.getTicketUsers()},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(a){if(!a)return console.log("error submit!!"),!1;Object(r.n)(t.ruleForm).then(function(a){var r={action_user:t.ruleForm.action_user,title:"【添加新支付通道】",message:"提交人: "+t.ruleForm.create_user+"\n处理人: "+t.ruleForm.action_user+"\n平台: "+t.ruleForm.platform+"     商户: "+t.ruleForm.merchant+"     通道: "+t.ruleForm.type};Object(n.i)(r),t.$emit("formdata",a.data),t.$refs[e].resetFields()}).catch(function(e){t.$message.error("检查此平台此商户下面通道是否已经存在"),console.log(e)})})},resetForm:function(e){this.$refs[e].resetFields()},getPlatforms:function(){var e=this;Object(r.i)().then(function(t){e.platforms=t.data})},getMerchants:function(){var e=this,t={platform__name:this.ruleForm.platform};Object(r.f)(t).then(function(t){e.merchants=t.data})},getPayChannelNames:function(){var e=this;Object(r.h)().then(function(t){e.paychannelnames=t.data})},getTicketUsers:function(){var e=this;Object(l.f)().then(function(t){e.users=t.data})}}},s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"平台",prop:"platform"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择平台"},on:{change:e.getMerchants},model:{value:e.ruleForm.platform,callback:function(t){e.$set(e.ruleForm,"platform",t)},expression:"ruleForm.platform"}},e._l(e.platforms,function(e){return a("el-option",{key:e.id,attrs:{value:e.name}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"商户",prop:"merchant"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择商户"},model:{value:e.ruleForm.merchant,callback:function(t){e.$set(e.ruleForm,"merchant",t)},expression:"ruleForm.merchant"}},e._l(e.merchants,function(e){return a("el-option",{key:e.id,attrs:{value:e.name}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"类型",prop:"type"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择通道类型"},model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},e._l(e.paychannelnames,function(e){return a("el-option",{key:e.id,attrs:{value:e.name}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"费率",prop:"rate"}},[a("el-input",{model:{value:e.ruleForm.rate,callback:function(t){e.$set(e.ruleForm,"rate",t)},expression:"ruleForm.rate"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"key信息",prop:"keyinfo"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.ruleForm.keyinfo,callback:function(t){e.$set(e.ruleForm,"keyinfo",t)},expression:"ruleForm.keyinfo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"紧急度",prop:"m_backurl"}},[a("el-rate",{attrs:{colors:["#99A9BF","#F7BA2A","#ff1425"],"show-text":"",texts:["E","D","C","B","A"]},model:{value:e.ruleForm.level,callback:function(t){e.$set(e.ruleForm,"level",t)},expression:"ruleForm.level"}}),e._v(" "),a("a",{staticClass:"tips"},[e._v("Tip：星数代表问题紧急程度，星数越多，代表越紧急")])],1),e._v(" "),a("el-form-item",{attrs:{label:"转发域名",prop:"m_forwardurl"}},[a("el-input",{model:{value:e.ruleForm.m_forwardurl,callback:function(t){e.$set(e.ruleForm,"m_forwardurl",t)},expression:"ruleForm.m_forwardurl"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"提交域名",prop:"m_submiturl"}},[a("el-input",{model:{value:e.ruleForm.m_submiturl,callback:function(t){e.$set(e.ruleForm,"m_submiturl",t)},expression:"ruleForm.m_submiturl"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"通知人",prop:"action_user"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择通知人"},model:{value:e.ruleForm.action_user,callback:function(t){e.$set(e.ruleForm,"action_user",t)},expression:"ruleForm.action_user"}},e._l(e.users,function(e){return a("el-option",{key:e.id,attrs:{value:e.username}})}))],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("立即创建")]),e._v(" "),a("el-button",{on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)},i=[],c={render:s,staticRenderFns:i},m=c,u=a("VU/8"),f=u(o,m,!1,null,null,null);t.default=f.exports},IxHd:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,".card-title{padding-right:30px}.table-expand{font-size:0}.table-expand .el-form-item{margin-right:0;margin-bottom:0;width:100%}.table-expand .el-form-item .el-form-item__label{width:90px;color:#99a9bf}.table-expand .el-form-item .el-form-item__content{width:80%}.card-box{margin-top:20px}.modifychange{position:absolute;margin:5px 20px}.table-pagination{padding:10px 0;float:right}.merchant_info{display:inline-block;margin-left:20px;font-size:14px}.tree{height:300px;overflow-y:scroll;overflow-x:hidden}",""])},VPNs:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("Zk8K"),n=a("vMJZ"),l=a("nSkA"),o={props:["rowdata"],data:function(){return{create_user:localStorage.getItem("username"),rules:{type:[{required:!0,message:"请输入正确的内容",trigger:"change"}],m_id:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],level:[{required:!0,type:"number",message:"请输入正确的内容",trigger:"blur"}],action_user:[{required:!0,message:"请输入正确的内容",trigger:"blur"}]},platforms:[],merchants:[],paychannelnames:[],props:{label:"name",value:"name",children:"merchants"},users:[],sendnotice:!1}},created:function(){this.getPlatforms(),this.getPayChannelNames(),this.getTicketUsers(),this.getMerchants()},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(a){if(!a)return console.log("error submit!!"),!1;Object(r.t)(t.rowdata.id,t.rowdata).then(function(a){if(t.sendnotice){var r={action_user:t.rowdata.action_user,title:"【支付通道修改】",message:"修改人: "+t.create_user+"\n处理人: "+t.rowdata.action_user+"\n平台: "+t.rowdata.platform+"     商户: "+t.rowdata.merchant+"     通道: "+t.rowdata.type};Object(l.i)(r)}t.$emit("formdata",a.data),t.$refs[e].resetFields()}).catch(function(e){t.$message.error("检查修改项是否正确"),console.log(e)})})},getPlatforms:function(){var e=this;Object(r.i)().then(function(t){e.platforms=t.data})},getMerchants:function(){var e=this,t={platform__name:this.rowdata.platform};Object(r.f)(t).then(function(t){e.merchants=t.data})},getPayChannelNames:function(){var e=this;Object(r.h)().then(function(t){e.paychannelnames=t.data})},getTicketUsers:function(){var e=this;Object(n.f)().then(function(t){e.users=t.data})}}},s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"ruleForm",attrs:{model:e.rowdata,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"平台",prop:"platform"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择平台"},on:{change:e.getMerchants},model:{value:e.rowdata.platform,callback:function(t){e.$set(e.rowdata,"platform",t)},expression:"rowdata.platform"}},e._l(e.platforms,function(e){return a("el-option",{key:e.id,attrs:{value:e.name}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"商户",prop:"merchant"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择商户"},model:{value:e.rowdata.merchant,callback:function(t){e.$set(e.rowdata,"merchant",t)},expression:"rowdata.merchant"}},e._l(e.merchants,function(e){return a("el-option",{key:e.id,attrs:{value:e.name}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"类型",prop:"type"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择类型"},model:{value:e.rowdata.type,callback:function(t){e.$set(e.rowdata,"type",t)},expression:"rowdata.type"}},e._l(e.paychannelnames,function(e){return a("el-option",{key:e.id,attrs:{value:e.name}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"费率",prop:"rate"}},[a("el-input",{model:{value:e.rowdata.rate,callback:function(t){e.$set(e.rowdata,"rate",t)},expression:"rowdata.rate"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"key信息",prop:"keyinfo"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.rowdata.keyinfo,callback:function(t){e.$set(e.rowdata,"keyinfo",t)},expression:"rowdata.keyinfo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"紧急度",prop:"m_backurl"}},[a("el-rate",{attrs:{colors:["#99A9BF","#F7BA2A","#ff1425"],"show-text":"",texts:["E","D","C","B","A"]},model:{value:e.rowdata.level,callback:function(t){e.$set(e.rowdata,"level",t)},expression:"rowdata.level"}}),e._v(" "),a("a",{staticClass:"tips"},[e._v("Tip：星数代表问题紧急程度，星数越多，代表越紧急")])],1),e._v(" "),a("el-form-item",{attrs:{label:"转发域名",prop:"m_forwardurl"}},[a("el-input",{model:{value:e.rowdata.m_forwardurl,callback:function(t){e.$set(e.rowdata,"m_forwardurl",t)},expression:"rowdata.m_forwardurl"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"提交域名",prop:"m_submiturl"}},[a("el-input",{model:{value:e.rowdata.m_submiturl,callback:function(t){e.$set(e.rowdata,"m_submiturl",t)},expression:"rowdata.m_submiturl"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"通知人",prop:"action_user"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择通知人"},model:{value:e.rowdata.action_user,callback:function(t){e.$set(e.rowdata,"action_user",t)},expression:"rowdata.action_user"}},e._l(e.users,function(e){return a("el-option",{key:e.id,attrs:{value:e.username}})})),e._v(" "),a("el-checkbox",{model:{value:e.sendnotice,callback:function(t){e.sendnotice=t},expression:"sendnotice"}},[e._v("发送通知")])],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("更新")])],1)],1)},i=[],c={render:s,staticRenderFns:i},m=c,u=a("VU/8"),f=u(o,m,!1,null,null,null);t.default=f.exports},hawx:function(e,t,a){var r=a("IxHd");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("rjj0")("3c02d7ff",r,!0)},xYlS:function(e,t,a){"use strict";function r(e){a("hawx")}Object.defineProperty(t,"__esModule",{value:!0});var n=a("Dd8w"),l=a.n(n),o=a("Zk8K"),s=a("NYxO"),i=a("DQwc"),c=a("VPNs"),m=a("QmSG"),u=a("0xDb"),f=a("nSkA"),d={components:{addPaychannel:i.default,editPaychannel:c.default},data:function(){return{route_path:this.$route.path.split("/"),apiurl:m.apiUrl,platformData:[],merchantData:[],clickbtn:!1,showbtn:!1,selecttype:!1,formEdit:!1,formAdd:!0,formStatus:"",completeForm:!1,daifuForm:!1,paychannel_btn_delete_channel:!1,platformForm:{name:"",ipaddr:"",desc:""},platformRules:{name:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],ipaddr:[{required:!0,message:"请输入正确的内容",trigger:"blur"}]},merchantForm:{platform:"",name:"",m_id:"",domain:"",three:""},merchantRules:{name:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],m_id:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],three:[{required:!0,message:"请输入正确的内容",trigger:"blur"}]},props:{label:"name",children:""},addChannelForm:!1,editChannelForm:!1,dynamicChannels:[],listQuery:{limit:m.LIMIT,offset:"",platform__name:"",merchant__name:"",ordering:""},currentPage:1,pagesize:[m.LIMIT,25,50,100],tabletotal:0,paychannels:[],enclosureData:[],count:0,enclosureForm:{ticket:"",create_user:localStorage.getItem("username"),file:""},uploadurl:m.uploadurl,showenclosure:!1,activeName:"upload",channel_create_user:"",CommentForm:{ticket:"",merchant:"",content:0,create_user:localStorage.getItem("username")},comments:[]}},computed:l()({},Object(s.b)(["elements","role"])),created:function(){this.paychannel_btn_delete_channel=this.elements["支付通道列表-删除通道"],this.fetchPlatformData(),this.fetchMerchantData(),this.fetchPayChannelData()},methods:{fetchPlatformData:function(){var e=this;Object(o.i)().then(function(t){e.platformData=t.data})},fetchMerchantData:function(){var e=this;Object(o.f)().then(function(t){e.merchantData=t.data})},clickMerchantData:function(e){var t=this;Object(o.f)(e).then(function(e){t.merchantForm=e.data[0]})},fetchPayChannelData:function(){var e=this;this.addChannelForm=!1,this.editChannelForm=!1,Object(o.g)(this.listQuery).then(function(t){e.dynamicChannels=t.data.results,e.tabletotal=t.data.count})},postPlatformForm:function(){var e=this;Object(o.p)(this.platformForm).then(function(t){e.$message({message:"恭喜你，添加成功",type:"success"}),e.fetchPlatformData()}).catch(function(t){e.$message.error("添加失败"),console.log(t)})},putPlatformForm:function(e){var t=this;Object(o.v)(e.id,e).then(function(e){t.$message({message:"恭喜你，更新成功",type:"success"}),t.fetchPlatformData()}).catch(function(e){t.$message.error("更新失败"),console.log(e)})},deletePlatformForm:function(e){var t=this;this.$confirm("你确定要删除这个, 是否继续?","美丽的妲己提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(o.d)(e),t.fetchPlatformData(),t.$message({type:"success",message:"删除成功!"})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},postMerchantForm:function(){var e=this;Object(o.m)(this.merchantForm).then(function(t){e.$message({message:"恭喜你，添加成功",type:"success"}),e.fetchPlatformData()}).catch(function(t){e.$message.error("添加失败"),console.log(t)})},putMerchantForm:function(e){var t=this;Object(o.s)(e.id,e).then(function(e){t.$message({message:"恭喜你，更新成功",type:"success"}),t.fetchPlatformData()}).catch(function(e){t.$message.error("更新失败"),console.log(e)})},deleteMerchantForm:function(e){var t=this;this.$confirm("你确定要删除这个, 是否继续?","美丽的妲己提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(o.a)(e),t.fetchPlatformData(),t.$message({type:"success",message:"删除成功!"})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},deletePayChannels:function(e){var t=this;this.$confirm("你确定要删除这个, 是否继续?","美丽的妲己提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(o.b)(e.id),t.dynamicChannels.remove(e),setTimeout(t.fetchPayChannelData(),500),t.$message({type:"success",message:"删除成功!"})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},handlerAdd:function(){this.clickbtn=!0,this.formEdit=!0,this.formStatus="create",this.resetForm()},handlerEdit:function(){this.clickbtn=!0,this.formEdit=!0,this.formStatus="update"},handlerClosed:function(){this.clickbtn=!1,this.formEdit=!0,this.showbtn=!1},editDaifu:function(e){this.daifuForm=!0,this.CommentForm.ticket=e.id,this.CommentForm.merchant=e.merchant,this.channel_create_user=e.create_user},changeDaifu:function(){Object(o.q)(this.CommentForm);var e=Object(u.b)(),t={action_user:""+this.channel_create_user,title:"【代付通道测试】",message:"商户号: "+this.CommentForm.merchant+"\n代付测试金额: "+this.CommentForm.content+"\n测试时间: "+e};Object(f.i)(t),this.daifuForm=!1,this.showenclosure=!0,setTimeout(this.clickPayChannel({id:this.CommentForm.ticket}),500)},resetForm:function(){this.platformForm={name:"",desc:""},this.merchantForm={platform:"",name:"",m_id:"",three:""}},fetchNodeData:function(e,t){if(0===e.level)return t([{name:"region"}]);if(e.level>1)return t([]);var a={platform__name:e.data.name};Object(o.f)(a).then(function(e){var a=e.data;setTimeout(function(){t(a)},500)})},handleNodeClick:function(e,t){this.selecttype=t.isLeaf,this.showbtn=!0,this.formStatus="view",this.formEdit=!0,this.selecttype?(this.merchantForm=e,this.CommentForm.merchant=this.listQuery.merchant__name=e.name):(this.activeName="upload",this.showenclosure=!0,this.platformForm=e,this.enclosureForm.ticket=this.listQuery.platform__name=e.name,this.listQuery.merchant__name="",this.EnclosureData()),this.fetchPayChannelData()},editPayChannel:function(e){this.editChannelForm=!0,this.paychannels=e},clickPayChannel:function(e){var t=this;this.showenclosure=!0,this.activeName="testpay";var a={ticket__id:e.id};Object(o.k)(a).then(function(e){t.comments=e.data}),this.clickMerchantData({name:e.merchant})},EnclosureData:function(){var e=this,t={ticket__name:this.enclosureForm.ticket};Object(o.l)(t).then(function(t){e.enclosureData=t.data,e.count=t.data.length})},deleteEnclosure:function(e){Object(o.e)(e),setTimeout(this.EnclosureData,1e3)},beforeAvatarUpload:function(e){var t=this,a=new FormData;return a.append("username",this.enclosureForm.create_user),a.append("file",e),a.append("create_time",Object(u.a)()),a.append("type",e.type),a.append("archive",this.route_path[1]),Object(f.j)(a).then(function(e){t.enclosureForm.file=e.data.filepath,Object(o.r)(t.enclosureForm),setTimeout(t.EnclosureData,1e3),"Created"===e.statusText&&t.$message({type:"success",message:"恭喜你，上传成功"})}).catch(function(e){t.$message.error("上传失败"),t.$refs.upload.clearFiles(),console.log(e)}),!0},handleSizeChange:function(e){this.listQuery.limit=e,this.fetchPayChannelData()},handleCurrentChange:function(e){this.listQuery.offset=(e-1)*m.LIMIT,this.fetchPayChannelData()},showAllPaychannel:function(){this.listQuery={limit:m.LIMIT,offset:"",platform__name:"",merchant__name:""},this.fetchPayChannelData()},handleSortChange:function(e){"ascending"===e.order?this.listQuery.ordering=e.prop:"descending"===e.order?this.listQuery.ordering="-"+e.prop:this.listQuery.ordering="",this.fetchPayChannelData()}}},p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:6}},[a("el-card",[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",{staticClass:"card-title"},[e._v("平台商户列表")]),e._v(" "),a("el-button-group",[a("el-button",{attrs:{type:"success",plain:"",size:"mini"},on:{click:e.handlerAdd}},[e._v("\n              添加\n            ")]),e._v(" "),e.showbtn?a("el-button",{attrs:{type:"primary",plain:"",size:"mini"},on:{click:e.handlerEdit}},[e._v("\n              编辑\n            ")]):e._e()],1)],1),e._v(" "),a("div",{staticClass:"tree"},[a("el-tree",{attrs:{data:e.platformData,props:e.props,load:e.fetchNodeData,accordion:"",lazy:""},on:{"node-click":e.handleNodeClick}})],1)]),e._v(" "),e.showenclosure?a("el-card",{staticClass:"card-box"},[a("el-tabs",{attrs:{type:"card"},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"上传附件",name:"upload"}},[a("el-upload",{ref:"upload",attrs:{action:e.uploadurl,"show-file-list":!1,disabled:e.count>10,"before-upload":e.beforeAvatarUpload}},[a("el-button",{attrs:{slot:"trigger",size:"mini",type:"danger",plain:"",icon:"upload2",disabled:e.count>10},slot:"trigger"},[e._v("\n                上传\n              ")]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[a("p",[a("a",{staticStyle:{color:"red"}},[e._v("最多只能上传10个文件, 文件名不要带空格")])])])],1),e._v(" "),e.enclosureData.length>0?a("div",{staticClass:"ticketenclosure"},[a("ul",e._l(e.enclosureData,function(t){return t.file?a("li",{key:t.id,staticStyle:{"list-style":"none"}},[a("i",{staticClass:"fa fa-paperclip"}),e._v(" "),a("a",{attrs:{href:e.apiurl+"/upload/"+t.file,download:t.file}},[e._v(e._s(t.file.split("/")[1]))]),e._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除附件",placement:"right"}},[a("el-button",{attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(a){e.deleteEnclosure(t.id)}}})],1)],1):e._e()}))]):e._e()],1),e._v(" "),a("el-tab-pane",{attrs:{label:"通道测试",name:"testpay"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.comments,border:""}},[a("el-table-column",{attrs:{prop:"create_user",label:"测试人",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{prop:"content",label:"代付测试金额",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"create_time",label:"测试时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center",color:"rgb(0,0,0)"},attrs:{slot:"reference"},slot:"reference"},[a("span",[e._v(e._s(e._f("parseDate")(t.row.create_time)))])])]}}])})],1)],1)],1)],1):e._e()],1),e._v(" "),e.clickbtn?a("el-col",{attrs:{span:6}},[a("el-card",[a("div",{attrs:{slot:"header"},slot:"header"},[a("el-switch",{attrs:{"active-text":"商户","inactive-text":"平台"},model:{value:e.selecttype,callback:function(t){e.selecttype=t},expression:"selecttype"}}),e._v(" "),a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:e.handlerClosed}},[e._v("关闭")])],1),e._v(" "),e.selecttype?e._e():a("el-form",{ref:"ruleForm",attrs:{model:e.platformForm,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{attrs:{disabled:"view"===e.formStatus},model:{value:e.platformForm.name,callback:function(t){e.$set(e.platformForm,"name",t)},expression:"platformForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"ip地址",prop:"ipaddr"}},[a("el-input",{attrs:{disabled:"view"===e.formStatus,type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.platformForm.ipaddr,callback:function(t){e.$set(e.platformForm,"ipaddr",t)},expression:"platformForm.ipaddr"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"描述",prop:"desc"}},[a("el-input",{attrs:{disabled:"view"===e.formStatus,type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.platformForm.desc,callback:function(t){e.$set(e.platformForm,"desc",t)},expression:"platformForm.desc"}})],1),e._v(" "),"create"==e.formStatus?a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.postPlatformForm("ruleForm")}}},[e._v("创建")]),e._v(" "),a("el-button",{on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("重置")])],1):e._e(),e._v(" "),"update"==e.formStatus?a("el-form-item",[a("el-button",{attrs:{type:"success"},on:{click:function(t){e.putPlatformForm(e.platformForm)}}},[e._v("更新")]),e._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.deletePlatformForm(e.platformForm.id)}}},[e._v("删除")])],1):e._e()],1),e._v(" "),e.selecttype?a("el-form",{ref:"ruleForm",attrs:{model:e.merchantForm,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"平台",prop:"platform"}},[a("el-select",{attrs:{placeholder:"请选择平台"},model:{value:e.merchantForm.platform,callback:function(t){e.$set(e.merchantForm,"platform",t)},expression:"merchantForm.platform"}},e._l(e.platformData,function(e){return a("el-option",{key:e.id,attrs:{value:e.name}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"商户号",prop:"name"}},[a("el-input",{attrs:{disabled:"view"===e.formStatus},model:{value:e.merchantForm.name,callback:function(t){e.$set(e.merchantForm,"name",t)},expression:"merchantForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"公司名",prop:"m_id"}},[a("el-input",{attrs:{disabled:"view"===e.formStatus},model:{value:e.merchantForm.m_id,callback:function(t){e.$set(e.merchantForm,"m_id",t)},expression:"merchantForm.m_id"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"绑定域名",prop:"domain"}},[a("el-input",{attrs:{disabled:"view"===e.formStatus},model:{value:e.merchantForm.domain,callback:function(t){e.$set(e.merchantForm,"domain",t)},expression:"merchantForm.domain"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"业务经理",prop:"three"}},[a("el-input",{attrs:{disabled:"view"===e.formStatus},model:{value:e.merchantForm.three,callback:function(t){e.$set(e.merchantForm,"three",t)},expression:"merchantForm.three"}})],1),e._v(" "),"create"==e.formStatus?a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.postMerchantForm("ruleForm")}}},[e._v("创建")]),e._v(" "),a("el-button",{on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("重置")])],1):e._e(),e._v(" "),"update"==e.formStatus?a("el-form-item",[a("el-button",{attrs:{type:"success"},on:{click:function(t){e.putMerchantForm(e.merchantForm)}}},[e._v("更新")]),e._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.deleteMerchantForm(e.merchantForm.id)}}},[e._v("删除")])],1):e._e()],1):e._e()],1)],1):e._e(),e._v(" "),e.clickbtn?e._e():a("el-col",{attrs:{span:18}},[a("el-card",[a("div",{attrs:{slot:"header"},slot:"header"},[a("el-button",{attrs:{size:"small",type:"primary",plain:""},on:{click:function(t){e.addChannelForm=!0}}},[e._v("添加通道\n          ")]),e._v(" "),e.showenclosure?a("div",{staticClass:"merchant_info"},[e._v("\n            商户号："+e._s(e.merchantForm.name)+" "),a("a",{staticClass:"shu"}),e._v("\n            商户公司："+e._s(e.merchantForm.m_id)+" "),a("a",{staticClass:"shu"}),e._v("\n            业务经理："+e._s(e.merchantForm.three)+"\n          ")]):e._e(),e._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{size:"small",type:"success",plain:""},on:{click:e.showAllPaychannel}},[e._v("显示全部\n          ")])],1),e._v(" "),a("el-table",{ref:"channelsTable",staticStyle:{width:"100%"},attrs:{data:e.dynamicChannels,border:""},on:{"row-click":e.clickPayChannel,"sort-change":e.handleSortChange}},[a("el-table-column",{attrs:{type:"index",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{label:"查看明细",type:"expand",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"key信息",prop:"keyinfo"}},[a("el-input",{attrs:{type:"textarea",disabled:"",autosize:{minRows:5,maxRows:10}},model:{value:t.row.keyinfo,callback:function(a){e.$set(t.row,"keyinfo",a)},expression:"props.row.keyinfo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"转发域名"}},[a("el-input",{attrs:{size:"small",disabled:""},model:{value:t.row.m_forwardurl,callback:function(a){e.$set(t.row,"m_forwardurl",a)},expression:"props.row.m_forwardurl"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"提交域名"}},[a("el-input",{attrs:{size:"small",disabled:""},model:{value:t.row.m_submiturl,callback:function(a){e.$set(t.row,"m_submiturl",a)},expression:"props.row.m_submiturl"}})],1)],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"platform",label:"平台",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"type",label:"通道类型",width:"130"}}),e._v(" "),a("el-table-column",{attrs:{prop:"rate",label:"费率",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{prop:"level",label:"紧急度",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center",color:"rgb(0,0,0)"},attrs:{slot:"reference"},slot:"reference"},[a("el-rate",{attrs:{colors:["#99A9BF","#F7BA2A","#ff1425"],disabled:""},model:{value:t.row.level,callback:function(a){e.$set(t.row,"level",a)},expression:"scope.row.level"}})],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"create_time",label:"创建时间",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center",color:"rgb(0,0,0)"},attrs:{slot:"reference"},slot:"reference"},[a("span",[e._v(e._s(e._f("parseDate")(t.row.create_time)))])])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"280"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(a){e.editPayChannel(t.row)}}},[e._v("修改")]),e._v(" "),"代付提款"==t.row.type?a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.editDaifu(t.row)}}},[e._v("代付测试\n              ")]):e._e(),e._v(" "),e.paychannel_btn_delete_channel||"super"===e.role?a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){e.deletePayChannels(t.row)}}},[e._v("删除\n              ")]):e._e()]}}])})],1),e._v(" "),a("div",{staticClass:"table-pagination"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pagesize,"page-size":e.listQuery.limit,layout:"prev, pager, next, sizes",total:e.tabletotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t}}})],1)],1)],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.addChannelForm},on:{"update:visible":function(t){e.addChannelForm=t}}},[a("add-paychannel",{on:{formdata:e.fetchPayChannelData}})],1),e._v(" "),a("el-dialog",{attrs:{visible:e.editChannelForm},on:{"update:visible":function(t){e.editChannelForm=t}}},[a("edit-paychannel",{attrs:{rowdata:e.paychannels},on:{formdata:e.fetchPayChannelData}})],1),e._v(" "),a("el-dialog",{attrs:{visible:e.daifuForm,width:"30%"},on:{"update:visible":function(t){e.daifuForm=t}}},[a("el-form",{attrs:{model:e.CommentForm,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"代付测试金额",props:"content"}},[a("el-input",{model:{value:e.CommentForm.content,callback:function(t){e.$set(e.CommentForm,"content",t)},expression:"CommentForm.content"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"success",size:"mini"},on:{click:e.changeDaifu}},[e._v("确定")])],1)],1)],1)],1)},h=[],_={render:p,staticRenderFns:h},b=_,v=a("VU/8"),g=r,y=v(d,b,!1,g,null,null);t.default=y.exports}});