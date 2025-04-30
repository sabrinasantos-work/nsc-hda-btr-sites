var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var lyr_Australialatest_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://api.nearmap.com/wms/v1/latest/apikey/OWYzNWVmZjEtYjc5Zi00MzM4LTkwYTYtOGUyYTRjYjYwMDcw",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Nearmap/Nearmap/Australia",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Australia latest',
                            popuplayertitle: 'Australia latest',
                            opacity: 0.600000,
                            
                            
                          });
              wms_layers.push([lyr_Australialatest_1, 0]);
var format_Line_MetroLine_2 = new ol.format.GeoJSON();
var features_Line_MetroLine_2 = format_Line_MetroLine_2.readFeatures(json_Line_MetroLine_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line_MetroLine_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line_MetroLine_2.addFeatures(features_Line_MetroLine_2);
var lyr_Line_MetroLine_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line_MetroLine_2, 
                style: style_Line_MetroLine_2,
                popuplayertitle: 'Line_Metro Line',
                interactive: true,
                title: '<img src="styles/legend/Line_MetroLine_2.png" /> Line_Metro Line'
            });
var format_Line_HeavyRailLine_3 = new ol.format.GeoJSON();
var features_Line_HeavyRailLine_3 = format_Line_HeavyRailLine_3.readFeatures(json_Line_HeavyRailLine_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line_HeavyRailLine_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line_HeavyRailLine_3.addFeatures(features_Line_HeavyRailLine_3);
var lyr_Line_HeavyRailLine_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line_HeavyRailLine_3, 
                style: style_Line_HeavyRailLine_3,
                popuplayertitle: 'Line_Heavy Rail Line',
                interactive: true,
                title: '<img src="styles/legend/Line_HeavyRailLine_3.png" /> Line_Heavy Rail Line'
            });
var format_Points_HeavyRail_4 = new ol.format.GeoJSON();
var features_Points_HeavyRail_4 = format_Points_HeavyRail_4.readFeatures(json_Points_HeavyRail_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Points_HeavyRail_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Points_HeavyRail_4.addFeatures(features_Points_HeavyRail_4);
var lyr_Points_HeavyRail_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Points_HeavyRail_4, 
                style: style_Points_HeavyRail_4,
                popuplayertitle: 'Points_Heavy Rail',
                interactive: true,
                title: '<img src="styles/legend/Points_HeavyRail_4.png" /> Points_Heavy Rail'
            });
var format_Points_MetroStationspoints_heavy_rail_5 = new ol.format.GeoJSON();
var features_Points_MetroStationspoints_heavy_rail_5 = format_Points_MetroStationspoints_heavy_rail_5.readFeatures(json_Points_MetroStationspoints_heavy_rail_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Points_MetroStationspoints_heavy_rail_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Points_MetroStationspoints_heavy_rail_5.addFeatures(features_Points_MetroStationspoints_heavy_rail_5);
var lyr_Points_MetroStationspoints_heavy_rail_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Points_MetroStationspoints_heavy_rail_5, 
                style: style_Points_MetroStationspoints_heavy_rail_5,
                popuplayertitle: 'Points_Metro Stations — points_heavy_rail',
                interactive: true,
                title: '<img src="styles/legend/Points_MetroStationspoints_heavy_rail_5.png" /> Points_Metro Stations — points_heavy_rail'
            });
var format_Polygon_SALs_6 = new ol.format.GeoJSON();
var features_Polygon_SALs_6 = format_Polygon_SALs_6.readFeatures(json_Polygon_SALs_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Polygon_SALs_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Polygon_SALs_6.addFeatures(features_Polygon_SALs_6);
var lyr_Polygon_SALs_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Polygon_SALs_6, 
                style: style_Polygon_SALs_6,
                popuplayertitle: 'Polygon_SALs',
                interactive: true,
                title: '<img src="styles/legend/Polygon_SALs_6.png" /> Polygon_SALs'
            });
