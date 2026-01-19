ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([9809497.654271, -2512094.207479, 15945153.820988, 2497955.971819]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Fauna_1 = new ol.format.GeoJSON();
var features_Fauna_1 = format_Fauna_1.readFeatures(json_Fauna_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fauna_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fauna_1.addFeatures(features_Fauna_1);
var lyr_Fauna_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fauna_1, 
                style: style_Fauna_1,
                popuplayertitle: 'Fauna',
                interactive: true,
                title: '<img src="styles/legend/Fauna_1.png" /> Fauna'
            });
var format_Flora_2 = new ol.format.GeoJSON();
var features_Flora_2 = format_Flora_2.readFeatures(json_Flora_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Flora_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Flora_2.addFeatures(features_Flora_2);
var lyr_Flora_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Flora_2, 
                style: style_Flora_2,
                popuplayertitle: 'Flora',
                interactive: true,
                title: '<img src="styles/legend/Flora_2.png" /> Flora'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Fauna_1.setVisible(true);lyr_Flora_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Fauna_1,lyr_Flora_2];
lyr_Fauna_1.set('fieldAliases', {'Id': 'Id', 'Gambar': 'Gambar', 'Keterangan': 'Keterangan', 'WEB': 'WEB', });
lyr_Flora_2.set('fieldAliases', {'Id': 'Id', 'Keterangan': 'Keterangan', 'Gambar': 'Gambar', });
lyr_Fauna_1.set('fieldImages', {'Id': 'Range', 'Gambar': 'ExternalResource', 'Keterangan': 'TextEdit', 'WEB': 'TextEdit', });
lyr_Flora_2.set('fieldImages', {'Id': 'Range', 'Keterangan': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_Fauna_1.set('fieldLabels', {'Id': 'no label', 'Gambar': 'inline label - always visible', 'Keterangan': 'inline label - always visible', 'WEB': 'inline label - visible with data', });
lyr_Flora_2.set('fieldLabels', {'Id': 'no label', 'Keterangan': 'inline label - always visible', 'Gambar': 'inline label - always visible', });
lyr_Flora_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});