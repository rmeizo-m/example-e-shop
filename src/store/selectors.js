const getBodyData = state => state;

export const getAppCommons = state => getBodyData(state).common;
export const getAppData = state => getBodyData(state).data;
export const getAppTexts = state => getBodyData(state).texts;
