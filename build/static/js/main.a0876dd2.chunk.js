(this["webpackJsonpreact-frontend-multi-step-form"]=this["webpackJsonpreact-frontend-multi-step-form"]||[]).push([[0],{100:function(t,e,n){},238:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(22),i=n.n(c),s=(n(99),n(100),n(94)),o=n(14),l=n(15),u=n(17),j=n(16),b=n(23),p=n.n(b),x=n(24),h=n.n(x),O=n(26),m=n.n(O),f=n(25),y=n.n(f),v=n(0),d=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).continue=function(e){e.preventDefault(),t.props.nextStep()},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props,e=t.values,n=t.handleChange;return Object(v.jsx)(p.a,{children:Object(v.jsxs)(r.a.Fragment,{children:[Object(v.jsx)(h.a,{title:"Enter User Details"}),Object(v.jsx)(m.a,{hintText:"Enter Your First Name",floatingLabelText:"First Name",onChange:n("firstName"),defaultValue:e.firstName}),Object(v.jsx)("br",{}),Object(v.jsx)(m.a,{hintText:"Enter Your Last Name",floatingLabelText:"Last Name",onChange:n("lastName"),defaultValue:e.lastName}),Object(v.jsx)("br",{}),Object(v.jsx)(m.a,{hintText:"Enter Your Email",floatingLabelText:"Email",onChange:n("email"),defaultValue:e.email}),Object(v.jsx)("br",{}),Object(v.jsx)(y.a,{label:"Continue",primary:!0,style:g.button,onClick:this.continue})]})})}}]),n}(a.Component),g={button:{margin:15}},C=d,T=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).continue=function(e){e.preventDefault(),t.props.nextStep()},t.back=function(e){e.preventDefault(),t.props.prevStep()},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props,e=t.values,n=t.handleChange;return Object(v.jsx)(p.a,{children:Object(v.jsxs)(r.a.Fragment,{children:[Object(v.jsx)(h.a,{title:"Enter Personal Details"}),Object(v.jsx)(m.a,{hintText:"Enter Your Occupation",floatingLabelText:"Occupation",onChange:n("occupation"),defaultValue:e.occupation}),Object(v.jsx)("br",{}),Object(v.jsx)(m.a,{hintText:"Enter Your City",floatingLabelText:"City",onChange:n("city"),defaultValue:e.city}),Object(v.jsx)("br",{}),Object(v.jsx)(m.a,{hintText:"Enter Your Bio",floatingLabelText:"Bio",onChange:n("bio"),defaultValue:e.bio}),Object(v.jsx)("br",{}),Object(v.jsx)(y.a,{label:"Back",primary:!1,style:S.button,onClick:this.back}),Object(v.jsx)(y.a,{label:"Continue",primary:!0,style:S.button,onClick:this.continue})]})})}}]),n}(a.Component),S={button:{margin:15}},N=T,k=n(27),L=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).continue=function(e){e.preventDefault(),t.props.nextStep()},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props.values,e=t.firstName,n=t.lastName,a=t.email,c=t.occupation,i=t.city,s=t.bio;return Object(v.jsx)(p.a,{children:Object(v.jsxs)(r.a.Fragment,{children:[Object(v.jsx)(h.a,{title:"Confirm User Data"}),Object(v.jsxs)(k.List,{children:[Object(v.jsx)(k.ListItem,{primaryText:"First Name",secondaryText:e}),Object(v.jsx)(k.ListItem,{primaryText:"Last Name",secondaryText:n}),Object(v.jsx)(k.ListItem,{primaryText:"Email",secondaryText:a}),Object(v.jsx)(k.ListItem,{primaryText:"Occupation",secondaryText:c}),Object(v.jsx)(k.ListItem,{primaryText:"City",secondaryText:i}),Object(v.jsx)(k.ListItem,{primaryText:"Bio",secondaryText:s})]}),Object(v.jsx)(y.a,{label:"Back",primary:!1,style:E.button,onClick:this.back}),Object(v.jsx)(y.a,{label:"Confirm & Continue",primary:!0,style:E.button,onClick:this.continue})]})})}}]),n}(a.Component),E={button:{margin:15}},F=L,D=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).continue=function(e){e.preventDefault(),t.props.nextStep()},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(v.jsx)(p.a,{children:Object(v.jsxs)(r.a.Fragment,{children:[Object(v.jsx)(h.a,{title:"Success!"}),Object(v.jsx)("h1",{children:"Thank you For your Submission"}),Object(v.jsx)("p",{children:"You are all done!"})]})})}}]),n}(a.Component),w=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={step:1,firstName:"",lastName:"",email:"",occupation:"",city:"",bio:""},t.nextStep=function(){var e=t.state.step;t.setState({step:e+1})},t.prevStep=function(){var e=t.state.step;t.setState({step:e-1})},t.handleChange=function(e){return function(n){t.setState(Object(s.a)({},e,n.target.value))}},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.step,e=this.state,n={firstName:e.firstName,lastName:e.lastName,email:e.email,occupation:e.occupation,city:e.city,bio:e.bio};switch(t){case 1:return Object(v.jsx)(C,{nextStep:this.nextStep,handleChange:this.handleChange,values:n});case 2:return Object(v.jsx)(N,{nextStep:this.nextStep,prevStep:this.prevStep,handleChange:this.handleChange,values:n});case 3:return Object(v.jsx)(F,{nextStep:this.nextStep,prevStep:this.prevStep,values:n});case 4:return Object(v.jsx)(D,{})}}}]),n}(a.Component);var I=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(w,{})})},B=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,239)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),a(t),r(t),c(t),i(t)}))};i.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(I,{})}),document.getElementById("root")),B()},99:function(t,e,n){}},[[238,1,2]]]);
//# sourceMappingURL=main.a0876dd2.chunk.js.map