(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"tkS+":function(e,o,r){"use strict";r.r(o),r.d(o,"TournamentModule",(function(){return v}));var i=r("ofXK"),n=r("tyNb"),t=r("fXoL");let s=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Eb({type:e,selectors:[["app-tournament"]],decls:1,vars:0,template:function(e,o){1&e&&t.Lb(0,"router-outlet")},directives:[n.e],encapsulation:2}),e})();var c=r("9uVP"),a=r("m4xP");function l(e,o){if(1&e&&(t.Pb(0,"div",6),t.Pb(1,"p",25),t.Bc(2),t.Ob(),t.Ob()),2&e){const e=t.ec();t.xb(2),t.Cc(e.errorMessage)}}function d(e,o){if(1&e&&(t.Pb(0,"div",6),t.Pb(1,"p",26),t.Bc(2),t.Ob(),t.Ob()),2&e){const e=t.ec();t.xb(2),t.Cc(e.successMessage)}}function b(e,o){if(1&e&&(t.Pb(0,"div",6),t.Pb(1,"p",27),t.Bc(2),t.Ob(),t.Ob()),2&e){const e=t.ec();t.xb(2),t.Cc(e.idleMessage)}}let u=(()=>{class e{constructor(e,o,r){this.emailService=e,this.router=o,this.location=r,this.errorMessage=null,this.successMessage=null,this.idleMessage=null}ngOnInit(){this.location.replaceState("/")}getJson(e){return`\n    {<br>\n      "type": "embed",<br>\n      "title": "Inscri\xe7\xe3o no Torneio",<br>\n      "description": [<br>\n        "Nome: ${e.name.value}\\n",<br>\n        "Email: ${e.email.value}\\n",<br>\n        "Discord: @${e.discord.value}\\n",<br>\n        "Nick do LoL: ${e.nicklol.value}\\n"<br>\n      ]<br>\n    }\n  `}sendSubscription(e){this.successMessage=null,this.errorMessage=null,Object(c.c)(e.name.value)?this.errorMessage="Nome \xe9 um campo obrigat\xf3rio!":c.b.test(e.email.value)?c.a.test(e.discord.value)?Object(c.c)(e.nicklol.value)?this.errorMessage="Nick do LoL \xe9 um campo obrigat\xf3rio!":(this.idleMessage="Enviando inscri\xe7\xe3o...",this.emailService.send("contato@randomfeeders.com.br","contato@randomfeeders.com.br","Inscri\xe7\xe3o no torneio",`Nome: ${e.name.value}<br>\n                                  Email: ${e.email.value}<br>\n                                  Discord: ${e.discord.value}<br>\n                                  Nick do LoL: ${e.nicklol.value}<br><br>\n                                  Json: ${this.getJson(e)}`).then(e=>{"OK"===e?this.successMessage="Inscri\xe7\xe3o enviada com sucesso!":(this.errorMessage="Aconteceu um erro inesperado! Aguarde e tente novamente mais tarde.",console.error(e))}).catch(e=>{this.errorMessage="Aconteceu um erro inesperado! Aguarde e tente novamente mais tarde.",console.error(e)}).finally(()=>{this.idleMessage=null,e.name.value="",e.email.value="",e.discord.value="",e.nicklol.value="",setTimeout(()=>this.router.navigate([""]),2e3)})):this.errorMessage="O Discord Tag digitado \xe9 inv\xe1lido!":this.errorMessage="O e-mail digitado \xe9 inv\xe1lido!"}}return e.\u0275fac=function(o){return new(o||e)(t.Kb(a.a),t.Kb(n.a),t.Kb(i.g))},e.\u0275cmp=t.Eb({type:e,selectors:[["app-subscription"]],decls:43,vars:4,consts:[[1,"d-flex","flex-column","w-100","h-100"],[1,"w-50","m-auto"],[1,"row","mb-3"],[1,"mx-auto"],[1,"row"],[1,"col"],[1,"form-group"],["for","name"],["type","text","id","name","placeholder","Nome",1,"form-control"],["name",""],["for","email"],["type","email","id","email","aria-describedby","emailHelp","placeholder","E-mail",1,"form-control"],["email",""],[1,"text-justify","form-group"],["for","discord"],["type","text","id","discord","placeholder","Discord#Tag",1,"form-control"],["discord",""],[1,"mt-2","text-danger","text-wrap"],["for","nicklol"],["type","text","id","nicklol","placeholder","Nick do LoL",1,"form-control"],["nicklol",""],["class","form-group",4,"ngIf"],["type","button",1,"btn","btn-primary","px-5","py-2","float-right",3,"disabled","click"],[1,"text-center","w-100","mx-auto","mb-2"],[1,"px-4","text-secondary","text-wrap"],[1,"text-danger"],[1,"text-success"],[1,"text-secondary"]],template:function(e,o){if(1&e){const e=t.Qb();t.Pb(0,"div",0),t.Pb(1,"div",1),t.Pb(2,"div",2),t.Pb(3,"h2",3),t.Bc(4,"Inscri\xe7\xe3o no Torneio"),t.Ob(),t.Ob(),t.Pb(5,"div",4),t.Pb(6,"div",5),t.Pb(7,"div",4),t.Pb(8,"div",5),t.Pb(9,"div",6),t.Pb(10,"label",7),t.Bc(11,"Nome"),t.Ob(),t.Lb(12,"input",8,9),t.Ob(),t.Ob(),t.Pb(14,"div",5),t.Pb(15,"div",6),t.Pb(16,"label",10),t.Bc(17,"E-mail"),t.Ob(),t.Lb(18,"input",11,12),t.Ob(),t.Ob(),t.Ob(),t.Pb(20,"div",4),t.Pb(21,"div",5),t.Pb(22,"div",13),t.Pb(23,"label",14),t.Bc(24,"Discord Tag"),t.Ob(),t.Lb(25,"input",15,16),t.Pb(27,"p",17),t.Bc(28,"* \xc9 necessario estar no servidor do discord Random Feeders para participar."),t.Ob(),t.Ob(),t.Ob(),t.Pb(29,"div",5),t.Pb(30,"div",6),t.Pb(31,"label",18),t.Bc(32,"Nick do LoL"),t.Ob(),t.Lb(33,"input",19,20),t.Ob(),t.Ob(),t.Ob(),t.zc(35,l,3,1,"div",21),t.zc(36,d,3,1,"div",21),t.zc(37,b,3,1,"div",21),t.Pb(38,"button",22),t.ac("click",(function(){t.sc(e);const r=t.rc(13),i=t.rc(19),n=t.rc(26),s=t.rc(34);return o.sendSubscription({name:r,email:i,discord:n,nicklol:s})})),t.Bc(39,"Enviar"),t.Ob(),t.Ob(),t.Ob(),t.Ob(),t.Pb(40,"div",23),t.Pb(41,"p",24),t.Bc(42,"* Leia as regras do torneio no servidor do discord Random Feeders antes de enviar sua inscri\xe7\xe3o. Ao enviar sua inscri\xe7\xe3o voc\xea estar\xe1 de acordo com as regras do servidor e torneio."),t.Ob(),t.Ob(),t.Ob()}2&e&&(t.xb(35),t.jc("ngIf",null!=o.errorMessage),t.xb(1),t.jc("ngIf",null!=o.successMessage),t.xb(1),t.jc("ngIf",null!=o.idleMessage),t.xb(1),t.jc("disabled",null!=o.idleMessage))},directives:[i.j],encapsulation:2}),e})();const m=n.d.forChild([{path:"",component:s,children:[{path:"",component:(()=>{class e{constructor(e){this.router=e}ngOnInit(){this.router.navigate(["/"])}}return e.\u0275fac=function(o){return new(o||e)(t.Kb(n.a))},e.\u0275cmp=t.Eb({type:e,selectors:[["app-info"]],decls:0,vars:0,template:function(e,o){},styles:[""]}),e})()},{path:"subscription",component:u}]}]);var p=r("PCNd");let v=(()=>{class e{}return e.\u0275mod=t.Ib({type:e}),e.\u0275inj=t.Hb({factory:function(o){return new(o||e)},providers:[],imports:[[i.b,m,p.a]]}),e})()}}]);