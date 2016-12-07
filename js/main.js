(function($) {
  'use strict';
  // Collapseイベント
  $('.panel-collapse').on({
    // 折り畳み開く処理
    'show.bs.collapse': function() {
      $('a[href="#' + this.id + '"] span.glyphicon-chevron-down')
        .removeClass('glyphicon-chevron-down')
        .addClass('glyphicon-chevron-up');
    },
    // 折り畳み閉じる処理
    'hide.bs.collapse': function() {
      $('a[href="#' + this.id + '"] span.glyphicon-chevron-up')
        .removeClass('glyphicon-chevron-up')
        .addClass('glyphicon-chevron-down');
    }
  });
  // ハッシュリンクキャンセル
  $('a[href="#menuOne"], a[href="#menuTwo"]').on('click', function(event) {
    event.preventDefault();
  });
})(jQuery);

$(function() {
  'use strict';
  // F	戦闘機
  // ONボタン押下
  $('#performShowF').click(function() {
    $('#Bf109E').collapse('show');
    $('#Bf109F').collapse('show');
    $('#Bf109G').collapse('show');
    $('#Bf109K').collapse('show');
    $('#Fw190A').collapse('show');
    $('#Fw190D9').collapse('show');
    $('#Ta152H').collapse('show');
    $('#M262A1').collapse('show');
    $('#Do335').collapse('show');
    $('#He162').collapse('show');
    $('#MeP1101').collapse('show');
    $('#performShowF > div').removeClass('off-light-color');
    $('#performShowF > div').addClass('on-light-color');
    $('#performHideF > div').removeClass('on-light-color');
    $('#performHideF > div').addClass('off-light-color');
  });
  // OFFボタン押下
  $('#performHideF').click(function() {
    $('#Bf109E').collapse('hide');
    $('#Bf109F').collapse('hide');
    $('#Bf109G').collapse('hide');
    $('#Bf109K').collapse('hide');
    $('#Fw190A').collapse('hide');
    $('#Fw190D9').collapse('hide');
    $('#Ta152H').collapse('hide');
    $('#M262A1').collapse('hide');
    $('#Do335').collapse('hide');
    $('#He162').collapse('hide');
    $('#MeP1101').collapse('hide');
    $('#performShowF > div').removeClass('on-light-color');
    $('#performShowF > div').addClass('off-light-color');
    $('#performHideF > div').removeClass('off-light-color');
    $('#performHideF > div').addClass('on-light-color');
  });
  // FB	戦闘爆撃機
  // ONボタン押下
  $('#performShowFB').click(function() {
    $('#Bf110C').collapse('show');
    $('#Bf110D').collapse('show');
    $('#Bf110E').collapse('show');
    $('#Bf110G').collapse('show');
    $('#Me210C').collapse('show');
    $('#Me410A').collapse('show');
    $('#Me410B').collapse('show');
    $('#Fw190G').collapse('show');
    $('#Fw190F').collapse('show');
    $('#Me262A2').collapse('show');
    $('#performShowFB > div').removeClass('off-light-color');
    $('#performShowFB > div').addClass('on-light-color');
    $('#performHideFB > div').removeClass('on-light-color');
    $('#performHideFB > div').addClass('off-light-color');
  });
  // OFFボタン押下
  $('#performHideFB').click(function() {
    $('#Bf110C').collapse('hide');
    $('#Bf110D').collapse('hide');
    $('#Bf110E').collapse('hide');
    $('#Bf110G').collapse('hide');
    $('#Me210C').collapse('hide');
    $('#Me410A').collapse('hide');
    $('#Me410B').collapse('hide');
    $('#Fw190G').collapse('hide');
    $('#Fw190F').collapse('hide');
    $('#Me262A2').collapse('hide');
    $('#performShowFB > div').removeClass('on-light-color');
    $('#performShowFB > div').addClass('off-light-color');
    $('#performHideFB > div').removeClass('off-light-color');
    $('#performHideFB > div').addClass('on-light-color');
  });
  // FD	局地戦闘機
  // ONボタン押下
  $('#performShowFD').click(function() {
    $('#Me163B').collapse('show');
    $('#Me163C').collapse('show');
    $('#Ba349').collapse('show');
    $('#Me263').collapse('show');
    $('#performShowFD > div').removeClass('off-light-color');
    $('#performShowFD > div').addClass('on-light-color');
    $('#performHideFD > div').removeClass('on-light-color');
    $('#performHideFD > div').addClass('off-light-color');
  });
  // OFFボタン押下
  $('#performHideFD').click(function() {
    $('#Me163B').collapse('hide');
    $('#Me163C').collapse('hide');
    $('#Ba349').collapse('hide');
    $('#Me263').collapse('hide');
    $('#performShowFD > div').removeClass('on-light-color');
    $('#performShowFD > div').addClass('off-light-color');
    $('#performHideFD > div').removeClass('off-light-color');
    $('#performHideFD > div').addClass('on-light-color');
  });
  // FC	艦上戦闘機
  // ONボタン押下
  $('#performShowFC').click(function() {
    $('#Bf109T').collapse('show');
    $('#performShowFC > div').removeClass('off-light-color');
    $('#performShowFC > div').addClass('on-light-color');
    $('#performHideFC > div').removeClass('on-light-color');
    $('#performHideFC > div').addClass('off-light-color');
  });
  // OFFボタン押下
  $('#performHideFC').click(function() {
    $('#Bf109T').collapse('hide');
    $('#performShowFC > div').removeClass('on-light-color');
    $('#performShowFC > div').addClass('off-light-color');
    $('#performHideFC > div').removeClass('off-light-color');
    $('#performHideFC > div').addClass('on-light-color');
  });
  // A	攻撃機
  // ONボタン押下
  $('#performShowA').click(function() {
    $('#Hs123').collapse('show');
    $('#Hs129B1').collapse('show');
    $('#Hs129B2').collapse('show');
    $('#Ar234B').collapse('show');
    $('#Ar234C').collapse('show');
    $('#Ar234D').collapse('show');
    $('#Ar234E').collapse('show');
    $('#performShowA > div').removeClass('off-light-color');
    $('#performShowA > div').addClass('on-light-color');
    $('#performHideA > div').removeClass('on-light-color');
    $('#performHideA > div').addClass('off-light-color');
  });
  // OFFボタン押下
  $('#performHideA').click(function() {
    $('#Hs123').collapse('hide');
    $('#Hs129B1').collapse('hide');
    $('#Hs129B2').collapse('hide');
    $('#Ar234B').collapse('hide');
    $('#Ar234C').collapse('hide');
    $('#Ar234D').collapse('hide');
    $('#Ar234E').collapse('hide');
    $('#performShowA > div').removeClass('on-light-color');
    $('#performShowA > div').addClass('off-light-color');
    $('#performHideA > div').removeClass('off-light-color');
    $('#performHideA > div').addClass('on-light-color');
  });

  // AC	艦上攻撃機
  // ONボタン押下
  $('#performShowAC').click(function() {
    $('#Ju87C').collapse('show');
    $('#performShowAC > div').removeClass('off-light-color');
    $('#performShowAC > div').addClass('on-light-color');
    $('#performHideAC > div').removeClass('on-light-color');
    $('#performHideAC > div').addClass('off-light-color');
  });
  // OFFボタン押下
  $('#performHideAC').click(function() {
    $('#Ju87C').collapse('hide');
    $('#performShowAC > div').removeClass('on-light-color');
    $('#performShowAC > div').addClass('off-light-color');
    $('#performHideAC > div').removeClass('off-light-color');
    $('#performHideAC > div').addClass('on-light-color');
  });

  // D	急降下爆撃機
  // ONボタン押下
  $('#performShowD').click(function() {
    $('#Ju87B').collapse('show');
    $('#Ju87R').collapse('show');
    $('#Ju87D').collapse('show');
    $('#Ju87G').collapse('show');
    $('#Hs132A').collapse('show');
    $('#performShowD > div').removeClass('off-light-color');
    $('#performShowD > div').addClass('on-light-color');
    $('#performHideD > div').removeClass('on-light-color');
    $('#performHideD > div').addClass('off-light-color');
  });
  // OFFボタン押下
  $('#performHideD').click(function() {
    $('#Ju87B').collapse('hide');
    $('#Ju87R').collapse('hide');
    $('#Ju87D').collapse('hide');
    $('#Ju87G').collapse('hide');
    $('#Hs132A').collapse('hide');
    $('#performShowD > div').removeClass('on-light-color');
    $('#performShowD > div').addClass('off-light-color');
    $('#performHideD > div').removeClass('off-light-color');
    $('#performHideD > div').addClass('on-light-color');
  });

  // H	ヘリコプター
  // ONボタン押下
  $('#performShowH').click(function() {
    $('#Fl282').collapse('show');
    $('#Fa223').collapse('show');
    $('#performShowH > div').removeClass('off-light-color');
    $('#performShowH > div').addClass('on-light-color');
    $('#performHideH > div').removeClass('on-light-color');
    $('#performHideH > div').addClass('off-light-color');
  });
  // OFFボタン押下
  $('#performHideH').click(function() {
    $('#Fl282').collapse('hide');
    $('#Fa223').collapse('hide');
    $('#performShowH > div').removeClass('on-light-color');
    $('#performShowH > div').addClass('off-light-color');
    $('#performHideH > div').removeClass('off-light-color');
    $('#performHideH > div').addClass('on-light-color');
  });
  // C	輸送機
  // ONボタン押下
  $('#performShowC').click(function() {
    $('#Ju52g5e').collapse('show');
    $('#Ju52g5eF').collapse('show');
    $('#Ju52g9e').collapse('show');
    $('#Ar232').collapse('show');
    $('#Me323D').collapse('show');
    $('#Me323E').collapse('show');
    $('#performShowC > div').removeClass('off-light-color');
    $('#performShowC > div').addClass('on-light-color');
    $('#performHideC > div').removeClass('on-light-color');
    $('#performHideC > div').addClass('off-light-color');
  });
  // OFFボタン押下
  $('#performHideC').click(function() {
    $('#Ju52g5e').collapse('hide');
    $('#Ju52g5eF').collapse('hide');
    $('#Ju52g9e').collapse('hide');
    $('#Ar232').collapse('hide');
    $('#Me323D').collapse('hide');
    $('#Me323E').collapse('hide');
    $('#performShowC > div').removeClass('on-light-color');
    $('#performShowC > div').addClass('off-light-color');
    $('#performHideC > div').removeClass('off-light-color');
    $('#performHideC > div').addClass('on-light-color');
  });
  // B	爆撃機
  // ONボタン押下
  $('#performShowB').click(function() {
    $('#Do17Z').collapse('show');
    $('#Do17Zg').collapse('show');
    $('#He111H2').collapse('show');
    $('#He111H10').collapse('show');
    $('#Ju88A1').collapse('show');
    $('#Ju88A4').collapse('show');
    $('#Ju188E').collapse('show');
    $('#Ju188A').collapse('show');
    $('#Ju88S').collapse('show');
    $('#Ju188S').collapse('show');
    $('#Do217E').collapse('show');
    $('#Do217K').collapse('show');
    $('#Do217M').collapse('show');
    $('#He177A').collapse('show');
    $('#Me264').collapse('show');
    $('#Ju287').collapse('show');
    $('#performShowB > div').removeClass('off-light-color');
    $('#performShowB > div').addClass('on-light-color');
    $('#performHideB > div').removeClass('on-light-color');
    $('#performHideB > div').addClass('off-light-color');
  });
  // OFFボタン押下
  $('#performHideB').click(function() {
    $('#Do17Z').collapse('hide');
    $('#Do17Zg').collapse('hide');
    $('#He111H2').collapse('hide');
    $('#He111H10').collapse('hide');
    $('#Ju88A1').collapse('hide');
    $('#Ju88A4').collapse('hide');
    $('#Ju188E').collapse('hide');
    $('#Ju188A').collapse('hide');
    $('#Ju88S').collapse('hide');
    $('#Ju188S').collapse('hide');
    $('#Do217E').collapse('hide');
    $('#Do217K').collapse('hide');
    $('#Do217M').collapse('hide');
    $('#He177A').collapse('hide');
    $('#Me264').collapse('hide');
    $('#Ju287').collapse('hide');
    $('#performShowB > div').removeClass('on-light-color');
    $('#performShowB > div').addClass('off-light-color');
    $('#performHideB > div').removeClass('off-light-color');
    $('#performHideB > div').addClass('on-light-color');
  });
  // BU	巡行ミサイル
  // ONボタン押下
  $('#performShowBU').click(function() {
    $('#V1').collapse('show');
    $('#performShowBU > div').removeClass('off-light-color');
    $('#performShowBU > div').addClass('on-light-color');
    $('#performHideBU > div').removeClass('on-light-color');
    $('#performHideBU > div').addClass('off-light-color');
  });
  // OFFボタン押下
  $('#performHideBU').click(function() {
    $('#V1').collapse('hide');
    $('#performShowBU > div').removeClass('on-light-color');
    $('#performShowBU > div').addClass('off-light-color');
    $('#performHideBU > div').removeClass('off-light-color');
    $('#performHideBU > div').addClass('on-light-color');
  });
  // BR	戦略ミサイル
  // ONボタン押下
  $('#performShowBR').click(function() {
    $('#V2').collapse('show');
    $('#performShowBR > div').removeClass('off-light-color');
    $('#performShowBR > div').addClass('on-light-color');
    $('#performHideBR > div').removeClass('on-light-color');
    $('#performHideBR > div').addClass('off-light-color');
  });
  // OFFボタン押下
  $('#performHideBR').click(function() {
    $('#V2').collapse('hide');
    $('#performShowBR > div').removeClass('on-light-color');
    $('#performShowBR > div').addClass('off-light-color');
    $('#performHideBR > div').removeClass('off-light-color');
    $('#performHideBR > div').addClass('on-light-color');
  });
  // S	装甲車
  // ONボタン押下
  $('#performShowS').click(function() {
    $('#PSW6rad').collapse('show');
    $('#Sdkfz222').collapse('show');
    $('#Sdkfz232').collapse('show');
    $('#Sdkfz233').collapse('show');
    $('#PSW2341').collapse('show');
    $('#Puma').collapse('show');
    $('#PSW2343').collapse('show');
    $('#PSW2344').collapse('show');
    $('#performShowS > div').removeClass('off-light-color');
    $('#performShowS > div').addClass('on-light-color');
    $('#performHideS > div').removeClass('on-light-color');
    $('#performHideS > div').addClass('off-light-color');
  });
  // OFFボタン押下
  $('#performHideS').click(function() {
    $('#PSW6rad').collapse('hide');
    $('#Sdkfz222').collapse('hide');
    $('#Sdkfz232').collapse('hide');
    $('#Sdkfz233').collapse('hide');
    $('#PSW2341').collapse('hide');
    $('#Puma').collapse('hide');
    $('#PSW2343').collapse('hide');
    $('#PSW2344').collapse('hide');
    $('#performShowS > div').removeClass('on-light-color');
    $('#performShowS > div').addClass('off-light-color');
    $('#performHideS > div').removeClass('off-light-color');
    $('#performHideS > div').addClass('on-light-color');
  });
  // L	軽戦車
  // ONボタン押下
  $('#performShowL').click(function() {
    $('#PzKwIA').collapse('show');
    $('#PzKwIB').collapse('show');
    $('#PzKwIC').collapse('show');
    $('#PzKwIF').collapse('show');
    $('#PzKw35t').collapse('show');
    $('#PzKwIIA').collapse('show');
    $('#PzKwIIDE').collapse('show');
    $('#PzKwIIF').collapse('show');
    $('#PzKwIIG').collapse('show');
    $('#PzKwIIHM').collapse('show');
    $('#PzKw38tA').collapse('show');
    $('#PzKw38tE').collapse('show');
    $('#PzKw38tS').collapse('show');
    $('#PzKw38tG').collapse('show');
    $('#PzKw38tn').collapse('show');
    $('#AFPz38t').collapse('show');
    $('#Looks').collapse('show');
    $('#performShowL > div').removeClass('off-light-color');
    $('#performShowL > div').addClass('on-light-color');
    $('#performHideL > div').removeClass('on-light-color');
    $('#performHideL > div').addClass('off-light-color');
  });
  // OFFボタン押下
  $('#performHideL').click(function() {
    $('#PzKwIA').collapse('hide');
    $('#PzKwIB').collapse('hide');
    $('#PzKwIC').collapse('hide');
    $('#PzKwIF').collapse('hide');
    $('#PzKw35t').collapse('hide');
    $('#PzKwIIA').collapse('hide');
    $('#PzKwIIDE').collapse('hide');
    $('#PzKwIIF').collapse('hide');
    $('#PzKwIIG').collapse('hide');
    $('#PzKwIIHM').collapse('hide');
    $('#PzKw38tA').collapse('hide');
    $('#PzKw38tE').collapse('hide');
    $('#PzKw38tS').collapse('hide');
    $('#PzKw38tG').collapse('hide');
    $('#PzKw38tn').collapse('hide');
    $('#AFPz38t').collapse('hide');
    $('#Looks').collapse('hide');
    $('#performShowL > div').removeClass('on-light-color');
    $('#performShowL > div').addClass('off-light-color');
    $('#performHideL > div').removeClass('off-light-color');
    $('#performHideL > div').addClass('on-light-color');
  });
  // P	戦車
  // ONボタン押下
  $('#performShowP').click(function() {
    $('#PzKwIIIE').collapse('show');
    $('#PzKwIIIG').collapse('show');
    $('#PzKwIIIH').collapse('show');
    $('#PzKwIIIJ').collapse('show');
    $('#PzKwIIIL').collapse('show');
    $('#PzKwIIIN').collapse('show');
    $('#PzKwIVD').collapse('show');
    $('#PzKwIVE').collapse('show');
    $('#PzKwIVF2').collapse('show');
    $('#PzKwIVG').collapse('show');
    $('#PzKwIVH').collapse('show');
    $('#PzKwIVJ').collapse('show');
    $('#PzkwIVSP').collapse('show');
    $('#VK6501').collapse('show');
    $('#TiggerI').collapse('show');
    $('#PanterD').collapse('show');
    $('#PanterG').collapse('show');
    $('#PanterF').collapse('show');
    $('#PanterII').collapse('show');
    $('#E50').collapse('show');
    $('#TiggerII').collapse('show');
    $('#E75').collapse('show');
    $('#Mouse').collapse('show');
    $('#E100').collapse('show');
    $('#performShowP > div').removeClass('off-light-color');
    $('#performShowP > div').addClass('on-light-color');
    $('#performHideP > div').removeClass('on-light-color');
    $('#performHideP > div').addClass('off-light-color');
  });
  // OFFボタン押下
  $('#performHideP').click(function() {
    $('#PzKwIIIE').collapse('hide');
    $('#PzKwIIIG').collapse('hide');
    $('#PzKwIIIH').collapse('hide');
    $('#PzKwIIIJ').collapse('hide');
    $('#PzKwIIIL').collapse('hide');
    $('#PzKwIIIN').collapse('hide');
    $('#PzKwIVD').collapse('hide');
    $('#PzKwIVE').collapse('hide');
    $('#PzKwIVF2').collapse('hide');
    $('#PzKwIVG').collapse('hide');
    $('#PzKwIVH').collapse('hide');
    $('#PzKwIVJ').collapse('hide');
    $('#PzkwIVSP').collapse('hide');
    $('#VK6501').collapse('hide');
    $('#TiggerI').collapse('hide');
    $('#PanterD').collapse('hide');
    $('#PanterG').collapse('hide');
    $('#PanterF').collapse('hide');
    $('#PanterII').collapse('hide');
    $('#E50').collapse('hide');
    $('#TiggerII').collapse('hide');
    $('#E75').collapse('hide');
    $('#Mouse').collapse('hide');
    $('#E100').collapse('hide');
    $('#performShowP > div').removeClass('on-light-color');
    $('#performShowP > div').addClass('off-light-color');
    $('#performHideP > div').removeClass('off-light-color');
    $('#performHideP > div').addClass('on-light-color');
  });
  // JP	駆逐戦車
  // ONボタン押下
  $('#performShowJP').click(function() {
    $('#StuGIIIB').collapse('show');
    $('#StuGIIIF').collapse('show');
    $('#StuGIIIF8').collapse('show');
    $('#StuGIIIG').collapse('show');
    $('#StuH42').collapse('show');
    $('#Elephant').collapse('show');
    $('#StuGIV').collapse('show');
    $('#Hetzer').collapse('show');
    $('#Hetzer42').collapse('show');
    $('#JagPz38d').collapse('show');
    $('#JagPzIV48').collapse('show');
    $('#JagPzIV70').collapse('show');
    $('#Jagdpanther').collapse('show');
    $('#Jagdtiger').collapse('show');
    $('#performShowJP > div').removeClass('off-light-color');
    $('#performShowJP > div').addClass('on-light-color');
    $('#performHideJP > div').removeClass('on-light-color');
    $('#performHideJP > div').addClass('off-light-color');
  });
  // OFFボタン押下
  $('#performHideJP').click(function() {
    $('#StuGIIIB').collapse('hide');
    $('#StuGIIIF').collapse('hide');
    $('#StuGIIIF8').collapse('hide');
    $('#StuGIIIG').collapse('hide');
    $('#StuH42').collapse('hide');
    $('#Elephant').collapse('hide');
    $('#StuGIV').collapse('hide');
    $('#Hetzer').collapse('hide');
    $('#Hetzer42').collapse('hide');
    $('#JagPz38d').collapse('hide');
    $('#JagPzIV48').collapse('hide');
    $('#JagPzIV70').collapse('hide');
    $('#Jagdpanther').collapse('hide');
    $('#Jagdtiger').collapse('hide');
    $('#performShowJP > div').removeClass('on-light-color');
    $('#performShowJP > div').addClass('off-light-color');
    $('#performHideJP > div').removeClass('off-light-color');
    $('#performHideJP > div').addClass('on-light-color');
  });
  // PJ	対戦車自走砲
  // ONボタン押下
  $('#performShowPJ').click(function() {
    $('#PzJagIB').collapse('show');
    $('#PzJagIID').collapse('show');
    $('#MurderII').collapse('show');
    $('#MurderIIIr').collapse('show');
    $('#MurderIIIH').collapse('show');
    $('#MurderIIIM').collapse('show');
    $('#PzAIVa').collapse('show');
    $('#Nashorn').collapse('show');
    $('#VK3001H').collapse('show');
    $('#performShowPJ > div').removeClass('off-light-color');
    $('#performShowPJ > div').addClass('on-light-color');
    $('#performHidePJ > div').removeClass('on-light-color');
    $('#performHidePJ > div').addClass('off-light-color');
  });
  // OFFボタン押下
  $('#performHidePJ').click(function() {
    $('#PzJagIB').collapse('hide');
    $('#PzJagIID').collapse('hide');
    $('#MurderII').collapse('hide');
    $('#MurderIIIr').collapse('hide');
    $('#MurderIIIH').collapse('hide');
    $('#MurderIIIM').collapse('hide');
    $('#PzAIVa').collapse('hide');
    $('#Nashorn').collapse('hide');
    $('#VK3001H').collapse('hide');
    $('#performShowPJ > div').removeClass('on-light-color');
    $('#performShowPJ > div').addClass('off-light-color');
    $('#performHidePJ > div').removeClass('off-light-color');
    $('#performHidePJ > div').addClass('on-light-color');
  });
  // PF	火炎放射戦車
  // ONボタン押下
  $('#performShowPF').click(function() {
    $('#Flamingo').collapse('show');
    $('#SPW251Fl').collapse('show');
    $('#PzKwIIIFl').collapse('show');
    $('#HetzerFl').collapse('show');
    $('#performShowPF > div').removeClass('off-light-color');
    $('#performShowPF > div').addClass('on-light-color');
    $('#performHidePF > div').removeClass('on-light-color');
    $('#performHidePF > div').addClass('off-light-color');
  });
  // OFFボタン押下
  $('#performHidePF').click(function() {
    $('#Flamingo').collapse('hide');
    $('#SPW251Fl').collapse('hide');
    $('#PzKwIIIFl').collapse('hide');
    $('#HetzerFl').collapse('hide');
    $('#performShowPF > div').removeClass('on-light-color');
    $('#performShowPF > div').addClass('off-light-color');
    $('#performHidePF > div').removeClass('off-light-color');
    $('#performHidePF > div').addClass('on-light-color');
  });
  // EP	装甲列車
  // ONボタン押下
  $('#performShowEP').click(function() {
    $('#ArmoredTrain').collapse('show');
    $('#Leopold').collapse('show');
    $('#CurlTrain').collapse('show');
    $('#CurlTank').collapse('show');
    $('#performShowEP > div').removeClass('off-light-color');
    $('#performShowEP > div').addClass('on-light-color');
    $('#performHideEP > div').removeClass('on-light-color');
    $('#performHideEP > div').addClass('off-light-color');
  });
  // OFFボタン押下
  $('#performHideEP').click(function() {
    $('#ArmoredTrain').collapse('hide');
    $('#Leopold').collapse('hide');
    $('#CurlTrain').collapse('hide');
    $('#CurlTank').collapse('hide');
    $('#performShowEP > div').removeClass('on-light-color');
    $('#performShowEP > div').addClass('off-light-color');
    $('#performHideEP > div').removeClass('off-light-color');
    $('#performHideEP > div').addClass('on-light-color');
  });
  // UG	自走重歩兵砲
  // ONボタン押下
  $('#performShowUG').click(function() {
    $('#sIGIB').collapse('show');
    $('#sIGII').collapse('show');
    $('#GreileH').collapse('show');
    $('#GreileK').collapse('show');
    $('#sIG33B').collapse('show');
    $('#sIG332').collapse('show');
    $('#Bloomberg').collapse('show');
    $('#STigger').collapse('show');
    $('#performShowUG > div').removeClass('off-light-color');
    $('#performShowUG > div').addClass('on-light-color');
    $('#performHideUG > div').removeClass('on-light-color');
    $('#performHideUG > div').addClass('off-light-color');
  });
  // OFFボタン押下
  $('#performHideUG').click(function() {
    $('#sIGIB').collapse('hide');
    $('#sIGII').collapse('hide');
    $('#GreileH').collapse('hide');
    $('#GreileK').collapse('hide');
    $('#sIG33B').collapse('hide');
    $('#sIG332').collapse('hide');
    $('#Bloomberg').collapse('hide');
    $('#STigger').collapse('hide');
    $('#performShowUG > div').removeClass('on-light-color');
    $('#performShowUG > div').addClass('off-light-color');
    $('#performHideUG > div').removeClass('off-light-color');
    $('#performHideUG > div').addClass('on-light-color');
  });
  // U	自走カノン砲
  // ONボタン押下
  $('#performShowU').click(function() {
    $('#Vespe').collapse('show');
    $('#Hummel').collapse('show');
    $('#Gerat809').collapse('show');
    $('#Gerat811').collapse('show');
    $('#performShowU > div').removeClass('off-light-color');
    $('#performShowU > div').addClass('on-light-color');
    $('#performHideU > div').removeClass('on-light-color');
    $('#performHideU > div').addClass('off-light-color');
  });
  // OFFボタン押下
  $('#performHideU').click(function() {
    $('#Vespe').collapse('hide');
    $('#Hummel').collapse('hide');
    $('#Gerat809').collapse('hide');
    $('#Gerat811').collapse('hide');
    $('#performShowU > div').removeClass('on-light-color');
    $('#performShowU > div').addClass('off-light-color');
    $('#performHideU > div').removeClass('off-light-color');
    $('#performHideU > div').addClass('on-light-color');
  });
  // UR	自走ロケット
  // ONボタン押下
  $('#performShowUR').click(function() {
    $('#SPW251W').collapse('show');
    $('#Martia').collapse('show');
    $('#performShowUR > div').removeClass('off-light-color');
    $('#performShowUR > div').addClass('on-light-color');
    $('#performHideUR > div').removeClass('on-light-color');
    $('#performHideUR > div').addClass('off-light-color');
  });
  // OFFボタン押下
  $('#performHideUR').click(function() {
    $('#SPW251W').collapse('hide');
    $('#Martia').collapse('hide');
    $('#performShowUR > div').removeClass('on-light-color');
    $('#performShowUR > div').addClass('off-light-color');
    $('#performHideUR > div').removeClass('off-light-color');
    $('#performHideUR > div').addClass('on-light-color');
  });
  // R	対空戦車
  // ONボタン押下
  $('#performShowR').click(function() {
    $('#DemagD7').collapse('show');
    $('#FPz38t').collapse('show');
    $('#Sdkfz71').collapse('show');
    $('#Mbelwagen').collapse('show');
    $('#WilbellBinto').collapse('show');
    $('#FPzIV30').collapse('show');
    $('#OstwintI').collapse('show');
    $('#OstwintII').collapse('show');
    $('#Kugelblitz').collapse('show');
    $('#Corian').collapse('show');
    $('#performShowR > div').removeClass('off-light-color');
    $('#performShowR > div').addClass('on-light-color');
    $('#performHideR > div').removeClass('on-light-color');
    $('#performHideR > div').addClass('off-light-color');
  });
  // OFFボタン押下
  $('#performHideR').click(function() {
    $('#DemagD7').collapse('hide');
    $('#FPz38t').collapse('hide');
    $('#Sdkfz71').collapse('hide');
    $('#Mbelwagen').collapse('hide');
    $('#WilbellBinto').collapse('hide');
    $('#FPzIV30').collapse('hide');
    $('#OstwintI').collapse('hide');
    $('#OstwintII').collapse('hide');
    $('#Kugelblitz').collapse('hide');
    $('#Corian').collapse('hide');
    $('#performShowR > div').removeClass('on-light-color');
    $('#performShowR > div').addClass('off-light-color');
    $('#performHideR > div').removeClass('off-light-color');
    $('#performHideR > div').addClass('on-light-color');
  });
  // RU	自走高射砲
  // ONボタン押下
  $('#performShowRU').click(function() {
    $('#Sdkfz8').collapse('show');
    $('#Flak37Pz').collapse('show');
    $('#Flak41Pz').collapse('show');
    $('#performShowRU > div').removeClass('off-light-color');
    $('#performShowRU > div').addClass('on-light-color');
    $('#performHideRU > div').removeClass('on-light-color');
    $('#performHideRU > div').addClass('off-light-color');
  });
  // OFFボタン押下
  $('#performHideRU').click(function() {
    $('#Sdkfz8').collapse('hide');
    $('#Flak37Pz').collapse('hide');
    $('#Flak41Pz').collapse('hide');
    $('#performShowRU > div').removeClass('on-light-color');
    $('#performShowRU > div').addClass('off-light-color');
    $('#performHideRU > div').removeClass('off-light-color');
    $('#performHideRU > div').addClass('on-light-color');
  });
  // T	輸送車
  // ONボタン押下
  $('#performShowT').click(function() {
    $('#Track').collapse('show');
    $('#Sdkfz7').collapse('show');
    $('#Sdkfz251').collapse('show');
    $('#performShowT > div').removeClass('off-light-color');
    $('#performShowT > div').addClass('on-light-color');
    $('#performHideT > div').removeClass('on-light-color');
    $('#performHideT > div').addClass('off-light-color');
  });
  // OFFボタン押下
  $('#performHideT').click(function() {
    $('#Track').collapse('hide');
    $('#Sdkfz7').collapse('hide');
    $('#Sdkfz251').collapse('hide');
    $('#performShowT > div').removeClass('on-light-color');
    $('#performShowT > div').addClass('off-light-color');
    $('#performHideT > div').removeClass('off-light-color');
    $('#performHideT > div').addClass('on-light-color');
  });
  // TH	補給車
  // ONボタン押下
  $('#performShowTH').click(function() {
    $('#SupplyHorse').collapse('show');
    $('#SupplyTrack').collapse('show');
    $('#Supplyht').collapse('show');
    $('#performShowTH > div').removeClass('off-light-color');
    $('#performShowTH > div').addClass('on-light-color');
    $('#performHideTH > div').removeClass('on-light-color');
    $('#performHideTH > div').addClass('off-light-color');
  });
  // OFFボタン押下
  $('#performHideTH').click(function() {
    $('#SupplyHorse').collapse('hide');
    $('#SupplyTrack').collapse('hide');
    $('#Supplyht').collapse('hide');
    $('#performShowTH > div').removeClass('on-light-color');
    $('#performShowTH > div').addClass('off-light-color');
    $('#performHideTH > div').removeClass('off-light-color');
    $('#performHideTH > div').addClass('on-light-color');
  });
  // TK	工作車
  // ONボタン押下
  $('#performShowTK').click(function() {
    $('#MachineTool').collapse('show');
    $('#performShowTK > div').removeClass('off-light-color');
    $('#performShowTK > div').addClass('on-light-color');
    $('#performHideTK > div').removeClass('on-light-color');
    $('#performHideTK > div').addClass('off-light-color');
  });
  // OFFボタン押下
  $('#performHideTK').click(function() {
    $('#MachineTool').collapse('hide');
    $('#performShowTK > div').removeClass('on-light-color');
    $('#performShowTK > div').addClass('off-light-color');
    $('#performHideTK > div').removeClass('off-light-color');
    $('#performHideTK > div').addClass('on-light-color');
  });
  // E	列車
  // ONボタン押下
  $('#performShowE').click(function() {
    $('#Train').collapse('show');
    $('#performShowE > div').removeClass('off-light-color');
    $('#performShowE > div').addClass('on-light-color');
    $('#performHideE > div').removeClass('on-light-color');
    $('#performHideE > div').addClass('off-light-color');
  });
  // OFFボタン押下
  $('#performHideE').click(function() {
    $('#Train').collapse('hide');
    $('#performShowE > div').removeClass('on-light-color');
    $('#performShowE > div').addClass('off-light-color');
    $('#performHideE > div').removeClass('off-light-color');
    $('#performHideE > div').addClass('on-light-color');
  });
  // QP	牽引対戦車砲
  // ONボタン押下
  $('#performShowQP').click(function() {
    $('#37mmPak35').collapse('show');
    $('#50mmPak38').collapse('show');
    $('#75mmPak40').collapse('show');
    $('#88mmPak43').collapse('show');
    $('#performShowQP > div').removeClass('off-light-color');
    $('#performShowQP > div').addClass('on-light-color');
    $('#performHideQP > div').removeClass('on-light-color');
    $('#performHideQP > div').addClass('off-light-color');
  });
  // OFFボタン押下
  $('#performHideQP').click(function() {
    $('#37mmPak35').collapse('hide');
    $('#50mmPak38').collapse('hide');
    $('#75mmPak40').collapse('hide');
    $('#88mmPak43').collapse('hide');
    $('#performShowQP > div').removeClass('on-light-color');
    $('#performShowQP > div').addClass('off-light-color');
    $('#performHideQP > div').removeClass('off-light-color');
    $('#performHideQP > div').addClass('on-light-color');
  });
  // QU	牽引カノン砲
  // ONボタン押下
  $('#performShowQU').click(function() {
    $('#105mm').collapse('show');
    $('#150mm').collapse('show');
    $('#173mm').collapse('show');
    $('#performShowQU > div').removeClass('off-light-color');
    $('#performShowQU > div').addClass('on-light-color');
    $('#performHideQU > div').removeClass('on-light-color');
    $('#performHideQU > div').addClass('off-light-color');
  });
  // OFFボタン押下
  $('#performHideQU').click(function() {
    $('#105mm').collapse('hide');
    $('#150mm').collapse('hide');
    $('#173mm').collapse('hide');
    $('#performShowQU > div').removeClass('on-light-color');
    $('#performShowQU > div').addClass('off-light-color');
    $('#performHideQU > div').removeClass('off-light-color');
    $('#performHideQU > div').addClass('on-light-color');
  });
  // QN	牽引ロケット
  // ONボタン押下
  $('#performShowQN').click(function() {
    $('#150mmNW41').collapse('show');
    $('#210mmNW42').collapse('show');
    $('#performShowQN > div').removeClass('off-light-color');
    $('#performShowQN > div').addClass('on-light-color');
    $('#performHideQN > div').removeClass('on-light-color');
    $('#performHideQN > div').addClass('off-light-color');
  });
  // OFFボタン押下
  $('#performHideQN').click(function() {
    $('#150mmNW41').collapse('hide');
    $('#210mmNW42').collapse('hide');
    $('#performShowQN > div').removeClass('on-light-color');
    $('#performShowQN > div').addClass('off-light-color');
    $('#performHideQN > div').removeClass('off-light-color');
    $('#performHideQN > div').addClass('on-light-color');
  });
  // QR	牽引高射砲
  // ONボタン押下
  $('#performShowQR').click(function() {
    $('#88mmFlk36').collapse('show');
    $('#88mmFlk41').collapse('show');
    $('#performShowQR > div').removeClass('off-light-color');
    $('#performShowQR > div').addClass('on-light-color');
    $('#performHideQR > div').removeClass('on-light-color');
    $('#performHideQR > div').addClass('off-light-color');
  });
  // OFFボタン押下
  $('#performHideQR').click(function() {
    $('#88mmFlk36').collapse('hide');
    $('#88mmFlk41').collapse('hide');
    $('#performShowQR > div').removeClass('on-light-color');
    $('#performShowQR > div').addClass('off-light-color');
    $('#performHideQR > div').removeClass('off-light-color');
    $('#performHideQR > div').addClass('on-light-color');
  });
  // G	トーチカ
  // ONボタン押下
  $('#performShowG').click(function() {
    $('#Turret').collapse('show');
    $('#Torchka').collapse('show');
    $('#CoastalBattery').collapse('show');
    $('#Radar').collapse('show');
    $('#AtlanticWall').collapse('show');
    $('#performShowG > div').removeClass('off-light-color');
    $('#performShowG > div').addClass('on-light-color');
    $('#performHideG > div').removeClass('on-light-color');
    $('#performHideG > div').addClass('off-light-color');
  });
  // OFFボタン押下
  $('#performHideG').click(function() {
    $('#Turret').collapse('hide');
    $('#Torchka').collapse('hide');
    $('#CoastalBattery').collapse('hide');
    $('#Radar').collapse('hide');
    $('#AtlanticWall').collapse('hide');
    $('#performShowG > div').removeClass('on-light-color');
    $('#performShowG > div').addClass('off-light-color');
    $('#performHideG > div').removeClass('off-light-color');
    $('#performHideG > div').addClass('on-light-color');
  });
  // I 歩兵
  // ONボタン押下
  $('#performShowI').click(function() {
    $('#Grenadier39').collapse('show');
    $('#MobilizedSoldier').collapse('show');
    $('#EliteSoldiers39').collapse('show');
    $('#Grenadier43').collapse('show');
    $('#BattleSoldier').collapse('show');
    $('#EliteSoldiers43').collapse('show');
    $('#Guard39').collapse('show');
    $('#Guard43').collapse('show');
    $('#DescentHunter').collapse('show');
    $('#performShowI > div').removeClass('off-light-color');
    $('#performShowI > div').addClass('on-light-color');
    $('#performHideI > div').removeClass('on-light-color');
    $('#performHideI > div').addClass('off-light-color');
  });
  // OFFボタン押下
  $('#performHideI').click(function() {
    $('#Grenadier39').collapse('hide');
    $('#MobilizedSoldier').collapse('hide');
    $('#EliteSoldiers39').collapse('hide');
    $('#Grenadier43').collapse('hide');
    $('#BattleSoldier').collapse('hide');
    $('#EliteSoldiers43').collapse('hide');
    $('#Guard39').collapse('hide');
    $('#Guard43').collapse('hide');
    $('#DescentHunter').collapse('hide');
    $('#performShowI > div').removeClass('on-light-color');
    $('#performShowI > div').addClass('off-light-color');
    $('#performHideI > div').removeClass('off-light-color');
    $('#performHideI > div').addClass('on-light-color');
  });
  // W	水上艦
  // ONボタン押下
  $('#performShowW').click(function() {
    $('#Destroyer').collapse('show');
    $('#LightCruiser').collapse('show');
    $('#Cruiser').collapse('show');
    $('#BattleCruiser').collapse('show');
    $('#Battleship').collapse('show');
    $('#performShowW > div').removeClass('off-light-color');
    $('#performShowW > div').addClass('on-light-color');
    $('#performHideW > div').removeClass('on-light-color');
    $('#performHideW > div').addClass('off-light-color');
  });
  // OFFボタン押下
  $('#performHideW').click(function() {
    $('#Destroyer').collapse('hide');
    $('#LightCruiser').collapse('hide');
    $('#Cruiser').collapse('hide');
    $('#BattleCruiser').collapse('hide');
    $('#Battleship').collapse('hide');
    $('#performShowW > div').removeClass('on-light-color');
    $('#performShowW > div').addClass('off-light-color');
    $('#performHideW > div').removeClass('off-light-color');
    $('#performHideW > div').addClass('on-light-color');
  });
  // WC	空母
  // ONボタン押下
  $('#performShowWC').click(function() {
    $('#AircraftCarrier').collapse('show');
    $('#performShowWC > div').removeClass('off-light-color');
    $('#performShowWC > div').addClass('on-light-color');
    $('#performHideWC > div').removeClass('on-light-color');
    $('#performHideWC > div').addClass('off-light-color');
  });
  // OFFボタン押下
  $('#performHideWC').click(function() {
    $('#AircraftCarrier').collapse('hide');
    $('#performShowWC > div').removeClass('on-light-color');
    $('#performShowWC > div').addClass('off-light-color');
    $('#performHideWC > div').removeClass('off-light-color');
    $('#performHideWC > div').addClass('on-light-color');
  });
  // WT	揚陸艦
  // ONボタン押下
  $('#performShowWT').click(function() {
    $('#LandingShip').collapse('show');
    $('#performShowWT > div').removeClass('off-light-color');
    $('#performShowWT > div').addClass('on-light-color');
    $('#performHideWT > div').removeClass('on-light-color');
    $('#performHideWT > div').addClass('off-light-color');
  });
  // OFFボタン押下
  $('#performHideWT').click(function() {
    $('#LandingShip').collapse('hide');
    $('#performShowWT > div').removeClass('on-light-color');
    $('#performShowWT > div').addClass('off-light-color');
    $('#performHideWT > div').removeClass('off-light-color');
    $('#performHideWT > div').addClass('on-light-color');
  });
  // WH	補給艦
  // ONボタン押下
  $('#performShowWH').click(function() {
    $('#SupplyShip').collapse('show');
    $('#performShowWH > div').removeClass('off-light-color');
    $('#performShowWH > div').addClass('on-light-color');
    $('#performHideWH > div').removeClass('on-light-color');
    $('#performHideWH > div').addClass('off-light-color');
  });
  // OFFボタン押下
  $('#performHideWH').click(function() {
    $('#SupplyShip').collapse('hide');
    $('#performShowWH > div').removeClass('on-light-color');
    $('#performShowWH > div').addClass('off-light-color');
    $('#performHideWH > div').removeClass('off-light-color');
    $('#performHideWH > div').addClass('on-light-color');
  });
  // Z	潜水艦
  // ONボタン押下
  $('#performShowZ').click(function() {
    $('#Submarine').collapse('show');
    $('#performShowZ > div').removeClass('off-light-color');
    $('#performShowZ > div').addClass('on-light-color');
    $('#performHideZ > div').removeClass('on-light-color');
    $('#performHideZ > div').addClass('off-light-color');
  });
  // OFFボタン押下
  $('#performHideZ').click(function() {
    $('#Submarine').collapse('hide');
    $('#performShowZ > div').removeClass('on-light-color');
    $('#performShowZ > div').addClass('off-light-color');
    $('#performHideZ > div').removeClass('off-light-color');
    $('#performHideZ > div').addClass('on-light-color');
  });
});
