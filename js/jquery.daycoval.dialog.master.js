//V6
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

var DayImpressao = DayImpressao || (function () {
    var $divImpressao;

    return {
        print: function (div, modo) {
            if (typeof div != "undefined") {
                //div[0].classList.add('w-100');
                $divImpressao = div.html();
                
            }
            if (modo == 'landscape') {
                $("#printFrame").attr("src", "/Template/ImpressaoPadraoLandscape.aspx");
            } else {
                $("#printFrame").attr("src", "/Template/ImpressaoPadrao.aspx");
            }
            
        },
        setDiv: function (div) {
            $divImpressao = div.html();
        },
        getDiv: function () {
            return $divImpressao;
        },
        printIframe: function () {
            var browser = navigator.userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];

            if (browser[1] === "Chrome") {
                $("#printFrame").show();
            }

            var iFrame = $('#printFrame')[0];
            var statusPrint = iFrame.contentWindow.document.execCommand("print", false, null);
            if (statusPrint === false) {
                iFrame.contentWindow.print();
            } else if (browser[1] === "Chrome") {
                $("#printFrame").hide();
            }
        }
    };
}());

var DayMensagens = DayMensagens || (function () {
    var $mensagem = "";

    return {
        mostraMensagemComLink: function (titulo, mensagem, linkBotao, textoBotao) {
            if ($('#dayMensagens').length > 0) {
                $('#dayMensagensLabel').text(titulo);
                $('#dayMensagensBody').html('<p>' + mensagem + '</p>');
                $('#dayMensagens').modal('show');

                setTimeout(function () {
                    DayLoader.hide();
                }, 100);

            } else {
                var $dialog = $(
                    '<div class="modal fade" id="dayMensagens" tabindex="-1" role="dialog" aria-labelledby="dayMensagensLabel" style=" overflow-y:visible">' +
                    '<div class="modal-dialog  modal-dialog-centered" role="document">' +
                    '<div class="modal-content">' +

                    '<div class="modal-header">' +
                    '<span class="line"></span>' +
                    '<h5 class="modal-title" id="dayMensagensLabel">' + titulo + '</h5>' +
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                    '  <span aria-hidden="true">&times;</span>' +
                    '</button>' +
                    '</div>' +

                    '<div class="modal-body" id="dayMensagensBody">' +
                    '<p class="d-flex justify-content-center">' + mensagem + '</p>' +
                    '</div>' +

                    '<div class="modal-footer">' +
                    '<a id="btnMensagemConfirmacao" href="#" class="bbtn btn-outline-primary btn-mobile">' + textoBotao + '</a>' +
                    '</div>' +
                    '</div ></div ></div > ');

                //$('#dayMensagens').remove();
                $('#page-content').append($dialog);
                $("#btnMensagemConfirmacao").attr('href', linkBotao);
                $('#dayMensagens').modal('show');

                setTimeout(function () {
                    DayLoader.hide();
                }, 100);
            }
        },
        mostraMensagem: function (titulo, mensagem) {
            if ($('#dayMensagens').length > 0) {
                $('#dayMensagensLabel').text(titulo);
                $('#dayMensagensBody').html('<p>' + mensagem + '</p>');
                $('#dayMensagens').modal('show');

                setTimeout(function () {
                    DayLoader.hide();
                }, 100);
            } else {
                var $dialog = $(
                    '<div class="modal fade" id="dayMensagens" tabindex="-1" role="dialog" aria-labelledby="dayMensagensLabel" style="overflow-y:visible">' +
                    '<div class="modal-dialog  modal-dialog-centered" role="document">' +
                    '<div class="modal-content">' +
                    '<div class="modal-header">' +
                    '<span class="line"></span>' +
                    '<h5 class="modal-title" id="dayMensagensLabel">' + titulo + '</h5>' +
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                    '    <span aria-hidden="true">&times;</span>' +
                    '</button>' +
                    '</div>' +
                    '<div class="modal-body" id="dayMensagensBody">' +
                    '<p>' + mensagem + '</p>' +
                    '</div>' +
                    '<div class="modal-footer">' +
                    '<a href="#" class="btn btn-outline-primary btn-mobile" data-dismiss="modal" aria-label="Close">Fechar</a>' +
                    '</div></div></div></div>');

                //$('#dayMensagens').remove();
                $('#page-content').append($dialog);
                $('#dayMensagens').modal('show');

                setTimeout(function () {
                    DayLoader.hide();
                }, 100);
            }
        },
        mostraMensagemAviso: function (titulo, mensagem) {
            if ($('#dayMensagens').length > 0) {
                $('#dayMensagensLabel').text(titulo);
                $('#dayMensagensBody').html('<p>' + mensagem + '</p>');
                $('#dayMensagens').modal('show');

                setTimeout(function () {
                    DayLoader.hide();
                }, 100);
            } else {
                var $dialog = $(
                    '<div class="modal fade" id="dayMensagens" tabindex="-1" role="dialog" aria-labelledby="dayMensagensLabel" style="overflow-y:visible">' +
                    '<div class="modal-dialog  modal-dialog-centered" role="document">' +
                    '<div class="modal-content">' +
                    '<div class="modal-header">' +
                    '<span class="line"></span>' +
                    '<h5 class="modal-title" id="dayMensagensLabel">Atenção</h5>' +
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                    '    <span aria-hidden="true">&times;</span>' +
                    '</button>' +
                    '</div>' +
                    '<div class="modal-body" id="dayMensagensBody">' +
                    '<i class="material-icons d-flex justify-content-center text-warning" style="font-size: 58px;">error_outline</i>' +
                    '<p class="text-center">' +
                    '<strong style="font-family: Muli-Bold, sans-serif; font-size: 16px; color: black;">' + titulo + '</strong>' +
                    '<br />' +
                    mensagem +
                    '</p>' +
                    '</div>' +
                    '<div class="modal-footer text-center border-0">' +
                    '<a href="#" class="btn btn-outline-primary btn-mobile" data-dismiss="modal" aria-label="Close">Voltar</a>' +
                    '</div></div></div></div>');

                $('#page-content').append($dialog);
                $('#dayMensagens').modal('show');

                setTimeout(function () {
                    DayLoader.hide();
                }, 100);
            }
        },
        mostraMensagemLogin: function (titulo, mensagem) {
            $("#dayMensagens").remove();

            var $dialog = $(
                '<div class="modal fade" id="dayMensagens" tabindex="-1" role="dialog" aria-labelledby="dayMensagensLabel" aria-hidden="true">' +
                ' <div class="modal-dialog  modal-dialog-centered" role="document">' +
                ' <div class="modal-content">' +
                '  <div class="modal-header">' +
                '    <span class="line"></span>' +
                '     <h5 class="modal-title" id="dayMensagensLabel">' + titulo + '</h5>' +
                '      <button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                '       <span aria-hidden="true">&times;</span>' +
                '      </button>' +
                '     </div>' +
                '   <div class="modal-body">' +
                '       <i class="material-icons d-flex justify-content-center">error_outline</i>' +
                '       <p class="d-flex justify-content-center">' + mensagem + '</p>' +
                '   </div>' +
                '<div class="modal-footer text-right">' +
                '<button class="btn btn-outline-primary btn-mobile" data-dismiss="modal" aria-label="Close">Fechar</button>' +
                ' </div>' +
                ' </div>' +
                '</div>' +
                '</div > ');

            $('#page-content').append($dialog);
            $('#dayMensagens').modal('show');

            setTimeout(function () {
                DayLoader.hide();
            }, 100);
        },
        mostraMensagemComBotao: function (titulo, mensagem, botao, semBtnSair) {
            if (typeof semBtnSair == 'undefined') semBtnSair = false;
            if ($('#dayMensagensConfirmacao').length > 0) {
                $('#dayMensagensConfirmacaoLabel').text(titulo);
                $('#dayMensagensConfirmacaoBody').html('<p>' + mensagem + '</p>');
                $('#dayMensagensConfirmacao').modal('show');

                setTimeout(function () {
                    DayLoader.hide();
                }, 100);
            } else {
                var $dialog = $(
                    '<div class="modal fade" id="dayMensagensConfirmacao" tabindex="-1" role="dialog" aria-labelledby="dayMensagensConfirmacaoLabel" style=" overflow-y:visible">' +
                    '<div class="modal-dialog  modal-dialog-centered" role="document">' +
                    '<div class="modal-content">' +
                    '<div class="modal-header">' +
                    '<span class="line"></span>' +
                    '<h5 class="modal-title" id="dayMensagensLabel">' + titulo + '</h5>' +
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                    '<span aria-hidden="true">&times;</span>' +
                    '</button>' +
                    '</div>' +

                    '<div class="modal-body" id="dayMensagensConfirmacaoBody">' +
                    '<p class="d-flex justify-content-center">' + mensagem + '</p>' +
                    '</div>' +


                    '<div class="modal-footer">' +
                    '<a id="btnMensagemConfirmacao" href="#" class="btn btn-outline-primary btn-mobile">OK</a>' +
                    '</div></div></div></div>');

                $('#page-content').append($dialog);
                $("#btnMensagemConfirmacao").attr('href', botao.href === undefined ? botao.attr('href') : botao.href);
                if (semBtnSair) {
                    $('button.close').remove();
                    $('#dayMensagensConfirmacao').modal({ backdrop: 'static', keyboard: false });
                }

                $('#dayMensagensConfirmacao').modal('show');

                setTimeout(function () {
                    DayLoader.hide();
                }, 100);
            }
        },
        mostrarMensagemPortalCustodia: function (portal) {

            var $dialog = $(                
                '<div class="modal fade bd-example-modal-xl"  id="portaCustodiaMensagem" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">' +
                '<div class="modal-dialog modal-xl">' +
                '<div class="modal-content">' +
                ' <div style="background-color:#191970;padding-top:40px;padding-bottom:90px;background-image:radial-gradient(closest-side at 50% 50%, #2C466E 0%, #0F295D 100%);">'+               
                '    <div style="text-align:center;padding-bottom:20px">                                                        '+
                '        <img src="..\\content\\images\\logo-dayconnect3.png">                                                  '+
                '  </div>                                                                                                       '+
                '        <p style="color:#A7F8FF;opacity: 1;text-align: center;font-size:30px;letter-spacing: 0px;font: normal normal 300 28px/34px Muli;">Prezado cliente, confira o horário de disponibilidade do Portal SMC Online</p>' +
                ' <div style="width:160px;border:1px solid #4F4F4F;margin-left:auto;margin-right:auto;margin-bottom:15px"> '+
                ' </div>'+
                '        <table style="margin-left:auto;margin-right:auto;">                                                    '+
                '            <thead>                                                                                            '+
                '                <th scope="col"></th>                                                                          '+
                '                <th scope="col"></th>                                                                          '+
                '            </thead>                                                                                           '+
                '            <tbody>                                                                                            '+
                '                <tr style="color:white;font: normal normal 300 18px/22px Muli;">                               '+
                '                    <td style="padding-right:20px;">'+portal.Periodos[0].Dia+'</td>                            '+
                '                    <td style="text-align:center">' + portal.Periodos[0].HorarioTela +'</td>  '+
                '                </tr>                                                                                          '+
                '                <tr style="color:white;font: normal normal 300 18px/22px Muli;">                               '+
                '                    <td>' + portal.Periodos[1].Dia +'</td>                                                     '+
                '                    <td style="text-align:center">' + portal.Periodos[1].HorarioTela +'</td>  '+
                '                </tr>                                                                                          '+
                '                <tr style="color:white;font: normal normal 300 18px/22px Muli;">                               '+
                '                    <td>' + portal.Periodos[2].Dia +'</td>                                                     '+
                '                    <td style="text-align:center">' + portal.Periodos[2].HorarioTela +'</td>  '+
                '                </tr>                                                                                          '+
                '                <tr style="color:white;font: normal normal 300 18px/22px Muli;">                               '+
                '                    <td>' + portal.Periodos[3].Dia +'</td>                                                     '+
                '                    <td style="text-align:center">' + portal.Periodos[3].HorarioTela +'</td>  '+
                '                </tr>                                                                                          '+
                '                <tr style="color:white;font: normal normal 300 18px/22px Muli;">                               '+
                '                    <td>' + portal.Periodos[4].Dia +'</td>                                                     '+
                '                    <td style="text-align:center">' + portal.Periodos[4].HorarioTela +'</td>  '+
                '                </tr>                                                                                          '+
                '                <tr style="color:white;font: normal normal 300 18px/22px Muli;">                               '+
                '                    <td>' + portal.Periodos[5].Dia +'</td>                                                     '+
                '                    <td style="text-align:center">' + portal.Periodos[5].HorarioTela +'</td>  '+
                '                </tr>                                                                                          '+
                '                <tr style="color:white;font: normal normal 300 18px/22px Muli;">                               '+
                '                    <td>' + portal.Periodos[6].Dia +'</td>                                                     '+
                '                    <td style="text-align:center">' + portal.Periodos[6].HorarioTela +'</td>'+
                '                </tr>'+
                '            </tbody>'+
                '        </table>'+
                '    </div>'+
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>'
            );

            $('#page-content').append($dialog);
            $('#portaCustodiaMensagem').modal('show');

            setTimeout(function () {
                DayLoader.hide();
            }, 100);

        },
        mostraMensagemConfirmacao: function (titulo, mensagem, botao) {
            if ($('#dayMensagensConfirmacao').length > 0) {
                $('#dayMensagensConfirmacaoLabel').text(titulo);
                $('#dayMensagensConfirmacaoBody').html('<p>' + mensagem + '</p>');
                $('#dayMensagensConfirmacao').modal('show');

                setTimeout(function () {
                    DayLoader.hide();
                }, 100);
            } else {
                var $dialog = $(
                    '<div class="modal fade" id="dayMensagensConfirmacao" tabindex="-1" role="dialog" aria-labelledby="dayMensagensConfirmacaoLabel" style=" overflow-y:visible">' +
                    '<div class="modal-dialog  modal-dialog-centered" role="document">' +
                    '<div class="modal-content">' +
                    '<div class="modal-header">' +
                    '<span class="line"></span>' +
                    '     <h5 class="modal-title" id="dayMensagensConfirmacaoLabel">' + titulo + '</h5>' +
                    '      <button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                    '       <span aria-hidden="true">&times;</span>' +
                    '      </button>' +
                    '</div>' +
                    '<div class="modal-body" id="dayMensagensConfirmacaoBody">' +
                    '<p >' + mensagem + '</p>' +
                    '</div>' +
                    '<div class="modal-footer">' +
                    '<a id="btnCancela" href="#" class="btn btn-outline-primary btn-mobile" data-dismiss="modal">Cancelar</a>' +
                    '<a id="btnConfirma" href="#" class="btn btn-outline-primary btn-mobile">Confirmar</a>' +
                    '</div></div></div></div>');

                $('#page-content').append($dialog);
                $("#btnConfirma").attr('href', botao.href === undefined ? botao.attr('href') : botao.href);
                $('#dayMensagensConfirmacao').modal('show');

                setTimeout(function () {
                    DayLoader.hide();
                }, 100);

                $(".modal-footer > a").click(function () {
                    var $botao = $("[id$='hfValue'");

                    if ($botao !== null && $botao !== undefined) {
                        var value = $(this).attr("id") === "btnCancela" ? "n" : "s";
                        $botao.val(value);
                    }
                });
            }
        },
        mostraMensagemConfirmacaoPersonalizado: function (titulo, mensagem, mensagemAdicional, botao, textoBotaoCancelar, textoBotaoConfirmar, maxWidth) {
            if ($('#dayMensagensConfirmacaoPersonalizado').length > 0) {
                $('#dayMensagensConfirmacaoPersonalizadoLabel').text(titulo);
                $('#dayMensagensConfirmacaoPersonalizadoBody').html('<p>' + mensagem + '</p><br />' + mensagemAdicional);
                $('#dayMensagensConfirmacaoPersonalizado').modal('show');

                setTimeout(function () {
                    DayLoader.hide();
                }, 100);
            } else {
                var btnConfirma = $("[id$='" + botao + "']");
                var cplBotao = (btnConfirma.length > 0 && btnConfirma[0].innerHTML !== undefined && btnConfirma[0].innerHTML.indexOf("delete")) ||
                    (botao.length > 0 && botao[0].innerHTML !== undefined && botao[0].innerHTML.indexOf("delete")) ? "Delete" : "";

                if (maxWidth === undefined || maxWidth === "") {
                    maxWidth = "430px";
                }

                var $dialog = $(
                    '<div class="modal fade" id="dayMensagensConfirmacaoPersonalizado" tabindex="-1" role="dialog" aria-labelledby="dayMensagensConfirmacaoPersonalizadoLabel" style=" overflow-y:visible">' +
                    '<div class="modal-dialog  modal-dialog-centered" role="document" style="max-width:' + maxWidth + ';">' +
                    '<div class="modal-content">' +
                    '<div class="modal-header">' +
                    '<span class="line"></span>' +
                    '<h5 class="modal-title" id="dayMensagensConfirmacaoPersonalizadoLabel">' + titulo + '</h5>' +
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                    '   <span aria-hidden="true">&times;</span>' +
                    '</button>' +
                    '</div>' +
                    '<div class="modal-body" id="dayMensagensConfirmacaoPersonalizadoBody" >' +
                    mensagem +
                    mensagemAdicional +
                    '</div>' +
                    '<div class="modal-footer" style="border: none;">' +

                    '<a id="btnCancela" href="#" class="btn btn-outline-primary btn-mobile" data-dismiss="modal">Cancelar</a>' +
                    '<a id="btnMensagemConfirma' + cplBotao + '" href="#" class="btn btn-primary btn-mobile ml-0 ml-lg-1">Confirmar</a>' +





                    '</div></div></div></div>');

                $('#page-content').append($dialog);

                $('#btnMensagemConfirma' + cplBotao).click(function () {
                    $('#dayMensagensConfirmacaoPersonalizado').modal('hide');
                    DayLoader.show();
                    if (btnConfirma.length > 0) {
                        btnConfirma.click();
                    }
                });

                setTimeout(function () {
                    DayLoader.hide();
                    $('#dayMensagensConfirmacaoPersonalizado').modal({ backdrop: 'static', keyboard: false, show: true });
                }, 100);
            }
        },
        mostraMensagemConfirmacaoSimNao: function (titulo, mensagem, mensagemAdicional, botaoSim, botaoNao) {

            if ($('#dayMensagensConfirmacaoSimNao').length > 0) {
                $('#dayMensagensConfirmacaoSimNaoLabel').text(titulo);
                $('#dayMensagensConfirmacaoSimNaoBody').html('<p>' + mensagem + '</p>');

                setTimeout(function () {
                    DayLoader.hide();
                    $('#dayMensagensConfirmacaoSimNao').modal({ backdrop: 'static', keyboard: false, show: true });
                }, 100);
            } else {


                var $dialog = $(
                    '<div class="modal fade" id="dayMensagensConfirmacaoSimNao" tabindex="-1" role="dialog" aria-labelledby="dayMensagensConfirmacaoSimNaoLabel" style="overflow-y:visible">' +
                    '<div class="modal-dialog  modal-dialog-centered" role="document">' +
                    '<div class="modal-content">' +
                    '<div class="modal-header">' +
                    '<span class="line"></span>' +
                    '<h5 class="modal-title" id="dayMensagensConfirmacaoSimNaoLabel">' + titulo + '</h5>' +
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                    '   <span aria-hidden="true">&times;</span>' +
                    '</button>' +
                    '</div>' +
                    '<div class="modal-body" id="dayMensagensConfirmacaoSimNaoBody">' +
                    '<p>' + mensagem + '</p>' +
                    mensagemAdicional +
                    '</div>' +
                    '<div class="modal-footer">' +
                    '<a id="btnMensagemConfirmacaoSim" href="#" class="btn btn-outline-primary btn-mobile" data-dismiss="modal">Sim</a>' +
                    '<a id="btnMensagemConfirmacaoNao" href="#" class="btn btn-outline-primary btn-mobile" data-dismiss="modal">Não</a>' +
                    '</div></div></div></div>');

                $('#page-content').append($dialog);

                var btnSim = $("[id$='" + botaoSim + "']");
                var btnNao = $("[id$='" + botaoNao + "']");

                $("#btnMensagemConfirmacaoSim").click(function () {
                    btnSim.click();
                });

                $("#btnMensagemConfirmacaoNao").click(function () {
                    btnNao.click();
                });

                setTimeout(function () {
                    DayLoader.hide();
                    $('#dayMensagensConfirmacaoSimNao').modal({ backdrop: 'static', keyboard: false, show: true });
                }, 100);
            }
        },
        mostraMensagemContador: function (titulo, mensagem) {
            if ($('#dayMensagensContador').length > 0) {
                $('#dayMensagensContadorLabel').text(titulo);
                $('#dayMensagensContadorBody').html('<i class="material-icons">error_outline</i><p class="text-center"><strong>' + titulo + '</strong></p><p class="text-center">' + mensagem + '</p><div class="boxContador"><p class="text-center contador">Tente novamente em:</br><span id="contadorId"></span></p></div>');
                $('#dayMensagensContador').modal('show');

                setTimeout(function () {
                    DayLoader.hide();
                }, 100);
            } else {
                var $dialog = $(
                    '<div class="modal fade" id="dayMensagensContador" tabindex="-1" role="dialog" aria-labelledby="dayMensagensLabel" aria-hidden="true">' +
                    ' <div class="modal-dialog  modal-dialog-centered" role="document">' +
                    ' <div class="modal-content">' +
                    '  <div class="modal-header">' +
                    '    <span class="line"></span>' +
                    '     <h5 class="modal-title" id="dayMensagensContadorLabel">Atenção</h5>' +
                    '      <button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                    '       <span aria-hidden="true">&times;</span>' +
                    '      </button>' +
                    '     </div>' +
                    '   <div class="modal-body d-flex flex-column justify-content-center" id="dayMensagensContadorBody">' +                    
                    '       <i class="material-icons">error_outline</i>' +
                    '       <p class="text-center"><strong>' + titulo + '</strong></p>' +
                    '       <p class="text-center">' + mensagem + '</p>' +
                    '       <div class="boxContador">' +
                    '           <p class="text-center contador">Tente novamente em: </br><span id="contadorId"></span></p>' +
                    '       </div>'  + 
                    '   </div>' +
                    '<div class="modal-footer d-flex flex-column justify-content-center">' +
                    '<button class="btn btn-outline-primary btn-mobile" data-dismiss="modal" aria-label="Close">Fechar</button>' +
                    ' </div>' +
                    ' </div>' +
                    '</div>' +
                    '</div > ');

                $('#page-content').append($dialog);
                $('#dayMensagensContador').modal('show');

                setTimeout(function () {
                    DayLoader.hide();
                }, 100);
            }
        },
        adicionarMensagemAviso: function (mensagem) {
            $mensagem += "<p>" + mensagem + "</p>";
        },
        apagarMensagemAviso: function (mensagem) {
            $mensagem = "";
        },
        verificaDesabilitarLoader: function () {
            if ($mensagem !== "") {
              
                $(".btnLoader").trigger("resetLoader");
                return true;
            }
            else
                return false;
        },
        verificarMensagemAviso: function () {
            if ($mensagem !== "") {
                DayMensagens.mostraMensagem("Verifique a solicitação.", $mensagem);
                $mensagem = "";
                return false;
            } else {
                return true;
            }
        },
        mensagem: function () {
            return $mensagem;
        },
    };
}());

