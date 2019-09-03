import moment from 'moment';
import data from '../fixtures';

class Data {
    get = async payload => {
        return data.Data.map(item => ({
            ...item,
            time: moment(item.time * 1000).format('DD-MM-Y'),
        }));
    }
}

export default new Data();
