const { StatusCodes } = require('http-status-codes');

const { AirplaneService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

/**
 * POST : /airplanes 
 * req-body {modelNumber: 'airbus320', capacity: 200}
 */
async function createAirplane(req, res) {
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        SuccessResponse.data = airplane;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}
/**
 * GET : /airplanes
 */
async function getAirplanes(req,res){
    try {
        const airplane = await AirplaneService.getAirplanes();
        SuccessResponse.data=airplane;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

/**
 * GET : /airplane/:id
 */
async function getAirplane(req,res){
    try {
        const airplane = await AirplaneService.getAirplane(req.params.id);
        SuccessResponse.data=airplane;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}
/**
 * DELETE : /airplane/:id
 */
async function destroyAirplane(req,res){
    try {
        const airplane = await AirplaneService.destroyAirplane(req.params.id);
        SuccessResponse.data=airplane;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}


module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane
}