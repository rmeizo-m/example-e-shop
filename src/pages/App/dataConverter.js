/* eslint-disable max-len */
import deepmerge from 'deepmerge';
// import { nbsp } from 'utils/formatting';


export default (model) => deepmerge({
  data: { },
  texts: { },
}, model, { arrayMerge: (_, incoming) => incoming });
