/**
 * @api {get} /project/:id Request Project information
 * @apiName GetProject
 * @apiGroup Project
 *
 * @apiParam {Number} id Project unique ID.
 *
 * @apiSuccess {String} projectNm projectName of the Project.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "projectId": "PID_0000001",
 *       "projectName": "John"
 *     }
 *
 * @apiError ProjectNotFound The id of the Project was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "ProjectNotFound"
 *     }
 */
