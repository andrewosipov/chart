import get from 'lodash/get';
import * as request from '../utils/request';

class Data {
    get = payload => (
        request
            .get({
                url: '/getData',
                params: payload,
            })
            .then(response => response.data)
            .catch(error => get(
                error,
                'response.data.Message',
                'Не удалось получить данные',
            ))
    )
}

export default new Data();
