var _this = this;
this.handleClickPesquisar = function () {
    var cpfCnpj = this.ui.get("CpfCnpjPesquisaEdit").getData();

    //Retira mascara
    cpfCnpj = cpfCnpj.match(/\d/g).join("");

    if (cpfCnpj.length < 11 ||(cpfCnpj.length > 11 && cpfCnpj.length < 14)) {
        _this.ui.get("modalAtencao").show();
        _this.ui.get("modalAtencao").setText("<li>Favor preencher corretamente o campo CPF/CNPJ</li>");
        return false;
    }

    if (cpfCnpj.length == 14) {
        _this.validarCNPJ(cpfCnpj);
        if (_this.validarCNPJ(cpfCnpj) == false ){
            _this.ui.get("modalAtencao").show();
            _this.ui.get("modalAtencao").setText("<li><b>CNPJ</b> informado não é válido!</li>");
        }
    }else if (cpfCnpj.length == 11){
        _this.validarCPF(cpfCnpj);
        if (_this.validarCPF(cpfCnpj) == false ){
            _this.ui.get("modalAtencao").show();
            _this.ui.get("modalAtencao").setText("<li><b>CPF</b> informado não é válido!</li>");
        }
    }
    var service = this.ui.get("serviceListaDadosDoCliente");
    service.execute(cpfCnpj);
}

this.pesquisarResult = function(data) {
    if (data != null && !!data.nomeCliente) {
        //preencher os campos text
        _this.ui.get("CpfCnpjPesquisaEdit").setData(data.numeroCPFCNPJ);
        _this.ui.get("nomeDoClientePesquisaEdit").setData(data.nomeCliente);
        _this.ui.get("gerentePesquisaEdit").setData(data.nomeGerente);
        _this.ui.get("grupoEconomicoPesquisaEdit").setData(data.nomeGrupoEconomico);
        _this.ui.get("segmentoPesquisaEdit").setData(data.nomeSegmento);
        _this.ui.get("plataformaPesquisaEdit").setData(data.nomePlataforma);

        //preencher os campos output
        _this.ui.get("CpfCnpjPesquisaOutTxt").setData(data.numeroCPFCNPJ);
        _this.ui.get("nomeDoClientePesquisaOutTxt").setData(data.nomeCliente);
        _this.ui.get("gerentePesquisaOutTxt").setData(data.nomeGerente);
        _this.ui.get("grupoEconomicoPesquisaOutTxt").setData(data.nomeGrupoEconomico);
        _this.ui.get("segmentoPesquisaOutTxt").setData(data.nomeSegmento);
        _this.ui.get("plataformaPesquisaOutTxt").setData(data.nomePlataforma);

        //esconder os campos text
        _this.ui.get("pesquisaEdit").setVisible(false,true);

        //mostrar os campos output
        _this.ui.get("pesquisaOutTxt").setVisible(true,false);

        //Configurar preenchimento manual
        _this.context.options.preenchimentoManual.set("value", false);
    } else {
        //liberar os campos text
        _this.ui.get("CpfCnpjPesquisaEdit").setEnabled(false);
        _this.ui.get("nomeDoClientePesquisaEdit").setEnabled(true);
        _this.ui.get("gerentePesquisaEdit").setEnabled(true);
        _this.ui.get("grupoEconomicoPesquisaEdit").setEnabled(true);
        _this.ui.get("segmentoPesquisaEdit").setEnabled(true);
        _this.ui.get("plataformaPesquisaEdit").setEnabled(true);



        //Configurar preenchimento manual
        _this.context.options.preenchimentoManual.set("value", true);
    }
}

this.pesquisarResultError = function () {
    console.log("erro");
}

