(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{E1GU:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var o=n("LRne"),c=n("fXoL");let r=(()=>{class e{constructor(){}postLogin(e){const t=new a;return t.authenticated="admin"===e.username&&"admin"===e.password,t.message=t.authenticated?"OK":"Usu\xe1rio e/ou senha inv\xe1lidos!",t.token="token",Object(o.a)(t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=c.Hb({token:e,factory:e.\u0275fac}),e})();class a{}},PCNd:function(e,t,n){"use strict";n.d(t,"a",function(){return b});var o=n("ofXK"),c=n("E1GU"),r=n("m4xP"),a=n("3Pt+"),i=n("tyNb"),s=n("fXoL");let b=(()=>{class e{}return e.\u0275mod=s.Jb({type:e}),e.\u0275inj=s.Ib({factory:function(t){return new(t||e)},providers:[c.a,r.a],imports:[[o.b,i.e,a.b]]}),e})()},"ct+p":function(e,t,n){"use strict";n.r(t),n.d(t,"HomeModule",function(){return T});var o=n("ofXK"),c=n("tyNb"),r={prefix:"fab",iconName:"discord",icon:[448,512,[],"f392","M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z"]},a=n("fXoL"),i=n("AytR"),s=n("E1GU"),b=n("1kSV");const l=["modalobj"];function d(e,t){if(1&e){const e=a.Rb();a.Qb(0,"div",1),a.Qb(1,"div",2),a.Qb(2,"h5",3),a.Bc(3),a.Pb(),a.Qb(4,"div",4),a.ac("click",function(){return t.$implicit.close("cancel")}),a.dc(),a.Qb(5,"svg",5),a.Mb(6,"path",6),a.Pb(),a.Pb(),a.Pb(),a.cc(),a.Qb(7,"div",7),a.hc(8),a.Pb(),a.Qb(9,"div",8),a.Qb(10,"button",9),a.ac("click",function(){return t.$implicit.close("cancel")}),a.Bc(11,"Voltar"),a.Pb(),a.Qb(12,"button",10),a.ac("click",function(t){return a.sc(e),a.ec().submitAction.emit(t)}),a.Bc(13),a.Pb(),a.Pb(),a.Pb()}if(2&e){const e=a.ec();a.yb(3),a.Cc(e.title),a.yb(10),a.Cc(e.submitText)}}const u=["*"];let m=(()=>{class e{constructor(e){this.modalService=e,this.title="Modal",this.submitText="Ok",this.submitAction=new a.o}ngOnInit(){}open(){return this.modalService.open(this.modal,{ariaLabelledBy:"modal-basic-title"}).result}close(e){this.modal.close(e)}}return e.\u0275fac=function(t){return new(t||e)(a.Lb(b.a))},e.\u0275cmp=a.Fb({type:e,selectors:[["app-modal"]],viewQuery:function(e,t){if(1&e&&a.Fc(l,!0),2&e){let e;a.qc(e=a.bc())&&(t.modal=e.first)}},inputs:{title:"title",submitText:"submitText"},outputs:{submitAction:"submitAction"},ngContentSelectors:u,decls:2,vars:0,consts:[["modalobj",""],[1,"modal-content"],[1,"modal-header"],["id","exampleModalLongTitle",1,"modal-title"],["data-dismiss","modal","aria-label","Close",1,"close",3,"click"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","18","height","18","viewBox","0 0 18 18",1,"fill-current","text-black"],["d","M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"],[1,"modal-body"],[1,"modal-footer"],["type","button",1,"btn","btn-secondary",3,"click"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(e,t){1&e&&(a.ic(),a.zc(0,d,14,2,"ng-template",null,0,a.Ac))},styles:["div.w-100.h-100[_ngcontent-%COMP%]{background-color:rgba(26,32,44,.5);z-index:5}.close[_ngcontent-%COMP%]{cursor:pointer}"]}),e})();var g=n("3Pt+");const f=["modal"];function p(e,t){if(1&e&&(a.Qb(0,"div",2),a.Qb(1,"p",8),a.Bc(2),a.Pb(),a.Pb()),2&e){const e=a.ec();a.yb(2),a.Cc(e.errorMessage)}}let h=(()=>{class e{constructor(e){this.loginService=e,this.isEnabled=!1,this.cancel=new a.o,this.authenticated=new a.o,this.errorMessage=null}ngOnInit(){}onSubmit(){this.loginService.postLogin({username:this.username,password:this.password}).subscribe(e=>{e.authenticated?this.modal.close("ok"):this.errorMessage=e.message},e=>{this.errorMessage=e},()=>{})}open(){this.modal.open().then(e=>{"ok"===e?this.authenticated.emit(e):this.cancel.emit(e)},e=>this.cancel.emit(e))}}return e.\u0275fac=function(t){return new(t||e)(a.Lb(s.a))},e.\u0275cmp=a.Fb({type:e,selectors:[["app-login"]],viewQuery:function(e,t){if(1&e&&a.Fc(f,!0),2&e){let e;a.qc(e=a.bc())&&(t.modal=e.first)}},outputs:{cancel:"cancel",authenticated:"authenticated"},decls:11,vars:3,consts:[["title","Login","submitText","Login",3,"submitAction"],["modal",""],[1,"form-group"],["for","username",1,""],["id","username","type","text","placeholder","Usu\xe1rio","required","",1,"form-control",3,"ngModel","ngModelChange"],["for","password",1,""],["id","password","type","password","placeholder","**********","required","",1,"form-control",3,"ngModel","ngModelChange"],["class","form-group",4,"ngIf"],[1,"text-danger"]],template:function(e,t){1&e&&(a.Qb(0,"app-modal",0,1),a.ac("submitAction",function(){return t.onSubmit()}),a.Qb(2,"div",2),a.Qb(3,"label",3),a.Bc(4,"Usu\xe1rio"),a.Pb(),a.Qb(5,"input",4),a.ac("ngModelChange",function(e){return t.username=e}),a.Pb(),a.Pb(),a.Qb(6,"div",2),a.Qb(7,"label",5),a.Bc(8,"Senha"),a.Pb(),a.Qb(9,"input",6),a.ac("ngModelChange",function(e){return t.password=e}),a.Pb(),a.Pb(),a.zc(10,p,3,1,"div",7),a.Pb()),2&e&&(a.yb(5),a.jc("ngModel",t.username),a.yb(4),a.jc("ngModel",t.password),a.yb(1),a.jc("ngIf",null!==t.errorMessage))},directives:[m,g.a,g.h,g.e,g.f,o.j],encapsulation:2}),e})();const v=function(){return["/"]};function P(e,t){1&e&&(a.Qb(0,"li",8),a.Qb(1,"a",7),a.Bc(2,"Equipe"),a.Pb(),a.Pb()),2&e&&(a.yb(1),a.jc("routerLink",a.mc(2,v))("fragment","equip"))}function M(e,t){if(1&e){const e=a.Rb();a.Qb(0,"li",8),a.Qb(1,"a",11),a.ac("click",function(){return a.sc(e),a.ec(),a.rc(20).open()}),a.Bc(2,"Login"),a.Pb(),a.Pb()}}let Q=(()=>{class e{constructor(){this.relative=!1,this.loginEnabled=i.a.loginEnabled}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Fb({type:e,selectors:[["app-header"]],inputs:{relative:"relative"},decls:21,vars:19,consts:[[1,"w-100","pb-2"],[1,"navbar","navbar-expand-lg","navbar-light","pt-3","px-5","w-100"],[1,"navbar-brand",3,"routerLink"],[1,"flex","w-100"],["id","navbarNavDropdown",1,"collapse","navbar-collapse","float-right"],[1,"navbar-nav"],["routerLinkActive","active",1,"nav-item"],[1,"nav-link",3,"routerLink","fragment"],[1,"nav-item"],["class","nav-item",4,"ngIf"],["login",""],[1,"nav-link","btn","btn-light",3,"click"]],template:function(e,t){1&e&&(a.Qb(0,"header",0),a.Qb(1,"nav",1),a.Qb(2,"a",2),a.Qb(3,"b"),a.Bc(4,"Random Feeders"),a.Pb(),a.Pb(),a.Qb(5,"div",3),a.Qb(6,"div",4),a.Qb(7,"ul",5),a.Qb(8,"li",6),a.Qb(9,"a",7),a.Bc(10,"Sobre"),a.Pb(),a.Pb(),a.Qb(11,"li",8),a.Qb(12,"a",7),a.Bc(13,"Campeonatos"),a.Pb(),a.Pb(),a.zc(14,P,3,3,"li",9),a.Qb(15,"li",8),a.Qb(16,"a",7),a.Bc(17,"Contate-nos"),a.Pb(),a.Pb(),a.zc(18,M,3,0,"li",9),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Mb(19,"app-login",null,10)),2&e&&(a.Db("position-absolute",!t.relative)("position-relative",t.relative)("with-bg",t.relative),a.yb(2),a.jc("routerLink",a.mc(15,v)),a.yb(7),a.jc("routerLink",a.mc(16,v))("fragment","about"),a.yb(3),a.jc("routerLink",a.mc(17,v))("fragment","tournaments"),a.yb(2),a.jc("ngIf",!1),a.yb(2),a.jc("routerLink",a.mc(18,v))("fragment","contact"),a.yb(2),a.jc("ngIf",t.loginEnabled))},directives:[c.d,c.c,o.j,h],styles:["header.with-bg[_ngcontent-%COMP%]{background-color:#383b43}a[_ngcontent-%COMP%]{color:hsla(0,0%,100%,.5)!important}a.navbar-brand[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover{color:#fff!important}li[_ngcontent-%COMP%]{margin-right:20px}li.btn[_ngcontent-%COMP%]{margin-right:0}a.btn-light[_ngcontent-%COMP%]{border-radius:20px;padding:8px 20px!important}a.btn-light[_ngcontent-%COMP%], a.btn-light[_ngcontent-%COMP%]:hover{color:#000!important}"]}),e})();var w=n("6NWb");function x(e,t){1&e&&(a.Qb(0,"p"),a.Bc(1,"\xa9 Random Feeders. Todos os direitos reservados."),a.Pb())}let y=(()=>{class e{constructor(e){this.router=e,this.faDiscord=r}ngOnInit(){}isHomePage(){return"/"===this.router.url||this.router.url.startsWith("/#")}}return e.\u0275fac=function(t){return new(t||e)(a.Lb(c.a))},e.\u0275cmp=a.Fb({type:e,selectors:[["app-layout"]],decls:12,vars:3,consts:[[1,"d-flex","flex-column","w-100","h-100","m-0","p-0"],[1,"w-100","m-0","p-0"],[1,"w-100",3,"relative"],[1,"flex-grow-1","m-0","p-0"],[1,"m-0","p-0"],[1,"row","w-100","m-0","px-5"],[1,"col","my-auto"],[4,"ngIf"],[1,"col","my-auto","text-right"],["href","http://discord.randomfeeders.com.br/","target","_blank",1,"rounded-circle","p-2","discord"],["size","lg",3,"icon"]],template:function(e,t){1&e&&(a.Qb(0,"div",0),a.Qb(1,"div",1),a.Mb(2,"app-header",2),a.Pb(),a.Qb(3,"div",3),a.Mb(4,"router-outlet"),a.Pb(),a.Qb(5,"div",4),a.Qb(6,"footer",5),a.Qb(7,"div",6),a.zc(8,x,2,0,"p",7),a.Pb(),a.Qb(9,"div",8),a.Qb(10,"a",9),a.Mb(11,"fa-icon",10),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb()),2&e&&(a.yb(2),a.jc("relative",!t.isHomePage()),a.yb(6),a.jc("ngIf",!1),a.yb(3),a.jc("icon",t.faDiscord))},directives:[Q,c.f,o.j,w.a],styles:["footer[_ngcontent-%COMP%]{background-color:#383b43;height:100px;width:100vw;color:#f0f0f0}footer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:50%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#f0f0f0}footer[_ngcontent-%COMP%]   .discord[_ngcontent-%COMP%]{background-color:#7289ff}"]}),e})();var C=n("wHSu"),O=n("9uVP"),k=n("m4xP");function B(e,t){if(1&e&&(a.Qb(0,"div",28),a.Qb(1,"p",40),a.Bc(2),a.Pb(),a.Pb()),2&e){const e=a.ec();a.yb(2),a.Cc(e.errorMessage)}}function z(e,t){if(1&e&&(a.Qb(0,"div",28),a.Qb(1,"p",41),a.Bc(2),a.Pb(),a.Pb()),2&e){const e=a.ec();a.yb(2),a.Cc(e.successMessage)}}function _(e,t){if(1&e&&(a.Qb(0,"div",28),a.Qb(1,"p",42),a.Bc(2),a.Pb(),a.Pb()),2&e){const e=a.ec();a.yb(2),a.Cc(e.idleMessage)}}const j=function(){return["tournament"]},L=c.e.forChild([{path:"",component:y,children:[{path:"",component:(()=>{class e{constructor(e){this.emailService=e,this.faRandom=C.c,this.faUsers=C.e,this.faEllipsisH=C.b,this.errorMessage=null,this.successMessage=null,this.idleMessage=null}ngOnInit(){}sendContactUs(e,t,n){this.successMessage=null,this.errorMessage=null,Object(O.c)(e.value)?this.errorMessage="Nome \xe9 um campo obrigat\xf3rio":O.b.test(t.value)?n.value.length>20?(this.idleMessage="Enviando mensagem...",this.emailService.send("contato@randomfeeders.com.br","contato@randomfeeders.com.br",e.value+" envio uma mensagem",`Nome: ${e.value}<br>\n                                  Email: ${t.value}<br><br>\n                                  ${n.value}`).then(e=>{"OK"===e?this.successMessage="Mensagem enviada com sucesso!":(this.errorMessage="Aconteceu um erro inesperado! Aguarde e tente novamente mais tarde.",console.error(e))}).catch(e=>{this.errorMessage="Aconteceu um erro inesperado! Aguarde e tente novamente mais tarde.",console.error(e)}).finally(()=>{e.value="",t.value="",n.value="",this.idleMessage=null})):this.errorMessage="A sua mensagem deve possuir mais de 20 caracteres!":this.errorMessage="O e-mail digitado \xe9 inv\xe1lido!"}}return e.\u0275fac=function(t){return new(t||e)(a.Lb(k.a))},e.\u0275cmp=a.Fb({type:e,selectors:[["app-home"]],decls:93,vars:9,consts:[[1,"row","banner","text-center","w-100","m-0"],[1,"col-flex","m-auto"],[1,"text-wrap"],["href","http://discord.randomfeeders.com.br/","target","_blank",1,"btn","btn-primary"],["id","about",1,"row","bg-2","border-bottom","py-5","w-100","m-0"],[1,"col-12"],[1,"row","my-4"],[1,"col-md-8","col-sm-10","col-12","mx-auto"],[1,"row","w-100"],[1,"mx-auto"],[1,"col-flex","mx-auto","px-3","px-md-5"],[1,"text-center","text-wrap","mx-auto"],["id","tournaments",1,"row","bg-1","border-bottom","py-5","w-100","m-0"],[1,"row"],[1,"row","px-3","px-md-0"],[1,"mx-auto","text-wrap"],[1,"row","justify-content-around"],[1,"col-lg-1"],[1,"col-8","col-md-7","col-lg-2","flex","bg-card","border","px-2","pt-5","pb-2","text-center","mb-3","mb-lg-0"],[1,"mb-5"],["size","2x",1,"circle-icon","diff","bg-1",3,"icon"],[1,"my-4"],["size","2x",1,"circle-icon","bg-2","mb-2",3,"icon"],["size","2x",1,"circle-icon","diff","bg-3",3,"icon"],[1,"btn","btn-primary","mx-auto","mt-5",3,"routerLink"],["id","contact",1,"row","bg-2","border-bottom","py-5","w-100","m-0"],[1,"col-10","col-md-8","col-lg-5","mx-auto"],[1,"row","mt-3"],[1,"form-group"],["for","name"],["type","text","id","name","placeholder","Nome",1,"form-control"],["name",""],["for","email"],["type","email","id","email","aria-describedby","emailHelp","placeholder","E-mail",1,"form-control"],["email",""],["for","message"],["id","message","placeholder","Mensagem","rows","4",1,"form-control"],["message",""],["class","form-group",4,"ngIf"],["type","button",1,"btn","btn-primary","px-5","py-2","float-right",3,"disabled","click"],[1,"text-danger"],[1,"text-success"],[1,"text-secondary"]],template:function(e,t){if(1&e){const e=a.Rb();a.Qb(0,"div",0),a.Qb(1,"div",1),a.Qb(2,"h2",2),a.Bc(3,"E a\xed seu feeder!"),a.Pb(),a.Qb(4,"p",2),a.Bc(5,"Pronto para entrar na melhor comunidade geek do Brasil!?"),a.Pb(),a.Qb(6,"a",3),a.Bc(7,"Participar agora!"),a.Pb(),a.Pb(),a.Pb(),a.Qb(8,"div",4),a.Qb(9,"div",5),a.Qb(10,"div",6),a.Qb(11,"div",7),a.Qb(12,"div",8),a.Qb(13,"h2",9),a.Bc(14,"Sobre"),a.Pb(),a.Pb(),a.Qb(15,"div",8),a.Qb(16,"div",10),a.Qb(17,"p",11),a.Bc(18," Quem n\xf3s somos?! Somos um grupo de amigos que gostariamos de criar uma grande comunidade geek!"),a.Mb(19,"br"),a.Bc(20," Sempre tivemos muito amor pela cultura geek, e \xe9 isso que essa comunidade busca. Estamos atr\xe1s de pessoas que gostam de se divertir tanto quanto n\xf3s! "),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(21,"div",12),a.Qb(22,"div",5),a.Qb(23,"div",6),a.Qb(24,"div",5),a.Qb(25,"div",13),a.Qb(26,"h2",9),a.Bc(27,"Campeonatos de Lolzin"),a.Pb(),a.Pb(),a.Qb(28,"div",14),a.Qb(29,"p",15),a.Bc(30," Tem para todos! Chegue com seus amigos em um time premade, ou jogue com quatro par\xe7as aleat\xf3rios. "),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(31,"div",16),a.Mb(32,"div",17),a.Qb(33,"div",18),a.Qb(34,"div",19),a.Mb(35,"fa-icon",20),a.Pb(),a.Qb(36,"h3"),a.Bc(37,"RFT"),a.Pb(),a.Qb(38,"h5"),a.Bc(39,"Random FFA Tournament"),a.Pb(),a.Qb(40,"p",21),a.Bc(41," Um campeonato cujos times ser\xe3o aleat\xf3rizados pelo nosso sistema, levando em conta seu elo na solo/duo e suas poss\xedveis roles. \xc9 possivel ocorrer o autofill de posi\xe7\xf5es! "),a.Pb(),a.Pb(),a.Qb(42,"div",18),a.Qb(43,"div",19),a.Mb(44,"fa-icon",22),a.Pb(),a.Qb(45,"h3"),a.Bc(46,"TBT"),a.Pb(),a.Qb(47,"h5"),a.Bc(48,"Team Battle Tournament"),a.Pb(),a.Qb(49,"p",21),a.Bc(50," Traga um time completo! Iremos calcular a pontua\xe7\xe3o e mostrar os poss\xedveis campeonatos dispon\xedveis. "),a.Pb(),a.Mb(51,"br"),a.Pb(),a.Qb(52,"div",18),a.Qb(53,"div",19),a.Mb(54,"fa-icon",23),a.Pb(),a.Qb(55,"h3"),a.Bc(56,"E muitos outros!"),a.Pb(),a.Qb(57,"h5"),a.Bc(58,"Muitos mesmo!"),a.Pb(),a.Qb(59,"p",21),a.Bc(60," Temos campeonatos de outros jogos tamb\xe9m como Valorant, MTG Arena, etc... Venha conhecer! "),a.Pb(),a.Mb(61,"br"),a.Pb(),a.Mb(62,"div",17),a.Pb(),a.Qb(63,"div",13),a.Qb(64,"a",24),a.Bc(65,"Saiba mais!"),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(66,"div",25),a.Qb(67,"div",26),a.Qb(68,"div",13),a.Qb(69,"h2",9),a.Bc(70,"Contate-nos"),a.Pb(),a.Pb(),a.Qb(71,"div",27),a.Qb(72,"div",5),a.Qb(73,"div",28),a.Qb(74,"label",29),a.Bc(75,"Nome"),a.Pb(),a.Mb(76,"input",30,31),a.Pb(),a.Qb(78,"div",28),a.Qb(79,"label",32),a.Bc(80,"E-mail"),a.Pb(),a.Mb(81,"input",33,34),a.Pb(),a.Qb(83,"div",28),a.Qb(84,"label",35),a.Bc(85,"Mensagem"),a.Pb(),a.Mb(86,"textarea",36,37),a.Pb(),a.zc(88,B,3,1,"div",38),a.zc(89,z,3,1,"div",38),a.zc(90,_,3,1,"div",38),a.Qb(91,"button",39),a.ac("click",function(){a.sc(e);const n=a.rc(77),o=a.rc(82),c=a.rc(87);return t.sendContactUs(n,o,c)}),a.Bc(92,"Enviar"),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb()}2&e&&(a.yb(35),a.jc("icon",t.faRandom),a.yb(9),a.jc("icon",t.faUsers),a.yb(10),a.jc("icon",t.faEllipsisH),a.yb(10),a.jc("routerLink",a.mc(8,j)),a.yb(24),a.jc("ngIf",null!=t.errorMessage),a.yb(1),a.jc("ngIf",null!=t.successMessage),a.yb(1),a.jc("ngIf",null!=t.idleMessage),a.yb(1),a.jc("disabled",null!=t.idleMessage))},directives:[w.a,c.d,o.j],styles:["div.banner[_ngcontent-%COMP%]{background-image:linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)),url(banner.aa8096af810849d0002e.jpg);background-position:50%;background-size:cover;color:#f0f0f0;height:600px}.banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#f0f0f0;font-size:4em;line-height:1.25em;margin:0 0 .5em;padding:0}.banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.5em;color:#f0f0f0;margin-bottom:1.75em}.banner[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:1.5em;padding:15px 25px}.banner[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]{border-radius:40px}a[_ngcontent-%COMP%]{font-size:1em;padding:10px 20px}.circle-icon[_ngcontent-%COMP%]{padding:33px 16px 21px;border-radius:100%;color:#f0f0f0}.circle-icon.bg-1[_ngcontent-%COMP%]{background-color:#add43c}.circle-icon.bg-2[_ngcontent-%COMP%]{background-color:#3cadd4}.circle-icon.bg-3[_ngcontent-%COMP%]{background-color:#d43c61}.circle-icon.diff[_ngcontent-%COMP%]{padding:33px 20px 21px}.bg-card[_ngcontent-%COMP%]{background-color:#f0f0f0}div.row.bg-1[_ngcontent-%COMP%]{background-color:#f5f5f5;width:inherit}div.row.bg-2[_ngcontent-%COMP%]{background-color:#fff;width:inherit}.btn-primary[_ngcontent-%COMP%]{background-color:#3cadd4;border-color:#318caa}div#contact[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-radius:40px}"]}),e})()},{path:"tournament",loadChildren:()=>n.e(5).then(n.bind(null,"tkS+")).then(e=>e.TournamentModule)}]}]);var S=n("PCNd");let T=(()=>{class e{}return e.\u0275mod=a.Jb({type:e}),e.\u0275inj=a.Ib({factory:function(t){return new(t||e)},imports:[[o.b,L,w.b,S.a]]}),e})()},m4xP:function(e,t,n){"use strict";n.d(t,"a",function(){return c});const o={send:function(e){return new Promise(function(t,n){e.nocache=Math.floor(1e6*Math.random()+1),e.Action="Send";var c=JSON.stringify(e);o.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?",c,function(e){t(e)})})},ajaxPost:function(e,t,n){var c=o.createCORSRequest("POST",e);c.setRequestHeader("Content-type","application/x-www-form-urlencoded"),c.onload=function(){null!=n&&n(c.responseText)},c.send(t)},ajax:function(e,t){var n=o.createCORSRequest("GET",e);n.onload=function(){null!=t&&t(n.responseText)},n.send()},createCORSRequest:function(e,t){var n=new XMLHttpRequest;return"withCredentials"in n?n.open(e,t,!0):"undefined"!=typeof XDomainRequest?(n=new XDomainRequest).open(e,t):n=null,n}};class c{constructor(){}send(e,t,n,c){return o.send({SecureToken:"e2a3a65c-dbba-4202-88a3-7c23e78597ff",To:e,From:t,Subject:n,Body:c})}}},wHSu:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return c}),n.d(t,"c",function(){return r}),n.d(t,"d",function(){return a}),n.d(t,"e",function(){return i});var o={prefix:"fas",iconName:"arrow-circle-left",icon:[512,512,[],"f0a8","M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z"]},c={prefix:"fas",iconName:"ellipsis-h",icon:[512,512,[],"f141","M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"]},r={prefix:"fas",iconName:"random",icon:[512,512,[],"f074","M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12.004 12.004 0 0 1-8.773-3.812l-70.556-75.596 53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971l80 79.981zM12 176h84l52.781 56.551 53.333-57.143-70.556-75.596A11.999 11.999 0 0 0 122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12zm372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12.004 12.004 0 0 0-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176h32z"]},a={prefix:"fas",iconName:"user-friends",icon:[640,512,[],"f500","M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z"]},i={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"]}}}]);