class Utils {
    getCoin(data,coinName) {
        return data[`${coinName}`]
    }
}

const instance = new Utils();
export default instance;