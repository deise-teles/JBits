/*Serviços*/
  /*ROTEAMENTO*/
//Mostrar o titulo, mas sem as informações
function mostrarRoteamento(){
    let roteamento = document.getElementById("roteamento")
      roteamento.style.display = "flex"
    let infoRoteamento = document.getElementById("infoRot")
      infoRoteamento.style.display = "none"
  }
//Mostrar as informações, sem o titulo
  function mostrarInfoRoteamento(){
    let roteamento = document.getElementById("roteamento")
      roteamento.style.display = "none"
    let infoRoteamento = document.getElementById("infoRot")
      infoRoteamento.style.display = "flex"
  }
//Quando pôr o mouse em Roteamento, aparecer as informações
  let info_roteamentover = document.getElementById("roteamento")
    info_roteamentover.onmouseover = mOver
  let binfoRot
  function mOver(e){
    binfoRot = parseInt(e.target.innerHTML)
    mostrarInfoRoteamento()
  }
//Quando tirar o mouse das informações, aparecer Roteamento
  let info_roteamentout = document.getElementById("infoRot")
    info_roteamentout.onmouseout = mOut
  function mOut(e){
    binfoRot = parseInt(e.target.innerHTML)
    mostrarRoteamento()
  }
/*---------------------------------------------------------------------------------*/
  /*MONITORAMENTO*/
//Mostrar o titulo, mas sem as informações
  function mostrarMonitoramento(){
    let monitoramento = document.getElementById("monitoramento")
      monitoramento.style.display = "flex"
    let infoMonitoramento = document.getElementById("infoMon")
      infoMonitoramento.style.display = "none"
  }
//Mostrar as informações, sem o titulo
  function mostrarInfoMonitoramento(){
    let monitoramento = document.getElementById("monitoramento")
      monitoramento.style.display = "none"
    let infoMonitoramento = document.getElementById("infoMon")
      infoMonitoramento.style.display = "flex"
  }
//Quando pôr o mouse em Roteamento, aparecer as informações
  let info_monitoramentover = document.getElementById("monitoramento")
    info_monitoramentover.onmouseover = mOverM
  let binfoMon
  function mOverM(e){
    binfoMon = parseInt(e.target.innerHTML)
    mostrarInfoMonitoramento()
  }
//Quando tirar o mouse das informações, aparecer Roteamento
  let info_monitoramentout = document.getElementById("infoMon")
    info_monitoramentout.onmouseout = mOutM
  function mOutM(e){
    binfoMon = parseInt(e.target.innerHTML)
    mostrarMonitoramento()
  }
/*---------------------------------------------------------------------------------*/
  /*VIRTUALIZAÇÃO*/
//Mostrar o titulo, mas sem as informações
  function mostrarVitualizacao(){
    let virtualizacao = document.getElementById("virtualizacao")
      virtualizacao.style.display = "flex"
    let infoVirtualizacao = document.getElementById("infoVirt")
      infoVirtualizacao.style.display = "none"
  }
//Mostrar as informações, sem o titulo
  function mostrarInfoVitualizacao(){
    let virtualizacao = document.getElementById("virtualizacao")
      virtualizacao.style.display = "none"
    let infoVirtualizacao = document.getElementById("infoVirt")
      infoVirtualizacao.style.display = "flex"
  }
//Quando pôr o mouse em Roteamento, aparecer as informações
  let info_virtualizacaover = document.getElementById("virtualizacao")
    info_virtualizacaover.onmouseover = mOverV
  let binfoVirt
  function mOverV(e){
    binfoVirt = parseInt(e.target.innerHTML)
    mostrarInfoVitualizacao()
  }
//Quando tirar o mouse das informações, aparecer Roteamento
  let info_virtualizacaout = document.getElementById("infoVirt")
    info_virtualizacaout.onmouseout = mOutV
  function mOutV(e){
    binfoVirt = parseInt(e.target.innerHTML)
    mostrarVitualizacao()
  }
/*---------------------------------------------------------------------------------*/
  /*IPv6*/
