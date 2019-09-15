export default (err, _, res, next) => {
    console.log(err)
    res.status(500).json({
        success: false,
        error: {
            code: 'INTERNAL_SERVER_ERROR',
            message: err.message
        }
    })

    next()
}
