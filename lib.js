/*jshint -W069 */
/**
 * With this API you can query, edit and add data to Lapland UAS Tequ research team object&image&video database created in Fish-IoT project. For basic users there is website where you can register, login and search the data based on your user rights.<br><br> <a href=https://ai.tequ.fi>Open Tequ AI website</a> <br><br>After registration contact the API support to gain access to datasources.<br><br>If you need machine or application level access to API, please contact API support to obtain credentials for claiming access token.
 * @class TequApi
 * @param {(string|object)} [domainOrOptions] - The project domain or options object. If object, see the object's optional properties.
 * @param {string} [domainOrOptions.domain] - The project domain
 * @param {object} [domainOrOptions.token] - auth token - object with value property and optional headerOrQueryName and isQuery properties
 */
var TequApi = (function(){
    'use strict';

    var request = require('request');
    var Q = require('q');
    var fileType = require('file-type');

    function TequApi(options){
        var domain = (typeof options === 'object') ? options.domain : options;
        this.domain = domain ? domain : 'https://api.tequ.fi/api/v1';
        if(this.domain.length === 0) {
            throw new Error('Domain parameter must be specified as a string.');
        }
    }

    function mergeQueryParams(parameters, queryParameters) {
        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                  .forEach(function(parameterName) {
                      var parameter = parameters.$queryParameters[parameterName];
                      queryParameters[parameterName] = parameter;
            });
        }
        return queryParameters;
    }

    /**
     * HTTP Request
     * @method
     * @name TequApi#request
     * @param {string} method - http method
     * @param {string} url - url to do request
     * @param {object} parameters
     * @param {object} body - body parameters / object
     * @param {object} headers - header parameters
     * @param {object} queryParameters - querystring parameters
     * @param {object} form - form data object
     * @param {object} deferred - promise object
     */
    TequApi.prototype.request = function(method, url, parameters, body, headers, queryParameters, form, deferred){
        var req = {
            method: method,
            uri: url,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if(Object.keys(form).length > 0) {
            if (req.headers['Content-Type'] && req.headers['Content-Type'][0] === 'multipart/form-data') {
                delete req.body;
                var keyName = Object.keys(form)[0]
                req.formData = {
                    [keyName]: {
                        value: form[keyName],
                        options: {
                            filename: (fileType(form[keyName]) != null ? `file.${ fileType(form[keyName]).ext }` : `file` )
                        }
                    }
                };
            } else {
                req.form = form;
            }
        }
        if(typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body){
            if(error) {
                deferred.reject(error);
            } else {
                if(/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch(e) {}
                }
                if(response.statusCode === 204) {
                    deferred.resolve({ response: response });
                } else if(response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({ response: response, body: body });
                } else {
                    deferred.reject({ response: response, body: body });
                }
            }
        });
    };


/**
 * Refresh token. (NOT IMPLEMENTED YET)
 * @method
 * @name TequApi#postRefresh
 * @param {object} parameters - method options and parameters
 */
 TequApi.prototype.postRefresh = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/refresh';
    var body = {}, queryParameters = {}, headers = {}, form = {};


    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Use access token in all your requests to API.
 * @method
 * @name TequApi#postToken
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.username - Email address 
     * @param {string} parameters.password - Password
 */
 TequApi.prototype.postToken = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/token';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];

        
        
        

                if(parameters['username'] !== undefined){
                    form['username'] = parameters['username'];
                }

        if(parameters['username'] === undefined){
            deferred.reject(new Error('Missing required  parameter: username'));
            return deferred.promise;
        }
 
        
        
        

                if(parameters['password'] !== undefined){
                    form['password'] = parameters['password'];
                }

        if(parameters['password'] === undefined){
            deferred.reject(new Error('Missing required  parameter: password'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Metadata of available datasources.
 * @method
 * @name TequApi#getDatasource
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - Bearer token.
     * @param {array} parameters.galleryId - Gallery identifier. Return datasources available for selected gallery.
     * @param {string} parameters.token - Bearer access token
 */
 TequApi.prototype.getDatasource = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/datasource';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
        
                if(parameters['authorization'] !== undefined){
                    headers['authorization'] = parameters['authorization'];
                }
        


        if(parameters['authorization'] === undefined){
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }
 

                if(parameters['galleryId'] !== undefined){
                    queryParameters['gallery_id'] = parameters['galleryId'];
                }
        
        
        


 

                if(parameters['token'] !== undefined){
                    queryParameters['token'] = parameters['token'];
                }
        
        
        


 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Metadata of single datasource.
 * @method
 * @name TequApi#getDatasourceIdById
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.id - With this API you can query, edit and add data to Lapland UAS Tequ research team object&image&video database created in Fish-IoT project. For basic users there is website where you can register, login and search the data based on your user rights.<br><br> <a href=https://ai.tequ.fi>Open Tequ AI website</a> <br><br>After registration contact the API support to gain access to datasources.<br><br>If you need machine or application level access to API, please contact API support to obtain credentials for claiming access token.
     * @param {string} parameters.authorization - Bearer token.
     * @param {string} parameters.token - Bearer access token
 */
 TequApi.prototype.getDatasourceIdById = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/datasource/id/{id}';
    var body = {}, queryParameters = {}, headers = {}, form = {};


        
            path = path.replace('{id}', parameters['id']);
        
        


        if(parameters['id'] === undefined){
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }
 
        
        
                if(parameters['authorization'] !== undefined){
                    headers['authorization'] = parameters['authorization'];
                }
        


        if(parameters['authorization'] === undefined){
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }
 

                if(parameters['token'] !== undefined){
                    queryParameters['token'] = parameters['token'];
                }
        
        
        


 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Metadata of gallery types.
 * @method
 * @name TequApi#getGalleries
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - Bearer token.
     * @param {string} parameters.token - Bearer access token
 */
 TequApi.prototype.getGalleries = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/galleries';
    var body = {}, queryParameters = {}, headers = {}, form = {};


        
        
                if(parameters['authorization'] !== undefined){
                    headers['authorization'] = parameters['authorization'];
                }
        


        if(parameters['authorization'] === undefined){
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }
 

                if(parameters['token'] !== undefined){
                    queryParameters['token'] = parameters['token'];
                }
        
        
        


 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Download single image.
 * @method
 * @name TequApi#getImageIdByIdDataByType
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.id - Image identification
     * @param {string} parameters.type - Image type. Possible types are 'original' and 'annotated'.
     * @param {string} parameters.authorization - Bearer token
     * @param {string} parameters.token - Bearer access token
 */
 TequApi.prototype.getImageIdByIdDataByType = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/image/id/{id}/data/{type}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Content-Type'] = ['application/json'];

        
            path = path.replace('{id}', parameters['id']);
        
        


        if(parameters['id'] === undefined){
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }
 
        
            path = path.replace('{type}', parameters['type']);
        
        


        if(parameters['type'] === undefined){
            deferred.reject(new Error('Missing required  parameter: type'));
            return deferred.promise;
        }
 
        
        
                if(parameters['authorization'] !== undefined){
                    headers['authorization'] = parameters['authorization'];
                }
        


        if(parameters['authorization'] === undefined){
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }
 

                if(parameters['token'] !== undefined){
                    queryParameters['token'] = parameters['token'];
                }
        
        
        


 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * List metadata of single image.
 * @method
 * @name TequApi#getImageIdById
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.id - With this API you can query, edit and add data to Lapland UAS Tequ research team object&image&video database created in Fish-IoT project. For basic users there is website where you can register, login and search the data based on your user rights.<br><br> <a href=https://ai.tequ.fi>Open Tequ AI website</a> <br><br>After registration contact the API support to gain access to datasources.<br><br>If you need machine or application level access to API, please contact API support to obtain credentials for claiming access token.
     * @param {string} parameters.authorization - Bearer token.
     * @param {string} parameters.token - Bearer access token
 */
 TequApi.prototype.getImageIdById = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/image/id/{id}';
    var body = {}, queryParameters = {}, headers = {}, form = {};


        
            path = path.replace('{id}', parameters['id']);
        
        


        if(parameters['id'] === undefined){
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }
 
        
        
                if(parameters['authorization'] !== undefined){
                    headers['authorization'] = parameters['authorization'];
                }
        


        if(parameters['authorization'] === undefined){
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }
 

                if(parameters['token'] !== undefined){
                    queryParameters['token'] = parameters['token'];
                }
        
        
        


 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Defaults to return metadata of all images that user has access. 
 * @method
 * @name TequApi#getImage
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - Bearer token
     * @param {number} parameters.limit - Limit number of returned values. Default is 100 and maximum value is 1000.
     * @param {string} parameters.startTime - Set start time. Values after start_time are returned. Time format is ISO8601 UTC,  2021-04-26T00:00:00Z. This is the time when image is actually created.
     * @param {string} parameters.endTime - Set end time. Values after end time are not returned. End time parameter can not be used alone. Time format is ISO8601 UTC,  2021-04-26T00:00:00Z. This is the time when image is actually created.
     * @param {array} parameters.datasource - Limit returned values by datasource(s). 
     * @param {string} parameters.bookmark - Use returned bookmark to fetch more results.
     * @param {string} parameters.sort - Sort results by time. Possible values are "asc" or "desc". 
     * @param {array} parameters.fields - Array of fields that will be returned in response  To get available fields, please query single document without fields parameters.
     * @param {string} parameters.token - Bearer access token
     * @param {string} parameters.serverTimestampStart - Set start time to query using server timestamp. Values after server_timestamp_start are returned. Time format is ISO8601 UTC,  2021-04-26T00:00:00Z. Do not use this parameter together with "start_time" or "end_time". This is the time when server has received the image.
     * @param {string} parameters.serverTimestampEnd - Set endtime to query using server timestamp. Values after server_timestamp_end are returned. Time format is ISO8601 UTC,  2021-04-26T00:00:00Z. Do not use this parameter together with "start_time" or "end_time". This is the time when server has received the image.
 */
 TequApi.prototype.getImage = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/image';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
        
                if(parameters['authorization'] !== undefined){
                    headers['authorization'] = parameters['authorization'];
                }
        


        if(parameters['authorization'] === undefined){
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }
 

                if(parameters['limit'] !== undefined){
                    queryParameters['limit'] = parameters['limit'];
                }
        
        
        


 

                if(parameters['startTime'] !== undefined){
                    queryParameters['start_time'] = parameters['startTime'];
                }
        
        
        


 

                if(parameters['endTime'] !== undefined){
                    queryParameters['end_time'] = parameters['endTime'];
                }
        
        
        


 

                if(parameters['datasource'] !== undefined){
                    queryParameters['datasource'] = parameters['datasource'];
                }
        
        
        


 

                if(parameters['bookmark'] !== undefined){
                    queryParameters['bookmark'] = parameters['bookmark'];
                }
        
        
        


 

                if(parameters['sort'] !== undefined){
                    queryParameters['sort'] = parameters['sort'];
                }
        
        
        


 

                if(parameters['fields'] !== undefined){
                    queryParameters['fields'] = parameters['fields'];
                }
        
        
        


 

                if(parameters['token'] !== undefined){
                    queryParameters['token'] = parameters['token'];
                }
        
        
        


 

                if(parameters['serverTimestampStart'] !== undefined){
                    queryParameters['server_timestamp_start'] = parameters['serverTimestampStart'];
                }
        
        
        


 

                if(parameters['serverTimestampEnd'] !== undefined){
                    queryParameters['server_timestamp_end'] = parameters['serverTimestampEnd'];
                }
        
        
        


 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Add single image to database or update existing image.
 * @method
 * @name TequApi#postImageAdd
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - Bearer token
     * @param {} parameters.payload - JSON document generated by Tequ-API client. If you wish to update document data add document '_id' and '_rev' to payload.
 */
 TequApi.prototype.postImageAdd = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/image/add';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
        
                if(parameters['authorization'] !== undefined){
                    headers['authorization'] = parameters['authorization'];
                }
        


        if(parameters['authorization'] === undefined){
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }
 
        
        
        
            if(parameters['payload'] !== undefined){
                body = parameters['payload'];
            }


        if(parameters['payload'] === undefined){
            deferred.reject(new Error('Missing required  parameter: payload'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Delete single image from the database. This operation also deletes any possible images stored in object storage that are defined in metadata.
 * @method
 * @name TequApi#deleteImageDeleteIdById
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - Bearer token.
     * @param {string} parameters.id - Image id
 */
 TequApi.prototype.deleteImageDeleteIdById = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/image/delete/id/{id}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
        
                if(parameters['authorization'] !== undefined){
                    headers['authorization'] = parameters['authorization'];
                }
        


        if(parameters['authorization'] === undefined){
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }
 
        
            path = path.replace('{id}', parameters['id']);
        
        


        if(parameters['id'] === undefined){
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Download single video clip.
 * @method
 * @name TequApi#getVideoIdByIdDataByType
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.id - Video clip unique identifier.
     * @param {string} parameters.authorization - Bearer token
     * @param {string} parameters.type - Image type. Possible are: 'original'.
     * @param {string} parameters.token - Bearer access token
 */
 TequApi.prototype.getVideoIdByIdDataByType = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/video/id/{id}/data/{type}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Content-Type'] = ['application/json'];

        
            path = path.replace('{id}', parameters['id']);
        
        


        if(parameters['id'] === undefined){
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }
 
        
        
                if(parameters['authorization'] !== undefined){
                    headers['authorization'] = parameters['authorization'];
                }
        


        if(parameters['authorization'] === undefined){
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }
 
        
            path = path.replace('{type}', parameters['type']);
        
        


        if(parameters['type'] === undefined){
            deferred.reject(new Error('Missing required  parameter: type'));
            return deferred.promise;
        }
 

                if(parameters['token'] !== undefined){
                    queryParameters['token'] = parameters['token'];
                }
        
        
        


 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * List metadata of single video clip.
 * @method
 * @name TequApi#getVideoIdById
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.id - Video clip unique identifier.
     * @param {string} parameters.authorization - Bearer token.
     * @param {string} parameters.token - Bearer access token
 */
 TequApi.prototype.getVideoIdById = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/video/id/{id}';
    var body = {}, queryParameters = {}, headers = {}, form = {};


        
            path = path.replace('{id}', parameters['id']);
        
        


        if(parameters['id'] === undefined){
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }
 
        
        
                if(parameters['authorization'] !== undefined){
                    headers['authorization'] = parameters['authorization'];
                }
        


        if(parameters['authorization'] === undefined){
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }
 

                if(parameters['token'] !== undefined){
                    queryParameters['token'] = parameters['token'];
                }
        
        
        


 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Defaults to return metadata of all video clips that user has access.
 * @method
 * @name TequApi#getVideo
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - Bearer token
     * @param {number} parameters.limit - Limit number of returned values. Default is 100 and maximum value is 1000.
     * @param {string} parameters.startTime - Set start time. Values after start_time are returned. Time format is ISO8601 UTC,  2021-04-26T00:00:00Z.
     * @param {string} parameters.endTime - Set end time. Values after end time are not returned. End time parameter can not be used alone. Time format is ISO8601 UTC,  2021-04-26T00:00:00Z.
     * @param {array} parameters.datasouce - Limit returned values by datasource(s). 
     * @param {string} parameters.bookmark - Use bookmark to fetch more results.
     * @param {string} parameters.sort - Sort results by time. Possible values are "asc" or "desc". 
     * @param {array} parameters.fields - Array of fields that will be returned in response  To get available fields, please query single document without fields parameters.
     * @param {string} parameters.token - Bearer access token
 */
 TequApi.prototype.getVideo = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/video';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
        
                if(parameters['authorization'] !== undefined){
                    headers['authorization'] = parameters['authorization'];
                }
        


        if(parameters['authorization'] === undefined){
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }
 

                if(parameters['limit'] !== undefined){
                    queryParameters['limit'] = parameters['limit'];
                }
        
        
        


 

                if(parameters['startTime'] !== undefined){
                    queryParameters['start_time'] = parameters['startTime'];
                }
        
        
        


 

                if(parameters['endTime'] !== undefined){
                    queryParameters['end_time'] = parameters['endTime'];
                }
        
        
        


 

                if(parameters['datasouce'] !== undefined){
                    queryParameters['datasouce'] = parameters['datasouce'];
                }
        
        
        


 

                if(parameters['bookmark'] !== undefined){
                    queryParameters['bookmark'] = parameters['bookmark'];
                }
        
        
        


 

                if(parameters['sort'] !== undefined){
                    queryParameters['sort'] = parameters['sort'];
                }
        
        
        


 

                if(parameters['fields'] !== undefined){
                    queryParameters['fields'] = parameters['fields'];
                }
        
        
        


 

                if(parameters['token'] !== undefined){
                    queryParameters['token'] = parameters['token'];
                }
        
        
        


 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Add single video clip to database or update existing video clip.
 * @method
 * @name TequApi#postVideoAdd
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - Bearer token
     * @param {} parameters.payload - JSON document generated by Tequ-API client. If you wish to update document data add document '_id' and '_rev' to payload.
 */
 TequApi.prototype.postVideoAdd = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/video/add';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
        
                if(parameters['authorization'] !== undefined){
                    headers['authorization'] = parameters['authorization'];
                }
        


        if(parameters['authorization'] === undefined){
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }
 
        
        
        
            if(parameters['payload'] !== undefined){
                body = parameters['payload'];
            }


        if(parameters['payload'] === undefined){
            deferred.reject(new Error('Missing required  parameter: payload'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Delete single video clip from the database. This operation also deletes any possible video clip stored in object storage that are defined in metadata.
 * @method
 * @name TequApi#deleteVideoDeleteIdById
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - Bearer token.
     * @param {string} parameters.id - Video clip unique identifier.
 */
 TequApi.prototype.deleteVideoDeleteIdById = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/video/delete/id/{id}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
        
                if(parameters['authorization'] !== undefined){
                    headers['authorization'] = parameters['authorization'];
                }
        


        if(parameters['authorization'] === undefined){
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }
 
        
            path = path.replace('{id}', parameters['id']);
        
        


        if(parameters['id'] === undefined){
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Load sensor data for selected time range. Possible sensor datasources can be requested via /datasource endpoint. Datasources that have sensordata are identified with type='sensordata'.
 * @method
 * @name TequApi#getSensordataDatasourceByDatasourceSensorBySensor
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.datasource - Datasource ID.
     * @param {string} parameters.sensor - Sensor ID.
     * @param {string} parameters.startTime - ISO8601 UTC timestamp.
     * @param {string} parameters.endTime - ISO8601 UTC timestamp.
     * @param {string} parameters.aggregation - Aggregation level. Returns aggregated values over selected time period. Possible time periods: year, month, day, hour, minute or none. For example if "hour" is selected, returns exactly one value for each hour. 
     * @param {number} parameters.limit - Limit number of returned results.
     * @param {number} parameters.skip - Skip results starting from beginning.
     * @param {string} parameters.format - Response formatting. Default is raw. Options = "raw", "plotly", "chartjs"
     * @param {string} parameters.timezone - Timezone for timestamp. Default is UTC. Timezone format is standard format, for example "Europe/Helsinki".  
     * @param {string} parameters.acceptEncoding - Supported values: gzip
     * @param {string} parameters.authorization - Bearer token
 */
 TequApi.prototype.getSensordataDatasourceByDatasourceSensorBySensor = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/sensordata/datasource/{datasource}/sensor/{sensor}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
            path = path.replace('{datasource}', parameters['datasource']);
        
        


        if(parameters['datasource'] === undefined){
            deferred.reject(new Error('Missing required  parameter: datasource'));
            return deferred.promise;
        }
 
        
            path = path.replace('{sensor}', parameters['sensor']);
        
        


        if(parameters['sensor'] === undefined){
            deferred.reject(new Error('Missing required  parameter: sensor'));
            return deferred.promise;
        }
 

                if(parameters['startTime'] !== undefined){
                    queryParameters['start_time'] = parameters['startTime'];
                }
        
        
        


        if(parameters['startTime'] === undefined){
            deferred.reject(new Error('Missing required  parameter: startTime'));
            return deferred.promise;
        }
 

                if(parameters['endTime'] !== undefined){
                    queryParameters['end_time'] = parameters['endTime'];
                }
        
        
        


        if(parameters['endTime'] === undefined){
            deferred.reject(new Error('Missing required  parameter: endTime'));
            return deferred.promise;
        }
 

                if(parameters['aggregation'] !== undefined){
                    queryParameters['aggregation'] = parameters['aggregation'];
                }
        
        
        


 

                if(parameters['limit'] !== undefined){
                    queryParameters['limit'] = parameters['limit'];
                }
        
        
        


 

                if(parameters['skip'] !== undefined){
                    queryParameters['skip'] = parameters['skip'];
                }
        
        
        


 

                if(parameters['format'] !== undefined){
                    queryParameters['format'] = parameters['format'];
                }
        
        
        


 

                if(parameters['timezone'] !== undefined){
                    queryParameters['timezone'] = parameters['timezone'];
                }
        
        
        


 
        
        
                if(parameters['acceptEncoding'] !== undefined){
                    headers['Accept-Encoding'] = parameters['acceptEncoding'];
                }
        


 
        
        
                if(parameters['authorization'] !== undefined){
                    headers['Authorization'] = parameters['authorization'];
                }
        


        if(parameters['authorization'] === undefined){
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Find sensor data for selected datasource. Possible datasources can be requested via /datasource endpoint. Datasources that have sensordata are identified with type='sensordata'.
 * @method
 * @name TequApi#postSensordataDatasourceByDatasourceFind
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - Bearer token
     * @param {string} parameters.datasource - Datasource.
     * @param {} parameters.query - Find documents using a declarative JSON querying syntax.
     * @param {} parameters.archive - True = use archive database and false = use cloud database.
 */
 TequApi.prototype.postSensordataDatasourceByDatasourceFind = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/sensordata/datasource/{datasource}/find';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
        
                if(parameters['authorization'] !== undefined){
                    headers['Authorization'] = parameters['authorization'];
                }
        


        if(parameters['authorization'] === undefined){
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }
 
        
            path = path.replace('{datasource}', parameters['datasource']);
        
        


        if(parameters['datasource'] === undefined){
            deferred.reject(new Error('Missing required  parameter: datasource'));
            return deferred.promise;
        }
 
        
        
        
            if(parameters['query'] !== undefined){
                body = parameters['query'];
            }


        if(parameters['query'] === undefined){
            deferred.reject(new Error('Missing required  parameter: query'));
            return deferred.promise;
        }
 
        
        
        
            if(parameters['archive'] !== undefined){
                body = parameters['archive'];
            }


        if(parameters['archive'] === undefined){
            deferred.reject(new Error('Missing required  parameter: archive'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Use computer vision model.
 * @method
 * @name TequApi#postCvImage
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - Bearer token
     * @param {} parameters.payload - Image in base64 format.
     * @param {} parameters.model - Model identifier.
 */
 TequApi.prototype.postCvImage = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/cv/image';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
        
                if(parameters['authorization'] !== undefined){
                    headers['authorization'] = parameters['authorization'];
                }
        


        if(parameters['authorization'] === undefined){
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }
 
        
        
        
            if(parameters['payload'] !== undefined){
                body = parameters['payload'];
            }


        if(parameters['payload'] === undefined){
            deferred.reject(new Error('Missing required  parameter: payload'));
            return deferred.promise;
        }
 
        
        
        
            if(parameters['model'] !== undefined){
                body = parameters['model'];
            }


        if(parameters['model'] === undefined){
            deferred.reject(new Error('Missing required  parameter: model'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * List available computer vision models and metadata of the models. 
 * @method
 * @name TequApi#getCvModels
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - Bearer token
 */
 TequApi.prototype.getCvModels = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/cv/models';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
        
                if(parameters['authorization'] !== undefined){
                    headers['authorization'] = parameters['authorization'];
                }
        


        if(parameters['authorization'] === undefined){
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };

    return TequApi;
})();

exports.TequApi = TequApi;
