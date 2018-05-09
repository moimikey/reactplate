const allowedMethods = ['GET', 'PUT', 'POST', 'DELETE']

const NOT_ALLOWED = 405
const SERVER_ERROR = 500

module.exports = async (ctx, next) => {
    try {

        if (false === allowedMethods.includes(ctx.request.method)) {
            ctx.status = NOT_ALLOWED
        }
        await next()
    } catch (err) {
        ctx.status = err.statusCode || err.status || SERVER_ERROR
        ctx.body = {
            status: ctx.status,
            message: err.message
        }
    }
}
