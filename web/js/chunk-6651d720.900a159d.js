(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6651d720"],{"45ae":function(e,t,n){},c166:function(e,t,n){"use strict";var i=n("45ae"),s=n.n(i);s.a},d31b:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.id,expression:"id"}],domProps:{value:e.id},on:{input:function(t){t.target.composing||(e.id=t.target.value)}}})]),n("button",{attrs:{type:"submit"},on:{click:e.click}},[e._v("view")]),n("p",[e._v(e._s(e.message.title))]),n("p",{domProps:{innerHTML:e._s(e.message.content)}}),n("p",[e._v(e._s(e.message.releaseTime))])])},s=[],a={methods:{click:function(){var e=this,t={id:this.id};this.axios.post("/test",t).then((function(t){e.message=t.data})).catch((function(t){window.console.log(t),e.message={title:"not found"}}))}},data:function(){return{id:null,message:{}}}},o=a,c=(n("c166"),n("2877")),u=Object(c["a"])(o,i,s,!1,null,"1ccadd0e",null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-6651d720.900a159d.js.map