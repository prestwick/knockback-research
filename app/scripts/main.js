/*global $, document, io, ko, modelModule, viewModelModule*/

$(document).ready(function () {
    'use strict';
    var socket = io.connect('http://localhost:1337'),
        numericInput = $('#numeric1'),
        rateSlider = $('#slider1'),
        gauge1 = $('#gauge1'),
        gauge2 = $('#gauge2'),
        mm = modelModule,
        vmm = viewModelModule,
        guage1ViewModel,
        guage2ViewModel,
        rateSliderViewModel,
        numericInputViewModel;
        
//setup View Models
    guage1ViewModel = new vmm.GuageViewModel(mm.gaugeModelOne);
    guage2ViewModel = new vmm.GuageViewModel(mm.gaugeModelTwo);
    rateSliderViewModel = new vmm.SliderViewModel(mm.sliderModel);
    numericInputViewModel = new vmm.NumericInputViewModel(mm.numericInputModel);
    
//bind ViewModels to View
    ko.applyBindings(guage1ViewModel, gauge1[0]);
    ko.applyBindings(guage2ViewModel, gauge2[0]);
    ko.applyBindings(rateSliderViewModel, rateSlider[0]);
    ko.applyBindings(numericInputViewModel, numericInput[0]);
    
    
//setup event handlers on view
    rateSlider.on('slideEnd', function (event) {
        var value = event.args.value;
        socket.emit('runtime-data-direction-b', {rate: value});
    });
    
//websocket implementation
    socket.on('runtime-data-direction-a', function (data) {
        mm.gaugeModelOne.set({'value': data[0].value});
        //mm.gaugeModelOne.attributes.updateVal(data[0].value);
        mm.gaugeModelTwo.set({'value': data[1].value});
        mm.numericInputModel.set({'value': data[2].value});
    });
});