'use strict';
var lib = require('./lib.js');

module.exports = function (RED) {
    function TequApiNode(config) {
        RED.nodes.createNode(this, config);
        this.method = config.method;
        this.postToken_username = config.postToken_username;
        this.postToken_usernameType = config.postToken_usernameType || 'str';
        this.postToken_password = config.postToken_password;
        this.postToken_passwordType = config.postToken_passwordType || 'str';
        this.getDatasource_authorization = config.getDatasource_authorization;
        this.getDatasource_authorizationType = config.getDatasource_authorizationType || 'str';
        this.getDatasource_galleryId = config.getDatasource_galleryId;
        this.getDatasource_galleryIdType = config.getDatasource_galleryIdType || 'str';
        this.getDatasource_token = config.getDatasource_token;
        this.getDatasource_tokenType = config.getDatasource_tokenType || 'str';
        this.getDatasourceIdById_id = config.getDatasourceIdById_id;
        this.getDatasourceIdById_idType = config.getDatasourceIdById_idType || 'str';
        this.getDatasourceIdById_authorization = config.getDatasourceIdById_authorization;
        this.getDatasourceIdById_authorizationType = config.getDatasourceIdById_authorizationType || 'str';
        this.getDatasourceIdById_token = config.getDatasourceIdById_token;
        this.getDatasourceIdById_tokenType = config.getDatasourceIdById_tokenType || 'str';
        this.getGalleries_authorization = config.getGalleries_authorization;
        this.getGalleries_authorizationType = config.getGalleries_authorizationType || 'str';
        this.getGalleries_token = config.getGalleries_token;
        this.getGalleries_tokenType = config.getGalleries_tokenType || 'str';
        this.getImageIdByIdDataByType_id = config.getImageIdByIdDataByType_id;
        this.getImageIdByIdDataByType_idType = config.getImageIdByIdDataByType_idType || 'str';
        this.getImageIdByIdDataByType_type = config.getImageIdByIdDataByType_type;
        this.getImageIdByIdDataByType_typeType = config.getImageIdByIdDataByType_typeType || 'str';
        this.getImageIdByIdDataByType_authorization = config.getImageIdByIdDataByType_authorization;
        this.getImageIdByIdDataByType_authorizationType = config.getImageIdByIdDataByType_authorizationType || 'str';
        this.getImageIdByIdDataByType_token = config.getImageIdByIdDataByType_token;
        this.getImageIdByIdDataByType_tokenType = config.getImageIdByIdDataByType_tokenType || 'str';
        this.getImageIdById_id = config.getImageIdById_id;
        this.getImageIdById_idType = config.getImageIdById_idType || 'str';
        this.getImageIdById_authorization = config.getImageIdById_authorization;
        this.getImageIdById_authorizationType = config.getImageIdById_authorizationType || 'str';
        this.getImageIdById_token = config.getImageIdById_token;
        this.getImageIdById_tokenType = config.getImageIdById_tokenType || 'str';
        this.getImage_authorization = config.getImage_authorization;
        this.getImage_authorizationType = config.getImage_authorizationType || 'str';
        this.getImage_limit = config.getImage_limit;
        this.getImage_limitType = config.getImage_limitType || 'str';
        this.getImage_startTime = config.getImage_startTime;
        this.getImage_startTimeType = config.getImage_startTimeType || 'str';
        this.getImage_endTime = config.getImage_endTime;
        this.getImage_endTimeType = config.getImage_endTimeType || 'str';
        this.getImage_datasource = config.getImage_datasource;
        this.getImage_datasourceType = config.getImage_datasourceType || 'str';
        this.getImage_bookmark = config.getImage_bookmark;
        this.getImage_bookmarkType = config.getImage_bookmarkType || 'str';
        this.getImage_sort = config.getImage_sort;
        this.getImage_sortType = config.getImage_sortType || 'str';
        this.getImage_fields = config.getImage_fields;
        this.getImage_fieldsType = config.getImage_fieldsType || 'str';
        this.getImage_token = config.getImage_token;
        this.getImage_tokenType = config.getImage_tokenType || 'str';
        this.getImage_serverTimestampStart = config.getImage_serverTimestampStart;
        this.getImage_serverTimestampStartType = config.getImage_serverTimestampStartType || 'str';
        this.getImage_serverTimestampEnd = config.getImage_serverTimestampEnd;
        this.getImage_serverTimestampEndType = config.getImage_serverTimestampEndType || 'str';
        this.postImageAdd_authorization = config.postImageAdd_authorization;
        this.postImageAdd_authorizationType = config.postImageAdd_authorizationType || 'str';
        this.postImageAdd_payload = config.postImageAdd_payload;
        this.postImageAdd_payloadType = config.postImageAdd_payloadType || 'str';
        this.deleteImageDeleteIdById_authorization = config.deleteImageDeleteIdById_authorization;
        this.deleteImageDeleteIdById_authorizationType = config.deleteImageDeleteIdById_authorizationType || 'str';
        this.deleteImageDeleteIdById_id = config.deleteImageDeleteIdById_id;
        this.deleteImageDeleteIdById_idType = config.deleteImageDeleteIdById_idType || 'str';
        this.getVideoIdByIdDataByType_id = config.getVideoIdByIdDataByType_id;
        this.getVideoIdByIdDataByType_idType = config.getVideoIdByIdDataByType_idType || 'str';
        this.getVideoIdByIdDataByType_authorization = config.getVideoIdByIdDataByType_authorization;
        this.getVideoIdByIdDataByType_authorizationType = config.getVideoIdByIdDataByType_authorizationType || 'str';
        this.getVideoIdByIdDataByType_type = config.getVideoIdByIdDataByType_type;
        this.getVideoIdByIdDataByType_typeType = config.getVideoIdByIdDataByType_typeType || 'str';
        this.getVideoIdByIdDataByType_token = config.getVideoIdByIdDataByType_token;
        this.getVideoIdByIdDataByType_tokenType = config.getVideoIdByIdDataByType_tokenType || 'str';
        this.getVideoIdById_id = config.getVideoIdById_id;
        this.getVideoIdById_idType = config.getVideoIdById_idType || 'str';
        this.getVideoIdById_authorization = config.getVideoIdById_authorization;
        this.getVideoIdById_authorizationType = config.getVideoIdById_authorizationType || 'str';
        this.getVideoIdById_token = config.getVideoIdById_token;
        this.getVideoIdById_tokenType = config.getVideoIdById_tokenType || 'str';
        this.getVideo_authorization = config.getVideo_authorization;
        this.getVideo_authorizationType = config.getVideo_authorizationType || 'str';
        this.getVideo_limit = config.getVideo_limit;
        this.getVideo_limitType = config.getVideo_limitType || 'str';
        this.getVideo_startTime = config.getVideo_startTime;
        this.getVideo_startTimeType = config.getVideo_startTimeType || 'str';
        this.getVideo_endTime = config.getVideo_endTime;
        this.getVideo_endTimeType = config.getVideo_endTimeType || 'str';
        this.getVideo_datasouce = config.getVideo_datasouce;
        this.getVideo_datasouceType = config.getVideo_datasouceType || 'str';
        this.getVideo_bookmark = config.getVideo_bookmark;
        this.getVideo_bookmarkType = config.getVideo_bookmarkType || 'str';
        this.getVideo_sort = config.getVideo_sort;
        this.getVideo_sortType = config.getVideo_sortType || 'str';
        this.getVideo_fields = config.getVideo_fields;
        this.getVideo_fieldsType = config.getVideo_fieldsType || 'str';
        this.getVideo_token = config.getVideo_token;
        this.getVideo_tokenType = config.getVideo_tokenType || 'str';
        this.postVideoAdd_authorization = config.postVideoAdd_authorization;
        this.postVideoAdd_authorizationType = config.postVideoAdd_authorizationType || 'str';
        this.postVideoAdd_payload = config.postVideoAdd_payload;
        this.postVideoAdd_payloadType = config.postVideoAdd_payloadType || 'str';
        this.deleteVideoDeleteIdById_authorization = config.deleteVideoDeleteIdById_authorization;
        this.deleteVideoDeleteIdById_authorizationType = config.deleteVideoDeleteIdById_authorizationType || 'str';
        this.deleteVideoDeleteIdById_id = config.deleteVideoDeleteIdById_id;
        this.deleteVideoDeleteIdById_idType = config.deleteVideoDeleteIdById_idType || 'str';
        this.getSensordataDatasourceByDatasourceSensorBySensor_datasource = config.getSensordataDatasourceByDatasourceSensorBySensor_datasource;
        this.getSensordataDatasourceByDatasourceSensorBySensor_datasourceType = config.getSensordataDatasourceByDatasourceSensorBySensor_datasourceType || 'str';
        this.getSensordataDatasourceByDatasourceSensorBySensor_sensor = config.getSensordataDatasourceByDatasourceSensorBySensor_sensor;
        this.getSensordataDatasourceByDatasourceSensorBySensor_sensorType = config.getSensordataDatasourceByDatasourceSensorBySensor_sensorType || 'str';
        this.getSensordataDatasourceByDatasourceSensorBySensor_startTime = config.getSensordataDatasourceByDatasourceSensorBySensor_startTime;
        this.getSensordataDatasourceByDatasourceSensorBySensor_startTimeType = config.getSensordataDatasourceByDatasourceSensorBySensor_startTimeType || 'str';
        this.getSensordataDatasourceByDatasourceSensorBySensor_endTime = config.getSensordataDatasourceByDatasourceSensorBySensor_endTime;
        this.getSensordataDatasourceByDatasourceSensorBySensor_endTimeType = config.getSensordataDatasourceByDatasourceSensorBySensor_endTimeType || 'str';
        this.getSensordataDatasourceByDatasourceSensorBySensor_aggregation = config.getSensordataDatasourceByDatasourceSensorBySensor_aggregation;
        this.getSensordataDatasourceByDatasourceSensorBySensor_aggregationType = config.getSensordataDatasourceByDatasourceSensorBySensor_aggregationType || 'str';
        this.getSensordataDatasourceByDatasourceSensorBySensor_limit = config.getSensordataDatasourceByDatasourceSensorBySensor_limit;
        this.getSensordataDatasourceByDatasourceSensorBySensor_limitType = config.getSensordataDatasourceByDatasourceSensorBySensor_limitType || 'str';
        this.getSensordataDatasourceByDatasourceSensorBySensor_skip = config.getSensordataDatasourceByDatasourceSensorBySensor_skip;
        this.getSensordataDatasourceByDatasourceSensorBySensor_skipType = config.getSensordataDatasourceByDatasourceSensorBySensor_skipType || 'str';
        this.getSensordataDatasourceByDatasourceSensorBySensor_format = config.getSensordataDatasourceByDatasourceSensorBySensor_format;
        this.getSensordataDatasourceByDatasourceSensorBySensor_formatType = config.getSensordataDatasourceByDatasourceSensorBySensor_formatType || 'str';
        this.getSensordataDatasourceByDatasourceSensorBySensor_timezone = config.getSensordataDatasourceByDatasourceSensorBySensor_timezone;
        this.getSensordataDatasourceByDatasourceSensorBySensor_timezoneType = config.getSensordataDatasourceByDatasourceSensorBySensor_timezoneType || 'str';
        this.getSensordataDatasourceByDatasourceSensorBySensor_acceptEncoding = config.getSensordataDatasourceByDatasourceSensorBySensor_acceptEncoding;
        this.getSensordataDatasourceByDatasourceSensorBySensor_acceptEncodingType = config.getSensordataDatasourceByDatasourceSensorBySensor_acceptEncodingType || 'str';
        this.getSensordataDatasourceByDatasourceSensorBySensor_authorization = config.getSensordataDatasourceByDatasourceSensorBySensor_authorization;
        this.getSensordataDatasourceByDatasourceSensorBySensor_authorizationType = config.getSensordataDatasourceByDatasourceSensorBySensor_authorizationType || 'str';
        this.postSensordataDatasourceByDatasourceFind_authorization = config.postSensordataDatasourceByDatasourceFind_authorization;
        this.postSensordataDatasourceByDatasourceFind_authorizationType = config.postSensordataDatasourceByDatasourceFind_authorizationType || 'str';
        this.postSensordataDatasourceByDatasourceFind_datasource = config.postSensordataDatasourceByDatasourceFind_datasource;
        this.postSensordataDatasourceByDatasourceFind_datasourceType = config.postSensordataDatasourceByDatasourceFind_datasourceType || 'str';
        this.postSensordataDatasourceByDatasourceFind_query = config.postSensordataDatasourceByDatasourceFind_query;
        this.postSensordataDatasourceByDatasourceFind_queryType = config.postSensordataDatasourceByDatasourceFind_queryType || 'str';
        this.postSensordataDatasourceByDatasourceFind_archive = config.postSensordataDatasourceByDatasourceFind_archive;
        this.postSensordataDatasourceByDatasourceFind_archiveType = config.postSensordataDatasourceByDatasourceFind_archiveType || 'str';
        this.postCvImage_authorization = config.postCvImage_authorization;
        this.postCvImage_authorizationType = config.postCvImage_authorizationType || 'str';
        this.postCvImage_payload = config.postCvImage_payload;
        this.postCvImage_payloadType = config.postCvImage_payloadType || 'str';
        this.postCvImage_model = config.postCvImage_model;
        this.postCvImage_modelType = config.postCvImage_modelType || 'str';
        this.getCvModels_authorization = config.getCvModels_authorization;
        this.getCvModels_authorizationType = config.getCvModels_authorizationType || 'str';
        var node = this;

        node.on('input', function (msg) {
            var errorFlag = false;
            var client = new lib.TequApi();
            if (!errorFlag) {
                client.body = msg.payload;
            }

            var result;
            if (!errorFlag && node.method === 'postRefresh') {
                var postRefresh_parameters = [];
                var postRefresh_nodeParam;
                var postRefresh_nodeParamType;
                result = client.postRefresh(postRefresh_parameters);
            }
            if (!errorFlag && node.method === 'postToken') {
                var postToken_parameters = [];
                var postToken_nodeParam;
                var postToken_nodeParamType;

                postToken_nodeParam = node.postToken_username;
                postToken_nodeParamType = node.postToken_usernameType;
                if (postToken_nodeParamType === 'str') {
                    postToken_parameters.username = postToken_nodeParam || '';
                } else {
                    postToken_parameters.username = RED.util.getMessageProperty(msg, postToken_nodeParam);
                }
                postToken_parameters.username = !!postToken_parameters.username ? postToken_parameters.username : msg.payload;
                
                postToken_nodeParam = node.postToken_password;
                postToken_nodeParamType = node.postToken_passwordType;
                if (postToken_nodeParamType === 'str') {
                    postToken_parameters.password = postToken_nodeParam || '';
                } else {
                    postToken_parameters.password = RED.util.getMessageProperty(msg, postToken_nodeParam);
                }
                postToken_parameters.password = !!postToken_parameters.password ? postToken_parameters.password : msg.payload;
                                result = client.postToken(postToken_parameters);
            }
            if (!errorFlag && node.method === 'getDatasource') {
                var getDatasource_parameters = [];
                var getDatasource_nodeParam;
                var getDatasource_nodeParamType;

                getDatasource_nodeParam = node.getDatasource_authorization;
                getDatasource_nodeParamType = node.getDatasource_authorizationType;
                if (getDatasource_nodeParamType === 'str') {
                    getDatasource_parameters.authorization = getDatasource_nodeParam || '';
                } else {
                    getDatasource_parameters.authorization = RED.util.getMessageProperty(msg, getDatasource_nodeParam);
                }
                getDatasource_parameters.authorization = !!getDatasource_parameters.authorization ? getDatasource_parameters.authorization : msg.payload;
                
                getDatasource_nodeParam = node.getDatasource_galleryId;
                getDatasource_nodeParamType = node.getDatasource_galleryIdType;
                if (getDatasource_nodeParamType === 'str') {
                    getDatasource_parameters.galleryId = getDatasource_nodeParam || '';
                } else {
                    getDatasource_parameters.galleryId = RED.util.getMessageProperty(msg, getDatasource_nodeParam);
                }
                getDatasource_parameters.galleryId = !!getDatasource_parameters.galleryId ? getDatasource_parameters.galleryId : msg.payload;
                
                getDatasource_nodeParam = node.getDatasource_token;
                getDatasource_nodeParamType = node.getDatasource_tokenType;
                if (getDatasource_nodeParamType === 'str') {
                    getDatasource_parameters.token = getDatasource_nodeParam || '';
                } else {
                    getDatasource_parameters.token = RED.util.getMessageProperty(msg, getDatasource_nodeParam);
                }
                getDatasource_parameters.token = !!getDatasource_parameters.token ? getDatasource_parameters.token : msg.payload;
                                result = client.getDatasource(getDatasource_parameters);
            }
            if (!errorFlag && node.method === 'getDatasourceIdById') {
                var getDatasourceIdById_parameters = [];
                var getDatasourceIdById_nodeParam;
                var getDatasourceIdById_nodeParamType;

                getDatasourceIdById_nodeParam = node.getDatasourceIdById_id;
                getDatasourceIdById_nodeParamType = node.getDatasourceIdById_idType;
                if (getDatasourceIdById_nodeParamType === 'str') {
                    getDatasourceIdById_parameters.id = getDatasourceIdById_nodeParam || '';
                } else {
                    getDatasourceIdById_parameters.id = RED.util.getMessageProperty(msg, getDatasourceIdById_nodeParam);
                }
                getDatasourceIdById_parameters.id = !!getDatasourceIdById_parameters.id ? getDatasourceIdById_parameters.id : msg.payload;
                
                getDatasourceIdById_nodeParam = node.getDatasourceIdById_authorization;
                getDatasourceIdById_nodeParamType = node.getDatasourceIdById_authorizationType;
                if (getDatasourceIdById_nodeParamType === 'str') {
                    getDatasourceIdById_parameters.authorization = getDatasourceIdById_nodeParam || '';
                } else {
                    getDatasourceIdById_parameters.authorization = RED.util.getMessageProperty(msg, getDatasourceIdById_nodeParam);
                }
                getDatasourceIdById_parameters.authorization = !!getDatasourceIdById_parameters.authorization ? getDatasourceIdById_parameters.authorization : msg.payload;
                
                getDatasourceIdById_nodeParam = node.getDatasourceIdById_token;
                getDatasourceIdById_nodeParamType = node.getDatasourceIdById_tokenType;
                if (getDatasourceIdById_nodeParamType === 'str') {
                    getDatasourceIdById_parameters.token = getDatasourceIdById_nodeParam || '';
                } else {
                    getDatasourceIdById_parameters.token = RED.util.getMessageProperty(msg, getDatasourceIdById_nodeParam);
                }
                getDatasourceIdById_parameters.token = !!getDatasourceIdById_parameters.token ? getDatasourceIdById_parameters.token : msg.payload;
                                result = client.getDatasourceIdById(getDatasourceIdById_parameters);
            }
            if (!errorFlag && node.method === 'getGalleries') {
                var getGalleries_parameters = [];
                var getGalleries_nodeParam;
                var getGalleries_nodeParamType;

                getGalleries_nodeParam = node.getGalleries_authorization;
                getGalleries_nodeParamType = node.getGalleries_authorizationType;
                if (getGalleries_nodeParamType === 'str') {
                    getGalleries_parameters.authorization = getGalleries_nodeParam || '';
                } else {
                    getGalleries_parameters.authorization = RED.util.getMessageProperty(msg, getGalleries_nodeParam);
                }
                getGalleries_parameters.authorization = !!getGalleries_parameters.authorization ? getGalleries_parameters.authorization : msg.payload;
                
                getGalleries_nodeParam = node.getGalleries_token;
                getGalleries_nodeParamType = node.getGalleries_tokenType;
                if (getGalleries_nodeParamType === 'str') {
                    getGalleries_parameters.token = getGalleries_nodeParam || '';
                } else {
                    getGalleries_parameters.token = RED.util.getMessageProperty(msg, getGalleries_nodeParam);
                }
                getGalleries_parameters.token = !!getGalleries_parameters.token ? getGalleries_parameters.token : msg.payload;
                                result = client.getGalleries(getGalleries_parameters);
            }
            if (!errorFlag && node.method === 'getImageIdByIdDataByType') {
                var getImageIdByIdDataByType_parameters = [];
                var getImageIdByIdDataByType_nodeParam;
                var getImageIdByIdDataByType_nodeParamType;

                getImageIdByIdDataByType_nodeParam = node.getImageIdByIdDataByType_id;
                getImageIdByIdDataByType_nodeParamType = node.getImageIdByIdDataByType_idType;
                if (getImageIdByIdDataByType_nodeParamType === 'str') {
                    getImageIdByIdDataByType_parameters.id = getImageIdByIdDataByType_nodeParam || '';
                } else {
                    getImageIdByIdDataByType_parameters.id = RED.util.getMessageProperty(msg, getImageIdByIdDataByType_nodeParam);
                }
                getImageIdByIdDataByType_parameters.id = !!getImageIdByIdDataByType_parameters.id ? getImageIdByIdDataByType_parameters.id : msg.payload;
                
                getImageIdByIdDataByType_nodeParam = node.getImageIdByIdDataByType_type;
                getImageIdByIdDataByType_nodeParamType = node.getImageIdByIdDataByType_typeType;
                if (getImageIdByIdDataByType_nodeParamType === 'str') {
                    getImageIdByIdDataByType_parameters.type = getImageIdByIdDataByType_nodeParam || '';
                } else {
                    getImageIdByIdDataByType_parameters.type = RED.util.getMessageProperty(msg, getImageIdByIdDataByType_nodeParam);
                }
                getImageIdByIdDataByType_parameters.type = !!getImageIdByIdDataByType_parameters.type ? getImageIdByIdDataByType_parameters.type : msg.payload;
                
                getImageIdByIdDataByType_nodeParam = node.getImageIdByIdDataByType_authorization;
                getImageIdByIdDataByType_nodeParamType = node.getImageIdByIdDataByType_authorizationType;
                if (getImageIdByIdDataByType_nodeParamType === 'str') {
                    getImageIdByIdDataByType_parameters.authorization = getImageIdByIdDataByType_nodeParam || '';
                } else {
                    getImageIdByIdDataByType_parameters.authorization = RED.util.getMessageProperty(msg, getImageIdByIdDataByType_nodeParam);
                }
                getImageIdByIdDataByType_parameters.authorization = !!getImageIdByIdDataByType_parameters.authorization ? getImageIdByIdDataByType_parameters.authorization : msg.payload;
                
                getImageIdByIdDataByType_nodeParam = node.getImageIdByIdDataByType_token;
                getImageIdByIdDataByType_nodeParamType = node.getImageIdByIdDataByType_tokenType;
                if (getImageIdByIdDataByType_nodeParamType === 'str') {
                    getImageIdByIdDataByType_parameters.token = getImageIdByIdDataByType_nodeParam || '';
                } else {
                    getImageIdByIdDataByType_parameters.token = RED.util.getMessageProperty(msg, getImageIdByIdDataByType_nodeParam);
                }
                getImageIdByIdDataByType_parameters.token = !!getImageIdByIdDataByType_parameters.token ? getImageIdByIdDataByType_parameters.token : msg.payload;
                                result = client.getImageIdByIdDataByType(getImageIdByIdDataByType_parameters);
            }
            if (!errorFlag && node.method === 'getImageIdById') {
                var getImageIdById_parameters = [];
                var getImageIdById_nodeParam;
                var getImageIdById_nodeParamType;

                getImageIdById_nodeParam = node.getImageIdById_id;
                getImageIdById_nodeParamType = node.getImageIdById_idType;
                if (getImageIdById_nodeParamType === 'str') {
                    getImageIdById_parameters.id = getImageIdById_nodeParam || '';
                } else {
                    getImageIdById_parameters.id = RED.util.getMessageProperty(msg, getImageIdById_nodeParam);
                }
                getImageIdById_parameters.id = !!getImageIdById_parameters.id ? getImageIdById_parameters.id : msg.payload;
                
                getImageIdById_nodeParam = node.getImageIdById_authorization;
                getImageIdById_nodeParamType = node.getImageIdById_authorizationType;
                if (getImageIdById_nodeParamType === 'str') {
                    getImageIdById_parameters.authorization = getImageIdById_nodeParam || '';
                } else {
                    getImageIdById_parameters.authorization = RED.util.getMessageProperty(msg, getImageIdById_nodeParam);
                }
                getImageIdById_parameters.authorization = !!getImageIdById_parameters.authorization ? getImageIdById_parameters.authorization : msg.payload;
                
                getImageIdById_nodeParam = node.getImageIdById_token;
                getImageIdById_nodeParamType = node.getImageIdById_tokenType;
                if (getImageIdById_nodeParamType === 'str') {
                    getImageIdById_parameters.token = getImageIdById_nodeParam || '';
                } else {
                    getImageIdById_parameters.token = RED.util.getMessageProperty(msg, getImageIdById_nodeParam);
                }
                getImageIdById_parameters.token = !!getImageIdById_parameters.token ? getImageIdById_parameters.token : msg.payload;
                                result = client.getImageIdById(getImageIdById_parameters);
            }
            if (!errorFlag && node.method === 'getImage') {
                var getImage_parameters = [];
                var getImage_nodeParam;
                var getImage_nodeParamType;

                getImage_nodeParam = node.getImage_authorization;
                getImage_nodeParamType = node.getImage_authorizationType;
                if (getImage_nodeParamType === 'str') {
                    getImage_parameters.authorization = getImage_nodeParam || '';
                } else {
                    getImage_parameters.authorization = RED.util.getMessageProperty(msg, getImage_nodeParam);
                }
                getImage_parameters.authorization = !!getImage_parameters.authorization ? getImage_parameters.authorization : msg.payload;
                
                getImage_nodeParam = node.getImage_limit;
                getImage_nodeParamType = node.getImage_limitType;
                if (getImage_nodeParamType === 'str') {
                    getImage_parameters.limit = getImage_nodeParam || '';
                } else {
                    getImage_parameters.limit = RED.util.getMessageProperty(msg, getImage_nodeParam);
                }
                getImage_parameters.limit = !!getImage_parameters.limit ? getImage_parameters.limit : msg.payload;
                
                getImage_nodeParam = node.getImage_startTime;
                getImage_nodeParamType = node.getImage_startTimeType;
                if (getImage_nodeParamType === 'str') {
                    getImage_parameters.startTime = getImage_nodeParam || '';
                } else {
                    getImage_parameters.startTime = RED.util.getMessageProperty(msg, getImage_nodeParam);
                }
                getImage_parameters.startTime = !!getImage_parameters.startTime ? getImage_parameters.startTime : msg.payload;
                
                getImage_nodeParam = node.getImage_endTime;
                getImage_nodeParamType = node.getImage_endTimeType;
                if (getImage_nodeParamType === 'str') {
                    getImage_parameters.endTime = getImage_nodeParam || '';
                } else {
                    getImage_parameters.endTime = RED.util.getMessageProperty(msg, getImage_nodeParam);
                }
                getImage_parameters.endTime = !!getImage_parameters.endTime ? getImage_parameters.endTime : msg.payload;
                
                getImage_nodeParam = node.getImage_datasource;
                getImage_nodeParamType = node.getImage_datasourceType;
                if (getImage_nodeParamType === 'str') {
                    getImage_parameters.datasource = getImage_nodeParam || '';
                } else {
                    getImage_parameters.datasource = RED.util.getMessageProperty(msg, getImage_nodeParam);
                }
                getImage_parameters.datasource = !!getImage_parameters.datasource ? getImage_parameters.datasource : msg.payload;
                
                getImage_nodeParam = node.getImage_bookmark;
                getImage_nodeParamType = node.getImage_bookmarkType;
                if (getImage_nodeParamType === 'str') {
                    getImage_parameters.bookmark = getImage_nodeParam || '';
                } else {
                    getImage_parameters.bookmark = RED.util.getMessageProperty(msg, getImage_nodeParam);
                }
                getImage_parameters.bookmark = !!getImage_parameters.bookmark ? getImage_parameters.bookmark : msg.payload;
                
                getImage_nodeParam = node.getImage_sort;
                getImage_nodeParamType = node.getImage_sortType;
                if (getImage_nodeParamType === 'str') {
                    getImage_parameters.sort = getImage_nodeParam || '';
                } else {
                    getImage_parameters.sort = RED.util.getMessageProperty(msg, getImage_nodeParam);
                }
                getImage_parameters.sort = !!getImage_parameters.sort ? getImage_parameters.sort : msg.payload;
                
                getImage_nodeParam = node.getImage_fields;
                getImage_nodeParamType = node.getImage_fieldsType;
                if (getImage_nodeParamType === 'str') {
                    getImage_parameters.fields = getImage_nodeParam || '';
                } else {
                    getImage_parameters.fields = RED.util.getMessageProperty(msg, getImage_nodeParam);
                }
                getImage_parameters.fields = !!getImage_parameters.fields ? getImage_parameters.fields : msg.payload;
                
                getImage_nodeParam = node.getImage_token;
                getImage_nodeParamType = node.getImage_tokenType;
                if (getImage_nodeParamType === 'str') {
                    getImage_parameters.token = getImage_nodeParam || '';
                } else {
                    getImage_parameters.token = RED.util.getMessageProperty(msg, getImage_nodeParam);
                }
                getImage_parameters.token = !!getImage_parameters.token ? getImage_parameters.token : msg.payload;
                
                getImage_nodeParam = node.getImage_serverTimestampStart;
                getImage_nodeParamType = node.getImage_serverTimestampStartType;
                if (getImage_nodeParamType === 'str') {
                    getImage_parameters.serverTimestampStart = getImage_nodeParam || '';
                } else {
                    getImage_parameters.serverTimestampStart = RED.util.getMessageProperty(msg, getImage_nodeParam);
                }
                getImage_parameters.serverTimestampStart = !!getImage_parameters.serverTimestampStart ? getImage_parameters.serverTimestampStart : msg.payload;
                
                getImage_nodeParam = node.getImage_serverTimestampEnd;
                getImage_nodeParamType = node.getImage_serverTimestampEndType;
                if (getImage_nodeParamType === 'str') {
                    getImage_parameters.serverTimestampEnd = getImage_nodeParam || '';
                } else {
                    getImage_parameters.serverTimestampEnd = RED.util.getMessageProperty(msg, getImage_nodeParam);
                }
                getImage_parameters.serverTimestampEnd = !!getImage_parameters.serverTimestampEnd ? getImage_parameters.serverTimestampEnd : msg.payload;
                                result = client.getImage(getImage_parameters);
            }
            if (!errorFlag && node.method === 'postImageAdd') {
                var postImageAdd_parameters = [];
                var postImageAdd_nodeParam;
                var postImageAdd_nodeParamType;

                postImageAdd_nodeParam = node.postImageAdd_authorization;
                postImageAdd_nodeParamType = node.postImageAdd_authorizationType;
                if (postImageAdd_nodeParamType === 'str') {
                    postImageAdd_parameters.authorization = postImageAdd_nodeParam || '';
                } else {
                    postImageAdd_parameters.authorization = RED.util.getMessageProperty(msg, postImageAdd_nodeParam);
                }
                postImageAdd_parameters.authorization = !!postImageAdd_parameters.authorization ? postImageAdd_parameters.authorization : msg.payload;
                
                postImageAdd_nodeParam = node.postImageAdd_payload;
                postImageAdd_nodeParamType = node.postImageAdd_payloadType;
                if (postImageAdd_nodeParamType === 'str') {
                    postImageAdd_parameters.payload = postImageAdd_nodeParam || '';
                } else {
                    postImageAdd_parameters.payload = RED.util.getMessageProperty(msg, postImageAdd_nodeParam);
                }
                postImageAdd_parameters.payload = !!postImageAdd_parameters.payload ? postImageAdd_parameters.payload : msg.payload;
                                result = client.postImageAdd(postImageAdd_parameters);
            }
            if (!errorFlag && node.method === 'deleteImageDeleteIdById') {
                var deleteImageDeleteIdById_parameters = [];
                var deleteImageDeleteIdById_nodeParam;
                var deleteImageDeleteIdById_nodeParamType;

                deleteImageDeleteIdById_nodeParam = node.deleteImageDeleteIdById_authorization;
                deleteImageDeleteIdById_nodeParamType = node.deleteImageDeleteIdById_authorizationType;
                if (deleteImageDeleteIdById_nodeParamType === 'str') {
                    deleteImageDeleteIdById_parameters.authorization = deleteImageDeleteIdById_nodeParam || '';
                } else {
                    deleteImageDeleteIdById_parameters.authorization = RED.util.getMessageProperty(msg, deleteImageDeleteIdById_nodeParam);
                }
                deleteImageDeleteIdById_parameters.authorization = !!deleteImageDeleteIdById_parameters.authorization ? deleteImageDeleteIdById_parameters.authorization : msg.payload;
                
                deleteImageDeleteIdById_nodeParam = node.deleteImageDeleteIdById_id;
                deleteImageDeleteIdById_nodeParamType = node.deleteImageDeleteIdById_idType;
                if (deleteImageDeleteIdById_nodeParamType === 'str') {
                    deleteImageDeleteIdById_parameters.id = deleteImageDeleteIdById_nodeParam || '';
                } else {
                    deleteImageDeleteIdById_parameters.id = RED.util.getMessageProperty(msg, deleteImageDeleteIdById_nodeParam);
                }
                deleteImageDeleteIdById_parameters.id = !!deleteImageDeleteIdById_parameters.id ? deleteImageDeleteIdById_parameters.id : msg.payload;
                                result = client.deleteImageDeleteIdById(deleteImageDeleteIdById_parameters);
            }
            if (!errorFlag && node.method === 'getVideoIdByIdDataByType') {
                var getVideoIdByIdDataByType_parameters = [];
                var getVideoIdByIdDataByType_nodeParam;
                var getVideoIdByIdDataByType_nodeParamType;

                getVideoIdByIdDataByType_nodeParam = node.getVideoIdByIdDataByType_id;
                getVideoIdByIdDataByType_nodeParamType = node.getVideoIdByIdDataByType_idType;
                if (getVideoIdByIdDataByType_nodeParamType === 'str') {
                    getVideoIdByIdDataByType_parameters.id = getVideoIdByIdDataByType_nodeParam || '';
                } else {
                    getVideoIdByIdDataByType_parameters.id = RED.util.getMessageProperty(msg, getVideoIdByIdDataByType_nodeParam);
                }
                getVideoIdByIdDataByType_parameters.id = !!getVideoIdByIdDataByType_parameters.id ? getVideoIdByIdDataByType_parameters.id : msg.payload;
                
                getVideoIdByIdDataByType_nodeParam = node.getVideoIdByIdDataByType_authorization;
                getVideoIdByIdDataByType_nodeParamType = node.getVideoIdByIdDataByType_authorizationType;
                if (getVideoIdByIdDataByType_nodeParamType === 'str') {
                    getVideoIdByIdDataByType_parameters.authorization = getVideoIdByIdDataByType_nodeParam || '';
                } else {
                    getVideoIdByIdDataByType_parameters.authorization = RED.util.getMessageProperty(msg, getVideoIdByIdDataByType_nodeParam);
                }
                getVideoIdByIdDataByType_parameters.authorization = !!getVideoIdByIdDataByType_parameters.authorization ? getVideoIdByIdDataByType_parameters.authorization : msg.payload;
                
                getVideoIdByIdDataByType_nodeParam = node.getVideoIdByIdDataByType_type;
                getVideoIdByIdDataByType_nodeParamType = node.getVideoIdByIdDataByType_typeType;
                if (getVideoIdByIdDataByType_nodeParamType === 'str') {
                    getVideoIdByIdDataByType_parameters.type = getVideoIdByIdDataByType_nodeParam || '';
                } else {
                    getVideoIdByIdDataByType_parameters.type = RED.util.getMessageProperty(msg, getVideoIdByIdDataByType_nodeParam);
                }
                getVideoIdByIdDataByType_parameters.type = !!getVideoIdByIdDataByType_parameters.type ? getVideoIdByIdDataByType_parameters.type : msg.payload;
                
                getVideoIdByIdDataByType_nodeParam = node.getVideoIdByIdDataByType_token;
                getVideoIdByIdDataByType_nodeParamType = node.getVideoIdByIdDataByType_tokenType;
                if (getVideoIdByIdDataByType_nodeParamType === 'str') {
                    getVideoIdByIdDataByType_parameters.token = getVideoIdByIdDataByType_nodeParam || '';
                } else {
                    getVideoIdByIdDataByType_parameters.token = RED.util.getMessageProperty(msg, getVideoIdByIdDataByType_nodeParam);
                }
                getVideoIdByIdDataByType_parameters.token = !!getVideoIdByIdDataByType_parameters.token ? getVideoIdByIdDataByType_parameters.token : msg.payload;
                                result = client.getVideoIdByIdDataByType(getVideoIdByIdDataByType_parameters);
            }
            if (!errorFlag && node.method === 'getVideoIdById') {
                var getVideoIdById_parameters = [];
                var getVideoIdById_nodeParam;
                var getVideoIdById_nodeParamType;

                getVideoIdById_nodeParam = node.getVideoIdById_id;
                getVideoIdById_nodeParamType = node.getVideoIdById_idType;
                if (getVideoIdById_nodeParamType === 'str') {
                    getVideoIdById_parameters.id = getVideoIdById_nodeParam || '';
                } else {
                    getVideoIdById_parameters.id = RED.util.getMessageProperty(msg, getVideoIdById_nodeParam);
                }
                getVideoIdById_parameters.id = !!getVideoIdById_parameters.id ? getVideoIdById_parameters.id : msg.payload;
                
                getVideoIdById_nodeParam = node.getVideoIdById_authorization;
                getVideoIdById_nodeParamType = node.getVideoIdById_authorizationType;
                if (getVideoIdById_nodeParamType === 'str') {
                    getVideoIdById_parameters.authorization = getVideoIdById_nodeParam || '';
                } else {
                    getVideoIdById_parameters.authorization = RED.util.getMessageProperty(msg, getVideoIdById_nodeParam);
                }
                getVideoIdById_parameters.authorization = !!getVideoIdById_parameters.authorization ? getVideoIdById_parameters.authorization : msg.payload;
                
                getVideoIdById_nodeParam = node.getVideoIdById_token;
                getVideoIdById_nodeParamType = node.getVideoIdById_tokenType;
                if (getVideoIdById_nodeParamType === 'str') {
                    getVideoIdById_parameters.token = getVideoIdById_nodeParam || '';
                } else {
                    getVideoIdById_parameters.token = RED.util.getMessageProperty(msg, getVideoIdById_nodeParam);
                }
                getVideoIdById_parameters.token = !!getVideoIdById_parameters.token ? getVideoIdById_parameters.token : msg.payload;
                                result = client.getVideoIdById(getVideoIdById_parameters);
            }
            if (!errorFlag && node.method === 'getVideo') {
                var getVideo_parameters = [];
                var getVideo_nodeParam;
                var getVideo_nodeParamType;

                getVideo_nodeParam = node.getVideo_authorization;
                getVideo_nodeParamType = node.getVideo_authorizationType;
                if (getVideo_nodeParamType === 'str') {
                    getVideo_parameters.authorization = getVideo_nodeParam || '';
                } else {
                    getVideo_parameters.authorization = RED.util.getMessageProperty(msg, getVideo_nodeParam);
                }
                getVideo_parameters.authorization = !!getVideo_parameters.authorization ? getVideo_parameters.authorization : msg.payload;
                
                getVideo_nodeParam = node.getVideo_limit;
                getVideo_nodeParamType = node.getVideo_limitType;
                if (getVideo_nodeParamType === 'str') {
                    getVideo_parameters.limit = getVideo_nodeParam || '';
                } else {
                    getVideo_parameters.limit = RED.util.getMessageProperty(msg, getVideo_nodeParam);
                }
                getVideo_parameters.limit = !!getVideo_parameters.limit ? getVideo_parameters.limit : msg.payload;
                
                getVideo_nodeParam = node.getVideo_startTime;
                getVideo_nodeParamType = node.getVideo_startTimeType;
                if (getVideo_nodeParamType === 'str') {
                    getVideo_parameters.startTime = getVideo_nodeParam || '';
                } else {
                    getVideo_parameters.startTime = RED.util.getMessageProperty(msg, getVideo_nodeParam);
                }
                getVideo_parameters.startTime = !!getVideo_parameters.startTime ? getVideo_parameters.startTime : msg.payload;
                
                getVideo_nodeParam = node.getVideo_endTime;
                getVideo_nodeParamType = node.getVideo_endTimeType;
                if (getVideo_nodeParamType === 'str') {
                    getVideo_parameters.endTime = getVideo_nodeParam || '';
                } else {
                    getVideo_parameters.endTime = RED.util.getMessageProperty(msg, getVideo_nodeParam);
                }
                getVideo_parameters.endTime = !!getVideo_parameters.endTime ? getVideo_parameters.endTime : msg.payload;
                
                getVideo_nodeParam = node.getVideo_datasouce;
                getVideo_nodeParamType = node.getVideo_datasouceType;
                if (getVideo_nodeParamType === 'str') {
                    getVideo_parameters.datasouce = getVideo_nodeParam || '';
                } else {
                    getVideo_parameters.datasouce = RED.util.getMessageProperty(msg, getVideo_nodeParam);
                }
                getVideo_parameters.datasouce = !!getVideo_parameters.datasouce ? getVideo_parameters.datasouce : msg.payload;
                
                getVideo_nodeParam = node.getVideo_bookmark;
                getVideo_nodeParamType = node.getVideo_bookmarkType;
                if (getVideo_nodeParamType === 'str') {
                    getVideo_parameters.bookmark = getVideo_nodeParam || '';
                } else {
                    getVideo_parameters.bookmark = RED.util.getMessageProperty(msg, getVideo_nodeParam);
                }
                getVideo_parameters.bookmark = !!getVideo_parameters.bookmark ? getVideo_parameters.bookmark : msg.payload;
                
                getVideo_nodeParam = node.getVideo_sort;
                getVideo_nodeParamType = node.getVideo_sortType;
                if (getVideo_nodeParamType === 'str') {
                    getVideo_parameters.sort = getVideo_nodeParam || '';
                } else {
                    getVideo_parameters.sort = RED.util.getMessageProperty(msg, getVideo_nodeParam);
                }
                getVideo_parameters.sort = !!getVideo_parameters.sort ? getVideo_parameters.sort : msg.payload;
                
                getVideo_nodeParam = node.getVideo_fields;
                getVideo_nodeParamType = node.getVideo_fieldsType;
                if (getVideo_nodeParamType === 'str') {
                    getVideo_parameters.fields = getVideo_nodeParam || '';
                } else {
                    getVideo_parameters.fields = RED.util.getMessageProperty(msg, getVideo_nodeParam);
                }
                getVideo_parameters.fields = !!getVideo_parameters.fields ? getVideo_parameters.fields : msg.payload;
                
                getVideo_nodeParam = node.getVideo_token;
                getVideo_nodeParamType = node.getVideo_tokenType;
                if (getVideo_nodeParamType === 'str') {
                    getVideo_parameters.token = getVideo_nodeParam || '';
                } else {
                    getVideo_parameters.token = RED.util.getMessageProperty(msg, getVideo_nodeParam);
                }
                getVideo_parameters.token = !!getVideo_parameters.token ? getVideo_parameters.token : msg.payload;
                                result = client.getVideo(getVideo_parameters);
            }
            if (!errorFlag && node.method === 'postVideoAdd') {
                var postVideoAdd_parameters = [];
                var postVideoAdd_nodeParam;
                var postVideoAdd_nodeParamType;

                postVideoAdd_nodeParam = node.postVideoAdd_authorization;
                postVideoAdd_nodeParamType = node.postVideoAdd_authorizationType;
                if (postVideoAdd_nodeParamType === 'str') {
                    postVideoAdd_parameters.authorization = postVideoAdd_nodeParam || '';
                } else {
                    postVideoAdd_parameters.authorization = RED.util.getMessageProperty(msg, postVideoAdd_nodeParam);
                }
                postVideoAdd_parameters.authorization = !!postVideoAdd_parameters.authorization ? postVideoAdd_parameters.authorization : msg.payload;
                
                postVideoAdd_nodeParam = node.postVideoAdd_payload;
                postVideoAdd_nodeParamType = node.postVideoAdd_payloadType;
                if (postVideoAdd_nodeParamType === 'str') {
                    postVideoAdd_parameters.payload = postVideoAdd_nodeParam || '';
                } else {
                    postVideoAdd_parameters.payload = RED.util.getMessageProperty(msg, postVideoAdd_nodeParam);
                }
                postVideoAdd_parameters.payload = !!postVideoAdd_parameters.payload ? postVideoAdd_parameters.payload : msg.payload;
                                result = client.postVideoAdd(postVideoAdd_parameters);
            }
            if (!errorFlag && node.method === 'deleteVideoDeleteIdById') {
                var deleteVideoDeleteIdById_parameters = [];
                var deleteVideoDeleteIdById_nodeParam;
                var deleteVideoDeleteIdById_nodeParamType;

                deleteVideoDeleteIdById_nodeParam = node.deleteVideoDeleteIdById_authorization;
                deleteVideoDeleteIdById_nodeParamType = node.deleteVideoDeleteIdById_authorizationType;
                if (deleteVideoDeleteIdById_nodeParamType === 'str') {
                    deleteVideoDeleteIdById_parameters.authorization = deleteVideoDeleteIdById_nodeParam || '';
                } else {
                    deleteVideoDeleteIdById_parameters.authorization = RED.util.getMessageProperty(msg, deleteVideoDeleteIdById_nodeParam);
                }
                deleteVideoDeleteIdById_parameters.authorization = !!deleteVideoDeleteIdById_parameters.authorization ? deleteVideoDeleteIdById_parameters.authorization : msg.payload;
                
                deleteVideoDeleteIdById_nodeParam = node.deleteVideoDeleteIdById_id;
                deleteVideoDeleteIdById_nodeParamType = node.deleteVideoDeleteIdById_idType;
                if (deleteVideoDeleteIdById_nodeParamType === 'str') {
                    deleteVideoDeleteIdById_parameters.id = deleteVideoDeleteIdById_nodeParam || '';
                } else {
                    deleteVideoDeleteIdById_parameters.id = RED.util.getMessageProperty(msg, deleteVideoDeleteIdById_nodeParam);
                }
                deleteVideoDeleteIdById_parameters.id = !!deleteVideoDeleteIdById_parameters.id ? deleteVideoDeleteIdById_parameters.id : msg.payload;
                                result = client.deleteVideoDeleteIdById(deleteVideoDeleteIdById_parameters);
            }
            if (!errorFlag && node.method === 'getSensordataDatasourceByDatasourceSensorBySensor') {
                var getSensordataDatasourceByDatasourceSensorBySensor_parameters = [];
                var getSensordataDatasourceByDatasourceSensorBySensor_nodeParam;
                var getSensordataDatasourceByDatasourceSensorBySensor_nodeParamType;

                getSensordataDatasourceByDatasourceSensorBySensor_nodeParam = node.getSensordataDatasourceByDatasourceSensorBySensor_datasource;
                getSensordataDatasourceByDatasourceSensorBySensor_nodeParamType = node.getSensordataDatasourceByDatasourceSensorBySensor_datasourceType;
                if (getSensordataDatasourceByDatasourceSensorBySensor_nodeParamType === 'str') {
                    getSensordataDatasourceByDatasourceSensorBySensor_parameters.datasource = getSensordataDatasourceByDatasourceSensorBySensor_nodeParam || '';
                } else {
                    getSensordataDatasourceByDatasourceSensorBySensor_parameters.datasource = RED.util.getMessageProperty(msg, getSensordataDatasourceByDatasourceSensorBySensor_nodeParam);
                }
                getSensordataDatasourceByDatasourceSensorBySensor_parameters.datasource = !!getSensordataDatasourceByDatasourceSensorBySensor_parameters.datasource ? getSensordataDatasourceByDatasourceSensorBySensor_parameters.datasource : msg.payload;
                
                getSensordataDatasourceByDatasourceSensorBySensor_nodeParam = node.getSensordataDatasourceByDatasourceSensorBySensor_sensor;
                getSensordataDatasourceByDatasourceSensorBySensor_nodeParamType = node.getSensordataDatasourceByDatasourceSensorBySensor_sensorType;
                if (getSensordataDatasourceByDatasourceSensorBySensor_nodeParamType === 'str') {
                    getSensordataDatasourceByDatasourceSensorBySensor_parameters.sensor = getSensordataDatasourceByDatasourceSensorBySensor_nodeParam || '';
                } else {
                    getSensordataDatasourceByDatasourceSensorBySensor_parameters.sensor = RED.util.getMessageProperty(msg, getSensordataDatasourceByDatasourceSensorBySensor_nodeParam);
                }
                getSensordataDatasourceByDatasourceSensorBySensor_parameters.sensor = !!getSensordataDatasourceByDatasourceSensorBySensor_parameters.sensor ? getSensordataDatasourceByDatasourceSensorBySensor_parameters.sensor : msg.payload;
                
                getSensordataDatasourceByDatasourceSensorBySensor_nodeParam = node.getSensordataDatasourceByDatasourceSensorBySensor_startTime;
                getSensordataDatasourceByDatasourceSensorBySensor_nodeParamType = node.getSensordataDatasourceByDatasourceSensorBySensor_startTimeType;
                if (getSensordataDatasourceByDatasourceSensorBySensor_nodeParamType === 'str') {
                    getSensordataDatasourceByDatasourceSensorBySensor_parameters.startTime = getSensordataDatasourceByDatasourceSensorBySensor_nodeParam || '';
                } else {
                    getSensordataDatasourceByDatasourceSensorBySensor_parameters.startTime = RED.util.getMessageProperty(msg, getSensordataDatasourceByDatasourceSensorBySensor_nodeParam);
                }
                getSensordataDatasourceByDatasourceSensorBySensor_parameters.startTime = !!getSensordataDatasourceByDatasourceSensorBySensor_parameters.startTime ? getSensordataDatasourceByDatasourceSensorBySensor_parameters.startTime : msg.payload;
                
                getSensordataDatasourceByDatasourceSensorBySensor_nodeParam = node.getSensordataDatasourceByDatasourceSensorBySensor_endTime;
                getSensordataDatasourceByDatasourceSensorBySensor_nodeParamType = node.getSensordataDatasourceByDatasourceSensorBySensor_endTimeType;
                if (getSensordataDatasourceByDatasourceSensorBySensor_nodeParamType === 'str') {
                    getSensordataDatasourceByDatasourceSensorBySensor_parameters.endTime = getSensordataDatasourceByDatasourceSensorBySensor_nodeParam || '';
                } else {
                    getSensordataDatasourceByDatasourceSensorBySensor_parameters.endTime = RED.util.getMessageProperty(msg, getSensordataDatasourceByDatasourceSensorBySensor_nodeParam);
                }
                getSensordataDatasourceByDatasourceSensorBySensor_parameters.endTime = !!getSensordataDatasourceByDatasourceSensorBySensor_parameters.endTime ? getSensordataDatasourceByDatasourceSensorBySensor_parameters.endTime : msg.payload;
                
                getSensordataDatasourceByDatasourceSensorBySensor_nodeParam = node.getSensordataDatasourceByDatasourceSensorBySensor_aggregation;
                getSensordataDatasourceByDatasourceSensorBySensor_nodeParamType = node.getSensordataDatasourceByDatasourceSensorBySensor_aggregationType;
                if (getSensordataDatasourceByDatasourceSensorBySensor_nodeParamType === 'str') {
                    getSensordataDatasourceByDatasourceSensorBySensor_parameters.aggregation = getSensordataDatasourceByDatasourceSensorBySensor_nodeParam || '';
                } else {
                    getSensordataDatasourceByDatasourceSensorBySensor_parameters.aggregation = RED.util.getMessageProperty(msg, getSensordataDatasourceByDatasourceSensorBySensor_nodeParam);
                }
                getSensordataDatasourceByDatasourceSensorBySensor_parameters.aggregation = !!getSensordataDatasourceByDatasourceSensorBySensor_parameters.aggregation ? getSensordataDatasourceByDatasourceSensorBySensor_parameters.aggregation : msg.payload;
                
                getSensordataDatasourceByDatasourceSensorBySensor_nodeParam = node.getSensordataDatasourceByDatasourceSensorBySensor_limit;
                getSensordataDatasourceByDatasourceSensorBySensor_nodeParamType = node.getSensordataDatasourceByDatasourceSensorBySensor_limitType;
                if (getSensordataDatasourceByDatasourceSensorBySensor_nodeParamType === 'str') {
                    getSensordataDatasourceByDatasourceSensorBySensor_parameters.limit = getSensordataDatasourceByDatasourceSensorBySensor_nodeParam || '';
                } else {
                    getSensordataDatasourceByDatasourceSensorBySensor_parameters.limit = RED.util.getMessageProperty(msg, getSensordataDatasourceByDatasourceSensorBySensor_nodeParam);
                }
                getSensordataDatasourceByDatasourceSensorBySensor_parameters.limit = !!getSensordataDatasourceByDatasourceSensorBySensor_parameters.limit ? getSensordataDatasourceByDatasourceSensorBySensor_parameters.limit : msg.payload;
                
                getSensordataDatasourceByDatasourceSensorBySensor_nodeParam = node.getSensordataDatasourceByDatasourceSensorBySensor_skip;
                getSensordataDatasourceByDatasourceSensorBySensor_nodeParamType = node.getSensordataDatasourceByDatasourceSensorBySensor_skipType;
                if (getSensordataDatasourceByDatasourceSensorBySensor_nodeParamType === 'str') {
                    getSensordataDatasourceByDatasourceSensorBySensor_parameters.skip = getSensordataDatasourceByDatasourceSensorBySensor_nodeParam || '';
                } else {
                    getSensordataDatasourceByDatasourceSensorBySensor_parameters.skip = RED.util.getMessageProperty(msg, getSensordataDatasourceByDatasourceSensorBySensor_nodeParam);
                }
                getSensordataDatasourceByDatasourceSensorBySensor_parameters.skip = !!getSensordataDatasourceByDatasourceSensorBySensor_parameters.skip ? getSensordataDatasourceByDatasourceSensorBySensor_parameters.skip : msg.payload;
                
                getSensordataDatasourceByDatasourceSensorBySensor_nodeParam = node.getSensordataDatasourceByDatasourceSensorBySensor_format;
                getSensordataDatasourceByDatasourceSensorBySensor_nodeParamType = node.getSensordataDatasourceByDatasourceSensorBySensor_formatType;
                if (getSensordataDatasourceByDatasourceSensorBySensor_nodeParamType === 'str') {
                    getSensordataDatasourceByDatasourceSensorBySensor_parameters.format = getSensordataDatasourceByDatasourceSensorBySensor_nodeParam || '';
                } else {
                    getSensordataDatasourceByDatasourceSensorBySensor_parameters.format = RED.util.getMessageProperty(msg, getSensordataDatasourceByDatasourceSensorBySensor_nodeParam);
                }
                getSensordataDatasourceByDatasourceSensorBySensor_parameters.format = !!getSensordataDatasourceByDatasourceSensorBySensor_parameters.format ? getSensordataDatasourceByDatasourceSensorBySensor_parameters.format : msg.payload;
                
                getSensordataDatasourceByDatasourceSensorBySensor_nodeParam = node.getSensordataDatasourceByDatasourceSensorBySensor_timezone;
                getSensordataDatasourceByDatasourceSensorBySensor_nodeParamType = node.getSensordataDatasourceByDatasourceSensorBySensor_timezoneType;
                if (getSensordataDatasourceByDatasourceSensorBySensor_nodeParamType === 'str') {
                    getSensordataDatasourceByDatasourceSensorBySensor_parameters.timezone = getSensordataDatasourceByDatasourceSensorBySensor_nodeParam || '';
                } else {
                    getSensordataDatasourceByDatasourceSensorBySensor_parameters.timezone = RED.util.getMessageProperty(msg, getSensordataDatasourceByDatasourceSensorBySensor_nodeParam);
                }
                getSensordataDatasourceByDatasourceSensorBySensor_parameters.timezone = !!getSensordataDatasourceByDatasourceSensorBySensor_parameters.timezone ? getSensordataDatasourceByDatasourceSensorBySensor_parameters.timezone : msg.payload;
                
                getSensordataDatasourceByDatasourceSensorBySensor_nodeParam = node.getSensordataDatasourceByDatasourceSensorBySensor_acceptEncoding;
                getSensordataDatasourceByDatasourceSensorBySensor_nodeParamType = node.getSensordataDatasourceByDatasourceSensorBySensor_acceptEncodingType;
                if (getSensordataDatasourceByDatasourceSensorBySensor_nodeParamType === 'str') {
                    getSensordataDatasourceByDatasourceSensorBySensor_parameters.acceptEncoding = getSensordataDatasourceByDatasourceSensorBySensor_nodeParam || '';
                } else {
                    getSensordataDatasourceByDatasourceSensorBySensor_parameters.acceptEncoding = RED.util.getMessageProperty(msg, getSensordataDatasourceByDatasourceSensorBySensor_nodeParam);
                }
                getSensordataDatasourceByDatasourceSensorBySensor_parameters.acceptEncoding = !!getSensordataDatasourceByDatasourceSensorBySensor_parameters.acceptEncoding ? getSensordataDatasourceByDatasourceSensorBySensor_parameters.acceptEncoding : msg.payload;
                
                getSensordataDatasourceByDatasourceSensorBySensor_nodeParam = node.getSensordataDatasourceByDatasourceSensorBySensor_authorization;
                getSensordataDatasourceByDatasourceSensorBySensor_nodeParamType = node.getSensordataDatasourceByDatasourceSensorBySensor_authorizationType;
                if (getSensordataDatasourceByDatasourceSensorBySensor_nodeParamType === 'str') {
                    getSensordataDatasourceByDatasourceSensorBySensor_parameters.authorization = getSensordataDatasourceByDatasourceSensorBySensor_nodeParam || '';
                } else {
                    getSensordataDatasourceByDatasourceSensorBySensor_parameters.authorization = RED.util.getMessageProperty(msg, getSensordataDatasourceByDatasourceSensorBySensor_nodeParam);
                }
                getSensordataDatasourceByDatasourceSensorBySensor_parameters.authorization = !!getSensordataDatasourceByDatasourceSensorBySensor_parameters.authorization ? getSensordataDatasourceByDatasourceSensorBySensor_parameters.authorization : msg.payload;
                                result = client.getSensordataDatasourceByDatasourceSensorBySensor(getSensordataDatasourceByDatasourceSensorBySensor_parameters);
            }
            if (!errorFlag && node.method === 'postSensordataDatasourceByDatasourceFind') {
                var postSensordataDatasourceByDatasourceFind_parameters = [];
                var postSensordataDatasourceByDatasourceFind_nodeParam;
                var postSensordataDatasourceByDatasourceFind_nodeParamType;

                postSensordataDatasourceByDatasourceFind_nodeParam = node.postSensordataDatasourceByDatasourceFind_authorization;
                postSensordataDatasourceByDatasourceFind_nodeParamType = node.postSensordataDatasourceByDatasourceFind_authorizationType;
                if (postSensordataDatasourceByDatasourceFind_nodeParamType === 'str') {
                    postSensordataDatasourceByDatasourceFind_parameters.authorization = postSensordataDatasourceByDatasourceFind_nodeParam || '';
                } else {
                    postSensordataDatasourceByDatasourceFind_parameters.authorization = RED.util.getMessageProperty(msg, postSensordataDatasourceByDatasourceFind_nodeParam);
                }
                postSensordataDatasourceByDatasourceFind_parameters.authorization = !!postSensordataDatasourceByDatasourceFind_parameters.authorization ? postSensordataDatasourceByDatasourceFind_parameters.authorization : msg.payload;
                
                postSensordataDatasourceByDatasourceFind_nodeParam = node.postSensordataDatasourceByDatasourceFind_datasource;
                postSensordataDatasourceByDatasourceFind_nodeParamType = node.postSensordataDatasourceByDatasourceFind_datasourceType;
                if (postSensordataDatasourceByDatasourceFind_nodeParamType === 'str') {
                    postSensordataDatasourceByDatasourceFind_parameters.datasource = postSensordataDatasourceByDatasourceFind_nodeParam || '';
                } else {
                    postSensordataDatasourceByDatasourceFind_parameters.datasource = RED.util.getMessageProperty(msg, postSensordataDatasourceByDatasourceFind_nodeParam);
                }
                postSensordataDatasourceByDatasourceFind_parameters.datasource = !!postSensordataDatasourceByDatasourceFind_parameters.datasource ? postSensordataDatasourceByDatasourceFind_parameters.datasource : msg.payload;
                
                postSensordataDatasourceByDatasourceFind_nodeParam = node.postSensordataDatasourceByDatasourceFind_query;
                postSensordataDatasourceByDatasourceFind_nodeParamType = node.postSensordataDatasourceByDatasourceFind_queryType;
                if (postSensordataDatasourceByDatasourceFind_nodeParamType === 'str') {
                    postSensordataDatasourceByDatasourceFind_parameters.query = postSensordataDatasourceByDatasourceFind_nodeParam || '';
                } else {
                    postSensordataDatasourceByDatasourceFind_parameters.query = RED.util.getMessageProperty(msg, postSensordataDatasourceByDatasourceFind_nodeParam);
                }
                postSensordataDatasourceByDatasourceFind_parameters.query = !!postSensordataDatasourceByDatasourceFind_parameters.query ? postSensordataDatasourceByDatasourceFind_parameters.query : msg.payload;
                
                postSensordataDatasourceByDatasourceFind_nodeParam = node.postSensordataDatasourceByDatasourceFind_archive;
                postSensordataDatasourceByDatasourceFind_nodeParamType = node.postSensordataDatasourceByDatasourceFind_archiveType;
                if (postSensordataDatasourceByDatasourceFind_nodeParamType === 'str') {
                    postSensordataDatasourceByDatasourceFind_parameters.archive = postSensordataDatasourceByDatasourceFind_nodeParam || '';
                } else {
                    postSensordataDatasourceByDatasourceFind_parameters.archive = RED.util.getMessageProperty(msg, postSensordataDatasourceByDatasourceFind_nodeParam);
                }
                postSensordataDatasourceByDatasourceFind_parameters.archive = !!postSensordataDatasourceByDatasourceFind_parameters.archive ? postSensordataDatasourceByDatasourceFind_parameters.archive : msg.payload;
                                result = client.postSensordataDatasourceByDatasourceFind(postSensordataDatasourceByDatasourceFind_parameters);
            }
            if (!errorFlag && node.method === 'postCvImage') {
                var postCvImage_parameters = [];
                var postCvImage_nodeParam;
                var postCvImage_nodeParamType;

                postCvImage_nodeParam = node.postCvImage_authorization;
                postCvImage_nodeParamType = node.postCvImage_authorizationType;
                if (postCvImage_nodeParamType === 'str') {
                    postCvImage_parameters.authorization = postCvImage_nodeParam || '';
                } else {
                    postCvImage_parameters.authorization = RED.util.getMessageProperty(msg, postCvImage_nodeParam);
                }
                postCvImage_parameters.authorization = !!postCvImage_parameters.authorization ? postCvImage_parameters.authorization : msg.payload;
                
                postCvImage_nodeParam = node.postCvImage_payload;
                postCvImage_nodeParamType = node.postCvImage_payloadType;
                if (postCvImage_nodeParamType === 'str') {
                    postCvImage_parameters.payload = postCvImage_nodeParam || '';
                } else {
                    postCvImage_parameters.payload = RED.util.getMessageProperty(msg, postCvImage_nodeParam);
                }
                postCvImage_parameters.payload = !!postCvImage_parameters.payload ? postCvImage_parameters.payload : msg.payload;
                
                postCvImage_nodeParam = node.postCvImage_model;
                postCvImage_nodeParamType = node.postCvImage_modelType;
                if (postCvImage_nodeParamType === 'str') {
                    postCvImage_parameters.model = postCvImage_nodeParam || '';
                } else {
                    postCvImage_parameters.model = RED.util.getMessageProperty(msg, postCvImage_nodeParam);
                }
                postCvImage_parameters.model = !!postCvImage_parameters.model ? postCvImage_parameters.model : msg.payload;
                                result = client.postCvImage(postCvImage_parameters);
            }
            if (!errorFlag && node.method === 'getCvModels') {
                var getCvModels_parameters = [];
                var getCvModels_nodeParam;
                var getCvModels_nodeParamType;

                getCvModels_nodeParam = node.getCvModels_authorization;
                getCvModels_nodeParamType = node.getCvModels_authorizationType;
                if (getCvModels_nodeParamType === 'str') {
                    getCvModels_parameters.authorization = getCvModels_nodeParam || '';
                } else {
                    getCvModels_parameters.authorization = RED.util.getMessageProperty(msg, getCvModels_nodeParam);
                }
                getCvModels_parameters.authorization = !!getCvModels_parameters.authorization ? getCvModels_parameters.authorization : msg.payload;
                                result = client.getCvModels(getCvModels_parameters);
            }
            if (!errorFlag && result === undefined) {
                node.error('Method is not specified.', msg);
                errorFlag = true;
            }
            var setData = function (msg, data) {
                if (data) {
                    if (data.response) {
                        if (data.response.statusCode) {
                            msg.statusCode = data.response.statusCode;
                        }
                        if (data.response.headers) {
                            msg.headers = data.response.headers;
                        }
                        if (data.response.request && data.response.request.uri && data.response.request.uri.href) {
                            msg.responseUrl = data.response.request.uri.href;
                        }
                    }
                    if (data.body) {
                        msg.payload = data.body;
                    }
                }
                return msg;
            };
            if (!errorFlag) {
                node.status({ fill: 'blue', shape: 'dot', text: 'TequApi.status.requesting' });
                result.then(function (data) {
                    node.send(setData(msg, data));
                    node.status({});
                }).catch(function (error) {
                    var message = null;
                    if (error && error.body && error.body.message) {
                        message = error.body.message;
                    }
                    node.error(message, setData(msg, error));
                    node.status({ fill: 'red', shape: 'ring', text: 'node-red:common.status.error' });
                });
            }
        });
    }

    RED.nodes.registerType('tequ-api-client', TequApiNode);
};
