ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([110.617977, -8.242948, 110.890751, -8.089771]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Kec_Girisubo_1 = new ol.format.GeoJSON();
var features_Kec_Girisubo_1 = format_Kec_Girisubo_1.readFeatures(json_Kec_Girisubo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Kec_Girisubo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kec_Girisubo_1.addFeatures(features_Kec_Girisubo_1);
var lyr_Kec_Girisubo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kec_Girisubo_1, 
                style: style_Kec_Girisubo_1,
                popuplayertitle: 'Kec_Girisubo',
                interactive: true,
    title: 'Kec_Girisubo<br />\
    <img src="styles/legend/Kec_Girisubo_1_0.png" /> Balong<br />\
    <img src="styles/legend/Kec_Girisubo_1_1.png" /> Jepitu<br />\
    <img src="styles/legend/Kec_Girisubo_1_2.png" /> Jerukwudel<br />\
    <img src="styles/legend/Kec_Girisubo_1_3.png" /> Karangawen<br />\
    <img src="styles/legend/Kec_Girisubo_1_4.png" /> Nglindur<br />\
    <img src="styles/legend/Kec_Girisubo_1_5.png" /> Pucung<br />\
    <img src="styles/legend/Kec_Girisubo_1_6.png" /> Songbanyu<br />\
    <img src="styles/legend/Kec_Girisubo_1_7.png" /> Tileng<br />\
    <img src="styles/legend/Kec_Girisubo_1_8.png" /> <br />' });
var format_Jalan_2 = new ol.format.GeoJSON();
var features_Jalan_2 = format_Jalan_2.readFeatures(json_Jalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Jalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_2.addFeatures(features_Jalan_2);
var lyr_Jalan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_2, 
                style: style_Jalan_2,
                popuplayertitle: 'Jalan',
                interactive: true,
                title: '<img src="styles/legend/Jalan_2.png" /> Jalan'
            });
var format_RumahSakit_3 = new ol.format.GeoJSON();
var features_RumahSakit_3 = format_RumahSakit_3.readFeatures(json_RumahSakit_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RumahSakit_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahSakit_3.addFeatures(features_RumahSakit_3);
var lyr_RumahSakit_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahSakit_3, 
                style: style_RumahSakit_3,
                popuplayertitle: 'RumahSakit',
                interactive: true,
                title: '<img src="styles/legend/RumahSakit_3.png" /> RumahSakit'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Kec_Girisubo_1.setVisible(true);lyr_Jalan_2.setVisible(true);lyr_RumahSakit_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Kec_Girisubo_1,lyr_Jalan_2,lyr_RumahSakit_3];
lyr_Kec_Girisubo_1.set('fieldAliases', {'WADMKC': 'Kecamatan', 'WADMKD': 'Desa', 'WADMKK': 'Kabupaten', 'WADMPR': 'Provinsi', 'luas': 'luas', });
lyr_Jalan_2.set('fieldAliases', {'REMARK': 'REMARK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_RumahSakit_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REMARK': 'REMARK', });
lyr_Kec_Girisubo_1.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'luas': 'TextEdit', });
lyr_Jalan_2.set('fieldImages', {'REMARK': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_RumahSakit_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'REMARK': 'TextEdit', });
lyr_Kec_Girisubo_1.set('fieldLabels', {'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'luas': 'inline label - always visible', });
lyr_Jalan_2.set('fieldLabels', {'REMARK': 'no label', 'SHAPE_Leng': 'no label', });
lyr_RumahSakit_3.set('fieldLabels', {'OBJECTID': 'no label', 'REMARK': 'no label', });
lyr_RumahSakit_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});