this.handleClickLimpar = function() {
    //Configurar preenchimento manual
    _this.context.options.preenchimentoManual.set("value", false);

    //preencher os campos text
    _this.ui.get("CpfCnpjPesquisaEdit").setData("");
    _this.ui.get("nomeDoClientePesquisaEdit").setData("");
    _this.ui.get("gerentePesquisaEdit").setData("");
    _this.ui.get("grupoEconomicoPesquisaEdit").setData("");
    _this.ui.get("segmentoPesquisaEdit").setData("");
    _this.ui.get("plataformaPesquisaEdit").setData("");


    //preencher os campos output
    _this.ui.get("CpfCnpjPesquisaOutTxt").setData("");
    _this.ui.get("nomeDoClientePesquisaOutTxt").setData("");
    _this.ui.get("gerentePesquisaOutTxt").setData("");
    _this.ui.get("grupoEconomicoPesquisaOutTxt").setData("");
    _this.ui.get("segmentoPesquisaOutTxt").setData("");
    _this.ui.get("plataformaPesquisaOutTxt").setData("");

    //esconder os campos text
    _this.ui.get("pesquisaEdit").setVisible(true,false);
    _this.ui.get("nomeDoClientePesquisaEdit").setEnabled(false);
    _this.ui.get("gerentePesquisaEdit").setEnabled(false);
    _this.ui.get("grupoEconomicoPesquisaEdit").setEnabled(false);
    _this.ui.get("segmentoPesquisaEdit").setEnabled(false);
    _this.ui.get("plataformaPesquisaEdit").setEnabled(false);


    //mostrar os campos output
    _this.ui.get("pesquisaOutTxt").setVisible(false,true);

    _this.ui.get("CpfCnpjPesquisaEdit").focus();
}

this.cpfCnpjOnBlur = function() {
    /*if(me.getData() != "" || me.getData() != null){
       if (me.getData().length > 0 && me.getData().length != 14) {
           ${modalAtencao}.show();
           ${modalAtencao}.setText("<li>O campo CNPJ deve conter 14 números</li>");
           return false;
       }
    }*/
}

this.pesquisarClienteLoad = function() {
    if (_this.context.options.preenchimentoManual
        && _this.context.options.preenchimentoManual.get("value")
        && _this.ui.get("nomeDoClientePesquisaEdit").getData().length > 0 ) {
        //liberar os campos text
        _this.ui.get("pesquisaEdit").setVisible(true,false);
        _this.ui.get("nomeDoClientePesquisaEdit").setEnabled(true);
        _this.ui.get("gerentePesquisaEdit").setEnabled(true);
        _this.ui.get("grupoEconomicoPesquisaEdit").setEnabled(true);
        _this.ui.get("segmentoPesquisaEdit").setEnabled(true);
        _this.ui.get("plataformaPesquisaEdit").setEnabled(true);

        _this.ui.get("pesquisaOutTxt").setVisible(false,true);
    } else if (_this.context.options.preenchimentoManual
        && _this.context.options.preenchimentoManual.get("value") == false
        && _this.ui.get("nomeDoClientePesquisaEdit").getData().length == 0) {

        _this.handleClickLimpar();
    } else {
        _this.ui.get("pesquisaOutTxt").setVisible(true,false);
        _this.ui.get("pesquisaEdit").setVisible(false,true);
    }
}

this.validarCNPJ = function(cnpj) {
    if(cnpj == '')
        return false;
    if (cnpj.length != 14)
        return false;
    if (cnpj == "00000000000000" ||
        cnpj == "11111111111111" ||
        cnpj == "22222222222222" ||
        cnpj == "33333333333333" ||
        cnpj == "44444444444444" ||
        cnpj == "55555555555555" ||
        cnpj == "66666666666666" ||
        cnpj == "77777777777777" ||
        cnpj == "88888888888888" ||
        cnpj == "99999999999999")
        return false;
    var tamanho = cnpj.length - 2;
    var numeros = cnpj.substring(0,tamanho);
    var digitos = cnpj.substring(tamanho);
    var soma = 0;
    var pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
        return false;
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (var i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
        return false;

    return true;
}

this.validarCPF = function(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF == "00000000000") return false;

    for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}

//this.validarcpfCNPJ = function(cpfCnpj) {
//    if(cpfCnpj == 14 || cpfCnpj == 11){
//    }
//}

