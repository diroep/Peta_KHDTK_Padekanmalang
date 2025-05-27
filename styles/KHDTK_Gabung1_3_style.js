var size = 0;
var placement = 'point';

var style_KHDTK_Gabung1_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("''");
    var labelFont = "13.0px \'Arial Black\', sans-serif";
    var labelFill = "#cb4416";
    var bufferColor = "#fafafa";
    var bufferWidth = 3.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("Nama") !== null) {
        labelText = String(feature.get("Nama"));
    }
    
    var style = [ new ol.style.Style({
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor, bufferWidth)
    })];;

    return style;
};
