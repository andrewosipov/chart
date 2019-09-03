import data from '../fixtures';

export const get = async ({ url, params }) => (
    new Promise(() => data)
);

export default {
    get,
};
