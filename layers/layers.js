ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([-540863.874007, 7879766.579913, 1660250.955352, 10042321.733429]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DepartamentosdelPer_1 = new ol.format.GeoJSON();
var features_DepartamentosdelPer_1 = format_DepartamentosdelPer_1.readFeatures(json_DepartamentosdelPer_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_DepartamentosdelPer_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DepartamentosdelPer_1.addFeatures(features_DepartamentosdelPer_1);
var lyr_DepartamentosdelPer_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DepartamentosdelPer_1, 
                style: style_DepartamentosdelPer_1,
                popuplayertitle: 'Departamentos del Perú',
                interactive: true,
                title: '<img src="styles/legend/DepartamentosdelPer_1.png" /> Departamentos del Perú'
            });

lyr_OSMStandard_0.setVisible(true);lyr_DepartamentosdelPer_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_DepartamentosdelPer_1];
lyr_DepartamentosdelPer_1.set('fieldAliases', {'NOMBDEP': 'Nombre del departamento:', 'COUNT': 'Nº de distritos del departamento:', 'FIRST_IDDP': 'UBIGEO del departamento:', 'HECTARES': 'Superficie en "Ha":', 'fotos': 'Fotos turisticas del departamento:', 'wiki': 'Información del departamento:', 'videos': 'Video promocional del departamento:', });
lyr_DepartamentosdelPer_1.set('fieldImages', {'NOMBDEP': 'TextEdit', 'COUNT': 'TextEdit', 'FIRST_IDDP': 'TextEdit', 'HECTARES': 'TextEdit', 'fotos': 'ExternalResource', 'wiki': 'TextEdit', 'videos': 'TextEdit', });
lyr_DepartamentosdelPer_1.set('fieldLabels', {'NOMBDEP': 'header label - always visible', 'COUNT': 'header label - always visible', 'FIRST_IDDP': 'header label - always visible', 'HECTARES': 'header label - always visible', 'fotos': 'header label - always visible', 'wiki': 'header label - always visible', 'videos': 'header label - always visible', });
lyr_DepartamentosdelPer_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});