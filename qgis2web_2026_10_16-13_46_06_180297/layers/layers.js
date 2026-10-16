var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_PCAFinal_Full_2_2 = new ol.format.GeoJSON();
var features_PCAFinal_Full_2_2 = format_PCAFinal_Full_2_2.readFeatures(json_PCAFinal_Full_2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PCAFinal_Full_2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PCAFinal_Full_2_2.addFeatures(features_PCAFinal_Full_2_2);
var lyr_PCAFinal_Full_2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PCAFinal_Full_2_2, 
                style: style_PCAFinal_Full_2_2,
                popuplayertitle: 'PCAFinal_Full_2',
                interactive: true,
    title: 'PCAFinal_Full_2<br />\
    <img src="styles/legend/PCAFinal_Full_2_2_0.png" /> 1<br />\
    <img src="styles/legend/PCAFinal_Full_2_2_1.png" /> 2<br />\
    <img src="styles/legend/PCAFinal_Full_2_2_2.png" /> 3<br />\
    <img src="styles/legend/PCAFinal_Full_2_2_3.png" /> 4<br />\
    <img src="styles/legend/PCAFinal_Full_2_2_4.png" /> 5<br />' });
var format_JALAN_ALL_CLIP_3 = new ol.format.GeoJSON();
var features_JALAN_ALL_CLIP_3 = format_JALAN_ALL_CLIP_3.readFeatures(json_JALAN_ALL_CLIP_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_ALL_CLIP_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_ALL_CLIP_3.addFeatures(features_JALAN_ALL_CLIP_3);
var lyr_JALAN_ALL_CLIP_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_ALL_CLIP_3, 
                style: style_JALAN_ALL_CLIP_3,
                popuplayertitle: 'JALAN_ALL_CLIP',
                interactive: true,
    title: 'JALAN_ALL_CLIP<br />\
    <img src="styles/legend/JALAN_ALL_CLIP_3_0.png" /> JAP<br />\
    <img src="styles/legend/JALAN_ALL_CLIP_3_1.png" /> JKP-2<br />\
    <img src="styles/legend/JALAN_ALL_CLIP_3_2.png" /> JKP-3<br />\
    <img src="styles/legend/JALAN_ALL_CLIP_3_3.png" /> JKS<br />\
    <img src="styles/legend/JALAN_ALL_CLIP_3_4.png" /> JLP<br />\
    <img src="styles/legend/JALAN_ALL_CLIP_3_5.png" /> JLS<br />\
    <img src="styles/legend/JALAN_ALL_CLIP_3_6.png" /> <br />' });
var format_TOPONIM_BARU_2608_4 = new ol.format.GeoJSON();
var features_TOPONIM_BARU_2608_4 = format_TOPONIM_BARU_2608_4.readFeatures(json_TOPONIM_BARU_2608_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TOPONIM_BARU_2608_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TOPONIM_BARU_2608_4.addFeatures(features_TOPONIM_BARU_2608_4);
cluster_TOPONIM_BARU_2608_4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_TOPONIM_BARU_2608_4
});
var lyr_TOPONIM_BARU_2608_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_TOPONIM_BARU_2608_4, 
                style: style_TOPONIM_BARU_2608_4,
                popuplayertitle: 'TOPONIM_BARU_2608',
                interactive: true,
    title: 'TOPONIM_BARU_2608<br />\
    <img src="styles/legend/TOPONIM_BARU_2608_4_0.png" /> Bangunan Pemerintah<br />\
    <img src="styles/legend/TOPONIM_BARU_2608_4_1.png" /> Pendidikan<br />\
    <img src="styles/legend/TOPONIM_BARU_2608_4_2.png" /> Perdagangan dan Jasa<br />\
    <img src="styles/legend/TOPONIM_BARU_2608_4_3.png" /> Perumahan<br />\
    <img src="styles/legend/TOPONIM_BARU_2608_4_4.png" /> Sarana Kesehatan<br />\
    <img src="styles/legend/TOPONIM_BARU_2608_4_5.png" /> Sarana Olahraga<br />' });
