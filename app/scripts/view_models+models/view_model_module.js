/*global kb*/
/*jshint unused: false */
    
// In this module there is one view model constructor for each type of widget. 
var viewModelModule = (function () {
    'use strict';
    var GuageViewModel = function (model) {
            this.value = kb.observable(model, 'value');
            this.min = kb.observable(model, 'min');
            this.max = kb.observable(model, 'max');
            this.disabled = kb.observable(model, 'disabled');
        },
        NumericInputViewModel = function (model) {
            this.value = kb.observable(model, 'value');
            this.disabled = kb.observable(model, 'disabled');
        },
        SliderViewModel = function (model) {
            this.value = kb.observable(model, 'value');
            this.min = kb.observable(model, 'min');
            this.max = kb.observable(model, 'max');
            this.disabled = kb.observable(model, 'disabled');
        };
    return {
        GuageViewModel: GuageViewModel,
        NumericInputViewModel: NumericInputViewModel,
        SliderViewModel: SliderViewModel
    };
}());