//Mostrar o titulo, mas sem as informações
  function mostrarIPv6(){
    let ipv6 = document.getElementById("ipv6")
      ipv6.style.display = "flex"
    let infoIp = document.getElementById("infoIp")
      infoIp.style.display = "none"
  }
//Mostrar as informações, sem o titulo
  function mostrarInfoIPv6(){
    let ipv6 = document.getElementById("ipv6")
      ipv6.style.display = "none"
    let infoIp = document.getElementById("infoIp")
      infoIp.style.display = "flex"
  }
//Quando pôr o mouse em Roteamento, aparecer as informações
  let info_ipv6over = document.getElementById("ipv6")
    info_ipv6over.onmouseover = mOverI
  let binfoIp
  function mOverI(e){
    binfoIp = parseInt(e.target.innerHTML)
    mostrarInfoIPv6()
  }
//Quando tirar o mouse das informações, aparecer Roteamento
  let info_ipv6out = document.getElementById("infoIp")
    info_ipv6out.onmouseout = mOutI
  function mOutI(e){
    binfoIp = parseInt(e.target.innerHTML)
    mostrarIPv6()
  }
/*---------------------------------------------------------------------------------*/
  /*DNS*/
//Mostrar o titulo, mas sem as informações
  function mostrarDNS(){
    let dns = document.getElementById("dns")
      dns.style.display = "flex"
    let infoDNS = document.getElementById("infoDNS")
      infoDNS.style.display = "none"
  }
//Mostrar as informações, sem o titulo
  function mostrarInfoDNS(){
    let dns = document.getElementById("dns")
      dns.style.display = "none"
    let infoDNS = document.getElementById("infoDNS")
      infoDNS.style.display = "flex"
  }
//Quando pôr o mouse em Roteamento, aparecer as informações
  let info_DNSover = document.getElementById("dns")
    info_DNSover.onmouseover = mOverD
  let binfoDNS
  function mOverD(e){
    binfoDNS = parseInt(e.target.innerHTML)
    mostrarInfoDNS()
  }
//Quando tirar o mouse das informações, aparecer Roteamento
  let info_DNSout = document.getElementById("infoDNS")
    info_DNSout.onmouseout = mOutD
  function mOutD(e){
    binfoDNS = parseInt(e.target.innerHTML)
    mostrarDNS()
  }
/*---------------------------------------------------------------------------------*/
  /*Backup*/
//Mostrar o titulo, mas sem as informações
  function mostrarBackup(){
    let backup = document.getElementById("backup")
      backup.style.display = "flex"
    let infoBackup = document.getElementById("infoBackup")
      infoBackup.style.display = "none"
  }
//Mostrar as informações, sem o titulo
  function mostrarInfoBackup(){
    let backup = document.getElementById("backup")
      backup.style.display = "none"
    let infoBackup = document.getElementById("infoBackup")
      infoBackup.style.display = "flex"
  }
//Quando pôr o mouse em Roteamento, aparecer as informações
  let info_Backupover = document.getElementById("backup")
    info_Backupover.onmouseover = mOverB
  let binfoB
  function mOverB(e){
    binfoB = parseInt(e.target.innerHTML)
    mostrarInfoBackup()
  }
//Quando tirar o mouse das informações, aparecer Roteamento
  let info_Backupout = document.getElementById("infoBackup")
    info_Backupout.onmouseout = mOutB
  function mOutB(e){
    binfoB = parseInt(e.target.innerHTML)
    mostrarBackup()
  }

