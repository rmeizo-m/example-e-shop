const getBodyData = state => state;
export const getAppCommons = state => getBodyData(state).common;
export const getAppTexts = state => getBodyData(state).texts;
