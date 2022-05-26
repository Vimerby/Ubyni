import ua from './ua.json';
import en from './en.json';

export const translation = (key: string, language: string): string =>{
    let languageData : {[key: string]: string} = {};
    if(language === 'en') languageData = en;
    else if(language === 'ua') languageData = ua;
    return languageData[key]
}