$(document).scroll(function() {
  var y = $(this).scrollTop()
  if (y >= 50) {
    $('.menu')
      .css({
        'background-color': 'rgb(42,42,42)',
        'opacity':'0.5',
        'width':'100%',
        'color':'black',
        'position': 'fixed',
        'top': '0px',
        'left': '0px'
      })
    $('#RESPOmenu')
      .css({
        'background-color': 'rgb(42,42,42)',
        'opacity':'0.5',
        'position': 'fixed',
        'top': '0px',
        'left': '0px'
      })
  } 
  if (y < 50){
    $('.menu')
      .css({
        'background-image': 'linear-gradient(to right, rgb(42,42,42), rgb(42,42,42), rgb(42,42,42))',
        'opacity':'1',
        'position': 'fixed',
        'top': '0px',
        'left': '0px'
        /*'position': 'inherit',
        'top' : '0px'*/
      })
  }
})
// FUNÇÃO PARA EVENTO EM ESPECIALIDADES
function mostrarIMG1() {
  let imagem1 = document.getElementById("imagem1")
   imagem1.style.display = "flex"
  let imagem2 = document.getElementById("imagem2")
   imagem2.style.display = "none"
  let imagem3 = document.getElementById("imagem3")
   imagem3.style.display = "none"
  let imagem4 = document.getElementById("imagem4")
   imagem4.style.display = "none"
  let imagem5 = document.getElementById("imagem5")
   imagem5.style.display = "none"
  let imagem6 = document.getElementById("imagem6")
   imagem6.style.display = "none"
  let imagem7 = document.getElementById("imagem7")
   imagem7.style.display = "none"
  let imagem8 = document.getElementById("imagem8")
   imagem8.style.display = "none"
}
  let slide1 = document.getElementById("slide1")
   slide1.onmouseover = iptIMG1
  let inputIMG1
  function iptIMG1(e) {
    inputIMG1 = parseInt(e.target.innerHTML)
     mostrarIMG1()
  }
  let sld1 = document.getElementById("slide1")
   sld1.onmouseout = naoIMG
  let inputIMG
  function naoIMG(e) {
    inputIMG = parseInt(e.target.innerHTML)
     NAOmostrarIMG()
  }

function mostrarIMG2() {
  let imagem1 = document.getElementById("imagem1")
   imagem1.style.display = "none"
  let imagem2 = document.getElementById("imagem2")
   imagem2.style.display = "flex"
  let imagem3 = document.getElementById("imagem3")
   imagem3.style.display = "none"
  let imagem4 = document.getElementById("imagem4")
   imagem4.style.display = "none"
  let imagem5 = document.getElementById("imagem5")
   imagem5.style.display = "none"
  let imagem6 = document.getElementById("imagem6")
   imagem6.style.display = "none"
  let imagem7 = document.getElementById("imagem7")
   imagem7.style.display = "none"
  let imagem8 = document.getElementById("imagem8")
   imagem8.style.display = "none"
} 
  let slide2 = document.getElementById("slide2")
  slide2.onmouseover = iptIMG2
  let inputIMG2
  function iptIMG2(e) {
    inputIMG2 = parseInt(e.target.innerHTML)
     mostrarIMG2()
  }
  let sld2 = document.getElementById("slide2")
  sld2.onmouseout = naoIMG
  function naoIMG(e) {
    inputIMG = parseInt(e.target.innerHTML)
     NAOmostrarIMG()
  }

function mostrarIMG3() {
  let imagem1 = document.getElementById("imagem1")
   imagem1.style.display = "none"
  let imagem2 = document.getElementById("imagem2")
   imagem2.style.display = "none"
  let imagem3 = document.getElementById("imagem3")
   imagem3.style.display = "flex"
  let imagem4 = document.getElementById("imagem4")
   imagem4.style.display = "none"
  let imagem5 = document.getElementById("imagem5")
   imagem5.style.display = "none"
  let imagem6 = document.getElementById("imagem6")
   imagem6.style.display = "none"
  let imagem7 = document.getElementById("imagem7")
   imagem7.style.display = "none"
  let imagem8 = document.getElementById("imagem8")
   imagem8.style.display = "none"
}
  let slide3 = document.getElementById("slide3")
  slide3.onmouseover = iptIMG3
  let inputIMG3
  function iptIMG3(e) {
    inputIMG3 = parseInt(e.target.innerHTML)
     mostrarIMG3()
  }
  let sld3 = document.getElementById("slide3")
  sld3.onmouseout = naoIMG
  function naoIMG(e) {
    inputIMG = parseInt(e.target.innerHTML)
     NAOmostrarIMG()
  }

