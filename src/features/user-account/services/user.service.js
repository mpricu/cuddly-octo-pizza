const getOrders = async userId => {
    try {
        const response = await fetch(
            `http://localhost:3000/orders?userId=${userId}`
        );
        if (response.ok) {
            return response.json();
        } else {
            return Promise.resolve({
                isError: true,
                status: response.status,
                message: response.message
            });
        }
    } catch (e) {
        return Promise.reject({
            status: e.status,
            message: e.message
        });
    }
};

const getUser = async userId => {
    try {
        const response = await fetch(`http://localhost:3000/users/${userId}`);
        if (response.ok) {
            return response.json();
        } else {
            return Promise.resolve({
                isError: true,
                status: response.status,
                message: response.message
            });
        }
    } catch (e) {
        return Promise.reject({
            status: e.status,
            message: e.message
        });
    }
};

export default {
    getOrders,
    getUser
};
