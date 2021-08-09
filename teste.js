var _mostrarAlert = false;
var _tipoPessoa = $ { ssTipoCliente }.getSelectedItem();
var _relacionamento = $ { cbTipoRelacionamento }.getSelectedItems();
var _waiver = $ { rbWaiver }.getSelectedItem();
var _diasWaiver = $ { txtDiasWaiver }.getData();
var _idPlataforma = "";
var _nomeGerente = $ { CV_Pesquisa_Cliente1 / gerentePesquisaEdit }.getData();
var _nomeGrupo = $ { CV_Pesquisa_Cliente1 / grupoEconomicoPesquisaEdit }.getData();

var documentos1 = $ { Controle_de_Anexos1 / sdt_obter_anexos }.getData().items.length;
console.log("documentos");
console.log(documentos1);
var documentos2 = $ { Controle_de_Anexos2 / sdt_obter_anexos }.getData().items.length;
console.log("documentos2");
console.log(documentos2);
var _mensagem = "Dados pendentes: ";
var _retorno = true;
console.log(this.context);
console.log("_tipoPessoa: " + _tipoPessoa);
console.log("_relacionamento: " + _relacionamento);
console.log("_waiver: " + _waiver);
console.log("_diasWaiver: " + _diasWaiver);

//console.log("_idPlataforma: " + _idPlataforma);

if (_nomeGerente == "" || _nomeGerente == null) {
    _retorno = false;
    _mostrarAlert = true;
    _mensagem += "Preencha o nome do Gerente de Acordo com o CADU, ";
}

if (_nomeGrupo == "" || _nomeGrupo == null) {
    _retorno = false;
    _mostrarAlert = true;
    _mensagem += "Preencha o nome do Grupo Econômico  de Acordo com o CADU, ";
}

if (_tipoPessoa == "" || _tipoPessoa == null) {
    _retorno = false;
    _mostrarAlert = true;
    _mensagem += "Tipo de Cliente, ";
}
if (_relacionamento == "" || _relacionamento == null) {
    _retorno = false;
    _mostrarAlert = true;
    _mensagem += "Tipo de Relacionamento, ";
}
if (_waiver == "" || _waiver == null) {
    _retorno = false;
    _mostrarAlert = true;
    _mensagem += "Waiver, ";
}

if (_waiver != "Sim") {
    if (_mostrarAlert == true) {
        _mensagem = _mensagem.substring(0, _mensagem.length - 2);
        console.log(_mensagem);

        $ { Data1 }.setData(_mensagem);

        $ { Modal_Alert1 }.setVisible(true);
        return _retorno;
    }
}

if (_tipoPessoa == "Pessoa Física" && _relacionamento.indexOf("Cliente") != -1) {
    console.log("Entrei");
    console.log($ { Controle_de_Anexos1 / sdt_obter_anexos }.getData());
    if (documentos1 <= 0) {
        console.log("Entrei 2");

        //	alert(_mensagem);
        //	return false;
        _retorno = false;
        _mostrarAlert = true;
        _mensagem += "<li>" + "Insira os documentos ficha Cadastral preenchido e assinado ,  " + "</li>";
        _mensagem += "<li>" + "documento de identificação  e Comprovante de Endereço" + "</li>";
        _mensagem += "<li>" + " E Clique no icone de lapis do anexo para classificar os documentos" + "</li>";
    }
} else if (_tipoPessoa == "Pessoa Física" && _relacionamento.indexOf("Avalista") != -1) {
    console.log("Entrei");
    console.log($ { Controle_de_Anexos1 / sdt_obter_anexos }.getData());
    if (documentos1 <= 0) {
        console.log("Entrei 2");

        //	alert(_mensagem);
        //	return false;
        _retorno = false;
        _mostrarAlert = true;
        _mensagem += "<li>" + "Insira o documento de ficha Cadastral preenchido e Assinado " + "</li>";
        _mensagem += "<li>" + " E Clique no icone de lapis do anexo para classificar o documento" + "</li>";
    }
} else if (_tipoPessoa == "Pessoa Jurídica" && _relacionamento.indexOf("Cliente") != -1) {
    console.log("Entrei");
    console.log($ { Controle_de_Anexos2 / sdt_obter_anexos }.getData());
    if (documentos2 <= 0) {
        console.log("Entrei 2");

        //	alert(_mensagem);
        //	return false;
        _retorno = false;
        _mostrarAlert = true;
        _mensagem += "<li>" + "Insira o documento de ficha Cadastral preenchido e assinado " + "</li>";
        _mensagem += "<li>" + "Comprovante de Endereço/Cartão CNPJ " + "</li>";
        _mensagem += "<li>" + " E Clique no icone de lapis do anexo para classificar os documentos" + "</li>";
    }
} else if (_tipoPessoa == "Pessoa Jurídica" && _relacionamento.indexOf("Avalista") != -1) {
    console.log("Entrei");
    console.log($ { Controle_de_Anexos2 / sdt_obter_anexos }.getData());
    if (documentos2 <= 0) {
        console.log("Entrei 2");

        //	alert(_mensagem);
        //	return false;
        _retorno = false;
        _mostrarAlert = true;
        _mensagem += "<li>" + "Insira o documento de ficha Cadastral preenchido e assinado " + "</li>";
        _mensagem += "<li>" + " E Clique no icone de lapis do anexo para classificar os documentos" + "</li>";
    }
} else if (_tipoPessoa == "Pessoa Jurídica" && _relacionamento.indexOf("Terceiro/Garantidor") != -1) {
    console.log("Entrei");
    console.log($ { Controle_de_Anexos2 / sdt_obter_anexos }.getData());
    if (documentos2 <= 0) {
        console.log("Entrei 2");

        //	alert(_mensagem);
        //	return false;
        _retorno = false;
        _mostrarAlert = true;
        _mensagem += "<li>" + "Insira o documento Cartão CNPJ" + "</li>";
        _mensagem += "<li>" + " E Clique no icone de lapis do anexo para classificar os documentos" + "</li>";
    }
}

var documentos = $ { Controle_de_Anexos1 / sdt_obter_anexos }.getRecords();

var documentos0 = $ { Controle_de_Anexos2 / sdt_obter_anexos }.getRecords();


if (documentos.length > 0) {
    for (var i = 0; i < documentos.length; i++) {

        if (documentos[i].classificacao == "") {
            _retorno = false;
            _mostrarAlert = true;
            _mensagem += "<li>" + " Existe documentos sem classificação" + "</li>";
            _mensagem += "<li>" + "  Clique no icone de lapis do anexo para classificar os documentos" + "</li>";

        }
    }
} else if (documentos0.length > 0) {
    for (var i = 0; i < documentos0.length; i++) {

        if (documentos0[i].classificacao == "") {
            _retorno = false;
            _mostrarAlert = true;
            _mensagem += "<li>" + " Existe documento sem classificação" + "</li>";
            _mensagem += "<li>" + "  Clique no icone de lapis do anexo para classificar os documento" + "</li>";

        }
    }
}


if (_mostrarAlert == true) {
    _mensagem = _mensagem.substring(0, _mensagem.length - 2);
    console.log(_mensagem);

    $ { Data1 }.setData(_mensagem);

    $ { Modal_Alert1 }.setVisible(true);
    return _retorno;
}



//Validar campos preenchidos


//_mensagem = "Dados Incompletos: ";