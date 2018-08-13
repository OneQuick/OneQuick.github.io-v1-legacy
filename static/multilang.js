/*
XJK, https://xujinkai.net
Base on jQuery
MLANG(); // 'cn'
MLANG('cn');
MLANG.switch();
data:
data-mlang-text-<code>
data-mlang-title-<code>
data-mlang-href-<code>
*/
(function(){
  var SupportLangCodes = ['cn', 'en'];
  var LocalStorageKey = 'MLANG';
  var _style = document.createElement("style");
  document.head.appendChild(_style);
  var Sheet = _style.sheet;
  function ClearStyle(){
    for (var i = Sheet.cssRules.length - 1; i >= 0; i--) {
      Sheet.deleteRule(0);
    }
  };
  function SetStyle(selector, style){
    // Sheet.addRule(selector, style); // Firefox not support
    Sheet.insertRule(selector+'{'+style+'}', 0);
  };
  function ClearClass(className){
    $('.'+className).removeClass(className);
  };
  function SetClass(selector, className){
    $(selector).addClass(className);
  };
  function SetLang(code) {
    localStorage.setItem(LocalStorageKey, code);
  };
  function GetLang(){
    return localStorage.getItem(LocalStorageKey) || SupportLangCodes[0];
  };
  function DisplayLang(code){
    ClearStyle();
    ClearClass(MLANG.ActiveClassName);
    for (var i = SupportLangCodes.length - 1; i >= 0; i--) {
      var icode = SupportLangCodes[i];
      if(icode !== code){
        SetStyle(icode, 'display: none;');
      }
    };
    SetClass('[data-mlang-'+code+']', MLANG.ActiveClassName);
    $('[data-mlang-text-'+code+']').each(function(idx, ele){
      ele.innerText = $(ele).data('mlang-text-'+code);
    });
    $('[data-mlang-title-'+code+']').each(function(idx, ele){
      ele.title = $(ele).data('mlang-title-'+code);
    });
    $('[data-mlang-href-'+code+']').each(function(idx, ele){
      var url = $(ele).data('mlang-href-'+code);
      if(url == ""){
        ele.href = '#';
      } else {
        ele.href = url;
      }
    });
  };
  function currentHrefA(code){
    return $('[data-mlang-href-'+code+'="'+location.pathname+'"]');
  }
  function JumpUrl(from_code, to_code){
    var newPath = currentHrefA(from_code).first().data('mlang-href-'+to_code);
    if(newPath != undefined && location.pathname != newPath){
      location.pathname = newPath;
      return true;
    }
    return false;
  };
  function ChangeLang(code){
    var last_lang = GetLang();
    SetLang(code);
    if(!JumpUrl(last_lang, code)){
      DisplayLang(code);
    }
    for (var i = MLANG.ChangeHooks.length - 1; i >= 0; i--) {
      var item = MLANG.ChangeHooks[i];
      if(typeof item == 'function') {
        item(code);
      }
    }
  };
  function MLANG(code){
    if(code===undefined) {
      return GetLang();
    } else {
      ChangeLang(code);
    }
  };
  MLANG.switch = function(){
    var idx = SupportLangCodes.indexOf(GetLang()) + 1;
    if(idx >= SupportLangCodes.length) {
      idx = 0;
    }
    ChangeLang(SupportLangCodes[idx]);
  };
  MLANG.isLangCode = function(code){
    return $.inArray(code, SupportLangCodes) >= 0;
  };
  MLANG.jump = function(object) {
    location = object[GetLang()];
  };
  MLANG.Init = function(){
    DisplayLang(GetLang());
  };
  MLANG.display = DisplayLang;
  MLANG.currentLink = currentHrefA;
  MLANG.ActiveClassName = 'mlang-active';
  MLANG.ChangeHooks = [];
  window.MLANG = MLANG;
  document.addEventListener('DOMContentLoaded', function(event){
    DisplayLang(GetLang());
  });
})();