var DayModal = DayModal || (function () {
    var modalSteak = new Array();
    var bindCloseEvent = true;

    return {
        show: function (titulo, tamanhoModal) {
          
            if ($('#dayModal').length > 0) {
                $('#dayModalLabel').text(titulo);
                $('#dayModal').modal('show');
            } else {
                console.log("entrou no método");
                /**
                    Tamanhos para o modal:
                    modal-sm =  Small Modal
                    modal-lg = Large Modal
                    modal-xl = Full Width Modal
                 **/
                if (!tamanhoModal ||
                    (tamanhoModal != 'modal-sm' &&
                    tamanhoModal != 'modal-lg' &&
                    tamanhoModal != 'modal-xl')) {
                    tamanhoModal = ""
                }

                var $dialog = $(
                    '<div class="modal fade" id="dayModal" tabindex="-1" role="dialog" aria-labelledby="dayModalLabel" style="overflow-y:visible">' +
                    '<div class="modal-dialog '+ tamanhoModal + ' modal-dialog-centered" role="document">' +
                    '<div class="modal-content">' +
                    '<div class="modal-header">' +
                    '<span class="line"></span>' +
                    '<h5 class="modal-title" id="dayModalLabel">' + titulo + '</h5>' +
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                    '<span aria-hidden="true">&times;</span>' +
                    '</button>' +
                    '</div>' +
                    '<div class="modal-body" id="dayModalBody" >' +
                    '</div>' +
                    '<div class="modal-footer">' +
                    '<a id="btnAbreImpressaoModal" href="#" class="btn btn-outline-primary-icon btn-mobile">            <i class="material-icons">print</i>Imprimir</a>' +
                    '<a href="#" class="btn btn-outline-primary btn-mobile" data-dismiss="modal">Fechar</a>' +
                    '</div></div></div></div>');

                $('#page-content').append($dialog);
                $('#dayModalBody').append($('#divConsultaModal'));
                $('#dayModal').modal('show');

                $("#btnAbreImpressaoModal").click(function () {
                    DayImpressao.print($("#divConsultaModal"));
                    return false;
                });
            }
        },
        showWithoutFooter: function (titulo, idModal, div, callbackOnClose) {
            if ($('#dayModal').length > 0) {
                $('#dayModalLabel').text(titulo);
                $('#dayModal').modal('show');
            } else {
                var $dialog = $(
                    '<div class="modal fade" id="' + idModal + '" tabindex="-1" role="dialog" aria-labelledby="dayModalLabel" style="overflow-y:visible">' +
                    '<div class="modal-dialog  modal-dialog-centered" role="document">' +
                    '<div class="modal-content">' +
                    '<div class="modal-header">' +
                    '<span class="line"></span>' +
                    '<h5 class="modal-title" id="dayModalLabel' + idModal + '">' + titulo + '</h5>' +
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                    '    <span aria-hidden="true">&times;</span>' +
                    '</button>' +
                    '</div>' +
                    '<div class="modal-body" id="dayModalBody' + idModal + '">' +
                    '</div>' +
                    '</div></div></div>');

                $('#page-content').append($dialog);
                $('#dayModalBody' + idModal).append($(div));
                var modalToShow = $('#' + idModal).modal('show');

                if (callbackOnClose !== undefined && callbackOnClose !== "") {
                    modalToShow.on("hide.bs.modal", function () {
                        callbackOnClose();
                    });
                }

                $("#btnAbreImpressaoModal").click(function () {
                    DayImpressao.print($("#divConsultaModal"));
                    return false;
                });
            }
        },
        getModal: function (titulo, div, modalBodyBackGroundColor, maxWidth, divPai) {
            if (modalBodyBackGroundColor === undefined) {
                modalBodyBackGroundColor = "#fff";
            }
            if (!divPai) {

                divPai = "#page-content";
            }
            if (maxWidth === undefined) {
                maxWidth = "modal-lg";
            }
            /**    
             *     Tamanhos para o modal 
            modal-sm =  Small Modal
			modal-lg = Large Modal
			modal-xl = Full Width Modal
             **/
            var $dialog = $(
                '<div class="modal fade" id="dayModal' + modalSteak.length + '" tabindex="-1" role="dialog" aria-labelledby="dayModalLabel" style="overflow-y:visible">' +
                '<div class="modal-dialog ' + maxWidth + ' modal-dialog-centered" role="document">' +
                '<div class="modal-content" >' +
                '<div class="modal-header">' +
                '    <span class="line"></span>' +
                '     <h5 class="modal-title" id="dayModalLabel' + modalSteak.length + '">' + titulo + '</h5>' +
                '      <button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                '       <span aria-hidden="true">&times;</span>' +
                '      </button>' +
                '</div>' +
                '<div class="modal-body" id="dayModalBody' + modalSteak.length + '" style="background-color:' + modalBodyBackGroundColor + '" >' +
                '</div>' +
                '</div></div></div>');

            $(divPai).append($dialog);
            $("#dayModalBody" + modalSteak.length).append($(div));

            return $("#dayModal" + modalSteak.length).modal('hide');
        },
        addModal: function (titulo, div, modalBodyBackGroundColor, callbackOnClose, maxWidth, divPai) {
            var modalToShow = DayModal.getModal(titulo, div, modalBodyBackGroundColor, maxWidth, divPai);
            if (callbackOnClose !== undefined && callbackOnClose !== "") {
                bindCloseEvent = false;
                modalToShow.on("hide.bs.modal", function () {
                    callbackOnClose();
                });
            }
            console.log("modalSteak.length > 0 && bindCloseEvent")

            if (modalSteak.length > 0 && bindCloseEvent) {
                
                var modalAnterior = $(modalSteak).get(modalSteak.length - 1);
                modalAnterior.on("hide.bs.modal", function () {
                    
                    modalToShow.modal('show');
                });
            }

            modalSteak.push(modalToShow);
        },
        showModals: function () {
            if (modalSteak.length > 0) {
                var modalToShow = modalSteak.shift();
                modalToShow.modal('show');
            }
        },
        showModal: function (titulo, div, divPai) {
            var $dialog = $(
                '<div class="modal fade" id="dayModal" tabindex="-1" role="dialog" aria-labelledby="dayModalLabel" style="overflow-y:visible">' +
                '<div class="modal-dialog modal-md modal-dialog-centered" role="document">' +
                '<div class="modal-content" >' +
                '<div class="modal-header">' +
                '    <span class="line"></span>' +
                '     <h5 class="modal-title" id="dayModalLabel">' + titulo + '</h5>' +
                '      <button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                '       <span aria-hidden="true">&times;</span>' +
                '      </button>' +
                '</div>' +
                '<div class="modal-body" id="dayModalBody" style="background-color: #fff" >' +
                '</div>' +
                '</div></div></div>');

            $(divPai).append($dialog);
            $("#dayModalBody").append($(div));

            
                $('[id*=modalLoader]').hide();
            
            
            var modal = $("#dayModal").modal('show');
            modal.on("hide.bs.modal", function () {
                $('#dayModal').remove();
            });
        }
    };
}());

