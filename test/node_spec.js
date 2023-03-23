var should = require('should');
var helper = require('node-red-node-test-helper');
var node = require('../node.js');

helper.init(require.resolve('node-red'));

describe('tequ-api-client node', function () {

    before(function (done) {
        helper.startServer(done);
    });

    after(function (done) {
        helper.stopServer(done);
    });

    afterEach(function () {
        helper.unload();
    });

    it('should be loaded', function (done) {
        var flow = [{ id: 'n1', type: 'tequ-api-client', name: 'tequ-api-client' }];
        helper.load(node, flow, function () {
            var n1 = helper.getNode('n1');
            n1.should.have.property('name', 'tequ-api-client');
            done();
        });
    });

    it('should handle postRefresh()', function (done) {
        var flow = [
            { id: 'n1', type: 'tequ-api-client', name: 'tequ-api-client',
                method: 'postRefresh',
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle postToken()', function (done) {
        var flow = [
            { id: 'n1', type: 'tequ-api-client', name: 'tequ-api-client',
                method: 'postToken',
                postToken_username: '<node property>', // (1) define node properties
                postToken_password: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDatasource()', function (done) {
        var flow = [
            { id: 'n1', type: 'tequ-api-client', name: 'tequ-api-client',
                method: 'getDatasource',
                getDatasource_authorization: '<node property>', // (1) define node properties
                getDatasource_galleryId: '<node property>', // (1) define node properties
                getDatasource_token: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDatasourceIdById()', function (done) {
        var flow = [
            { id: 'n1', type: 'tequ-api-client', name: 'tequ-api-client',
                method: 'getDatasourceIdById',
                getDatasourceIdById_id: '<node property>', // (1) define node properties
                getDatasourceIdById_authorization: '<node property>', // (1) define node properties
                getDatasourceIdById_token: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getGalleries()', function (done) {
        var flow = [
            { id: 'n1', type: 'tequ-api-client', name: 'tequ-api-client',
                method: 'getGalleries',
                getGalleries_authorization: '<node property>', // (1) define node properties
                getGalleries_token: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getImageIdByIdDataByType()', function (done) {
        var flow = [
            { id: 'n1', type: 'tequ-api-client', name: 'tequ-api-client',
                method: 'getImageIdByIdDataByType',
                getImageIdByIdDataByType_id: '<node property>', // (1) define node properties
                getImageIdByIdDataByType_type: '<node property>', // (1) define node properties
                getImageIdByIdDataByType_authorization: '<node property>', // (1) define node properties
                getImageIdByIdDataByType_token: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getImageIdById()', function (done) {
        var flow = [
            { id: 'n1', type: 'tequ-api-client', name: 'tequ-api-client',
                method: 'getImageIdById',
                getImageIdById_id: '<node property>', // (1) define node properties
                getImageIdById_authorization: '<node property>', // (1) define node properties
                getImageIdById_token: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getImage()', function (done) {
        var flow = [
            { id: 'n1', type: 'tequ-api-client', name: 'tequ-api-client',
                method: 'getImage',
                getImage_authorization: '<node property>', // (1) define node properties
                getImage_limit: '<node property>', // (1) define node properties
                getImage_startTime: '<node property>', // (1) define node properties
                getImage_endTime: '<node property>', // (1) define node properties
                getImage_datasource: '<node property>', // (1) define node properties
                getImage_bookmark: '<node property>', // (1) define node properties
                getImage_sort: '<node property>', // (1) define node properties
                getImage_fields: '<node property>', // (1) define node properties
                getImage_token: '<node property>', // (1) define node properties
                getImage_serverTimestampStart: '<node property>', // (1) define node properties
                getImage_serverTimestampEnd: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle postImageAdd()', function (done) {
        var flow = [
            { id: 'n1', type: 'tequ-api-client', name: 'tequ-api-client',
                method: 'postImageAdd',
                postImageAdd_authorization: '<node property>', // (1) define node properties
                postImageAdd_payload: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle deleteImageDeleteIdById()', function (done) {
        var flow = [
            { id: 'n1', type: 'tequ-api-client', name: 'tequ-api-client',
                method: 'deleteImageDeleteIdById',
                deleteImageDeleteIdById_authorization: '<node property>', // (1) define node properties
                deleteImageDeleteIdById_id: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getVideoIdByIdDataByType()', function (done) {
        var flow = [
            { id: 'n1', type: 'tequ-api-client', name: 'tequ-api-client',
                method: 'getVideoIdByIdDataByType',
                getVideoIdByIdDataByType_id: '<node property>', // (1) define node properties
                getVideoIdByIdDataByType_authorization: '<node property>', // (1) define node properties
                getVideoIdByIdDataByType_type: '<node property>', // (1) define node properties
                getVideoIdByIdDataByType_token: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getVideoIdById()', function (done) {
        var flow = [
            { id: 'n1', type: 'tequ-api-client', name: 'tequ-api-client',
                method: 'getVideoIdById',
                getVideoIdById_id: '<node property>', // (1) define node properties
                getVideoIdById_authorization: '<node property>', // (1) define node properties
                getVideoIdById_token: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getVideo()', function (done) {
        var flow = [
            { id: 'n1', type: 'tequ-api-client', name: 'tequ-api-client',
                method: 'getVideo',
                getVideo_authorization: '<node property>', // (1) define node properties
                getVideo_limit: '<node property>', // (1) define node properties
                getVideo_startTime: '<node property>', // (1) define node properties
                getVideo_endTime: '<node property>', // (1) define node properties
                getVideo_datasouce: '<node property>', // (1) define node properties
                getVideo_bookmark: '<node property>', // (1) define node properties
                getVideo_sort: '<node property>', // (1) define node properties
                getVideo_fields: '<node property>', // (1) define node properties
                getVideo_token: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle postVideoAdd()', function (done) {
        var flow = [
            { id: 'n1', type: 'tequ-api-client', name: 'tequ-api-client',
                method: 'postVideoAdd',
                postVideoAdd_authorization: '<node property>', // (1) define node properties
                postVideoAdd_payload: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle deleteVideoDeleteIdById()', function (done) {
        var flow = [
            { id: 'n1', type: 'tequ-api-client', name: 'tequ-api-client',
                method: 'deleteVideoDeleteIdById',
                deleteVideoDeleteIdById_authorization: '<node property>', // (1) define node properties
                deleteVideoDeleteIdById_id: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getSensordataDatasourceByDatasourceSensorBySensor()', function (done) {
        var flow = [
            { id: 'n1', type: 'tequ-api-client', name: 'tequ-api-client',
                method: 'getSensordataDatasourceByDatasourceSensorBySensor',
                getSensordataDatasourceByDatasourceSensorBySensor_datasource: '<node property>', // (1) define node properties
                getSensordataDatasourceByDatasourceSensorBySensor_sensor: '<node property>', // (1) define node properties
                getSensordataDatasourceByDatasourceSensorBySensor_startTime: '<node property>', // (1) define node properties
                getSensordataDatasourceByDatasourceSensorBySensor_endTime: '<node property>', // (1) define node properties
                getSensordataDatasourceByDatasourceSensorBySensor_aggregation: '<node property>', // (1) define node properties
                getSensordataDatasourceByDatasourceSensorBySensor_limit: '<node property>', // (1) define node properties
                getSensordataDatasourceByDatasourceSensorBySensor_skip: '<node property>', // (1) define node properties
                getSensordataDatasourceByDatasourceSensorBySensor_format: '<node property>', // (1) define node properties
                getSensordataDatasourceByDatasourceSensorBySensor_timezone: '<node property>', // (1) define node properties
                getSensordataDatasourceByDatasourceSensorBySensor_acceptEncoding: '<node property>', // (1) define node properties
                getSensordataDatasourceByDatasourceSensorBySensor_authorization: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle postSensordataDatasourceByDatasourceFind()', function (done) {
        var flow = [
            { id: 'n1', type: 'tequ-api-client', name: 'tequ-api-client',
                method: 'postSensordataDatasourceByDatasourceFind',
                postSensordataDatasourceByDatasourceFind_authorization: '<node property>', // (1) define node properties
                postSensordataDatasourceByDatasourceFind_datasource: '<node property>', // (1) define node properties
                postSensordataDatasourceByDatasourceFind_query: '<node property>', // (1) define node properties
                postSensordataDatasourceByDatasourceFind_archive: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle postCvImage()', function (done) {
        var flow = [
            { id: 'n1', type: 'tequ-api-client', name: 'tequ-api-client',
                method: 'postCvImage',
                postCvImage_authorization: '<node property>', // (1) define node properties
                postCvImage_payload: '<node property>', // (1) define node properties
                postCvImage_model: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getCvModels()', function (done) {
        var flow = [
            { id: 'n1', type: 'tequ-api-client', name: 'tequ-api-client',
                method: 'getCvModels',
                getCvModels_authorization: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
});
