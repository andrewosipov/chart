import data from '../fixtures';

export const get = ({ url, params }) => (
    new Promise(() => data)
);

export default {
    get,
};
