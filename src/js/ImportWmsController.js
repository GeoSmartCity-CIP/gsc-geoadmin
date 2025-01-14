goog.provide('ga_importwms_controller');
(function() {

  var module = angular.module('ga_importwms_controller', []);

  module.controller('GaImportWmsController', function($scope, gaGlobalOptions) {
    $scope.options = {
      proxyUrl: gaGlobalOptions.ogcproxyUrl,
      defaultGetCapParams: 'SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0',
      defaultWMSList: [
        'https://wms.geo.admin.ch/',
        'http://ogc.heig-vd.ch/mapserver/wms',
        'http://owsproxy.lgl-bw.de/owsproxy/ows/WMS_Maps4BW',
        'https://www.gis.stadt-zuerich.ch/maps/services/wms/WMS-ZH-STZH-OGD/MapServer/WMSServer',
        'https://wms.geo.gl.ch/',
        'http://mapserver1.gr.ch/wms/admineinteilung',
        'http://mapserver1.gr.ch/wms/belastetestandorte',
        'http://mapserver1.gr.ch/wms/beweidbareflaechen',
        'http://mapserver1.gr.ch/wms/generellererschliessungsplan',
        'http://mapserver1.gr.ch/wms/generellergestaltungsplan',
        'http://mapserver1.gr.ch/wms/gewaesserschutz',
        'http://mapserver1.gr.ch/wms/grundlagen_richtplanung',
        'http://mapserver1.gr.ch/wms/grundwasser',
        'http://mapserver1.gr.ch/wms/historischekarten',
        'http://mapserver1.gr.ch/wms/naturgefahren_erfassungsbereiche',
        'http://mapserver1.gr.ch/wms/naturschutz',
        'http://mapserver1.gr.ch/wms/regionen',
        'http://mapserver1.gr.ch/wms/seilbahnen',
        'http://mapserver1.gr.ch/wms/amtlichevermessung_stand',
        'http://mapserver1.gr.ch/wms/wildruhezonen',
        'http://mapserver1.gr.ch/wms/wildschutzgebiete',
        'http://mapserver1.gr.ch/wms/zonenplan',
        'http://www.sogis1.so.ch/cgi-bin/sogis/sogis_geologie.wms',
        'http://www.sogis1.so.ch/cgi-bin/sogis/sogis_gewaesser.wms',
        'http://www.sogis1.so.ch/cgi-bin/sogis/sogis_grundlagen.wms',
        'http://www.sogis1.so.ch/cgi-bin/sogis/sogis_natgef.wms',
        'http://www.sogis1.so.ch/cgi-bin/sogis/sogis_oeko.wms',
        'http://www.sogis1.so.ch/cgi-bin/sogis/sogis_richt.wms',
        'http://www.sogis1.so.ch/cgi-bin/sogis/sogis_verkehr.wms',
        'http://www.sogis1.so.ch/cgi-bin/sogis/sogis_wander.wms',
        'http://www.sogis1.so.ch/wms/avwms',
       'http://www.sogis1.so.ch/wms/grundbuchplan',
        'http://www.sogis1.so.ch/cgi-bin/sogis/sogis_orthofoto.wms',
        'http://www.sogis1.so.ch/cgi-bin/sogis/sogis_bpav.wms',
        'http://www.sogis1.so.ch/cgi-bin/sogis/sogis_strassenkarte.wms',
        'http://www.sogis1.so.ch/cgi-bin/sogis/sogis_dtm_dom.wms',
        'http://www.sogis1.so.ch/wms/wms_lidar',
        'https://secure.asitvd.ch/proxy/ogc/vd-wms',
        'https://wms.geo.bs.ch/wmsBS',
        'http://vogis.cnv.at/mapserver/mapserv?map=i_flaechenwidmung_v_wms.map',
        'http://vogis.cnv.at/mapserver/mapserv?map=i_luftbilder_r_wms.map',
        'http://vogis.cnv.at/mapserver/mapserv?map=i_hoehen_und_gelaende_r_wms.map',
        'http://vogis.cnv.at/mapserver/mapserv?map=i_relief_r_wms.map',
        'http://vogis.cnv.at/mapserver/mapserv?map=i_historischekarten_r_wms.map',
        'http://vogis.cnv.at/mapserver/mapserv?map=i_naturschutz_v_wms.map',
        'http://vogis.cnv.at/mapserver/mapserv?map=i_topographie_r_wms.map',
        'http://wms.pcn.minambiente.it/ogc?map=/ms_ogc/WMS_v1.3/raster/IGM_100000.map',
        'http://wms.pcn.minambiente.it/ogc?map=/ms_ogc/WMS_v1.3/raster/IGM_25000.map',
        'http://wms.pcn.minambiente.it/ogc?map=/ms_ogc/WMS_v1.3/raster/IGM_250000.map',
        'http://wms.pcn.minambiente.it/ogc?map=/ms_ogc/WMS_v1.3/raster/DTM_20M.map',
        'http://wms.pcn.minambiente.it/ogc?map=/ms_ogc/WMS_v1.3/Vettoriali/Rete_ferroviaria.map',
        'http://wms.pcn.minambiente.it/ogc?map=/ms_ogc/WMS_v1.3/Vettoriali/Rete_stradale.map',
        'http://wms.pcn.minambiente.it/ogc?map=/ms_ogc/WMS_v1.3/raster/ortofoto_colore_06.map',
        'https://wms.zh.ch/ArchWMS',
        'https://wms.zh.ch/TBA9ZHWMS',
        'https://wms.zh.ch/TbaBaustellenZHWMS',
        'https://wms.zh.ch/TBAAnlagenZHWMS',
        'https://wms.zh.ch/DenkmalschutzWMS',
        'https://wms.zh.ch/HaltestellenZHWMS',
        'https://wms.zh.ch/WaldWNBZHWMS',
        'https://wms.zh.ch/OrtsbildschutzZHWMS',
        'https://wms.zh.ch/FnsLRKZHWMS',
        'https://wms.zh.ch/WaldSWZHWMS',
        'https://wms.zh.ch/TBAStr3ZHWMS',
        'https://wms.zh.ch/TBAStr2ZHWMS',
        'https://wms.zh.ch/TBAStr1ZHWMS',
        'https://wms.zh.ch/ZVVZHWMS',
        'https://wms.zh.ch/AFVTempo30ZHWMS',
        'https://wms.zh.ch/WaldVKWMS',
        'https://wms.zh.ch/VeloinfrastrukturZHWMS',
        'https://wms.zh.ch/VelonetzZHWMS',
        'https://wms.zh.ch/VeloparkieranlagenZHWMS',
        'https://wms.zh.ch/TBAVMSZHWMS',
        'https://wms.zh.ch/WaldarealZHWMS',
        'https://wms.zh.ch/WildkarteZHWMS',
        'https://wms.zh.ch/FnsLWZHWMS',
        'https://wms.zh.ch/FNSOEQVZHWMS',
        'https://wms.zh.ch/FNSLRPZHWMS',
        'https://wms.zh.ch/FnsSVOZHWMS',
        'https://wms.zh.ch/FnsInvZHWMS',
        'https://wms.zh.ch/kkgeo_gws_zh',
        'http://www.geoservice.apps.be.ch/geoservice/services/a4p/a4p_basiswms_d_fk_s/MapServer/WMSServer',
        'http://www.geoservice.apps.be.ch/geoservice/services/a4p/a4p_grenzenwms_d_fk_s/MapServer/WMSServer',
        'http://www.geoservice.apps.be.ch/geoservice/services/a4p/a4p_planungwms_d_fk_s/MapServer/WMSServer',
        'http://www.geoservice.apps.be.ch/geoservice/services/a4p/a4p_umweltwms_d_fk_s/MapServer/WMSServer',
        'http://www.geoservice.apps.be.ch/geoservice/services/a4p/a4p_geologiewms_d_fk_s/MapServer/WMSServer',
        'http://www.geoservice.apps.be.ch/geoservice/services/a4p/a4p_gewaesserwms_d_fk_s/MapServer/WMSServer',
        'http://www.geoservice.apps.be.ch/geoservice/services/a4p/a4p_transportwms_d_fk_s/MapServer/WMSServer',
        'https://wms.geo.gr.ch/admineinteilung',
        'https://wms.geo.gr.ch/bauzonen_graubuenden',
        'https://wms.geo.gr.ch/belastetestandorte',
        'https://wms.geo.gr.ch/beweidbareflaechen',
        'https://wms.geo.gr.ch/generellererschliessungsplan',
        'https://wms.geo.gr.ch/generellergestaltungsplan',
        'https://wms.geo.gr.ch/gewaesserschutz',
        'https://wms.geo.gr.ch/grundwasser',
        'https://wms.geo.gr.ch/historischekarten',
        'https://wms.geo.gr.ch/landwirtschaft',
        'https://wms.geo.gr.ch/naturgefahren_erfassungsbereiche',
        'https://wms.geo.gr.ch/naturschutz',
        'https://wms.geo.gr.ch/rrip_bregaglia',
        'https://wms.geo.gr.ch/rrip_davos',
        'https://wms.geo.gr.ch/rrip_mesolcina',
        'https://wms.geo.gr.ch/rrip_mittelbuenden',
        'https://wms.geo.gr.ch/rrip_nordbuenden',
        'https://wms.geo.gr.ch/rrip_oberengadin',
        'https://wms.geo.gr.ch/rrip_praettigau',
        'https://wms.geo.gr.ch/rrip_unterengadin',
        'https://wms.geo.gr.ch/rrip_regioviamala',
        'https://wms.geo.gr.ch/regionen',
        'https://wms.geo.gr.ch/schutzwald',
        'https://wms.geo.gr.ch/seilbahnen',
        'https://wms.geo.gr.ch/amtlichevermessung_stand',
        'https://wms.geo.gr.ch/verbauungen',
        'https://wms.geo.gr.ch/waldentwicklungsplan',
        'https://wms.geo.gr.ch/wildruhezonen',
        'https://wms.geo.gr.ch/wildschutzgebiete',
        'https://wms.geo.gr.ch/zonenplan',
        'https://wms.geo.gr.ch/richtplan',
        'https://wms.geo.gr.ch/uebersichtsplan',
        'http://webdienste.zugmap.ch/basisplan_sw/service.svc/get',
        'http://webdienste.zugmap.ch/basisplan_farbig/service.svc/get',
        'http://webdienste.zugmap.ch/kkgeo_gws_zg/service.svc/get',
        'http://webdienste.zugmap.ch/Landwirtschaft_Naturschutz/service.svc/get',
        'http://webdienste.zugmap.ch/luftbild2011/service.svc/get',
        'http://webdienste.zugmap.ch/luftbildplus/service.svc/get',
        'http://webdienste.zugmap.ch/ortsplan/service.svc/get',
        'http://webdienste.zugmap.ch/Zonenplan_WMS/service.svc/get',
        'http://service.lisag.ch/wms',
        'http://wms.geoportal.ch:8080/geoserver/AVAI/wms'
      ]
    };
  });
})();
