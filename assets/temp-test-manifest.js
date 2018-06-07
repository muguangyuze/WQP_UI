/**
 * This bootstraps Rollup with Karma, loading every module in the application.
 */
require('./js/coverage/coverageMap');
//require('./js/coverage/coverageOnReady');
require('./js/downloadFormController');
require('./js/downloadProgressDialog');
require('./js/generalMapping');
require('./js/hucValidator');
require('./js/identifyDialog');
require('./js/leafletControls/FeatureSourceSelectControl');
require('./js/leafletControls/SearchControl');
require('./js/leafletLayers/CoverageLayer');
require('./js/leafletLayers/WQPSitesLayer');
require('./js/LeafletMixins/SingleClickEventHandlerMixin');
require('./js/leafletUtils');
require('./js/MapConfig');
require('./js/nldiMapping');
require('./js/nldiModel');
require('./js/portalHelp');
require('./js/portalModels');
//require('./js/portalOnReady');
require('./js/portalValidators');
require('./js/providers');
require('./js/providerSiteMap');
//require('./js/providerSiteMapOnReady');
require('./js/providerSitesMap');
//require('./js/providerSitesMapOnReady');
require('./js/queryService');
require('./js/siteMap');
require('./js/stateFIPS');
require('./js/utils');
require('./js/views/placeInputView');
require('./js/views/pointLocationInputView');
require('./js/views/portalViews');
require('./js/views/samplingParameterInputView');
require('./js/views/showAPIView');
require('./js/views/siteMapView');
require('./js/views/siteParameterInputView');
require('./test/js/portal_ui/controllers/controllersSpec');
require('./test/js/portal_ui/dateValidatorSpec');
require('./test/js/portal_ui/downloadFormControllerSpec');
require('./test/js/portal_ui/downloadProgressDialogSpec');
require('./test/js/portal_ui/hucValidatorSpec');
require('./test/js/portal_ui/identityDialogSpec');
require('./test/js/portal_ui/leafletControls/FeatureSourceSelectControlSpec');
require('./test/js/portal_ui/leafletControls/SearchControlSpec');
require('./test/js/portal_ui/leafletLayers/CoverageLayerSpec');
require('./test/js/portal_ui/leafletLayers/WQPSitesLayerSpec');
require('./test/js/portal_ui/leafletUtilsSpec');
require('./test/js/portal_ui/nldiMappingSpec');
require('./test/js/portal_ui/nldiModelSpec');
require('./test/js/portal_ui/portalModelsSpec');
require('./test/js/portal_ui/portalValidatorsSpec');
require('./test/js/portal_ui/providerSiteMapSpec');
require('./test/js/portal_ui/providerSitesMapSpec');
require('./test/js/portal_ui/providersSpec');
require('./test/js/portal_ui/queryServiceSpec');
require('./test/js/portal_ui/singleClickEventMixinSpec');
require('./test/js/portal_ui/utilsSpec');
require('./test/js/portal_ui/views/arcGisOnlineHelpViewSpec');
require('./test/js/portal_ui/views/biologicalSamplingInputViewSpec');
require('./test/js/portal_ui/views/boundingBoxInputViewSpec');
require('./test/js/portal_ui/views/dataDetailsViewSpec');
require('./test/js/portal_ui/views/downloadFormViewSpec');
require('./test/js/portal_ui/views/inputValidationViewSpec');
require('./test/js/portal_ui/views/nldiNavViewPopupViewSpec');
require('./test/js/portal_ui/views/placeInputViewSpec');
require('./test/js/portal_ui/views/pointLocationInputViewSpec');
require('./test/js/portal_ui/views/portalViewsSpec');
require('./test/js/portal_ui/views/samplingParameterInputViewSpec');
require('./test/js/portal_ui/views/showAPIViewSpec');
require('./test/js/portal_ui/views/siteMapViewSpec');
require('./test/js/portal_ui/views/siteParameterInputViewSpec');
