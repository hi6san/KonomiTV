import{d as V,U as k,u as F,m as $,cu as T,cv as U,M as m,K as I,_ as K,r as g,o as c,h as p,w as i,e as u,j as N,b as t,c as d,i as n,V as r,l as _,t as E,k as f,n as j,R as z,p as M,q as J}from"./index-69Yl2CMm.js";import{S as O}from"./Base-7iMwva3i.js";import{V as R}from"./VSwitch-PmTdgim-.js";import{a as h,V as D,b as v,c as q}from"./VCard-HCjuEueN.js";import{V as y}from"./VDialog-kV6CR-50.js";import{c as w,V as H}from"./VTextField-tWdlYAln.js";import{V as A}from"./VForm-tBoKLZmx.js";import{V as Z}from"./VFileInput-xO_nyVg_.js";import{V as G}from"./ssrBoot-QRiFL0aK.js";import"./Navigation-57ftjXSo.js";import"./VAvatar-4bqbITiX.js";const L=V({name:"Settings-Account",components:{SettingsBase:O},data(){return{is_form_dense:k.isSmartphoneHorizontal(),is_loading:!0,settings_username:null,settings_username_validation:s=>s===""||s===null?"ユーザー名を入力してください。":/^.{2,}$/.test(s)===!1?"ユーザー名は2文字以上で入力してください。":!0,settings_password:null,settings_password_showing:!1,settings_password_validation:s=>s===""||s===null?"パスワードを入力してください。":/^[a-zA-Z0-9!-/:-@¥[-`{-~]{4,}$/.test(s)===!1?"パスワードは4文字以上の半角英数記号を入力してください。":!0,settings_icon_file:[],account_delete_confirm_dialog:!1,sync_settings:F().settings.sync_settings,sync_settings_dialog:!1}},computed:{...$(F,I)},watch:{async sync_settings(){if(this.sync_settings===!0&&this.sync_settings_dialog===!1){const s=T(this.settingsStore.settings),e=JSON.stringify(s),B=await U.fetchClientSettings();if(B===null){m.error("サーバーから設定データを取得できませんでした。");return}const C=JSON.stringify(B);e!==C?(this.sync_settings_dialog=!0,this.sync_settings=!1):this.settingsStore.settings.sync_settings=!0}else this.sync_settings===!1&&this.sync_settings_dialog===!1&&(this.settingsStore.settings.sync_settings=!1)}},async created(){await this.userStore.fetchUser(),this.is_loading=!1},methods:{async overrideServerSettingsFromClient(){await this.settingsStore.syncClientSettingsToServer(!0),this.settingsStore.settings.sync_settings=!0,this.sync_settings=!0,this.sync_settings_dialog=!1},async overrideClientSettingsFromServer(){await this.settingsStore.syncClientSettingsFromServer(!0),this.settingsStore.settings.sync_settings=!0,this.sync_settings=!0,this.sync_settings_dialog=!1},async updateAccountInfo(s){if(s==="username"){if((await this.$refs.settings_username.validate()).valid===!1)return}else if((await this.$refs.settings_password.validate()).valid===!1)return;if(s==="username"){if(this.settings_username===null)return;await this.userStore.updateUser({username:this.settings_username})}else{if(this.settings_password===null)return;await this.userStore.updateUser({password:this.settings_password})}},async updateAccountIcon(){if(this.settings_icon_file.length===0){m.error("アップロードする画像を選択してください！");return}await this.userStore.updateUserIcon(this.settings_icon_file[0])},async deleteAccount(){this.account_delete_confirm_dialog=!1,await this.userStore.deleteUser()}}}),P="/assets/images/account-icon-default.png",a=s=>(M("data-v-b46956dc"),s=s(),J(),s),Q={class:"settings__heading"},W=a(()=>u("span",{class:"ml-2"},"アカウント",-1)),X={key:0,class:"account"},Y=a(()=>u("div",{class:"account-wrapper"},[u("img",{class:"account__icon",src:P}),u("div",{class:"account__info"},[u("div",{class:"account__info-name"},[u("span",{class:"account__info-name-text"},"ログインしていません")]),u("span",{class:"account__info-id"},"Not logged in")])],-1)),x={key:1,class:"account"},uu={class:"account-wrapper"},su=["src"],tu={class:"account__info"},eu={class:"account__info-name"},nu={class:"account__info-name-text"},iu={key:0,class:"account__info-admin"},ou={class:"account__info-id"},au={key:2,class:"account-register"},lu=a(()=>u("div",{class:"account-register__heading"},[n(" KonomiTV アカウントにログインすると、"),u("br"),n("より便利な機能が使えます！ ")],-1)),ru={class:"account-register__feature"},cu={class:"account-feature"},du=a(()=>u("div",{class:"account-feature__info"},[u("span",{class:"account-feature__info-heading"},"ニコニコ実況にコメントする"),u("span",{class:"account-feature__info-text"},"テレビを見ながらニコニコ実況にコメントできます。別途、ニコニコアカウントとの連携が必要です。")],-1)),_u={class:"account-feature"},Bu=a(()=>u("div",{class:"account-feature__info"},[u("span",{class:"account-feature__info-heading"},"Twitter 連携機能"),u("span",{class:"account-feature__info-text"},"テレビを見ながら Twitter にツイートしたり、検索したツイートをリアルタイムで表示できます。別途、Twitter アカウントとの連携が必要です。")],-1)),gu={class:"account-feature"},fu=a(()=>u("div",{class:"account-feature__info"},[u("span",{class:"account-feature__info-heading"},"設定をデバイス間で同期"),u("span",{class:"account-feature__info-text"},"ピン留めしたチャンネルなど、ブラウザに保存されている各種設定をブラウザやデバイスをまたいで同期できます。")],-1)),Au={class:"account-feature"},Cu=a(()=>u("div",{class:"account-feature__info"},[u("span",{class:"account-feature__info-heading"},"サーバー設定をブラウザから変更"),u("span",{class:"account-feature__info-text"},"管理者権限があれば、サーバー設定をブラウザから変更できます。一番最初に作成されたアカウントには、自動で管理者権限が付与されます。")],-1)),Fu=a(()=>u("div",{class:"account-register__description"},[n(" KonomiTV アカウントの作成に必要なものは"),u("br",{class:"smartphone-vertical-only"}),n("ユーザー名とパスワードだけです。"),u("br"),n(" アカウントはローカルに導入した"),u("br",{class:"smartphone-vertical-only"}),n(" KonomiTV サーバーにのみ保存されます。"),u("br"),n(" 外部のサービスには保存されませんので、ご安心ください。"),u("br")],-1)),mu={key:3},pu={class:"settings__item settings__item--switch"},Eu=a(()=>u("label",{class:"settings__item-heading",for:"sync_settings"},"設定をデバイス間で同期する",-1)),hu=a(()=>u("label",{class:"settings__item-label",for:"sync_settings"},[n(" KonomiTV では、設定を同じアカウントでログインしているデバイス間で同期できます！"),u("br"),n(" 同期をオンにすると、同期をオンにしているすべてのデバイスで共通の設定が使えます。ピン留めチャンネルやハッシュタグリストなども同期されます。"),u("br"),n(" なお、デバイス固有の設定（画質設定など）は、同期後も各デバイスで個別に反映されます。"),u("br")],-1)),Du=a(()=>u("br",null,null,-1)),vu=a(()=>u("br",null,null,-1)),yu={class:"d-flex flex-column px-4 pb-6 settings__conflict-dialog"},wu=a(()=>u("br",{class:"smartphone-vertical-only"},null,-1)),bu=a(()=>u("br",{class:"smartphone-vertical-only"},null,-1)),Su=a(()=>u("div",{class:"settings__item-heading"},"ユーザー名",-1)),Vu=a(()=>u("div",{class:"settings__item-label"},[n(" KonomiTV アカウントのユーザー名を設定します。アルファベットだけでなく日本語や記号も使えます。"),u("br"),n(" 同じ KonomiTV サーバー上の他のアカウントと同じユーザー名には変更できません。"),u("br")],-1)),ku=a(()=>u("div",{class:"settings__item-heading"},"アイコン画像",-1)),$u=a(()=>u("div",{class:"settings__item-label"},[n(" KonomiTV アカウントのアイコン画像を設定します。"),u("br"),n(" アップロードされた画像は自動で 400×400 の正方形にリサイズされます。"),u("br")],-1)),Tu=a(()=>u("div",{class:"settings__item-heading"},"新しいパスワード",-1)),Uu=a(()=>u("div",{class:"settings__item-label"},[n(" KonomiTV アカウントの新しいパスワードを設定します。"),u("br")],-1)),Iu=a(()=>u("div",{class:"settings__item mt-6"},[u("div",{class:"settings__item-heading text-error-lighten-1"},"アカウントを削除"),u("div",{class:"settings__item-label"},[n(" 現在ログインしている KonomiTV アカウントを削除します。"),u("br"),u("b",null,"アカウントに紐づくすべてのデータが削除されます。"),n("元に戻すことはできません。"),u("br")])],-1)),Ku=a(()=>u("br",null,null,-1));function Nu(s,e,B,C,ju,zu){const l=g("Icon"),b=g("router-link"),S=g("SettingsBase");return c(),p(S,null,{default:i(()=>[u("h2",Q,[N((c(),p(b,{class:"settings__back-button",to:"/settings/"},{default:i(()=>[t(l,{icon:"fluent:arrow-left-12-filled",width:"25px"})]),_:1})),[[z]]),t(l,{icon:"fluent:person-20-filled",width:"25px"}),W]),u("div",{class:j(["settings__content",{"settings__content--loading":s.is_loading}])},[s.userStore.user===null?(c(),d("div",X,[Y,t(r,{class:"account__login ml-auto",color:"secondary",width:"140",height:"56",variant:"flat",to:"/login/"},{default:i(()=>[t(l,{icon:"fa:sign-in",class:"mr-2"}),n("ログイン ")]),_:1})])):_("",!0),s.userStore.user!==null?(c(),d("div",x,[u("div",uu,[u("img",{class:"account__icon",src:s.userStore.user_icon_url??""},null,8,su),u("div",tu,[u("div",eu,[u("span",nu,E(s.userStore.user.name),1),s.userStore.user.is_admin?(c(),d("span",iu,"管理者")):_("",!0)]),u("span",ou,"User ID: "+E(s.userStore.user.id),1)])]),t(r,{class:"account__login ml-auto",color:"secondary",width:"140",height:"56",variant:"flat",onClick:e[0]||(e[0]=o=>s.userStore.logout())},{default:i(()=>[t(l,{icon:"fa:sign-out",class:"mr-2"}),n("ログアウト ")]),_:1})])):_("",!0),s.userStore.is_logged_in===!1?(c(),d("div",au,[lu,u("div",ru,[u("div",cu,[t(l,{class:"account-feature__icon",icon:"bi:chat-left-text-fill"}),du]),u("div",_u,[t(l,{class:"account-feature__icon",icon:"fa-brands:twitter"}),Bu]),u("div",gu,[t(l,{class:"account-feature__icon",icon:"fluent:arrow-sync-20-filled"}),fu]),u("div",Au,[t(l,{class:"account-feature__icon",icon:"fa-solid:sliders-h"}),Cu])]),Fu,t(r,{class:"account-register__button",color:"secondary",width:"100%","max-width":"250",height:"50",variant:"flat",to:"/register/"},{default:i(()=>[t(l,{icon:"fluent:person-add-20-filled",class:"mr-2",height:"24"}),n("アカウントを作成 ")]),_:1})])):_("",!0),s.userStore.is_logged_in===!0?(c(),d("div",mu,[u("div",pu,[Eu,hu,t(R,{class:"settings__item-switch",color:"primary",id:"sync_settings","hide-details":"",modelValue:s.sync_settings,"onUpdate:modelValue":e[1]||(e[1]=o=>s.sync_settings=o)},null,8,["modelValue"])]),t(y,{"max-width":"530",modelValue:s.sync_settings_dialog,"onUpdate:modelValue":e[5]||(e[5]=o=>s.sync_settings_dialog=o)},{default:i(()=>[t(h,null,{default:i(()=>[t(D,{class:"d-flex justify-center font-weight-bold pt-6"},{default:i(()=>[n("設定データの競合")]),_:1}),t(v,{class:"pt-2 pb-5"},{default:i(()=>[n(" このデバイスの設定と、サーバーに保存されている設定が競合しています。"),Du,n(" 一度上書きすると、元に戻すことはできません。慎重に選択してください。"),vu]),_:1}),u("div",yu,[t(r,{class:"settings__save-button text-error-lighten-1",color:"background-lighten-1",variant:"flat",onClick:e[2]||(e[2]=o=>s.overrideServerSettingsFromClient())},{default:i(()=>[t(l,{icon:"fluent:document-arrow-up-16-filled",class:"mr-2",height:"22px"}),n(" サーバーに保存されている設定を、"),wu,n("このデバイスの設定で上書きする ")]),_:1}),t(r,{class:"settings__save-button text-error-lighten-1 mt-3",color:"background-lighten-1",variant:"flat",onClick:e[3]||(e[3]=o=>s.overrideClientSettingsFromServer())},{default:i(()=>[t(l,{icon:"fluent:document-arrow-down-16-filled",class:"mr-2",height:"22px"}),n(" このデバイスの設定を、"),bu,n("サーバーに保存されている設定で上書きする ")]),_:1}),t(r,{class:"settings__save-button mt-3",variant:"flat",color:"background-lighten-1",onClick:e[4]||(e[4]=o=>s.sync_settings_dialog=!1)},{default:i(()=>[t(l,{icon:"fluent:dismiss-16-filled",class:"mr-2",height:"22px"}),n(" キャンセル ")]),_:1})])]),_:1})]),_:1},8,["modelValue"]),t(A,{class:"settings__item",ref:"settings_username",onSubmit:e[7]||(e[7]=f(()=>{},["prevent"]))},{default:i(()=>[Su,Vu,t(w,{class:"settings__item-form",color:"primary",variant:"outlined",placeholder:"ユーザー名",density:s.is_form_dense?"compact":"default",modelValue:s.settings_username,"onUpdate:modelValue":e[6]||(e[6]=o=>s.settings_username=o),rules:[s.settings_username_validation]},null,8,["density","modelValue","rules"])]),_:1},512),t(r,{class:"settings__save-button mt-2",variant:"flat",onClick:e[8]||(e[8]=o=>s.updateAccountInfo("username"))},{default:i(()=>[t(l,{icon:"fluent:save-16-filled",class:"mr-2",height:"24px"}),n("ユーザー名を更新 ")]),_:1}),t(A,{class:"settings__item",onSubmit:e[10]||(e[10]=f(()=>{},["prevent"]))},{default:i(()=>[ku,$u,t(Z,{class:"settings__item-form",color:"primary",variant:"outlined","hide-details":"",label:"アイコン画像を選択",density:s.is_form_dense?"compact":"default",accept:"image/jpeg, image/png","prepend-icon":"","prepend-inner-icon":"mdi-paperclip",modelValue:s.settings_icon_file,"onUpdate:modelValue":e[9]||(e[9]=o=>s.settings_icon_file=o)},null,8,["density","modelValue"])]),_:1}),t(r,{class:"settings__save-button mt-5",variant:"flat",onClick:e[11]||(e[11]=o=>s.updateAccountIcon())},{default:i(()=>[t(l,{icon:"fluent:save-16-filled",class:"mr-2",height:"24px"}),n("アイコン画像を更新 ")]),_:1}),t(A,{class:"settings__item",ref:"settings_password",onSubmit:e[14]||(e[14]=f(()=>{},["prevent"]))},{default:i(()=>[Tu,Uu,t(w,{class:"settings__item-form",color:"primary",variant:"outlined",placeholder:"新しいパスワード",density:s.is_form_dense?"compact":"default",modelValue:s.settings_password,"onUpdate:modelValue":e[12]||(e[12]=o=>s.settings_password=o),type:s.settings_password_showing?"text":"password","append-inner-icon":s.settings_password_showing?"mdi-eye":"mdi-eye-off",rules:[s.settings_password_validation],"onClick:append":e[13]||(e[13]=o=>s.settings_password_showing=!s.settings_password_showing)},null,8,["density","modelValue","type","append-inner-icon","rules"])]),_:1},512),t(r,{class:"settings__save-button mt-2",variant:"flat",onClick:e[15]||(e[15]=o=>s.updateAccountInfo("password"))},{default:i(()=>[t(l,{icon:"fluent:save-16-filled",class:"mr-2",height:"24px"}),n("パスワードを更新 ")]),_:1}),t(H,{class:"mt-6"}),Iu,t(r,{class:"settings__save-button bg-error mt-5",variant:"flat",onClick:e[16]||(e[16]=o=>s.account_delete_confirm_dialog=!0)},{default:i(()=>[t(l,{icon:"fluent:delete-16-filled",class:"mr-2",height:"24px"}),n("アカウントを削除 ")]),_:1}),t(y,{"max-width":"385",modelValue:s.account_delete_confirm_dialog,"onUpdate:modelValue":e[19]||(e[19]=o=>s.account_delete_confirm_dialog=o)},{default:i(()=>[t(h,null,{default:i(()=>[t(D,{class:"d-flex justify-center pt-6 font-weight-bold"},{default:i(()=>[n("本当にアカウントを削除しますか？")]),_:1}),t(v,{class:"pt-2 pb-0"},{default:i(()=>[n(" アカウントに紐づくすべてのデータが削除されます。元に戻すことはできません。"),Ku,n(" 本当にアカウントを削除しますか？ ")]),_:1}),t(q,{class:"pt-4 px-6 pb-6"},{default:i(()=>[t(G),t(r,{color:"text",variant:"text",onClick:e[17]||(e[17]=o=>s.account_delete_confirm_dialog=!1)},{default:i(()=>[n("キャンセル")]),_:1}),t(r,{color:"error",variant:"flat",onClick:e[18]||(e[18]=o=>s.deleteAccount())},{default:i(()=>[n("削除")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])):_("",!0)],2)]),_:1})}const Wu=K(L,[["render",Nu],["__scopeId","data-v-b46956dc"]]);export{Wu as default};
