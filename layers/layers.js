var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_WorldImagery_1 = new ol.layer.Tile({
            'title': 'World Imagery',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_batasanakpetakpadekanmalang_2 = new ol.format.GeoJSON();
var features_batasanakpetakpadekanmalang_2 = format_batasanakpetakpadekanmalang_2.readFeatures(json_batasanakpetakpadekanmalang_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batasanakpetakpadekanmalang_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batasanakpetakpadekanmalang_2.addFeatures(features_batasanakpetakpadekanmalang_2);
var lyr_batasanakpetakpadekanmalang_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batasanakpetakpadekanmalang_2, 
                style: style_batasanakpetakpadekanmalang_2,
                popuplayertitle: 'batas anak petak padekanmalang',
                interactive: true,
                title: '<img src="styles/legend/batasanakpetakpadekanmalang_2.png" /> batas anak petak padekanmalang'
            });
var format_KHDTK_Gabung1_3 = new ol.format.GeoJSON();
var features_KHDTK_Gabung1_3 = format_KHDTK_Gabung1_3.readFeatures(json_KHDTK_Gabung1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KHDTK_Gabung1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KHDTK_Gabung1_3.addFeatures(features_KHDTK_Gabung1_3);
var lyr_KHDTK_Gabung1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KHDTK_Gabung1_3, 
                style: style_KHDTK_Gabung1_3,
                popuplayertitle: 'KHDTK_Gabung1',
                interactive: true,
                title: 'KHDTK_Gabung1'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_WorldImagery_1.setVisible(true);lyr_batasanakpetakpadekanmalang_2.setVisible(true);lyr_KHDTK_Gabung1_3.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_WorldImagery_1,lyr_batasanakpetakpadekanmalang_2,lyr_KHDTK_Gabung1_3];
lyr_batasanakpetakpadekanmalang_2.set('fieldAliases', {'Id': 'Id', 'petak': 'petak', });
lyr_KHDTK_Gabung1_3.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'Id': 'Id', 'Nama': 'Nama', 'OBJECTID': 'OBJECTID', 'Lokasi_1': 'Letak', 'LokasiKawa': 'Kawasan', 'Koordina_1': 'Koordinat', 'Luas': 'Luas', 'SK_1': 'SK', 'Foto': 'Foto', 'Peta': 'Peta', 'Nama_KHDTK': 'Alamat GMaps', 'auxiliary_storage_labeling_predefinedpositionorder': 'auxiliary_storage_labeling_predefinedpositionorder', 'auxiliary_storage_labeling_offsetquad': 'auxiliary_storage_labeling_offsetquad', });
lyr_batasanakpetakpadekanmalang_2.set('fieldImages', {'Id': 'TextEdit', 'petak': 'Hidden', });
lyr_KHDTK_Gabung1_3.set('fieldImages', {'OBJECTID_1': 'Hidden', 'Id': 'Hidden', 'Nama': 'TextEdit', 'OBJECTID': 'Hidden', 'Lokasi_1': 'TextEdit', 'LokasiKawa': 'Hidden', 'Koordina_1': 'Hidden', 'Luas': 'TextEdit', 'SK_1': 'Hidden', 'Foto': 'ExternalResource', 'Peta': 'Hidden', 'Nama_KHDTK': 'TextEdit', 'auxiliary_storage_labeling_predefinedpositionorder': 'TextEdit', 'auxiliary_storage_labeling_offsetquad': 'TextEdit', });
lyr_batasanakpetakpadekanmalang_2.set('fieldLabels', {'Id': 'inline label - always visible', });
lyr_KHDTK_Gabung1_3.set('fieldLabels', {'Nama': 'inline label - always visible', 'Lokasi_1': 'inline label - always visible', 'Luas': 'inline label - always visible', 'Foto': 'inline label - always visible', 'Nama_KHDTK': 'inline label - visible with data', 'auxiliary_storage_labeling_predefinedpositionorder': 'no label', 'auxiliary_storage_labeling_offsetquad': 'no label', });
lyr_KHDTK_Gabung1_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});