var DayLoader = DayLoader || (function () {
    return {
        show: function () {

            if ($('#modalLoader').length > 0) {
                $('#modalLoader').modal('show');
            } else {
                var $dialog = $(
                    '<div class="modal" id="modalLoader" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true"  style="overflow-y:visible">' +
                    '<div class="modal-dialog  modal-dialog-centered" style="max-width:250px">' +
                    '<div class="modal-content">' +
                    '<div class="modal-header">' +
                    '<h4 style="margin:0;">Carregando...</h4>' +
                    '</div>' +
                    '<div class="modal-body">' +
                    '<div class="progress progress-striped active" style="margin-bottom:0; width: 100% !important; z-index: 9001;">' +
                    '<div class="progress-bar" style="width: 100% !important;"></div>' +
                    '</div></div></div></div></div>');

                $('#page-content').append($dialog);
                $('#modalLoader').modal('show');
            }
        },
        hide: function () {
            if ($('#modalLoader').length > 0) {
                $('#modalLoader').modal('hide');
            }
        }
    };
}());

function ativaBtnLoader(botao) {
    var $botao = botao;

    //Se for um botão, altera o html
    if ($(botao).html() !== "") {
	    var loadingText = '<i class="fa fa-circle-o-notch fa-spin"></i> carregando...';
	    $botao.data('original-text', $(botao).html());
	    $botao.html(loadingText);
    }
    //Se for um input, altera o val
    else if ($(botao).val() !== "") {
        var loadingText = 'Carregando...';
	    $botao.data('original-text', $(botao).val());
        $botao.val(loadingText);
    }

    $botao.css({ opacity: 0.5 });
    $('.layerBlockScreen').show();
    $('body').attr('style', 'overflow:hidden');
}

function desativaBtnLoader(botao) {
    var $botao = botao;

    if ($(botao).html() !== "" && $botao.data('original-text') !== undefined) {
	    $botao.html($botao.data('original-text'));
    }
    else if ($(botao).val() !== "" && $botao.data('original-text') !== undefined) {
	    $botao.val($botao.data('original-text'));
    }

	$botao.css({ opacity: 1 });
	$('.layerBlockScreen').hide();
	$('body').removeAttr('style');
}

//adiciona o loader no botão, para ter o comportamento basta inserir a class .btnLoader em qualquer botão
$(document).ready(function () {
    $('.btnLoader').on('click', function () {
        var $this = $(this);
        ativaBtnLoader($this);
        //para chamar o reset do botão , execute  $(".btnLoader").trigger( "resetLoader" );
        $this.on('resetLoader', function () {
            desativaBtnLoader($this);
        })       
    });
})

//Função do loader no botão para ser usada em páginas que tenham chamadas do e.stopPropagation() ou e.stopImmediatePropagation()
var BtnLoader = BtnLoader || (function () {
	return {
		show: function (botao) {
            ativaBtnLoader(botao);
		},
		hide: function (botao) {     
			desativaBtnLoader(botao);
		}
	};
}());