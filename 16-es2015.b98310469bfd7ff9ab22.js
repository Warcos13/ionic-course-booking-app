(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{cAcB:function(l,n,u){"use strict";u.r(n);var i=u("8Y7J");class o{}var e=u("pMnS"),t=u("MKJQ"),b=u("sZkV"),a=u("s7LF"),s=u("SVse"),r=u("qXBG");class g{constructor(l,n,u){this.authService=l,this.router=n,this.loadingCtrl=u,this.isLoading=!1,this.isLogin=!0}ngOnInit(){}onLogin(){this.authService.login(),this.isLoading=!0,this.loadingCtrl.create({keyboardClose:!0,message:"Loggin in..."}).then(l=>{l.present(),setTimeout(()=>{this.isLoading=!1,l.dismiss(),this.router.navigateByUrl("/places/tabs/discover")},1500)})}onSubmit(l){if(!l.valid)return;const n=l.value.email,u=l.value.password;this.isLogin?console.log("Login:"+n+u):console.log("Signup:"+n+u)}onSwitchAuthMode(){this.isLogin=!this.isLogin}}var d=u("iInd"),p=i.nb({encapsulation:0,styles:[[""]],data:{}});function c(l){return i.Jb(0,[(l()(),i.pb(0,0,null,null,4,"ion-item",[["lines","none"]],null,null,null,t.kb,t.s)),i.ob(1,49152,null,0,b.H,[i.h,i.k,i.x],{lines:[0,"lines"]},null),(l()(),i.pb(2,0,null,0,2,"ion-label",[],null,null,null,t.lb,t.w)),i.ob(3,49152,null,0,b.N,[i.h,i.k,i.x],null,null),(l()(),i.Hb(-1,0,["Should be a valid email."]))],(function(l,n){l(n,1,0,"none")}),null)}function h(l){return i.Jb(0,[(l()(),i.pb(0,0,null,null,4,"ion-item",[["lines","none"]],null,null,null,t.kb,t.s)),i.ob(1,49152,null,0,b.H,[i.h,i.k,i.x],{lines:[0,"lines"]},null),(l()(),i.pb(2,0,null,0,2,"ion-label",[],null,null,null,t.lb,t.w)),i.ob(3,49152,null,0,b.N,[i.h,i.k,i.x],null,null),(l()(),i.Hb(-1,0,["Should at least 6 characters long"]))],(function(l,n){l(n,1,0,"none")}),null)}function m(l){return i.Jb(0,[(l()(),i.pb(0,0,null,null,6,"ion-header",[],null,null,null,t.db,t.o)),i.ob(1,49152,null,0,b.B,[i.h,i.k,i.x],null,null),(l()(),i.pb(2,0,null,0,4,"ion-toolbar",[],null,null,null,t.Db,t.O)),i.ob(3,49152,null,0,b.zb,[i.h,i.k,i.x],null,null),(l()(),i.pb(4,0,null,0,2,"ion-title",[],null,null,null,t.Cb,t.N)),i.ob(5,49152,null,0,b.xb,[i.h,i.k,i.x],null,null),(l()(),i.Hb(6,0,["",""])),(l()(),i.pb(7,0,null,null,58,"ion-content",[["class","ion-padding"]],null,null,null,t.ab,t.l)),i.ob(8,49152,null,0,b.u,[i.h,i.k,i.x],null,null),(l()(),i.pb(9,0,null,0,56,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var o=!0,e=l.component;return"submit"===n&&(o=!1!==i.Ab(l,11).onSubmit(u)&&o),"reset"===n&&(o=!1!==i.Ab(l,11).onReset()&&o),"ngSubmit"===n&&(o=!1!==e.onSubmit(i.Ab(l,11))&&o),o}),null,null)),i.ob(10,16384,null,0,a.w,[],null,null),i.ob(11,4210688,[["f",4]],0,a.o,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),i.Eb(2048,null,a.a,null,[a.o]),i.ob(13,16384,null,0,a.n,[[4,a.a]],null,null),(l()(),i.pb(14,0,null,null,51,"ion-grid",[],null,null,null,t.cb,t.n)),i.ob(15,49152,null,0,b.A,[i.h,i.k,i.x],null,null),(l()(),i.pb(16,0,null,0,39,"ion-row",[],null,null,null,t.qb,t.B)),i.ob(17,49152,null,0,b.gb,[i.h,i.k,i.x],null,null),(l()(),i.pb(18,0,null,0,37,"ion-col",[["offset-sm","3"],["size-sm","6"]],null,null,null,t.Z,t.k)),i.ob(19,49152,null,0,b.t,[i.h,i.k,i.x],null,null),(l()(),i.pb(20,0,null,0,35,"ion-list",[],null,null,null,t.mb,t.x)),i.ob(21,49152,null,0,b.O,[i.h,i.k,i.x],null,null),(l()(),i.pb(22,0,null,0,14,"ion-item",[],null,null,null,t.kb,t.s)),i.ob(23,49152,null,0,b.H,[i.h,i.k,i.x],null,null),(l()(),i.pb(24,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,t.lb,t.w)),i.ob(25,49152,null,0,b.N,[i.h,i.k,i.x],{position:[0,"position"]},null),(l()(),i.Hb(-1,0,["Email"])),(l()(),i.pb(27,0,null,0,9,"ion-input",[["email",""],["name","email"],["ngModel",""],["required",""],["type","email"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==i.Ab(l,31)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==i.Ab(l,31)._handleInputEvent(u.target)&&o),o}),t.gb,t.r)),i.ob(28,16384,null,0,a.r,[],{required:[0,"required"]},null),i.ob(29,16384,null,0,a.b,[],{email:[0,"email"]},null),i.Eb(1024,null,a.j,(function(l,n){return[l,n]}),[a.r,a.b]),i.ob(31,16384,null,0,b.Lb,[i.k],null,null),i.Eb(1024,null,a.k,(function(l){return[l]}),[b.Lb]),i.ob(33,671744,[["emailCtrl",4]],0,a.p,[[2,a.a],[6,a.j],[8,null],[6,a.k]],{name:[0,"name"],model:[1,"model"]},null),i.Eb(2048,null,a.l,null,[a.p]),i.ob(35,16384,null,0,a.m,[[4,a.l]],null,null),i.ob(36,49152,null,0,b.G,[i.h,i.k,i.x],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),(l()(),i.eb(16777216,null,0,1,null,c)),i.ob(38,16384,null,0,s.k,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(l()(),i.pb(39,0,null,0,14,"ion-item",[],null,null,null,t.kb,t.s)),i.ob(40,49152,null,0,b.H,[i.h,i.k,i.x],null,null),(l()(),i.pb(41,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,t.lb,t.w)),i.ob(42,49152,null,0,b.N,[i.h,i.k,i.x],{position:[0,"position"]},null),(l()(),i.Hb(-1,0,["Password"])),(l()(),i.pb(44,0,null,0,9,"ion-input",[["minlength","6"],["name","password"],["ngModel",""],["required",""],["type","password"]],[[1,"required",0],[1,"minlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==i.Ab(l,48)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==i.Ab(l,48)._handleInputEvent(u.target)&&o),o}),t.gb,t.r)),i.ob(45,16384,null,0,a.r,[],{required:[0,"required"]},null),i.ob(46,540672,null,0,a.i,[],{minlength:[0,"minlength"]},null),i.Eb(1024,null,a.j,(function(l,n){return[l,n]}),[a.r,a.i]),i.ob(48,16384,null,0,b.Lb,[i.k],null,null),i.Eb(1024,null,a.k,(function(l){return[l]}),[b.Lb]),i.ob(50,671744,[["passwordCtrl",4]],0,a.p,[[2,a.a],[6,a.j],[8,null],[6,a.k]],{name:[0,"name"],model:[1,"model"]},null),i.Eb(2048,null,a.l,null,[a.p]),i.ob(52,16384,null,0,a.m,[[4,a.l]],null,null),i.ob(53,49152,null,0,b.G,[i.h,i.k,i.x],{minlength:[0,"minlength"],name:[1,"name"],required:[2,"required"],type:[3,"type"]},null),(l()(),i.eb(16777216,null,0,1,null,h)),i.ob(55,16384,null,0,s.k,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(l()(),i.pb(56,0,null,0,9,"ion-row",[],null,null,null,t.qb,t.B)),i.ob(57,49152,null,0,b.gb,[i.h,i.k,i.x],null,null),(l()(),i.pb(58,0,null,0,7,"ion-col",[["offset-sm","3"],["size-sm","6"]],null,null,null,t.Z,t.k)),i.ob(59,49152,null,0,b.t,[i.h,i.k,i.x],null,null),(l()(),i.pb(60,0,null,0,2,"ion-button",[["color","primary"],["expand","full"],["fill","clear"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.onSwitchAuthMode()&&i),i}),t.S,t.d)),i.ob(61,49152,null,0,b.k,[i.h,i.k,i.x],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"],type:[3,"type"]},null),(l()(),i.Hb(62,0,[" Switch to "," "])),(l()(),i.pb(63,0,null,0,2,"ion-button",[["color","primary"],["expand","block"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.onLogin()&&i),i}),t.S,t.d)),i.ob(64,49152,null,0,b.k,[i.h,i.k,i.x],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"],type:[3,"type"]},null),(l()(),i.Hb(-1,0,[" Login "]))],(function(l,n){l(n,25,0,"floating"),l(n,28,0,""),l(n,29,0,""),l(n,33,0,"email",""),l(n,36,0,"email","","email"),l(n,38,0,!i.Ab(n,33).valid&&i.Ab(n,33).touched),l(n,42,0,"floating"),l(n,45,0,""),l(n,46,0,"6"),l(n,50,0,"password",""),l(n,53,0,"6","password","","password"),l(n,55,0,!i.Ab(n,50).valid&&i.Ab(n,50).touched),l(n,61,0,"primary","full","clear","button"),l(n,64,0,"primary",!i.Ab(n,11).valid,"block","button")}),(function(l,n){var u=n.component;l(n,6,0,u.isLogin?"Login":"Singup"),l(n,9,0,i.Ab(n,13).ngClassUntouched,i.Ab(n,13).ngClassTouched,i.Ab(n,13).ngClassPristine,i.Ab(n,13).ngClassDirty,i.Ab(n,13).ngClassValid,i.Ab(n,13).ngClassInvalid,i.Ab(n,13).ngClassPending),l(n,27,0,i.Ab(n,28).required?"":null,i.Ab(n,35).ngClassUntouched,i.Ab(n,35).ngClassTouched,i.Ab(n,35).ngClassPristine,i.Ab(n,35).ngClassDirty,i.Ab(n,35).ngClassValid,i.Ab(n,35).ngClassInvalid,i.Ab(n,35).ngClassPending),l(n,44,0,i.Ab(n,45).required?"":null,i.Ab(n,46).minlength?i.Ab(n,46).minlength:null,i.Ab(n,52).ngClassUntouched,i.Ab(n,52).ngClassTouched,i.Ab(n,52).ngClassPristine,i.Ab(n,52).ngClassDirty,i.Ab(n,52).ngClassValid,i.Ab(n,52).ngClassInvalid,i.Ab(n,52).ngClassPending),l(n,62,0,u.isLogin?"Signup":"Login")}))}function k(l){return i.Jb(0,[(l()(),i.pb(0,0,null,null,1,"app-auth",[],null,null,null,m,p)),i.ob(1,114688,null,0,g,[r.a,d.m,b.Db],null,null)],(function(l,n){l(n,1,0)}),null)}var f=i.lb("app-auth",g,k,{},{},[]);class A{}u.d(n,"AuthPageModuleNgFactory",(function(){return y}));var y=i.mb(o,[],(function(l){return i.xb([i.yb(512,i.j,i.X,[[8,[e.a,f]],[3,i.j],i.v]),i.yb(4608,s.m,s.l,[i.s,[2,s.s]]),i.yb(4608,a.u,a.u,[]),i.yb(4608,b.c,b.c,[i.x,i.g]),i.yb(4608,b.Eb,b.Eb,[b.c,i.j,i.p]),i.yb(4608,b.Ib,b.Ib,[b.c,i.j,i.p]),i.yb(1073742336,s.b,s.b,[]),i.yb(1073742336,a.t,a.t,[]),i.yb(1073742336,a.h,a.h,[]),i.yb(1073742336,b.Bb,b.Bb,[]),i.yb(1073742336,d.o,d.o,[[2,d.t],[2,d.m]]),i.yb(1073742336,A,A,[]),i.yb(1073742336,o,o,[]),i.yb(1024,d.k,(function(){return[[{path:"",component:g}]]}),[])])}))}}]);