var format_Line_NSCBDOutline_7 = new ol.format.GeoJSON();
var features_Line_NSCBDOutline_7 = format_Line_NSCBDOutline_7.readFeatures(json_Line_NSCBDOutline_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line_NSCBDOutline_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line_NSCBDOutline_7.addFeatures(features_Line_NSCBDOutline_7);
var lyr_Line_NSCBDOutline_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line_NSCBDOutline_7, 
                style: style_Line_NSCBDOutline_7,
                popuplayertitle: 'Line_NSCBD Outline',
                interactive: true,
                title: '<img src="styles/legend/Line_NSCBDOutline_7.png" /> Line_NSCBD Outline'
            });
var format_Polygon_Lots_Siteswithdataappended_300425csv_300425_commercial_to_residential_polygons_only_north_sydney_sites_8 = new ol.format.GeoJSON();
var features_Polygon_Lots_Siteswithdataappended_300425csv_300425_commercial_to_residential_polygons_only_north_sydney_sites_8 = format_Polygon_Lots_Siteswithdataappended_300425csv_300425_commercial_to_residential_polygons_only_north_sydney_sites_8.readFeatures(json_Polygon_Lots_Siteswithdataappended_300425csv_300425_commercial_to_residential_polygons_only_north_sydney_sites_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Polygon_Lots_Siteswithdataappended_300425csv_300425_commercial_to_residential_polygons_only_north_sydney_sites_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Polygon_Lots_Siteswithdataappended_300425csv_300425_commercial_to_residential_polygons_only_north_sydney_sites_8.addFeatures(features_Polygon_Lots_Siteswithdataappended_300425csv_300425_commercial_to_residential_polygons_only_north_sydney_sites_8);
var lyr_Polygon_Lots_Siteswithdataappended_300425csv_300425_commercial_to_residential_polygons_only_north_sydney_sites_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Polygon_Lots_Siteswithdataappended_300425csv_300425_commercial_to_residential_polygons_only_north_sydney_sites_8, 
                style: style_Polygon_Lots_Siteswithdataappended_300425csv_300425_commercial_to_residential_polygons_only_north_sydney_sites_8,
                popuplayertitle: 'Polygon_Lots_Sites with data appended_30.04.25 — csv_300425_commercial_to_residential_polygons_only_north_sydney_sites',
                interactive: true,
    title: 'Polygon_Lots_Sites with data appended_30.04.25 — csv_300425_commercial_to_residential_polygons_only_north_sydney_sites<br />\
    <img src="styles/legend/Polygon_Lots_Siteswithdataappended_300425csv_300425_commercial_to_residential_polygons_only_north_sydney_sites_8_0.png" /> BtR<br />\
    <img src="styles/legend/Polygon_Lots_Siteswithdataappended_300425csv_300425_commercial_to_residential_polygons_only_north_sydney_sites_8_1.png" /> HDA<br />\
    <img src="styles/legend/Polygon_Lots_Siteswithdataappended_300425csv_300425_commercial_to_residential_polygons_only_north_sydney_sites_8_2.png" /> <br />' });
var group_ComtoResSites = new ol.layer.Group({
                                layers: [lyr_Polygon_Lots_Siteswithdataappended_300425csv_300425_commercial_to_residential_polygons_only_north_sydney_sites_8,],
                                fold: 'close',
                                title: 'Com to Res Sites'});
var group_Boundaries = new ol.layer.Group({
                                layers: [lyr_Polygon_SALs_6,lyr_Line_NSCBDOutline_7,],
                                fold: 'close',
                                title: 'Boundaries'});
var group_Transport = new ol.layer.Group({
                                layers: [lyr_Line_MetroLine_2,lyr_Line_HeavyRailLine_3,lyr_Points_HeavyRail_4,lyr_Points_MetroStationspoints_heavy_rail_5,],
                                fold: 'close',
                                title: 'Transport'});
var group_Base = new ol.layer.Group({
                                layers: [lyr_Positron_0,lyr_Australialatest_1,],
                                fold: 'close',
                                title: 'Base'});
