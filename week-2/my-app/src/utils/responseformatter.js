const formatResponse = (data, message = null) => {
    return {
        success: true,
        message: message,
        data: data,
    };
};

module.exports = { formatResponse };