var format_ADM_KABKOT_SRG_DISSKEC_5 = new ol.format.GeoJSON();
var features_ADM_KABKOT_SRG_DISSKEC_5 = format_ADM_KABKOT_SRG_DISSKEC_5.readFeatures(json_ADM_KABKOT_SRG_DISSKEC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADM_KABKOT_SRG_DISSKEC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADM_KABKOT_SRG_DISSKEC_5.addFeatures(features_ADM_KABKOT_SRG_DISSKEC_5);
var lyr_ADM_KABKOT_SRG_DISSKEC_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADM_KABKOT_SRG_DISSKEC_5, 
                style: style_ADM_KABKOT_SRG_DISSKEC_5,
                popuplayertitle: 'ADM_KABKOT_SRG_DISSKEC',
                interactive: true,
                title: '<img src="styles/legend/ADM_KABKOT_SRG_DISSKEC_5.png" /> ADM_KABKOT_SRG_DISSKEC'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_PCAFinal_Full_2_2.setVisible(true);lyr_JALAN_ALL_CLIP_3.setVisible(true);lyr_TOPONIM_BARU_2608_4.setVisible(true);lyr_ADM_KABKOT_SRG_DISSKEC_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleSatelliteHybrid_1,lyr_PCAFinal_Full_2_2,lyr_JALAN_ALL_CLIP_3,lyr_TOPONIM_BARU_2608_4,lyr_ADM_KABKOT_SRG_DISSKEC_5];
lyr_PCAFinal_Full_2_2.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'gridcode': 'gridcode', });
lyr_JALAN_ALL_CLIP_3.set('fieldAliases', {'Status': 'Status', 'Provinsi': 'Provinsi', 'Kab_Kota': 'Kab_Kota', 'Kecamatan': 'Kecamatan', 'Desa_Kel': 'Desa_Kel', 'Panjang': 'Panjang', 'NAMA_RUAS': 'NAMA_RUAS', 'FUNGSI': 'FUNGSI', 'Shape_Leng': 'Shape_Leng', 'Bobot': 'Bobot', });
lyr_TOPONIM_BARU_2608_4.set('fieldAliases', {'TOPONIM': 'TOPONIM', 'JENIS': 'JENIS', 'KLAS': 'KLAS', 'BOBOT': 'BOBOT', });
lyr_ADM_KABKOT_SRG_DISSKEC_5.set('fieldAliases', {'KECAMATAN': 'KECAMATAN', });
lyr_PCAFinal_Full_2_2.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_JALAN_ALL_CLIP_3.set('fieldImages', {'Status': 'TextEdit', 'Provinsi': 'TextEdit', 'Kab_Kota': 'TextEdit', 'Kecamatan': 'TextEdit', 'Desa_Kel': 'TextEdit', 'Panjang': 'TextEdit', 'NAMA_RUAS': 'TextEdit', 'FUNGSI': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Bobot': 'TextEdit', });
lyr_TOPONIM_BARU_2608_4.set('fieldImages', {'TOPONIM': 'TextEdit', 'JENIS': 'TextEdit', 'KLAS': 'TextEdit', 'BOBOT': 'TextEdit', });
lyr_ADM_KABKOT_SRG_DISSKEC_5.set('fieldImages', {'KECAMATAN': 'TextEdit', });
lyr_PCAFinal_Full_2_2.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'gridcode': 'inline label - visible with data', });
lyr_JALAN_ALL_CLIP_3.set('fieldLabels', {'Status': 'inline label - visible with data', 'Provinsi': 'no label', 'Kab_Kota': 'no label', 'Kecamatan': 'no label', 'Desa_Kel': 'no label', 'Panjang': 'inline label - visible with data', 'NAMA_RUAS': 'header label - always visible', 'FUNGSI': 'inline label - visible with data', 'Shape_Leng': 'no label', 'Bobot': 'no label', });
lyr_TOPONIM_BARU_2608_4.set('fieldLabels', {'TOPONIM': 'inline label - visible with data', 'JENIS': 'inline label - visible with data', 'KLAS': 'inline label - visible with data', 'BOBOT': 'inline label - visible with data', });
lyr_ADM_KABKOT_SRG_DISSKEC_5.set('fieldLabels', {'KECAMATAN': 'header label - always visible', });
lyr_ADM_KABKOT_SRG_DISSKEC_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});