function mostrarIMG4() {
  let imagem1 = document.getElementById("imagem1")
   imagem1.style.display = "none"
  let imagem2 = document.getElementById("imagem2")
   imagem2.style.display = "none"
  let imagem3 = document.getElementById("imagem3")
   imagem3.style.display = "none"
  let imagem4 = document.getElementById("imagem4")
   imagem4.style.display = "flex"
  let imagem5 = document.getElementById("imagem5")
   imagem5.style.display = "none"
  let imagem6 = document.getElementById("imagem6")
   imagem6.style.display = "none"
  let imagem7 = document.getElementById("imagem7")
   imagem7.style.display = "none"
  let imagem8 = document.getElementById("imagem8")
   imagem8.style.display = "none"
}
let slide4 = document.getElementById("slide4")
slide4.onmouseover = iptIMG4
let inputIMG4
function iptIMG4(e) {
    inputIMG4 = parseInt(e.target.innerHTML)
    mostrarIMG4()
}
let sld4 = document.getElementById("slide4")
sld4.onmouseout = naoIMG
function naoIMG(e) {
    inputIMG = parseInt(e.target.innerHTML)
    NAOmostrarIMG()
}
function mostrarIMG5() {
  let imagem1 = document.getElementById("imagem1")
   imagem1.style.display = "none"
  let imagem2 = document.getElementById("imagem2")
   imagem2.style.display = "none"
  let imagem3 = document.getElementById("imagem3")
   imagem3.style.display = "none"
  let imagem4 = document.getElementById("imagem4")
   imagem4.style.display = "none"
  let imagem5 = document.getElementById("imagem5")
   imagem5.style.display = "flex"
  let imagem6 = document.getElementById("imagem6")
   imagem6.style.display = "none"
  let imagem7 = document.getElementById("imagem7")
   imagem7.style.display = "none"
  let imagem8 = document.getElementById("imagem8")
   imagem8.style.display = "none"
}
let slide5 = document.getElementById("slide5")
slide5.onmouseover = iptIMG5
let inputIMG5
function iptIMG5(e) {
    inputIMG5 = parseInt(e.target.innerHTML)
    mostrarIMG5()
}
let sld5 = document.getElementById("slide5")
sld5.onmouseout = naoIMG
function naoIMG(e) {
    inputIMG = parseInt(e.target.innerHTML)
    NAOmostrarIMG()
}
function mostrarIMG6() {
  let imagem1 = document.getElementById("imagem1")
   imagem1.style.display = "none"
  let imagem2 = document.getElementById("imagem2")
   imagem2.style.display = "none"
  let imagem3 = document.getElementById("imagem3")
   imagem3.style.display = "none"
  let imagem4 = document.getElementById("imagem4")
   imagem4.style.display = "none"
  let imagem5 = document.getElementById("imagem5")
   imagem5.style.display = "none"
  let imagem6 = document.getElementById("imagem6")
   imagem6.style.display = "flex"
  let imagem7 = document.getElementById("imagem7")
   imagem7.style.display = "none"
  let imagem8 = document.getElementById("imagem8")
   imagem8.style.display = "none"
}
let slide6 = document.getElementById("slide6")
slide6.onmouseover = iptIMG6
let inputIMG6
function iptIMG6(e) {
    inputIMG6 = parseInt(e.target.innerHTML)
    mostrarIMG6()
}
let sld6 = document.getElementById("slide6")
sld6.onmouseout = naoIMG
function naoIMG(e) {
    inputIMG = parseInt(e.target.innerHTML)
    NAOmostrarIMG()
}
function mostrarIMG7() {
  let imagem1 = document.getElementById("imagem1")
   imagem1.style.display = "none"
  let imagem2 = document.getElementById("imagem2")
   imagem2.style.display = "none"
  let imagem3 = document.getElementById("imagem3")
   imagem3.style.display = "none"
  let imagem4 = document.getElementById("imagem4")
   imagem4.style.display = "none"
  let imagem5 = document.getElementById("imagem5")
   imagem5.style.display = "none"
  let imagem6 = document.getElementById("imagem6")
   imagem6.style.display = "none"
  let imagem7 = document.getElementById("imagem7")
   imagem7.style.display = "flex"
  let imagem8 = document.getElementById("imagem8")
   imagem8.style.display = "none"
}
let slide7 = document.getElementById("slide7")
slide7.onmouseover = iptIMG7
let inputIMG7
function iptIMG7(e) {
    inputIMG7 = parseInt(e.target.innerHTML)
    mostrarIMG7()
}
let sld7 = document.getElementById("slide7")
sld7.onmouseout = naoIMG
function naoIMG(e) {
    inputIMG = parseInt(e.target.innerHTML)
    NAOmostrarIMG()
}
function mostrarIMG8() {
  let imagem1 = document.getElementById("imagem1")
   imagem1.style.display = "none"
  let imagem2 = document.getElementById("imagem2")
   imagem2.style.display = "none"
  let imagem3 = document.getElementById("imagem3")
   imagem3.style.display = "none"
  let imagem4 = document.getElementById("imagem4")
   imagem4.style.display = "none"
  let imagem5 = document.getElementById("imagem5")
   imagem5.style.display = "none"
  let imagem6 = document.getElementById("imagem6")
   imagem6.style.display = "none"
  let imagem7 = document.getElementById("imagem7")
   imagem7.style.display = "none"
  let imagem8 = document.getElementById("imagem8")
   imagem8.style.display = "flex"
}
let slide8 = document.getElementById("slide8")
slide8.onmouseover = iptIMG8
let inputIMG8
function iptIMG8(e) {
    inputIMG8 = parseInt(e.target.innerHTML)
    mostrarIMG8()
}
let sld8 = document.getElementById("slide8")
sld8.onmouseout = naoIMG
function naoIMG(e) {
    inputIMG = parseInt(e.target.innerHTML)
    NAOmostrarIMG()
}
function NAOmostrarIMG() {
  let imagem1 = document.getElementById("imagem1")
   imagem1.style.display = "none"
  let imagem2 = document.getElementById("imagem2")
   imagem2.style.display = "none"
  let imagem3 = document.getElementById("imagem3")
   imagem3.style.display = "none"
  let imagem4 = document.getElementById("imagem4")
   imagem4.style.display = "none"
  let imagem5 = document.getElementById("imagem5")
   imagem5.style.display = "none"
  let imagem6 = document.getElementById("imagem6")
   imagem6.style.display = "none"
  let imagem7 = document.getElementById("imagem7")
   imagem7.style.display = "none"
  let imagem8 = document.getElementById("imagem8")
   imagem8.style.display = "none"
}

