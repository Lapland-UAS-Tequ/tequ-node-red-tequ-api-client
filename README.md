tequ-node-red-tequ-api-client
================

Node-RED node for tequ-api-client

With this API you can query, edit and add data to Lapland UAS Tequ research team object&image&video database created in Fish-IoT project. For basic users there is website where you can register, login and search the data based on your user rights.<br><br> <a href=https://ai.tequ.fi>Open Tequ AI website</a> <br><br>After registration contact the API support to gain access to datasources.<br><br>If you need machine or application level access to API, please contact API support to obtain credentials for claiming access token.

## Install

To install the stable version use the `Menu - Manage palette - Install` 
option and search for tequ-node-red-tequ-api-client, or run the following 
command in your Node-RED user directory, typically `~/.node-red`

    npm install Lapland-UAS-Tequ/tequ-node-red-tequ-api-client

## Usage

### Methods

#### POST /refresh

Refresh token. (NOT IMPLEMENTED YET)

     

#### POST /token

Use access token in all your requests to API.

    username : string
    password : string
     
    Accept : 'application/json'

#### GET /datasource

Metadata of available datasources.

    authorization : string
    gallery_id : array
    token : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /datasource/id/{id}

Metadata of single datasource.

    id : string
    authorization : string
    token : string
     

#### GET /galleries

Metadata of gallery types.

    authorization : string
    token : string
     

#### GET /image/id/{id}/data/{type}

Download single image.

    id : string
    type : string
    authorization : string
    token : string
     
    Content-Type : 'application/json'

#### GET /image/id/{id}

List metadata of single image.

    id : string
    authorization : string
    token : string
     

#### GET /image

Defaults to return metadata of all images that user has access. 

    authorization : string
    limit : number
    start_time : string
    end_time : string
    datasource : array
    bookmark : string
    sort : string
    fields : array
    token : string
    server_timestamp_start : string
    server_timestamp_end : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### POST /image/add

Add single image to database or update existing image.

    authorization : string
    payload : 
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### DELETE /image/delete/id/{id}

Delete single image from the database. This operation also deletes any possible images stored in object storage that are defined in metadata.

    authorization : string
    id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /video/id/{id}/data/{type}

Download single video clip.

    id : string
    authorization : string
    type : string
    token : string
     
    Content-Type : 'application/json'

#### GET /video/id/{id}

List metadata of single video clip.

    id : string
    authorization : string
    token : string
     

#### GET /video

Defaults to return metadata of all video clips that user has access.

    authorization : string
    limit : number
    start_time : string
    end_time : string
    datasouce : array
    bookmark : string
    sort : string
    fields : array
    token : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### POST /video/add

Add single video clip to database or update existing video clip.

    authorization : string
    payload : 
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### DELETE /video/delete/id/{id}

Delete single video clip from the database. This operation also deletes any possible video clip stored in object storage that are defined in metadata.

    authorization : string
    id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /sensordata/datasource/{datasource}/sensor/{sensor}

Load sensor data for selected time range. Possible sensor datasources can be requested via /datasource endpoint. Datasources that have sensordata are identified with type='sensordata'.

    datasource : string
    sensor : string
    start_time : string
    end_time : string
    aggregation : string
    limit : number
    skip : number
    format : string
    timezone : string
    Accept-Encoding : string
    Authorization : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### POST /sensordata/datasource/{datasource}/find

Find sensor data for selected datasource. Possible datasources can be requested via /datasource endpoint. Datasources that have sensordata are identified with type='sensordata'.

    Authorization : string
    datasource : string
    query : 
    archive : 
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### POST /cv/image

Use computer vision model.

    authorization : string
    payload : 
    model : 
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /cv/models

List available computer vision models and metadata of the models. 

    authorization : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'