var group_Junk = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Junk'});
var group_AddressesLots = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Addresses/Lots'});

lyr_Positron_0.setVisible(true);lyr_Australialatest_1.setVisible(true);lyr_Line_MetroLine_2.setVisible(true);lyr_Line_HeavyRailLine_3.setVisible(true);lyr_Points_HeavyRail_4.setVisible(true);lyr_Points_MetroStationspoints_heavy_rail_5.setVisible(true);lyr_Polygon_SALs_6.setVisible(true);lyr_Line_NSCBDOutline_7.setVisible(true);lyr_Polygon_Lots_Siteswithdataappended_300425csv_300425_commercial_to_residential_polygons_only_north_sydney_sites_8.setVisible(true);
var layersList = [group_Base,group_Transport,group_Boundaries,group_ComtoResSites];
lyr_Line_MetroLine_2.set('fieldAliases', {'full_id': 'full_id', 'network': 'network', 'name': 'name', });
lyr_Line_HeavyRailLine_3.set('fieldAliases', {'full_id': 'full_id', 'network': 'network', 'name': 'name', });
lyr_Points_HeavyRail_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'railway': 'railway', 'network': 'network', 'name': 'name', });
lyr_Points_MetroStationspoints_heavy_rail_5.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'railway': 'railway', 'network': 'network', 'name': 'name', });
lyr_Polygon_SALs_6.set('fieldAliases', {'SAL_CODE21': 'SAL_CODE21', 'SAL_NAME21': 'SAL_NAME21', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM21': 'AREASQKM21', 'LOCI_URI21': 'LOCI_URI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Line_NSCBDOutline_7.set('fieldAliases', {'fid': 'fid', 'category': 'category', 'checked': 'checked', 'map': 'map', 'map_no': 'map_no', });
lyr_Polygon_Lots_Siteswithdataappended_300425csv_300425_commercial_to_residential_polygons_only_north_sydney_sites_8.set('fieldAliases', {'fid': 'fid', 'Site Name': 'Site Name', 'planlabel': 'planlabel', 'Site Number (label lot polygon)': 'Site Number (label lot polygon)', 'Link': 'Link', 'Category': 'Category', 'Application Number': 'Application Number', 'Site': 'Site', 'Suburb': 'Suburb', 'Address (Concat for geocoding)': 'Address (Concat for geocoding)', 'Status of Proposal': 'Status of Proposal', 'Proposal Date': 'Proposal Date', 'Lot Number': 'Lot Number', 'Details': 'Details', 'Description': 'Description', 'Applicant': 'Applicant', 'Pathway': 'Pathway', 'Authority': 'Authority', 'Status of Proposal (Number)': 'Status of Proposal (Number)', 'No. of Proposed Dwellings (Total)': 'No. of Proposed Dwellings (Total)', 'No. of AH Dwellings (Part of total)': 'No. of AH Dwellings (Part of total)', 'Commercial jobs capacity (jobs lost)': 'Commercial jobs capacity (jobs lost)', 'HOB (Storeys)': 'HOB (Storeys)', 'Document Currency': 'Document Currency', 'Notes': 'Notes', 'Current Zoning': 'Current Zoning', });
lyr_Line_MetroLine_2.set('fieldImages', {'full_id': 'TextEdit', 'network': 'TextEdit', 'name': 'TextEdit', });
lyr_Line_HeavyRailLine_3.set('fieldImages', {'full_id': 'TextEdit', 'network': 'TextEdit', 'name': 'TextEdit', });
lyr_Points_HeavyRail_4.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'railway': 'TextEdit', 'network': 'TextEdit', 'name': 'TextEdit', });
lyr_Points_MetroStationspoints_heavy_rail_5.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'railway': 'TextEdit', 'network': 'TextEdit', 'name': 'TextEdit', });
lyr_Polygon_SALs_6.set('fieldImages', {'SAL_CODE21': 'TextEdit', 'SAL_NAME21': 'TextEdit', 'STE_CODE21': 'TextEdit', 'STE_NAME21': 'TextEdit', 'AUS_CODE21': 'TextEdit', 'AUS_NAME21': 'TextEdit', 'AREASQKM21': 'TextEdit', 'LOCI_URI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Line_NSCBDOutline_7.set('fieldImages', {'fid': '', 'category': '', 'checked': '', 'map': '', 'map_no': '', });
lyr_Polygon_Lots_Siteswithdataappended_300425csv_300425_commercial_to_residential_polygons_only_north_sydney_sites_8.set('fieldImages', {'fid': 'TextEdit', 'Site Name': 'TextEdit', 'planlabel': 'TextEdit', 'Site Number (label lot polygon)': 'Range', 'Link': 'TextEdit', 'Category': 'TextEdit', 'Application Number': 'TextEdit', 'Site': 'TextEdit', 'Suburb': 'TextEdit', 'Address (Concat for geocoding)': 'TextEdit', 'Status of Proposal': 'TextEdit', 'Proposal Date': 'TextEdit', 'Lot Number': 'TextEdit', 'Details': 'TextEdit', 'Description': 'TextEdit', 'Applicant': 'TextEdit', 'Pathway': 'TextEdit', 'Authority': 'TextEdit', 'Status of Proposal (Number)': 'TextEdit', 'No. of Proposed Dwellings (Total)': 'TextEdit', 'No. of AH Dwellings (Part of total)': 'TextEdit', 'Commercial jobs capacity (jobs lost)': 'TextEdit', 'HOB (Storeys)': 'TextEdit', 'Document Currency': 'TextEdit', 'Notes': 'TextEdit', 'Current Zoning': 'TextEdit', });
lyr_Line_MetroLine_2.set('fieldLabels', {'full_id': 'no label', 'network': 'no label', 'name': 'no label', });
lyr_Line_HeavyRailLine_3.set('fieldLabels', {'full_id': 'no label', 'network': 'no label', 'name': 'no label', });
lyr_Points_HeavyRail_4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'railway': 'no label', 'network': 'no label', 'name': 'no label', });
lyr_Points_MetroStationspoints_heavy_rail_5.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'railway': 'no label', 'network': 'no label', 'name': 'no label', });
lyr_Polygon_SALs_6.set('fieldLabels', {'SAL_CODE21': 'no label', 'SAL_NAME21': 'no label', 'STE_CODE21': 'no label', 'STE_NAME21': 'no label', 'AUS_CODE21': 'no label', 'AUS_NAME21': 'no label', 'AREASQKM21': 'no label', 'LOCI_URI21': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Line_NSCBDOutline_7.set('fieldLabels', {'fid': 'no label', 'category': 'no label', 'checked': 'no label', 'map': 'no label', 'map_no': 'no label', });
lyr_Polygon_Lots_Siteswithdataappended_300425csv_300425_commercial_to_residential_polygons_only_north_sydney_sites_8.set('fieldLabels', {'fid': 'no label', 'Site Name': 'no label', 'planlabel': 'no label', 'Site Number (label lot polygon)': 'no label', 'Link': 'no label', 'Category': 'no label', 'Application Number': 'no label', 'Site': 'no label', 'Suburb': 'no label', 'Address (Concat for geocoding)': 'no label', 'Status of Proposal': 'no label', 'Proposal Date': 'no label', 'Lot Number': 'no label', 'Details': 'no label', 'Description': 'no label', 'Applicant': 'no label', 'Pathway': 'no label', 'Authority': 'no label', 'Status of Proposal (Number)': 'no label', 'No. of Proposed Dwellings (Total)': 'no label', 'No. of AH Dwellings (Part of total)': 'no label', 'Commercial jobs capacity (jobs lost)': 'no label', 'HOB (Storeys)': 'no label', 'Document Currency': 'no label', 'Notes': 'no label', 'Current Zoning': 'no label', });
lyr_Polygon_Lots_Siteswithdataappended_300425csv_300425_commercial_to_residential_polygons_only_north_sydney_sites_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});