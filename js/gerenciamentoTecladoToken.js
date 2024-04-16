
function validarNumeroTeclas(e) {    
  
    var btnTeclaId = e.attr('data-id');   
    if ($('[id$=hFieldTokenHash]').val().length < 6) {
        $('[id$=hFieldTokenHash]').val($('[id$=hFieldTokenHash]').val() + '•');
        var controleTexto = $('[id$=' + $('[id$=ClientIDText]').val() + ']');
        controleTexto.attr("value", $('[id$=hFieldTokenHash]').val());     
        var clientID = $('[id$=ClientIDTeclado]').val();    
        var itemValue = getValue("#" + clientID + "_hashclickvalue");
        if (itemValue == "")
            itemValue = "[]";
        var teclaPrecionada = JSON.parse(itemValue);
        teclaPrecionada.push(btnTeclaId);      
        setValue("#" + clientID + "_hashclickvalue", JSON.stringify(teclaPrecionada));
        if ($('[id$=hFieldTokenHash]').val().length === 6) {
            $('[id$=habilitarBotão]').click();
        }
    }
    else {
        return false;
    }
}

function teclaMouseDown(event) {
  
    if ($('[id$=hFieldTokenHash]').val().length < 6) {
        event.removeClass('btnTeclaToken');
        event.addClass('btnTeclaTokenClick');
    }
}
function teclaMouseUP(event) {
   
    if ($('[id$=hFieldTokenHash]').val().length < 6) {
        event.addClass('btnTeclaToken');
        event.removeClass('btnTeclaTokenClick');
    }

 

}
function getValue(cname) {
    return $(cname).val();
}

function setValue(cname, cvalue) {

    $(cname).val(cvalue);
}

function deleteValue(name) {
    $(cname).val("[]");
}