//função para quando clicar no simbolo, aparecer o menu RESPONSIVO
function mostrarMenurespon(){
  let btMenu = document.getElementById("RESPONmenu")
    btMenu.style.display = "flex"
}
let menu = document.getElementById("-botaoMenu")
menu.onclick = mostrarMenu
let fcmenu
function mostrarMenu(e){
  fcmenu = parseInt(e.target.innerHTML)
  mostrarMenurespon()
}

//Scroll Suave
$('.menu a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
	$('html, body').animate({ 
		scrollTop: targetOffset - 100
	}, 500);
});
//Scroll Suave Responsivo
$('#RESPONmenu a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
	$('html, body').animate({ 
		scrollTop: targetOffset - 100
	}, 500);
});

// Aceitar cookies
function cookies(functions) {
    const container = document.querySelector('.cookies-container');
    const save = document.querySelector('.cookies-save');

    function getFomPref() {
      const inputs = Array.from(document.querySelectorAll('[data-function]')).filter(el => el.checked).map((el) => el.getAttribute('data-function'));
        console.log(inputs);
    }

  functions ['marketing'] ();

    function activateFunctions(pref) {
        console.log(pref);
        console.log(functions);
      container.style.display ='none';
    }

    function handlesave() {
        const pref = getFomPref();
        activateFunctions(pref);
    }

    save.addEventListener('click', handlesave);
}

function marketing() {
    console.log(' função marketing');
}

function analytics() {
    console.log('função analytics');
}

cookies({
    marketing,
    analytics,
});


                    