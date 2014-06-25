/*global $, document, ko, modelModule, viewModelModule, socketModule*/
$(document).ready(function () {
    'use strict';
    var socket = socketModule.socket,
        numericInput = $('#numeric1'),
        rateSlider = $('#slider1'),
        gauge1 = $('#gauge1'),
        gauge2 = $('#gauge2'),
        linearGauge = $('#linearGauge'),
        mm = modelModule,
        vmm = viewModelModule,
        gauge1ViewModel,
        gauge2ViewModel,
        linearGaugeViewModel,
        rateSliderViewModel,
        numericInputViewModel;
        
//setup View Models
    gauge1ViewModel = new vmm.GaugeViewModel(mm.gaugeModelOne);
    gauge2ViewModel = new vmm.GaugeViewModel(mm.gaugeModelTwo);
    linearGaugeViewModel = new vmm.GaugeViewModel(mm.gaugeModelOne);
    rateSliderViewModel = new vmm.SliderViewModel(mm.sliderModel);
    numericInputViewModel = new vmm.NumericInputViewModel(mm.numericInputModel);
    
//bind ViewModels to View
    ko.applyBindings(gauge1ViewModel, gauge1[0]);
    ko.applyBindings(gauge2ViewModel, gauge2[0]);
    ko.applyBindings(linearGaugeViewModel, linearGauge[0]);
    ko.applyBindings(rateSliderViewModel, rateSlider[0]);
    ko.applyBindings(numericInputViewModel, numericInput[0]);
    
//update models with incoming Web socket data
    socket.on('runtime-data-direction-a', function (data) {
        mm.gaugeModelOne.set({'value': data[0].value});
        mm.gaugeModelTwo.set({'value': data[1].value});
        mm.numericInputModel.set({'value': data[2].value});
    });
});